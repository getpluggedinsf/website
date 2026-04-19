import type {
  BuiltEmail,
  ContactDownNow,
  ContactEmailInput,
  ContactIntent,
  ContactSpaceSize,
  ContactTimeline,
  PreferredContactMethod,
} from "@/lib/contact/types";

function humanizeIntent(intent: ContactIntent) {
  switch (intent) {
    case "assessment":
      return "Request an Assessment";
    case "troubleshooting":
      return "Help Troubleshooting a Problem";
    case "upgrade":
      return "Upgrade or Improve an Existing Network";
    case "installation":
      return "New Installation or Project";
    case "general":
      return "General Question";
  }
}

function humanizePreferredContact(value: PreferredContactMethod) {
  switch (value) {
    case "email":
      return "Email";
    case "phone":
      return "Phone";
    case "either":
      return "Either";
  }
}

function humanizeTimeline(value?: ContactTimeline) {
  switch (value) {
    case "asap":
      return "ASAP";
    case "this_week":
      return "This week";
    case "this_month":
      return "This month";
    case "just_exploring":
      return "Just exploring";
    default:
      return "";
  }
}

function humanizeDownNow(value?: ContactDownNow) {
  switch (value) {
    case "yes":
      return "Yes";
    case "no":
      return "No";
    case "intermittent":
      return "Intermittent";
    default:
      return "";
  }
}

function humanizeSpaceSize(value?: ContactSpaceSize) {
  switch (value) {
    case "small":
      return "Small";
    case "medium":
      return "Medium";
    case "large":
      return "Large";
    case "not_sure":
      return "Not sure";
    default:
      return "";
  }
}

function getSubjectPrefix() {
  const appEnv = (process.env.NEXT_PUBLIC_APP_ENV ?? "").toLowerCase();

  if (appEnv === "production") return "";
  if (appEnv === "preview") return "[PREVIEW] ";
  if (appEnv === "development") return "[DEV] ";

  if (process.env.VERCEL_ENV === "preview") return "[PREVIEW] ";
  if (process.env.VERCEL_ENV === "production") return "";

  return "[DEV] ";
}

export function buildInternalContactEmail(input: ContactEmailInput): BuiltEmail {
  const prefix = getSubjectPrefix();
  const subject = `${prefix}New contact form submission — ${humanizeIntent(input.intent)} — ${input.full_name}`;

  const conditionalSections: string[] = [];

  if (input.intent === "assessment") {
    conditionalSections.push(
      "Assessment details",
      `Focus: ${input.assessment_focus.join(", ") || ""}`,
      `Concerns: ${input.assessment_concerns ?? ""}`
    );
  }

  if (input.intent === "troubleshooting") {
    conditionalSections.push(
      "Troubleshooting details",
      `Issue types: ${input.troubleshooting_issue_types.join(", ") || ""}`,
      `Anything down right now: ${humanizeDownNow(input.troubleshooting_down_now)}`
    );
  }

  if (input.intent === "upgrade") {
    conditionalSections.push(
      "Upgrade details",
      `Improvement goals: ${input.upgrade_goals.join(", ") || ""}`
    );
  }

  if (input.intent === "installation") {
    conditionalSections.push(
      "Project details",
      `Project types: ${input.installation_project_types.join(", ") || ""}`,
      `Space size: ${humanizeSpaceSize(input.installation_space_size)}`
    );
  }

  const body = [
    "New website contact / intake submission",
    "",
    "Intent",
    `Intent: ${humanizeIntent(input.intent)}`,
    `Timestamp: ${input.timestamp}`,
    "",
    "Contact information",
    `Full Name: ${input.full_name}`,
    `Business Name: ${input.business_name ?? ""}`,
    `Email: ${input.email ?? ""}`,
    `Phone: ${input.phone ?? ""}`,
    `Preferred contact: ${humanizePreferredContact(input.preferred_contact)}`,
    "",
    "Project basics",
    `Site Address: ${input.site_address ?? ""}`,
    `Timeline: ${humanizeTimeline(input.timeline)}`,
    "",
    ...conditionalSections,
    ...(conditionalSections.length > 0 ? [""] : []),
    "Description",
    input.description,
  ].join("\n");

  return { subject, body };
}

export function buildContactConfirmationEmail(input: {
  intent: ContactIntent;
  full_name: string;
  business_name?: string;
  description: string;
}): BuiltEmail {
  const prefix = getSubjectPrefix();

  return {
    subject: `${prefix}Thanks for contacting PluggedIn Pros`,
    body: [
      "Hi,",
      "",
      "We received your request:",
      "",
      `Type: ${humanizeIntent(input.intent)}`,
      `Name: ${input.full_name}`,
      ...(input.business_name ? [`Business: ${input.business_name}`] : []),
      "",
      "Summary:",
      `"${input.description}"`,
      "",
      "We’ll follow up within one business day.",
      "",
      "Best,",
      "PluggedIn Pros",
    ].join("\n"),
  };
}

export function buildContactConfirmationHtml(input: {
  intent: ContactIntent;
  full_name: string;
  business_name?: string;
  description: string;
}) {
  const businessLine = input.business_name
    ? `<p style="margin:0 0 8px 0;"><strong>Business:</strong> ${escapeHtml(input.business_name)}</p>`
    : "";

  return `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f8fafc;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:32px 32px 16px 32px;">
                <h1 style="margin:0;font-size:24px;line-height:1.3;color:#191970;">Thanks for contacting PluggedIn Pros</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 16px 32px;font-size:16px;line-height:1.6;color:#334155;">
                <p style="margin:0 0 16px 0;">We received your request:</p>

                <p style="margin:0 0 8px 0;"><strong>Type:</strong> ${escapeHtml(humanizeIntent(input.intent))}</p>
                <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${escapeHtml(input.full_name)}</p>
                ${businessLine}

                <p style="margin:20px 0 8px 0;"><strong>Summary:</strong></p>
                <blockquote style="margin:0;padding:12px 16px;border-left:4px solid #cbd5e1;background:#f8fafc;color:#334155;">
                  ${escapeHtml(input.description)}
                </blockquote>

                <p style="margin:20px 0 0 0;">We’ll follow up within one business day.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 32px 32px;font-size:13px;line-height:1.5;color:#64748b;">
                This is an automated confirmation email.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
