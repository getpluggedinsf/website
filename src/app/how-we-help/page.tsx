// src/app/how-we-help/page.tsx
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HowWeHelpPage() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold leading-tight text-[#191970] sm:text-4xl">
            How We Help
          </h1>

          <p className="text-slate-800">
            Practical tech support for real-world small businesses. Most issues
            aren’t perfectly labeled — and you don’t need to have everything figured
            out before reaching out.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-[#191970]">
            The reality of tech problems
          </h2>
          <div className="space-y-3 text-slate-800">
            <p>Most tech problems don’t arrive neatly labeled.</p>
            <p>
              Something breaks, behaves unpredictably, or no longer fits how the
              business operates.
            </p>
            <p>
              Our role is to help clarify what’s going on and recommend a reasonable
              next step.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-[#191970]">What we help with</h2>
          <p className="text-slate-800">We commonly work with:</p>

          <ul className="list-disc space-y-2 pl-5 text-slate-800">
            <li>Office networks and internet connectivity</li>
            <li>Wi-Fi coverage and reliability issues</li>
            <li>POS-related networking, cabling, and hardware support</li>
            <li>
              Troubleshooting systems that aren’t working — or aren’t clearly understood yet
            </li>
          </ul>

          <p className="text-slate-800">
            Some issues are simple. Others take investigation. Either way, clarity comes first.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-[#191970]">How it works</h2>

          <ol className="list-decimal space-y-2 pl-5 text-slate-800">
            <li>
              <span className="font-medium">You reach out</span> with a brief description of the issue
            </li>
            <li>
              <span className="font-medium">We follow up</span>, typically within one business day
            </li>
            <li>
              <span className="font-medium">If needed</span>, we schedule a short call to clarify scope
            </li>
            <li>
              <span className="font-medium">We recommend next steps</span>, such as a diagnostic visit or defined service engagement
            </li>
          </ol>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-[#191970]">Boundaries</h2>
          <div className="space-y-3 text-slate-800">
            <p>
              We aim to be helpful and transparent, but we don’t provide detailed troubleshooting
              or hands-on remote support without a defined service engagement.
            </p>
            <p>
              This helps ensure clear expectations and responsible use of time on both sides.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-[#191970]">Local focus</h2>
          <p className="text-slate-800">
            Serving <span className="font-medium">San Francisco small businesses</span>, with on-site or remote
            support depending on the situation.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-xl font-semibold text-[#191970]">Common questions</h2>

          <div className="space-y-6">
            <div>
              <div className="font-semibold text-slate-900">
                Do I need to know exactly what’s wrong before reaching out?
              </div>
              <p className="mt-2 text-slate-800">
                No. A clear description helps, but part of our job is helping you make sense of what’s going on.
              </p>
            </div>

            <div>
              <div className="font-semibold text-slate-900">
                Is this only for emergencies?
              </div>
              <p className="mt-2 text-slate-800">
                Not at all. Many requests involve reliability issues, cleanup, or planning changes before problems escalate.
              </p>
            </div>

            <div>
              <div className="font-semibold text-slate-900">
                What happens after I submit the form?
              </div>
              <p className="mt-2 text-slate-800">
                We’ll review your request, follow up—usually within one business day—and suggest a reasonable next step.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-lg border border-black/10 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[#191970]">Ready to start?</h2>
          <p className="mt-3 text-slate-800">
            If something isn’t working, feels unreliable, or just needs a second set of eyes, you can request help here.
          </p>

          <div className="mt-6">
              <Link
  href="/request-help?source=request_help&loc=how_we_help_cta"
 className="btn-tap btn-mobile-full bg-[#FF4F00] text-white hover:opacity-90 no-underline hover:no-underline" 
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

