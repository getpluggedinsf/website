import {
  buildContactConfirmationEmail,
  buildContactConfirmationHtml,
  buildInternalContactEmail,
} from "@/lib/contact/email";
import {
  isValidEmail,
  safeArray,
  safeText,
  validateRequiredContactFields,
} from "@/lib/contact/validation";

// ...

const email = safeText(payload.email) || undefined;

// ...

if (!email || !isValidEmail(email)) {
  return NextResponse.json(
    { ok: false, error: "Please provide a valid email address." },
    { status: 400 }
  );
}

// phone stays optional

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

if (MAIL_MODE === "log") {
  console.log("[contact] internal:", {
    from: MAIL_FROM,
    to: MAIL_TO,
    subject: internal.subject,
  });
  console.log(internal.body);

  const confirm = buildContactConfirmationEmail({
    intent,
    full_name,
    business_name,
    description,
  });

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

  const confirm = buildContactConfirmationEmail({
    intent,
    full_name,
    business_name,
    description,
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
