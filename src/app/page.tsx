import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* 2. Hero (Above the Fold) */}
      <section className="w-full">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-18">
          {/* Left-aligned, constrained width block (intentional whitespace on right) */}
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[#191970] sm:text-5xl">
              Practical, reliable tech support for small businesses.
            </h1>

            <p className="mt-5 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              We provide networking, Wi-Fi, and point-of-sale support for small businesses in
              San{"\u00A0"}Francisco — from troubleshooting to clean, well-documented installations.
            </p>
            <p className="mt-5 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              If something isn’t working — or you’re unsure where to start — we can help.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/request-help"
                className="btn-tap btn-mobile-full rounded-xl bg-[#FF4F00] text-white hover:opacity-90 hover:no-underline"
              >
                Request Help
              </Link>

              <Link
                href="/request-help?source=contact&loc=hero"
                className="btn-tap btn-mobile-full rounded-xl border border-[#191970]/20 bg-white text-[#191970] hover:bg-[#191970]/5 hover:no-underline"
              >
                Contact
              </Link>
            </div>

            {/* Reassurance microcopy */}
            <div className="mt-7 space-y-1 text-sm text-slate-600">
              <p className="mt-7 text-sm font-medium text-[#191970]">
                Local, independent support <span className="mx-2 opacity-70">•</span> Typical response within one business day.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. What We Help With (Service Overview) */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          {/* Panel card (Layer 2) */}
          <div className="rounded-3xl border border-slate-200 bg-[#EEF0F4] p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[#191970] sm:text-3xl">
                What We Help With
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Practical support for the systems you rely on every day.
              </p>
            </div>
      
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* Cards (Layer 3) */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-[#191970]">Networking</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Routers, switches, cabling, and general network setup — installed and
                  configured cleanly.
                </p>
              </div>
      
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-[#191970]">Wi-Fi</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Coverage issues, performance problems, and access point installs for
                  reliable connectivity.
                </p>
              </div>
      
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-[#191970]">
                  POS &amp; Business Systems
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Point-of-sale hardware, peripherals, and small business tech that needs
                  to work reliably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach (Conceptual Bridge) */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[#191970] sm:text-3xl">
              Our Approach
            </h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                We focus on doing the work correctly the first time — with clear
                communication, clean installs, and documentation you can actually
                use.
              </p>
              <p>
                That means fewer surprises, systems that make sense, and support
                that respects your time.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/how-we-help"
                className="text-sm font-medium text-[var(--pip-navy)] hover:opacity-80"
              >
                Learn more about how we work → How We Help
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* 5. Primary Callout (Contained CTA Panel) */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold tracking-tight text-[#191970] sm:text-2xl">
                Not sure what you need yet?
              </h3>

              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
                <p>That’s normal. Many issues aren’t obvious until someone takes a look.</p>
                <p>
                  If something isn’t working the way it should — or you’re planning a
                  change and want a second opinion — start here.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/request-help"
                  className="btn-tap btn-mobile-full rounded-xl bg-[var(--pip-orange)] text-white hover:opacity-90 hover:no-underline focus:outline-none focus:ring-2 focus:ring-[rgba(25,25,112,0.35)]"
                >
                  Request Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

