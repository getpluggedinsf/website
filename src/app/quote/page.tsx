"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function QuotePage() {
  // Wrap the inner component that calls useSearchParams in Suspense
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A1A4F]" />}>
      <QuotePageInner />
    </Suspense>
  );
}

function QuotePageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const srcParam = searchParams.get("src") || "direct";

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    contactPref: "email",
    services: [] as string[],
    details: "",
    src: srcParam,
    website: "", // honeypot
  });

  const canSubmit = useMemo(() => {
    if (!form.name.trim()) return false;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return false;
    return true;
  }, [form.name, form.email]);

  const toggleService = (val: string) => {
    setForm((f) => {
      const has = f.services.includes(val);
      return { ...f, services: has ? f.services.filter((s) => s !== val) : [...f.services, val] };
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit || status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
      router.push(`/thanks?src=${encodeURIComponent(srcParam)}`);
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(message);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A1A4F] text-white grid place-items-center p-6">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">Get a Quote</h1>
        <p className="mt-2 text-center text-[#D9DEE8]">
          Tell us briefly what you need. We’ll follow up within one business day.
        </p>

        {status === "success" && (
          <div className="mt-4 rounded-lg border border-emerald-400/40 bg-emerald-500/10 p-3 text-sm text-emerald-100">
            Thanks! Your request was received. We’ll be in touch shortly.
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 rounded-lg border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-100">
            {errorMsg || "Something went wrong. Please try again."}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div className="hidden">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#D9DEE8] mb-1">Name *</label>
              <input
                className="h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D84200] focus:ring-offset-2 focus:ring-offset-[#0A1A4F]"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[#D9DEE8] mb-1">Company</label>
              <input
                className="h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D84200] focus:ring-offset-2 focus:ring-offset-[#0A1A4F]"
                placeholder="(optional)"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#D9DEE8] mb-1">Email *</label>
              <input
                type="email"
                className="h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D84200] focus:ring-offset-2 focus:ring-offset-[#0A1A4F]"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[#D9DEE8] mb-1">Phone</label>
              <input
                className="h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D84200] focus:ring-offset-2 focus:ring-offset-[#0A1A4F]"
                placeholder="(optional)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#D9DEE8] mb-2">Preferred Contact</label>
            <div className="flex gap-4 text-sm">
              {["email", "phone"].map((opt) => (
                <label key={opt} className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="contactPref"
                    value={opt}
                    checked={form.contactPref === opt}
                    onChange={() => setForm({ ...form, contactPref: opt })}
                    className="accent-[#D84200]"
                  />
                  <span className="capitalize">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#D9DEE8] mb-2">What do you need help with?</label>
            <div className="grid sm:grid-cols-3 gap-2 text-sm">
              {["Networking", "Wi-Fi", "POS", "PC/Mac", "Backup", "Other"].map((s) => (
                <label key={s} className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.services.includes(s)}
                    onChange={() => toggleService(s)}
                    className="accent-[#D84200]"
                  />
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#D9DEE8] mb-1">Brief details</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D84200] focus:ring-offset-2 focus:ring-offset-[#0A1A4F]"
              placeholder="Tell us about the issue, timeline, and location…"
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
            />
          </div>

          <input type="hidden" name="src" value={form.src} />

          <div className="flex items-center justify-between gap-3">
            <p className="text-xs text-[#D9DEE8]/80">
              We’ll only use your info to follow up about this request.
            </p>
            <button
              type="submit"
              disabled={!canSubmit || status === "submitting"}
              className="inline-flex items-center rounded-lg bg-[#D84200] px-4 py-2 text-white font-medium hover:opacity-95 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D84200] focus:ring-offset-[#0A1A4F] transition"
            >
              {status === "submitting" ? "Sending…" : "Send request"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

