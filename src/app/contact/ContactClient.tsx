"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  INPUT_CLASS,
  type DownNow,
  type Intent,
  type PreferredContact,
  type SpaceSize,
  type Timeline,
} from "./contactFormConfig";
import {
  getDescriptionPlaceholder,
  getDetailHeading,
  getIntentFromQuery,
  getSubmitLabel,
  isValidEmail,
} from "./contactFormHelpers";
import IntentDetails from "./components/IntentDetails";
import IntentOptions from "./components/IntentOptions";
import PreferenceOptions from "./components/PreferenceOptions";
import SectionFrame from "./components/SectionFrame";

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
    <section className="bg-[var(--pip-navy)]">
      <main className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-3xl font-semibold tracking-heading text-white sm:text-4xl">
            Contact
          </h1>
          <h2 className="mt-4 font-heading text-xl font-semibold tracking-heading text-white sm:text-2xl">
            Tell us a little about what you need.
          </h2>
          <p className="mt-3 max-w-2xl text-slate-100/90">
            A short description is enough to get started. We’ll review your message and get
            back to you within one business day.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[color:var(--pip-border)] bg-[var(--pip-bg-mid)] shadow-[10px_16px_34px_rgba(10,18,34,0.28)]">
          <div className="p-5 sm:p-7 lg:p-8">
            {status === "success" && (
              <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-[var(--pip-ink)]">
                <div className="font-semibold">Thanks — we’ve received your message.</div>
                <div className="mt-1 text-sm text-slate-700">
                  We’ll get back to you within one business day.
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-[var(--pip-ink)]">
                <div className="font-semibold">Something went wrong.</div>
                <div className="mt-1 text-sm text-slate-700">
                  {errorMsg || "Please try again."}
                </div>
              </div>
            )}

            {(status === "idle" || status === "submitting" || status === "error") && (
              <form onSubmit={onSubmit} className="grid gap-7 sm:gap-8">
                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    value={form.website}
                    onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                  />
                </div>

                <SectionFrame title="Request type">
                  <IntentOptions
                    intent={form.intent}
                    onChange={(intent) => setForm((f) => ({ ...f, intent }))}
                  />
                </SectionFrame>

                <SectionFrame
                  title="Contact information"
                  description="We’ll use this information to follow up about your request."
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1.5 sm:col-span-2">
                      <label className="text-sm font-medium text-[var(--pip-ink)]">
                        Full Name <span className="text-[var(--pip-orange)]">*</span>
                      </label>
                      <input
                        className={INPUT_CLASS}
                        value={form.fullName}
                        onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="grid gap-1.5 sm:col-span-2">
                      <label className="text-sm font-medium text-[var(--pip-ink)]">
                        Business Name
                      </label>
                      <input
                        className={INPUT_CLASS}
                        value={form.businessName}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, businessName: e.target.value }))
                        }
                        autoComplete="organization"
                      />
                    </div>

                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-[var(--pip-ink)]">
                        Email <span className="text-[var(--pip-orange)]">*</span>
                      </label>
                      <input
                        className={INPUT_CLASS}
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        autoComplete="email"
                        inputMode="email"
                        placeholder="name@company.com"
                        required
                      />
                    </div>

                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-[var(--pip-ink)]">Phone</label>
                      <input
                        className={INPUT_CLASS}
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="(415) 555-0123"
                      />
                      <div className="text-xs text-[var(--pip-ink)]/75">
                        Optional (helpful for faster coordination)
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <PreferenceOptions
                      value={form.preferredContact}
                      onChange={(preferredContact) =>
                        setForm((f) => ({ ...f, preferredContact }))
                      }
                    />
                  </div>
                </SectionFrame>

                <SectionFrame title="Project details">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-[var(--pip-ink)]">
                        Site Address
                      </label>
                      <input
                        className={INPUT_CLASS}
                        value={form.siteAddress}
                        onChange={(e) => setForm((f) => ({ ...f, siteAddress: e.target.value }))}
                        placeholder="Street address or neighborhood in San Francisco"
                        autoComplete="street-address"
                      />
                    </div>

                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-[var(--pip-ink)]">
                        Timeline
                      </label>
                      <select
                        className={INPUT_CLASS}
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

                    <div className="grid gap-1.5 sm:col-span-2">
                      <label className="text-sm font-medium text-[var(--pip-ink)]">
                        Description <span className="text-[var(--pip-orange)]">*</span>
                      </label>
                      <textarea
                        className={`${INPUT_CLASS} min-h-[140px]`}
                        value={form.description}
                        onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                        placeholder={getDescriptionPlaceholder(form.intent)}
                        required
                      />
                    </div>
                  </div>
                </SectionFrame>

                {form.intent !== "general" && (
                  <SectionFrame title={getDetailHeading(form.intent)}>
                    <IntentDetails
                      form={form}
                      setForm={setForm as React.Dispatch<
                        React.SetStateAction<{
                          intent: Intent;
                          assessmentFocus: string[];
                          assessmentConcerns: string;
                          troubleshootingIssueTypes: string[];
                          troubleshootingDownNow: DownNow;
                          upgradeGoals: string[];
                          installationProjectTypes: string[];
                          installationSpaceSize: SpaceSize;
                        }>
                      >}
                    />
                  </SectionFrame>
                )}

                <div className="space-y-5 pt-3">
                  <div className="text-sm text-slate-100/90">
                    We’ll only use your information to follow up about this request.
                  </div>

                  <div className="grid gap-3">
                    <button
                      type="submit"
                      disabled={!validation.canSubmit || status === "submitting"}
                      className="btn-tap btn-mobile-full rounded-lg bg-[var(--pip-orange)] text-white shadow-[2px_4px_10px_rgba(22,33,58,0.22)] hover:opacity-90 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 disabled:opacity-100 sm:w-auto"
                    >
                      {status === "submitting" ? "Submitting…" : getSubmitLabel(form.intent)}
                    </button>

                    {!validation.canSubmit && (
                      <div className="text-sm text-slate-100/85">{validation.helper}</div>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="h-10 sm:h-14" />
      </main>
    </section>
  );
}
