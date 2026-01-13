// src/app/api/request-help/route.ts

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import https from "https";

/**
 * NOTE on rate limiting:
 * This in-memory limiter works well for local dev and provides basic protection on Vercel,
 * but it is not perfectly consistent across serverless instances. If you ever see real abuse,
 * we can upgrade to a shared store (e.g., Vercel KV / Upstash) without changing the API contract.
 */

// ---------- Rate limiting (simple sliding window) ----------
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_MAX = 8; // max submissions per window per IP

type Hit = { t: number };
const rateStore = new Map<string, Hit[]>();

function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

function rateLimitOk(key: string): { ok: boolean; remaining: number } {
  const now = Date.now();
  const hits = rateStore.get(key) ?? [];
  const fresh = hits.filter((h) => now - h.t < RATE_WINDOW_MS);
  fresh.push({ t: now });
  rateStore.set(key, fresh);
  const remaining = Math.max(0, RATE_MAX - fresh.length);
  return { ok: fresh.length <= RATE_MAX, remaining };
}

// ---------- Origin checks ----------
function getHostFromUrl(url: string): string | null {
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
}

function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin") ?? "";
  const referer = req.headers.get("referer") ?? "";

  const originHost = origin ? getHostFromUrl(origin) : null;
  const refererHost = referer ? getHostFromUrl(referer) : null;

  // Local dev
  const localAllowed = new Set(["localhost:3000", "127.0.0.1:3000"]);
  if (originHost && localAllowed.has(originHost)) return true;
  if (refererHost && localAllowed.has(refererHost)) return true;

  // Production domains
  const prodAllowed = new Set(["getpluggedinsf.com", "www.getpluggedinsf.com"]);
  if (originHost && prodAllowed.has(originHost)) return true;
  if (refererHost && prodAllowed.has(refererHost)) return true;

  // Vercel preview domains:
  // VERCEL_URL is available on Vercel and usually looks like "your-project-git-branch-user.vercel.app"
  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    const vercelHost = vercelUrl.replace(/^https?:\/\//, "");
    if (originHost && originHost === vercelHost) return true;
    if (refererHost && refererHost === vercelHost) return true;
  }

  return false;
}

// ---------- Types ----------
type Intent = "tech_issue" | "planning_change" | "general_inquiry";
type PreferredContact = "email" | "phone";
type Source = "request_help" | "contact";

type RequestHelpPayload = {
  source: Source;
  loc?: string;

  intent: Intent;
  preferred_contact: PreferredContact;

  name: string;
  company?: string;
  email?: string;
  phone?: string;

  topics: string[];
  message: string;

  website?: string; // honeypot
  timestamp: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizePhone(raw: string) {
  return raw.replace(/\D/g, "");
}

function isValidPhone(phone: string) {
  return normalizePhone(phone).length >= 10;
}

function safeText(v?: string) {
  return (v ?? "").trim();
}

// ---------- Postmark send ----------
function postmarkSend(payload: unknown) {
  const token = process.env.POSTMARK_SERVER_TOKEN!;
  return new Promise<void>((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.postmarkapp.com",
        path: "/email",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": token,
        },
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve();
          } else {
            reject(new Error(data || `Postmark error (status ${res.statusCode})`));
          }
        });
      }
    );

    req.on("error", reject);
    req.write(JSON.stringify(payload));
    req.end();
  });
}

function buildInternalEmail(p: RequestHelpPayload) {
  const subject =
    p.intent === "general_inquiry"
      ? `New inquiry — ${p.name}`
      : `New request help — ${p.name}`;

  const body = [
    `New website submission`,
    ``,
    `Source: ${p.source}`,
    `Loc: ${p.loc ?? ""}`,
    `Intent: ${p.intent}`,
    `Preferred contact: ${p.preferred_contact}`,
    `Timestamp: ${p.timestamp}`,
    ``,
    `Name: ${p.name}`,
    `Company: ${p.company ?? ""}`,
    `Email: ${p.email ?? ""}`,
    `Phone: ${p.phone ?? ""}`,
    ``,
    `Topics: ${(p.topics ?? []).join(", ")}`,
    ``,
    `Message:`,
    p.message,
  ].join("\n");

  return { subject, body };
}

function buildUserConfirmationEmail(p: RequestHelpPayload) {
  const inquiry = p.intent === "general_inquiry";

  if (!inquiry) {
    // Tech / request-help confirmation (matches tech-email-confirmation.rtf)
    const subject = "We’ve received your request";
    const body = [
      "Hi,",
      "",
      "Thanks for reaching out to PluggedIn Pros. We’ve received your request and will take a look shortly.",
      "",
      "We typically respond within one business day. If we need a bit more information to understand the situation, we’ll follow up with a few clarifying questions. From there, we’ll suggest a reasonable next step based on what you actually need.",
      "",
      "You don’t need to reply to this message unless there’s something important to add — we’ll be in touch soon.",
      "",
      "Best,",
      "PluggedIn Pros",
    ].join("\n");

    return { subject, body };
  }

  // General inquiry confirmation (matches inquiry-email-confirmation.rtf)
  const subject = "Thanks for contacting PluggedIn Pros";

  const topicLine =
    (p.topics ?? []).length > 0
      ? `Thanks for reaching out about ${(p.topics ?? []).join(" / ")}.`
      : "";

  const lines = [
    "Hi,",
    "",
    "Thanks for getting in touch with PluggedIn Pros. We’ve received your message and will follow up shortly.",
    "",
    "We typically respond within one business day. If your question relates to a specific issue or project, we may ask a few follow-up questions to better understand the context before recommending next steps.",
  ];

  if (topicLine) {
    lines.push("", topicLine);
  }

  lines.push(
    "",
    "Thanks again for reaching out — we’ll be in touch soon.",
    "",
    "Best,",
    "PluggedIn Pros"
  );

  const body = lines.join("\n");
  return { subject, body };
}

export async function POST(req: Request) {
  // ---- Origin check (light CSRF / abuse protection) ----
  if (!isAllowedOrigin(req)) {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  // ---- Rate limit ----
  const ip = getClientIp(req);
  const rl = rateLimitOk(`request-help:${ip}`);
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": "600" } }
    );
  }

  // ---- Fail-fast config ----
  const MAIL_MODE = (process.env.MAIL_MODE ?? "").toLowerCase();
  if (MAIL_MODE !== "postmark") {
    return NextResponse.json(
      { ok: false, error: "Email service not configured (MAIL_MODE)." },
      { status: 500 }
    );
  }

  const token = process.env.POSTMARK_SERVER_TOKEN?.trim();
  const FROM = process.env.MAIL_FROM?.trim();
  const TO = process.env.MAIL_TO?.trim();

  if (!token || !FROM || !TO) {
    return NextResponse.json(
      { ok: false, error: "Email service not configured." },
      { status: 500 }
    );
  }

  // ---- Parse payload ----
  let payload: RequestHelpPayload;
  try {
    payload = (await req.json()) as RequestHelpPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  // Honeypot
  if (safeText(payload.website)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // Validation (server-side safety net)
  const name = safeText(payload.name);
  const message = safeText(payload.message);
  const email = safeText(payload.email);
  const phone = safeText(payload.phone);

  if (!name || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }
  if (!email && !phone) {
    return NextResponse.json(
      { ok: false, error: "Please provide an email address or phone number." },
      { status: 400 }
    );
  }
  if (email && !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }
  if (payload.preferred_contact === "phone" && phone && !isValidPhone(phone)) {
    return NextResponse.json({ ok: false, error: "Invalid phone number." }, { status: 400 });
  }

  const shouldSendUserConfirm = !!email && isValidEmail(email);

  const internal = buildInternalEmail({ ...payload, name, message, email, phone });

  try {
    // 1) Internal notification (always)
    await postmarkSend({
      From: FROM,
      To: TO,
      Subject: internal.subject,
      TextBody: internal.body,
      ReplyTo: shouldSendUserConfirm ? email : undefined,
      MessageStream: "outbound", // Postmark default transactional stream; safe even if ignored
    });

    // 2) Customer confirmation (only if email provided + valid)
    if (shouldSendUserConfirm) {
      const confirm = buildUserConfirmationEmail(payload);
      await postmarkSend({
        From: FROM,
        To: email,
        Subject: confirm.subject,
        TextBody: confirm.body,
        ReplyTo: "help@getpluggedinsf.com",
        MessageStream: "outbound",
      });
    }

    return NextResponse.json(
      { ok: true, emailedUser: shouldSendUserConfirm, rateRemaining: rl.remaining },
      { status: 200 }
    );
  } catch (err) {
    console.error("[postmark] send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Email send failed. Check server logs for details." },
      { status: 500 }
    );
  }
}

