"use client";

import { useMemo, useRef, useState } from "react";
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

type ErrorField = "fullName" | "email" | "description";
type HighlightedFields = Partial<Record<ErrorField, boolean>>;

const INLINE_ERROR_TEXT = "This field is required";
const CTA_HELPER_TEXT = "Please complete all required fields to submit.";

export default function ContactClient() {
  const sp = useSearchParams();
  const initialIntent = getIntentFromQuery(sp.get("intent"));

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [hasFailedSubmit, setHasFailedSubmit] = useState(false);
  const [highlightedFields, setHighlightedFields] = useState<HighlightedFields>({});
  const [primaryErrorField, setPrimaryErrorField] = useState<ErrorField | null>(null);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

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
    const fullNameMissing = !form.fullName.trim();
    const emailMissing = !form.email.trim();
    const emailInvalid = !!form.email.trim() && !isValidEmail(form.email.trim());
    const descriptionMissing = !form.description.trim();

    return {
      fullNameMissing,
      emailMissing,
      emailInvalid,
      descriptionMissing,
      canSubmit:
        !fullNameMissing &&
        !emailMissing &&
        !emailInvalid &&
        !descriptionMissing,
    };
  }, [form]);

  function getMissingFields(): ErrorField[] {
    const missing: ErrorField[] = [];

    if (!form.fullName.trim()) {
      missing.push("fullName");
    }

    if (!form.email.trim() || !isValidEmail(form.email.trim())) {
      missing.push("email");
    }

    if (!form.description.trim()) {
      missing.push("description");
    }

    return missing;
  }

  function scrollToField(el: HTMLElement | null) {
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    window.setTimeout(() => {
      if ("focus" in el && typeof el.focus === "function") {
        el.focus();
      }
    }, 250);
  }

  function focusFirstMissingField(field: ErrorField | null) {
    if (field === "fullName") {
      scrollToField(fullNameRef.current);
      return;
    }

    if (field === "email") {
      scrollToField(emailRef.current);
      return;
    }

    if (field === "description") {
      scrollToField(descriptionRef.current);
    }
  }

  function updateHighlightsAfterChange(nextForm: typeof form) {
    if (!hasFailedSubmit) return;

    const nextHighlighted: HighlightedFields = {};

    if (!nextForm.fullName.trim()) {
      nextHighlighted.fullName = true;
    }

    if (!nextForm.email.trim() || !isValidEmail(nextForm.email.trim())) {
      nextHighlighted.email = true;
    }

    if (!nextForm.description.trim()) {
      nextHighlighted.description = true;
    }

    const firstRemainingMissing =
      (nextHighlighted.fullName && "fullName") ||
      (nextHighlighted.email && "email") ||
      (nextHighlighted.description && "description") ||
      null;

    setHighlightedFields(nextHighlighted);
    setPrimaryErrorField(firstRemainingMissing);
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const missingFields = getMissingFields();

    if (missingFields.length > 0) {
      const nextHighlighted: HighlightedFields = {};
      missingFields.forEach((field) => {
        nextHighlighted[field] = true;
      });

      setHasFailedSubmit(true);
      setHighlightedFields(nextHighlighted);
      setPrimaryErrorField(missingFields[0]);
      focusFirstMissingField(missingFields[0]);
      return;
    }

    setHighlightedFields({});
    setPrimaryErrorField(null);
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

  const errorInputClass =
    "border-[var(--pip-orange)] bg-orange-50 focus:border-[var(--pip-orange)] focus:ring-2 focus:ring-[var(--pip-orange)]/25";

  return (
    <section className="bg-[var(--pip-bg-mid)]">
      <main className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-3xl font-semibold tracking-heading text-[var(--pip-ink)] sm:text-4xl">
            Contact
          </h1>
          <h2 className="mt-4 font-heading text-xl font-semibold tracking-heading text-[var(--pip-ink)] sm:text-2xl">
            Tell us a little about what you need.
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--pip-ink)]/80">
            A short description is enough to get started. We’ll review your message and get
            back to you within one business day.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[var(--pip-border)] bg-[var(--pip-bg-light)] shadow-[8px_14px_26px_rgba(22,33,58,0.10)]">
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
              <form onSubmit={onSubmit} className="grid gap-8 sm:gap-9">
                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    value={form.website}
                    onChange={(e) => {
                      const nextForm = { ...form, website: e.target.value };
                      setForm(nextForm);
                      updateHighlightsAfterChange(nextForm);
                    }}
                  />
                </div>

                <SectionFrame title="Request type">
                  <IntentOptions
                    intent={form.intent}
                    onChange={(intent) => {
                      const nextForm = { ...form, intent };
                      setForm(nextForm);
                      updateHighlightsAfterChange(nextForm);
                    }}
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
                        ref={fullNameRef}
                        className={`${INPUT_CLASS} ${
                          highlightedFields.fullName ? errorInputClass : ""
                        }`}
                        value={form.fullName}
                        onChange={(e) => {
                          const nextForm = { ...form, fullName: e.target.value };
                          setForm(nextForm);
                          updateHighlightsAfterChange(nextForm);
                        }}
                        autoComplete="name"
                        aria-invalid={!!highlightedFields.fullName}
                        aria-describedby={
                          primaryErrorField === "fullName" ? "fullName-error" : undefined
                        }
                      />
                      {primaryErrorField === "fullName" && (
                        <div id="fullName-error" className="text-sm text-[var(--pip-orange)]">
                          {INLINE_ERROR_TEXT}
                        </div>
                      )}
                    </div>

                    <div className="grid gap-1.5 sm:col-span-2">
                      <label className="text-sm font-medium text-[var(--pip-ink)]">
                        Business Name
                      </label>
                      <input
                        className={INPUT_CLASS}
                        value={form.businessName}
                        onChange={(e) => {
                          const nextForm = { ...form, businessName: e.target.value };
                          setForm(nextForm);
                          updateHighlightsAfterChange(nextForm);
                        }}
                        autoComplete="organization"
                      />
                    </div>

                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-[var(--pip-ink)]">
                        Email <span className="text-[var(--pip-orange)]">*</span>
                      </label>
                      <input
                        ref={emailRef}
                        className={`${INPUT_CLASS} ${
                          highlightedFields.email ? errorInputClass : ""
                        }`}
                        value={form.email}
                        onChange={(e) => {
                          const nextForm = { ...form, email: e.target.value };
                          setForm(nextForm);
                          updateHighlightsAfterChange(nextForm);
                        }}
                        autoComplete="email"
                        inputMode="email"
                        placeholder="name@company.com"
                        aria-invalid={!!highlightedFields.email}
                        aria-describedby={
                          primaryErrorField === "email" ? "email-error" : undefined
                        }
                      />
                      {primaryErrorField === "email" && (
                        <div id="email-error" className="text-sm text-[var(--pip-orange)]">
                          {INLINE_ERROR_TEXT}
                        </div>
                      )}
                    </div>

                    <div className="grid gap-1.5">
                      <label className="text-sm font-medium text-[var(--pip-ink)]">Phone</label>
                      <input
                        className={INPUT_CLASS}
                        value={form.phone}
                        onChange={(e) => {
                          const nextForm = { ...form, phone: e.target.value };
                          setForm(nextForm);
                          updateHighlightsAfterChange(nextForm);
                        }}
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="(415) 555-0123"
                      />
                      <div className="text-xs text-[var(--pip-ink)]/72">
                        Optional (helpful for faster coordination)
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <PreferenceOptions
                      value={form.preferredContact}
                      onChange={(preferredContact) => {
                        const nextForm = { ...form, preferredContact };
                        setForm(nextForm);
                        updateHighlightsAfterChange(nextForm);
                      }}
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
                        onChange={(e) => {
                          const nextForm = { ...form, siteAddress: e.target.value };
                          setForm(nextForm);
                          updateHighlightsAfterChange(nextForm);
                        }}
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
                        onChange={(e) => {
                          const nextForm = {
                            ...form,
                            timeline: e.target.value as Timeline,
                          };
                          setForm(nextForm);
                          updateHighlightsAfterChange(nextForm);
                        }}
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
                        ref={descriptionRef}
                        className={`${INPUT_CLASS} min-h-[140px] ${
                          highlightedFields.description ? errorInputClass : ""
                        }`}
                        value={form.description}
                        onChange={(e) => {
                          const nextForm = { ...form, description: e.target.value };
                          setForm(nextForm);
                          updateHighlightsAfterChange(nextForm);
                        }}
                        placeholder={getDescriptionPlaceholder(form.intent)}
                        aria-invalid={!!highlightedFields.description}
                        aria-describedby={
                          primaryErrorField === "description"
                            ? "description-error"
                            : undefined
                        }
                      />
                      {primaryErrorField === "description" && (
                        <div
                          id="description-error"
                          className="text-sm text-[var(--pip-orange)]"
                        >
                          {INLINE_ERROR_TEXT}
                        </div>
                      )}
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

                <div className="space-y-5 pt-4 pb-2">
                  <div className="text-center text-sm text-[var(--pip-ink)]/78">
                    We’ll only use your information to follow up about this request.
                  </div>

                  <div className="grid justify-items-start gap-3">
                    <button
                      type="submit"
                      className="btn-tap w-auto rounded-md border border-transparent bg-[var(--pip-orange)] px-6 text-white hover:opacity-90"
                    >
                      {status === "submitting" ? "Submitting…" : getSubmitLabel(form.intent)}
                    </button>

                    {hasFailedSubmit && Object.keys(highlightedFields).length > 0 && (
                      <div className="text-sm text-[var(--pip-orange)]">
                        {CTA_HELPER_TEXT}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="h-12 sm:h-16" />
      </main>
    </section>
  );
}
