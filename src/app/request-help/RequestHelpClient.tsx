// src/app/request-help/RequestHelpClient.tsx
"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Intent = "tech_issue" | "planning_change" | "general_inquiry";
type PreferredContact = "email" | "phone";
type Source = "request_help" | "contact";

const TOPICS = [
  "Networking",
  "Wi-Fi",
  "POS / Payments",
  "Office Systems (PC / Mac, email, files)",
  "Printers / Scanning",
  "Backup",
  "Other",
] as const;

function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function phoneDigits(raw: string) {
  return raw.replace(/\D/g, "");
}

function isValidPhone(phone: string) {
  // basic US-centric validation: 10+ digits
  return phoneDigits(phone).length >= 10;
}

export default function RequestHelpClient() {
  const sp = useSearchParams();

  const source: Source = sp.get("source") === "contact" ? "contact" : "request_help";
  const loc = sp.get("loc") ?? "";

  const defaultIntent: Intent =
    source === "contact" ? "general_inquiry" : "tech_issue";

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success_email" | "success_phone" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    preferredContact: "email" as PreferredContact,
    intent: defaultIntent as Intent,
    topics: [] as string[],
    message: "",
    website: "", // honeypot
  });

  // If source changes (rare), keep intent aligned with the page's mode.
  // We do NOT constantly overwrite intent; only initialize.
  // (If user flips intent manually we respect it.)

  const introHelper = useMemo(() => {
    return source === "contact"
      ? "Have a general question or inquiry? A brief note is enough to get started. Typical response: within one business day."
      : "You don’t need to have everything figured out — a short description is enough to get started. Typical response: within one business day.";
  }, [source]);

  const toggleTopic = (topic: string) => {
    setForm((f) => {
      const has = f.topics.includes(topic);
      return {
        ...f,
        topics: has ? f.topics.filter((t) => t !== topic) : [...f.topics, topic],
      };
    });
  };

  const validation = useMemo(() => {
    const nameOk = !!form.name.trim();
    const msgOk = !!form.message.trim();

    const emailRaw = form.email.trim();
    const phoneRaw = form.phone.trim();

    const emailOk = !!emailRaw && isValidEmail(emailRaw);
    const phoneOk = !!phoneRaw && isValidPhone(phoneRaw);

    const hasAnyValidContact = emailOk || phoneOk;

    const pref = form.preferredContact ?? "email";
    const prefOk = pref === "email" ? emailOk : phoneOk;

    const canSubmit = nameOk && msgOk && hasAnyValidContact && prefOk;

    let helper = "";
    if (!emailRaw && !phoneRaw) {
      helper = "Please provide an email address or phone number so we can follow up.";
    } else if (pref === "email" && !emailOk) {
      helper = "Please enter a valid email address or choose phone instead.";
    } else if (pref === "phone" && !phoneOk) {
      helper = "Please enter a valid phone number or choose email instead.";
    } else if (!nameOk || !msgOk) {
      helper = "Please complete the required fields to submit.";
    }

    return { canSubmit, helper, emailOk, phoneOk };
  }, [form]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validation.canSubmit || status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/request-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          loc,
          intent: form.intent,
          preferred_contact: form.preferredContact,
          name: form.name.trim(),
          company: form.company.trim() || undefined,
          email: form.email.trim() || undefined,
          phone: form.phone.trim() || undefined,
          topics: form.topics,
          message: form.message.trim(),
          website: form.website, // honeypot
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Request failed.");
      }

      // Confirmation rules:
      // If user email is present and server says it emailed user -> show email confirmation
      if (data.emailedUser && data.email) {
        setStatus("success_email");
      } else {
        setStatus("success_phone");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <>
      <Nav />

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-semibold text-[#191970] sm:text-4xl">
          {source === "contact" ? "Contact" : "Request Help"}
        </h1>

        <h2 className="mt-4 text-lg font-semibold text-slate-900">
          Tell us briefly what’s going on.
        </h2>

        <p className="mt-2 text-slate-800">{introHelper}</p>

        <div className="mt-10 rounded-lg border border-black/10 bg-white p-6 sm:p-8">
          {status === "success_email" && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-slate-900">
              <div className="font-semibold">Thanks — we’ve received your request.</div>
              <div className="mt-1 text-sm text-slate-700">
                A confirmation email has been sent to{" "}
                <span className="font-medium">{form.email.trim()}</span>.
                We typically respond within one business day.
              </div>
              <div className="mt-2 text-xs text-slate-600">
                If you don’t see the message shortly, please check your spam folder.
              </div>
            </div>
          )}

          {status === "success_phone" && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-slate-900">
              <div className="font-semibold">Thanks — we’ve received your request.</div>
              <div className="mt-1 text-sm text-slate-700">
                We’ll review your message and get back to you shortly using the contact information you provided.
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
            <form onSubmit={onSubmit} className="mt-6 grid gap-5">
              {/* Honeypot */}
              <div className="hidden">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                />
              </div>

              {/* Intent */}
              <fieldset className="grid gap-2">
                <legend className="text-sm font-medium text-slate-900">
                  What are you reaching out about today?
                </legend>

                <label className="flex items-center gap-2 text-sm text-slate-800">
                  <input
                    type="radio"
                    name="intent"
                    checked={form.intent === "tech_issue"}
                    onChange={() => setForm({ ...form, intent: "tech_issue" })}
                  />
                  Tech issue / troubleshooting
                </label>

                <label className="flex items-center gap-2 text-sm text-slate-800">
                  <input
                    type="radio"
                    name="intent"
                    checked={form.intent === "planning_change"}
                    onChange={() => setForm({ ...form, intent: "planning_change" })}
                  />
                  Planning a change / second set of eyes
                </label>

                <label className="flex items-center gap-2 text-sm text-slate-800">
                  <input
                    type="radio"
                    name="intent"
                    checked={form.intent === "general_inquiry"}
                    onChange={() => setForm({ ...form, intent: "general_inquiry" })}
                  />
                  General question / inquiry
                </label>
              </fieldset>

              {/* Identity */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1">
                  <label className="text-sm font-medium text-slate-900">
                    Name <span className="text-[#FF4F00]">*</span>
                  </label>
                  <input
                    className="rounded-md border border-black/15 px-3 py-2 text-sm"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="grid gap-1">
                  <label className="text-sm font-medium text-slate-900">Company</label>
                  <input
                    className="rounded-md border border-black/15 px-3 py-2 text-sm"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    autoComplete="organization"
                  />
                </div>

                <div className="grid gap-1">
                  <label className="text-sm font-medium text-slate-900">Email</label>
                  <input
                    className="rounded-md border border-black/15 px-3 py-2 text-sm"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    autoComplete="email"
                    inputMode="email"
                    placeholder="name@company.com"
                  />
                  <div className="text-xs text-slate-600">
                    Required if preferred contact method is Email.
                  </div>
                </div>

                <div className="grid gap-1">
                  <label className="text-sm font-medium text-slate-900">Phone</label>
                  <input
                    className="rounded-md border border-black/15 px-3 py-2 text-sm"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(415) 555-0123"
                  />
                  <div className="text-xs text-slate-600">
                    Optional — only if you’d like a call back.
                  </div>
                </div>
              </div>

              {/* Preferred contact */}
              <fieldset className="grid gap-2">
                <legend className="text-sm font-medium text-slate-900">
                  Preferred contact method
                </legend>

                <label className="flex items-center gap-2 text-sm text-slate-800">
                  <input
                    type="radio"
                    name="preferredContact"
                    checked={form.preferredContact === "email"}
                    onChange={() => setForm({ ...form, preferredContact: "email" })}
                  />
                  Email
                </label>

                <label className="flex items-center gap-2 text-sm text-slate-800">
                  <input
                    type="radio"
                    name="preferredContact"
                    checked={form.preferredContact === "phone"}
                    onChange={() => setForm({ ...form, preferredContact: "phone" })}
                  />
                  Phone
                </label>

                <div className="text-xs text-slate-600">
                  If you choose phone, include a number and a good time window in your message below.
                </div>
              </fieldset>

              {/* Topics */}
              <fieldset className="grid gap-2">
                <legend className="text-sm font-medium text-slate-900">
                  What do you need help with?{" "}
                  <span className="text-slate-600">(check all that apply)</span>
                </legend>

                <div className="grid gap-2 sm:grid-cols-2">
                  {TOPICS.map((t) => (
                    <label key={t} className="flex items-start gap-2 text-sm text-slate-800">
                      <input
                        type="checkbox"
                        checked={form.topics.includes(t)}
                        onChange={() => toggleTopic(t)}
                      />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Message */}
              <div className="grid gap-1">
                <label className="text-sm font-medium text-slate-900">
                  Brief description <span className="text-[#FF4F00]">*</span>
                </label>
                <textarea
                  className="min-h-[140px] rounded-md border border-black/15 px-3 py-2 text-sm"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={
                    "Tell us what’s happening, where you’re located (SF neighborhood is fine), and any timing constraints.\nNo need for a full diagnosis — we’ll follow up if we need more detail."
                  }
                  required
                />
              </div>

              <div className="text-xs text-slate-600">
                We’ll only use your information to follow up about this request.
              </div>

              {/* Submit */}
              <div className="grid gap-2">
                <button
                  type="submit"
                  disabled={!validation.canSubmit || status === "submitting"}
                 className="w-fit rounded-md bg-[#FF4F00] px-5 py-2.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 disabled:opacity-100" 
                >
                  {status === "submitting" ? "Submitting…" : "Request Help"}
                </button>

                <div className="text-xs text-slate-600">
                  You’ll receive a confirmation email if you provided an email address.
                </div>

                {!validation.canSubmit && (
                  <div className="text-sm text-slate-700">
                    {validation.helper}
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

