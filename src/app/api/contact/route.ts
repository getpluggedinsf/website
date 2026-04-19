export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import {
  buildContactConfirmationEmail,
  buildContactConfirmationHtml,
  buildInternalContactEmail,
} from "@/lib/contact/email";
import type {
  ContactDownNow,
  ContactIntent,
  ContactPayload,
  ContactSpaceSize,
  ContactTimeline,
  PreferredContactMethod,
} from "@/lib/contact/types";
import {
  isValidEmail,
  safeArray,
  safeText,
  validateRequiredContactFields,
} from "@/lib/contact/validation";
import { sendPostmarkEmail } from "@/lib/mail/postmark";

// ---------- Rate limiting ----------
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 8;

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

  if (hostsToCheck.length === 0) return appEnv !== "production";

  const localAllowed = new Set(["localhost:3000", "127.0.0.1:3000"]);
  if (hostsToCheck.some((h) => localAllowed.has(h))) return true;

  const prodAllowed = new Set(["getpluggedinsf.com", "www.getpluggedinsf.com"]);
  if (hostsToCheck.some((h) => prodAllowed.has(h))) return true;

  if (appEnv !== "production") {
    if (hostsToCheck.some((h) => h.endsWith(".vercel.app"))) return true;

    const vercelUrl = process.env.VERCEL_URL?.trim();
    if (vercelUrl) {
      const vercelHost = vercelUrl.replace(/^https?:\/\//, "");
      if (hostsToCheck.some((h) => h === vercelHost)) return true;
    }

    return false;
  }

  return false;
}

export async function POST(req: Request) {
  try {
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

    const payload = (await req.json()) as ContactPayload;

    if (safeText(payload.website)) {
      return NextResponse.json({ ok: true, ignored: true }, { status: 200 });
    }

    const intent: ContactIntent =
      payload.intent === "troubleshooting" ||
      payload.intent === "upgrade" ||
      payload.intent === "installation" ||
      payload.intent === "general"
        ? payload.intent
        : "assessment";

    const preferred_contact: PreferredContactMethod =
      payload.preferred_contact === "email" ||
      payload.preferred_contact === "phone" ||
      payload.preferred_contact === "either"
        ? payload.preferred_contact
        : "either";

    const required = validateRequiredContactFields(payload);
    if (!required.ok) {
      return NextResponse.json({ ok: false, error: required.error }, { status: 400 });
    }

    const full_name = required.fullName;
    const description = required.description;

    const business_name = safeText(payload.business_name) || undefined;
    const email = safeText(payload.email) || undefined;
    const phone = safeText(payload.phone) || undefined;
    const site_address = safeText(payload.site_address) || undefined;

    const timeline: ContactTimeline | undefined =
      payload.timeline === "asap" ||
      payload.timeline === "this_week" ||
      payload.timeline === "this_month" ||
      payload.timeline === "just_exploring"
        ? payload.timeline
        : undefined;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const assessment_focus = safeArray(payload.assessment_focus);
    const assessment_concerns = safeText(payload.assessment_concerns) || undefined;

    const troubleshooting_issue_types = safeArray(payload.troubleshooting_issue_types);
    const troubleshooting_down_now: ContactDownNow | undefined =
      payload.troubleshooting_down_now === "yes" ||
      payload.troubleshooting_down_now === "no" ||
      payload.troubleshooting_down_now === "intermittent"
        ? payload.troubleshooting_down_now
        : undefined;

    const upgrade_goals = safeArray(payload.upgrade_goals);

    const installation_project_types = safeArray(payload.installation_project_types);
    const installation_space_size: ContactSpaceSize | undefined =
      payload.installation_space_size === "small" ||
      payload.installation_space_size === "medium" ||
      payload.installation_space_size === "large" ||
      payload.installation_space_size === "not_sure"
        ? payload.installation_space_size
        : undefined;

    const timestamp = safeText(payload.timestamp) || new Date().toISOString();

    const MAIL_MODE = (process.env.MAIL_MODE ?? "log").toLowerCase();
    const MAIL_TO = process.env.MAIL_TO ?? "help@getpluggedinsf.com";
    const MAIL_FROM =
      process.env.MAIL_FROM ?? "PluggedIn Pros Support <help@getpluggedinsf.com>";

    if (MAIL_MODE === "postmark" && !process.env.POSTMARK_SERVER_TOKEN) {
      return NextResponse.json(
        { ok: false, error: "Email is not configured (missing POSTMARK_SERVER_TOKEN)." },
        { status: 500 }
      );
    }

    const internal = buildInternalContactEmail({
      intent,
      full_name,
      business_name,
      email,
      phone,
      preferred_contact,
      site_address,
      timeline,
      description,
      assessment_focus,
      assessment_concerns,
      troubleshooting_issue_types,
      troubleshooting_down_now,
      upgrade_goals,
      installation_project_types,
      installation_space_size,
      timestamp,
    });

    const confirm = buildContactConfirmationEmail({
      intent,
      full_name,
      business_name,
      description,
    });

    if (MAIL_MODE === "log") {
      console.log("[contact] internal:", {
        from: MAIL_FROM,
        to: MAIL_TO,
        subject: internal.subject,
      });
      console.log(internal.body);

      console.log("[contact] user-confirm:", {
        from: MAIL_FROM,
        to: email,
        subject: confirm.subject,
      });
      console.log(confirm.body);

      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (MAIL_MODE === "postmark") {
      await sendPostmarkEmail({
        From: MAIL_FROM,
        To: MAIL_TO,
        Subject: internal.subject,
        TextBody: internal.body,
        ReplyTo: email,
      });

      await sendPostmarkEmail({
        From: MAIL_FROM,
        To: email,
        Subject: confirm.subject,
        TextBody: confirm.body,
        HtmlBody: buildContactConfirmationHtml({
          intent,
          full_name,
          business_name,
          description,
        }),
        ReplyTo: "help@getpluggedinsf.com",
      });

      return NextResponse.json({ ok: true }, { status: 200 });
    }

    return NextResponse.json({ ok: false, error: "Invalid MAIL_MODE." }, { status: 500 });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Server error." },
      { status: 500 }
    );
  }
}
