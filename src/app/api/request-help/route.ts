// src/app/api/request-help/route.ts

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import https from "https";

/**
 * In-memory rate limiter is OK for basic protection and local dev.
 * On Vercel it may be imperfect across serverless instances.
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

  const hostsToCheck = [originHost, refererHost].filter(Boolean) as string[];

  const appEnv = (process.env.NEXT_PUBLIC_APP_ENV ?? "").toLowerCase();

  // If we have no origin/referer at all, don't hard-fail in preview/dev
  if (hostsToCheck.length === 0) return appEnv !== "production";

  // Local dev
  const localAllowed = new Set(["localhost:3000", "127.0.0.1:3000"]);
  if (hostsToCheck.some((h) => localAllowed.has(h))) return true;

  // Production domains (strict)
  const prodAllowed = new Set(["getpluggedinsf.com", "www.getpluggedinsf.com"]);
  if (hostsToCheck.some((h) => prodAllowed.has(h))) return true;

  // Preview/dev: allow Vercel preview hosts
  if (appEnv !== "production") {
    if (hostsToCheck.some((h) => h.endsWith(".vercel.app"))) return true;

    // Also allow exact VERCEL_URL when present (sometimes just host)
    const vercelUrl = process.env.VERCEL_URL?.trim();
    if (vercelUrl) {
      const vercelHost = vercelUrl.replace(/^https?:\/\//, "");
      if (hostsToCheck.some((h) => h === vercelHost)) return true;
    }

    // Otherwise: deny even in preview/dev (still “relaxed” via .vercel.app)
    return false;
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
function postmarkSend(payload: unknown): Promise<void> {
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

  const subject = "Thanks for contacting PluggedIn Pros";
  const topicLine =
    (p.topics ?? []).length > 0 ? `We’ll take a look at your note about: ${(p.topics ?? []).join(", ")}.` : null;

  const body = [
    "Hi,",
    "",
    "Thanks for contacting PluggedIn Pros. We’ve received your message and will take a look shortly.",
    ...(topicLine ? ["", topicLine] : []),
    "",
    "We typically respond within one business day. If we need a bit more information, we’ll follow up with a few clarifying questions. From there, we’ll suggest a reasonable next step.",
    "",
    "Best,",
    "PluggedIn Pros",
  ].join("\n");

  return { subject, body };
}

// ---------- Handler ----------
export async function POST(req: Request) {
  try {
    // Origin / referer protection
    if (!isAllowedOrigin(req)) {
      return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
    }

    const ip = getClientIp(req);
    const rate = rateLimitOk(ip);
    if (!rate.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const payload = (await req.json()) as RequestHelpPayload;

    // Honeypot
    if (safeText(payload.website)) {
      return NextResponse.json({ ok: true, ignored: true }, { status: 200 });
    }

    // Basic validation
    const source = payload.source === "contact" ? "contact" : "request_help";
    const loc = safeText(payload.loc) || undefined;

    const intent: Intent =
      payload.intent === "planning_change" || payload.intent === "general_inquiry"
        ? payload.intent
        : "tech_issue";

    const preferred_contact: PreferredContact =
      payload.preferred_contact === "phone" ? "phone" : "email";

    const name = safeText(payload.name);
    const company = safeText(payload.company) || undefined;
    const email = safeText(payload.email) || undefined;
    const phone = safeText(payload.phone) || undefined;
    const topics = Array.isArray(payload.topics) ? payload.topics.map(safeText).filter(Boolean) : [];
    const message = safeText(payload.message);
    const timestamp = safeText(payload.timestamp) || new Date().toISOString();

    if (!name || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const hasEmail = !!email && isValidEmail(email);
    const hasPhone = !!phone && isValidPhone(phone);

    if (!hasEmail && !hasPhone) {
      return NextResponse.json(
        { ok: false, error: "Please provide an email address or phone number." },
        { status: 400 }
      );
    }

    if (preferred_contact === "email" && !hasEmail) {
      return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
    }

    if (preferred_contact === "phone" && !hasPhone) {
      return NextResponse.json({ ok: false, error: "Invalid phone number." }, { status: 400 });
    }

    const p: RequestHelpPayload = {
      source,
      loc,
      intent,
      preferred_contact,
      name,
      company,
      email,
      phone,
      topics,
      message,
      website: undefined,
      timestamp,
    };

    const MAIL_MODE = (process.env.MAIL_MODE ?? "log").toLowerCase();
    const MAIL_TO = process.env.MAIL_TO ?? "help@getpluggedinsf.com";
    const MAIL_FROM = process.env.MAIL_FROM ?? "PluggedIn Pros Support <help@getpluggedinsf.com>";

    const shouldSendUserConfirm = hasEmail; // only when email is provided and valid

    // Fail-fast for real sending modes
    if (MAIL_MODE === "postmark") {
      if (!process.env.POSTMARK_SERVER_TOKEN) {
        return NextResponse.json(
          { ok: false, error: "Email is not configured (missing POSTMARK_SERVER_TOKEN)." },
          { status: 500 }
        );
      }
    }

    const internal = buildInternalEmail(p);

    if (MAIL_MODE === "log") {
      console.log("[request-help] internal:", { from: MAIL_FROM, to: MAIL_TO, subject: internal.subject });
      console.log(internal.body);

      if (shouldSendUserConfirm && email) {
        const confirm = buildUserConfirmationEmail(p);
        console.log("[request-help] user-confirm:", { from: MAIL_FROM, to: email, subject: confirm.subject });
        console.log(confirm.body);
      }

      return NextResponse.json(
        { ok: true, emailedUser: shouldSendUserConfirm, email: shouldSendUserConfirm ? email : null },
        { status: 200 }
      );
    }

    if (MAIL_MODE === "postmark") {
      // 1) internal notification
      await postmarkSend({
        From: MAIL_FROM,
        To: MAIL_TO,
        Subject: internal.subject,
        TextBody: internal.body,
        ReplyTo: hasEmail ? email : undefined, // allows you to reply directly to the requester
      });

      // 2) customer confirmation (only if email provided)
      if (shouldSendUserConfirm && email) {
        const confirm = buildUserConfirmationEmail(p);
        await postmarkSend({
          From: MAIL_FROM,
          To: email,
          Subject: confirm.subject,
          TextBody: confirm.body,
          ReplyTo: "help@getpluggedinsf.com", // ensure no mark@ leaks
        });
      }

      return NextResponse.json(
        { ok: true, emailedUser: shouldSendUserConfirm, email: shouldSendUserConfirm ? email : null },
        { status: 200 }
      );
    }

    return NextResponse.json({ ok: false, error: "Invalid MAIL_MODE." }, { status: 500 });
  } catch (err) {
    console.error("[request-help] error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Server error." },
      { status: 500 }
    );
  }
}

