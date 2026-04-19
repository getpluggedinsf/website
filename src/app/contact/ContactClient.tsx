"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Intent =
  | "assessment"
  | "troubleshooting"
  | "upgrade"
  | "installation"
  | "general";

type PreferredContact = "email" | "phone" | "either";

type Timeline = "asap" | "this_week" | "this_month" | "just_exploring" | "";

type DownNow = "yes" | "no" | "intermittent" | "";

type SpaceSize = "small" | "medium" | "large" | "not_sure" | "";

const INTENT_OPTIONS: Array<{
  value: Intent;
  label: string;
}> = [
  { value: "assessment", label: "Request an Assessment" },
  { value: "troubleshooting", label: "Help Troubleshooting a Problem" },
  { value: "upgrade", label: "Upgrade or Improve an Existing Network" },
  { value: "installation", label: "New Installation or Project" },
  { value: "general", label: "General Question" },
];

const ASSESSMENT_FOCUS_OPTIONS = [
  "Wi-Fi coverage / dead zones",
  "Slow or inconsistent performance",
  "Guest network setup",
  "Network layout / equipment review",
  "Other",
  "Not sure",
] as const;

const TROUBLESHOOTING_ISSUE_OPTIONS = [
  "Internet drops or outages",
  "Wi-Fi performance issues",
  "POS / payment system connectivity",
  "Guest Wi-Fi problems",
  "Device connection issues",
  "Other",
  "Not sure",
] as const;

const UPGRADE_GOAL_OPTIONS = [
  "Better Wi-Fi coverage",
  "Improve reliability and performance",
  "Better guest Wi-Fi setup",
  "Add features (e.g., guest access, analytics)",
  "Enable remote monitoring and support",
  "Improve organization or equipment layout",
  "Other",
  "Not sure",
] as const;

const INSTALLATION_PROJECT_OPTIONS = [
  "New business location",
  "Remodel / expansion",
  "New Wi-Fi network",
  "Wired network equipment or cabling",
  "Guest network",
  "Other",
  "Not sure",
] as const;

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function getIntentFromQuery(raw: string | null): Intent {
  switch (raw) {
    case "troubleshooting":
    case "upgrade":
    case "installation":
    case "general":
      return raw;
    case "assessment":
    default:
      return "assessment";
  }
}

function getSubmitLabel(intent: Intent) {
  switch (intent) {
    case "assessment":
      return "Request an Assessment";
    case "troubleshooting":
      return "Request Help";
    case "upgrade":
      return "Request Consultation";
    case "installation":
      return "Discuss Your Project";
    case "general":
      return "Send Message";
  }
}

function getDescriptionPlaceholder(intent: Intent) {
  switch (intent) {
    case "assessment":
      return "Tell us what you'd like assessed, what prompted you to reach out, and anything notable about the site or current setup.";
    case "troubleshooting":
      return "Describe what’s happening, when it started, what’s affected, and whether the issue is currently down or intermittent.";
    case "upgrade":
      return "Tell us what you’d like to improve and what feels limited or frustrating about the current setup.";
    case "installation":
      return "Tell us about the project, the type of space, and what you’re hoping to install or build.";
    case "general":
      return "Tell us a little about your question or what you need.";
  }
}

function toggleValue(current: string[], value: string) {
  return current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value];
}

export default function ContactClient() {
  const sp = useSearchParams();
  const initialIntent = getIntentFromQuery(sp.get("intent"));

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    intent: initialIntent as Intent,

    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    preferredContact: "either" as PreferredContact,

    siteAddress: "",
    timeline: "" as Timeline,
    description: "",

    assessmentFocus: [] as string[],
    assessmentConcerns: "",

    troubleshootingIssueTypes: [] as string[],
    troubleshootingDownNow: "" as DownNow,

    upgradeGoals: [] as string[],

    installationProjectTypes: [] as string[],
    installationSpaceSize: "" as SpaceSize,

    website: "",
  });

  const validation = useMemo(() => {
    const nameOk = !!form.fullName.trim();
    const descriptionOk = !!form.description.trim();
    const emailOk = isValidEmail(form.email.trim());

    let helper = "";

    if (!nameOk || !descriptionOk || !emailOk) {
      if (!nameOk || !descriptionOk) {
        helper = "Please complete the required fields to submit.";
      } else if (!emailOk) {
        helper = "Please enter a valid email address.";
      }
    }

    return {
      canSubmit: nameOk && descriptionOk && emailOk,
      helper,
    };
  }, [form]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validation.canSubmit || status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact",
          intent: form.intent,

          full_name: form.fullName.trim(),
          business_name: form.businessName.trim() || undefined,
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          preferred_contact: form.preferredContact,

          site_address: form.siteAddress.trim() || undefined,
          timeline: form.timeline || undefined,
          description: form.description.trim(),

          assessment_focus: form.assessmentFocus,
          assessment_concerns: form.assessmentConcerns.trim() || undefined,

          troubleshooting_issue_types: form.troubleshootingIssueTypes,
          troubleshooting_down_now: form.troubleshootingDownNow || undefined,

          upgrade_goals: form.upgradeGoals,

          installation_project_types: form.installationProjectTypes,
          installation_space_size: form.installationSpaceSize || undefined,

          website: form.website,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-[#191970] sm:text-4xl">Contact</h1>

      <h2 className="mt-4 text-lg font-semibold text-slate-900">
        Tell us a little about what you need.
      </h2>

      <p className="mt-2 text-slate-800">
        A short description is enough to get started. We’ll review your message and get back
        to you within one business day.
      </p>

      <div className="mt-10 rounded-lg border border-black/10 bg-white p-6 sm:p-8">
        {status === "success" && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-slate-900">
            <div className="font-semibold">Thanks — we’ve received your message.</div>
            <div className="mt-1 text-sm text-slate-700">
              We’ll get back to you within one business day.
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-slate-900">
            <div className="font-semibold">Something went wrong.</div>
            <div className="mt-1 text-sm text-slate-700">
              {errorMsg || "Please try again."}
            </div>
          </div>
        )}

        {(status === "idle" || status === "submitting" || status === "error") && (
          <form onSubmit={onSubmit} className="mt-6 grid gap-6">
            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                value={form.website}
                onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
              />
            </div>

            <fieldset className="grid gap-3">
              <legend className="text-sm font-medium text-slate-900">
                What can we help you with today?
              </legend>

              <div className="grid gap-3">
                {INTENT_OPTIONS.map((option) => {
                  const checked = form.intent === option.value;
                  return (
                    <label
                      key={option.value}
                      className={`cursor-pointer rounded-lg border px-4 py-3 text-sm transition ${
                        checked
                          ? "border-[#191970] bg-slate-50 text-slate-900"
                          : "border-black/15 bg-white text-slate-800 hover:border-black/25"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          className="mt-1"
                          type="radio"
                          name="intent"
                          checked={checked}
                          onChange={() => setForm((f) => ({ ...f, intent: option.value }))}
                        />
                        <span className="font-medium">{option.label}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1 sm:col-span-2">
                <label className="text-sm font-medium text-slate-900">
                  Full Name <span className="text-[#FF4F00]">*</span>
                </label>
                <input
                  className="rounded-md border border-black/15 px-3 py-2 text-sm"
                  value={form.fullName}
                  onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="grid gap-1 sm:col-span-2">
                <label className="text-sm font-medium text-slate-900">Business Name</label>
                <input
                  className="rounded-md border border-black/15 px-3 py-2 text-sm"
                  value={form.businessName}
                  onChange={(e) => setForm((f) => ({ ...f, businessName: e.target.value }))}
                  autoComplete="organization"
                />
              </div>

              <div className="grid gap-1">
                <label className="text-sm font-medium text-slate-900">
                  Email <span className="text-[#FF4F00]">*</span>
                </label>
                <input
                  className="rounded-md border border-black/15 px-3 py-2 text-sm"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  autoComplete="email"
                  inputMode="email"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div className="grid gap-1">
                <label className="text-sm font-medium text-slate-900">Phone</label>
                <input
                  className="rounded-md border border-black/15 px-3 py-2 text-sm"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(415) 555-0123"
                />
                <div className="text-xs text-slate-600">
                  Optional (helpful for faster coordination)
                </div>
              </div>
            </div>

            <fieldset className="grid gap-2">
              <legend className="text-sm font-medium text-slate-900">
                Preferred contact method
              </legend>

              <label className="tap-row text-sm text-slate-800">
                <input
                  className="mt-[2px]"
                  type="radio"
                  name="preferredContact"
                  checked={form.preferredContact === "email"}
                  onChange={() => setForm((f) => ({ ...f, preferredContact: "email" }))}
                />
                Email
              </label>

              <label className="tap-row text-sm text-slate-800">
                <input
                  className="mt-[2px]"
                  type="radio"
                  name="preferredContact"
                  checked={form.preferredContact === "phone"}
                  onChange={() => setForm((f) => ({ ...f, preferredContact: "phone" }))}
                />
                Phone
              </label>

              <label className="tap-row text-sm text-slate-800">
                <input
                  className="mt-[2px]"
                  type="radio"
                  name="preferredContact"
                  checked={form.preferredContact === "either"}
                  onChange={() => setForm((f) => ({ ...f, preferredContact: "either" }))}
                />
                Either
              </label>
            </fieldset>

            <div className="grid gap-4">
              <div className="grid gap-1">
                <label className="text-sm font-medium text-slate-900">Site Address</label>
                <input
                  className="rounded-md border border-black/15 px-3 py-2 text-sm"
                  value={form.siteAddress}
                  onChange={(e) => setForm((f) => ({ ...f, siteAddress: e.target.value }))}
                  placeholder="Street address or neighborhood in San Francisco"
                  autoComplete="street-address"
                />
              </div>

              <div className="grid gap-1">
                <label className="text-sm font-medium text-slate-900">Timeline</label>
                <select
                  className="rounded-md border border-black/15 px-3 py-2 text-sm"
                  value={form.timeline}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, timeline: e.target.value as Timeline }))
                  }
                >
                  <option value="">Select a timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="this_week">This week</option>
                  <option value="this_month">This month</option>
                  <option value="just_exploring">Just exploring</option>
                </select>
              </div>
            </div>

            {form.intent === "assessment" && (
              <fieldset className="grid gap-2 rounded-lg border border-black/10 p-4">
                <legend className="px-1 text-sm font-medium text-slate-900">
                  Assessment details
                </legend>

                <div className="grid gap-2">
                  <div className="text-sm font-medium text-slate-900">
                    What would you like the assessment to focus on?
                  </div>

                  {ASSESSMENT_FOCUS_OPTIONS.map((option) => (
                    <label key={option} className="tap-row text-sm text-slate-800">
                      <input
                        className="mt-[2px]"
                        type="checkbox"
                        checked={form.assessmentFocus.includes(option)}
                        onChange={() =>
                          setForm((f) => ({
                            ...f,
                            assessmentFocus: toggleValue(f.assessmentFocus, option),
                          }))
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                <div className="grid gap-1">
                  <label className="text-sm font-medium text-slate-900">
                    What concerns prompted you to reach out?
                  </label>
                  <textarea
                    className="min-h-[100px] rounded-md border border-black/15 px-3 py-2 text-sm"
                    value={form.assessmentConcerns}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, assessmentConcerns: e.target.value }))
                    }
                  />
                </div>
              </fieldset>
            )}

            {form.intent === "troubleshooting" && (
              <fieldset className="grid gap-2 rounded-lg border border-black/10 p-4">
                <legend className="px-1 text-sm font-medium text-slate-900">
                  Troubleshooting details
                </legend>

                <div className="grid gap-2">
                  <div className="text-sm font-medium text-slate-900">
                    What issue are you experiencing?
                  </div>

                  {TROUBLESHOOTING_ISSUE_OPTIONS.map((option) => (
                    <label key={option} className="tap-row text-sm text-slate-800">
                      <input
                        className="mt-[2px]"
                        type="checkbox"
                        checked={form.troubleshootingIssueTypes.includes(option)}
                        onChange={() =>
                          setForm((f) => ({
                            ...f,
                            troubleshootingIssueTypes: toggleValue(
                              f.troubleshootingIssueTypes,
                              option
                            ),
                          }))
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                <div className="grid gap-1">
                  <label className="text-sm font-medium text-slate-900">
                    Is anything down right now?
                  </label>
                  <select
                    className="rounded-md border border-black/15 px-3 py-2 text-sm"
                    value={form.troubleshootingDownNow}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        troubleshootingDownNow: e.target.value as DownNow,
                      }))
                    }
                  >
                    <option value="">Select one</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="intermittent">Intermittent</option>
                  </select>
                </div>
              </fieldset>
            )}

            {form.intent === "upgrade" && (
              <fieldset className="grid gap-2 rounded-lg border border-black/10 p-4">
                <legend className="px-1 text-sm font-medium text-slate-900">
                  Upgrade details
                </legend>

                <div className="grid gap-2">
                  <div className="text-sm font-medium text-slate-900">
                    What are you hoping to improve?
                  </div>

                  {UPGRADE_GOAL_OPTIONS.map((option) => (
                    <label key={option} className="tap-row text-sm text-slate-800">
                      <input
                        className="mt-[2px]"
                        type="checkbox"
                        checked={form.upgradeGoals.includes(option)}
                        onChange={() =>
                          setForm((f) => ({
                            ...f,
                            upgradeGoals: toggleValue(f.upgradeGoals, option),
                          }))
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            {form.intent === "installation" && (
              <fieldset className="grid gap-2 rounded-lg border border-black/10 p-4">
                <legend className="px-1 text-sm font-medium text-slate-900">
                  Project details
                </legend>

                <div className="grid gap-2">
                  <div className="text-sm font-medium text-slate-900">
                    What type of project is this?
                  </div>

                  {INSTALLATION_PROJECT_OPTIONS.map((option) => (
                    <label key={option} className="tap-row text-sm text-slate-800">
                      <input
                        className="mt-[2px]"
                        type="checkbox"
                        checked={form.installationProjectTypes.includes(option)}
                        onChange={() =>
                          setForm((f) => ({
                            ...f,
                            installationProjectTypes: toggleValue(
                              f.installationProjectTypes,
                              option
                            ),
                          }))
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                <div className="grid gap-1">
                  <label className="text-sm font-medium text-slate-900">
                    Approximate size of the space
                  </label>
                  <select
                    className="rounded-md border border-black/15 px-3 py-2 text-sm"
                    value={form.installationSpaceSize}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        installationSpaceSize: e.target.value as SpaceSize,
                      }))
                    }
                  >
                    <option value="">Select one</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="not_sure">Not sure</option>
                  </select>
                </div>
              </fieldset>
            )}

            <div className="grid gap-1">
              <label className="text-sm font-medium text-slate-900">
                Description <span className="text-[#FF4F00]">*</span>
              </label>
              <textarea
                className="min-h-[140px] rounded-md border border-black/15 px-3 py-2 text-sm"
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder={getDescriptionPlaceholder(form.intent)}
                required
              />
            </div>

            <div className="text-xs text-slate-600">
              We’ll only use your information to follow up about this request.
            </div>

            <div className="grid gap-2">
              <button
                type="submit"
                disabled={!validation.canSubmit || status === "submitting"}
                className="btn-tap btn-mobile-full bg-[#FF4F00] text-white hover:opacity-90 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 disabled:opacity-100"
              >
                {status === "submitting" ? "Submitting…" : getSubmitLabel(form.intent)}
              </button>

              {!validation.canSubmit && (
                <div className="text-sm text-slate-700">{validation.helper}</div>
              )}
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
