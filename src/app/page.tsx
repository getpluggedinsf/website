// src/app/page.tsx
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* HERO (text-only; no logo/graphics) */}
        <section className="space-y-6">
          <h1 className="text-3xl font-semibold leading-tight text-[#191970] sm:text-4xl">
            Your connection to practical solutions and reliable tech support
          </h1>

          <div className="space-y-3 text-base text-slate-800">
            <p>
              Thoughtful on-site and remote tech support for small businesses in
              San Francisco — focused on diagnosing issues, troubleshooting problems,
              and improving how technology supports day-to-day work instead of getting in the way.
            </p>
            <p>
              If something isn’t working — or you’re unsure where to start — we
              can help.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/request-help?source=request_help&loc=hero"
              className="inline-flex w-fit items-center justify-center rounded-md bg-[#FF4F00] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 no-underline hover:no-underline"
            >
              Request Help
            </Link>
            <Link
              href="/request-help?source=contact&loc=hero"
              className="inline-flex w-fit items-center justify-center rounded-md border border-black/15 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-black/5 no-underline hover:no-underline"
            >
              Contact
            </Link>
          </div>

          <div className="text-sm text-slate-700">
            Typical response: within 1 business day
          </div>

          <div className="space-y-1 text-sm text-slate-700">
            <div>Serving San Francisco small businesses</div>
            <div>Local, independent IT support</div>
          </div>
        </section>

        {/* WHAT WE HELP WITH (illustrative; authoritative scope is on the form) */}
        <section className="mt-14 space-y-6">
          <h2 className="text-xl font-semibold text-[#191970]">
            What We Help With
          </h2>

          <p className="text-slate-800">
            We support small businesses with common, real-world technology needs —
            especially when things feel unclear, unreliable, or aren’t working at all.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-black/10 bg-white p-5">
              <div className="font-semibold text-slate-900">Networking</div>
              <p className="mt-2 text-sm text-slate-700">
                Practical help with office networks — setup, cleanup,
                troubleshooting, and reliability improvements.
              </p>
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-5">
              <div className="font-semibold text-slate-900">Wi-Fi</div>
              <p className="mt-2 text-sm text-slate-700">
                Coverage issues, performance problems, access point placement,
                and tuning for real-world environments.
              </p>
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-5">
              <div className="font-semibold text-slate-900">
                POS &amp; Business Systems
              </div>
              <p className="mt-2 text-sm text-slate-700">
                Hands-on support for POS-related networking, cabling, hardware setup,
                and general technical readiness.
              </p>
            </div>
          </div>
        </section>

        {/* OUR APPROACH (preview) */}
        <section className="mt-14 space-y-4">
          <h2 className="text-xl font-semibold text-[#191970]">Our Approach</h2>

          <div className="space-y-3 text-slate-800">
            <p>Most tech problems don’t arrive neatly labeled.</p>
            <p>
              Something stops working. Performance slips. Changes stack up. At some
              point, it’s no longer clear what’s causing what — or where to start.
            </p>
            <p>
              Our role is to help clarify the situation, identify the underlying issues,
              and recommend a reasonable next step based on what you actually need.
            </p>
            <p>
              If you’d like a more detailed explanation of how we work, you can read more on our{" "}
              <Link
                href="/how-we-help"
                className="font-medium text-[#FF4F00] hover:underline"
              >
                How We Help
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        {/* PRIMARY CTA */}
        <section className="mt-14 rounded-lg border border-black/10 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[#191970]">
            Not sure where to start? That’s normal.
          </h2>

          <div className="mt-3 space-y-3 text-slate-800">
            <p>
              If something isn’t working the way it should — or you’re planning a change and want a second set of eyes — the best first step is to reach out with a brief description.
            </p>
            <p>
              We’ll review the information you share, follow up with questions if needed, and help determine a sensible path forward.
            </p>
          </div>

          <div className="mt-6">
            <Link
              href="/request-help?source=request_help&loc=primary_cta"
              className="inline-flex items-center justify-center rounded-md bg-[#FF4F00] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 no-underline hover:no-underline"
            >
              Request Help
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

