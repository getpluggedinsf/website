import Link from "next/link";

export default function ReliabilityReviewPage() {
  return (
    <main className="w-full">
      {/* H1 */}
      <section className="w-full">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-5xl">
              Wi-Fi &amp; Network Reliability Review
              <br className="hidden sm:block" />
              San Francisco Small Businesses
            </h1>
          </div>
        </div>
      </section>

      {/* Opening */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Before upgrading equipment or making changes, start with structured evaluation.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              A Wi-Fi &amp; Network Reliability Review assesses both wireless performance
              and underlying network infrastructure to identify instability,
              capacity limits, and configuration risks.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              This is the foundation for predictable connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Appropriate When */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Appropriate When
            </h2>

            <ul className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
              {[
                "Wi-Fi performance feels inconsistent",
                "POS systems disconnect intermittently",
                "Guest traffic impacts internal systems",
                "Preparing for peak season or expansion",
                "Equipment has evolved without design oversight",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What We Evaluate */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Wireless Layer */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
                What We Evaluate
              </h2>

              <h3 className="mt-8 text-lg font-semibold text-[var(--pip-navy)]">
                Wireless Layer
              </h3>

              <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
                {[
                  "Coverage and signal quality (RSSI / SNR)",
                  "Interference and channel utilization",
                  "Access point placement",
                  "Capacity under peak device load",
                  "Multi-floor and outdoor coverage",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure Layer */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--pip-navy)]">
                Infrastructure Layer
              </h3>

              <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
                {[
                  "Router and firewall configuration",
                  "VLAN structure and traffic isolation",
                  "Switch configuration",
                  "ISP integration",
                  "Baseline security posture",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 max-w-3xl">
            <p className="text-base leading-relaxed text-slate-700">
              Reliable Wi-Fi depends on a structured wired foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Deliverables
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              You receive:
            </p>

            <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
              {[
                "Documented findings",
                "Identified weak points",
                "Prioritized recommendations",
                "Defined next steps",
                "Upgrade guidance if required",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Clear scope. Defined direction.
            </p>
          </div>
        </div>
      </section>

      {/* Execution */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Execution
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Most reviews are performed on-site in San Francisco to properly assess layout and signal behavior.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Remote reviews are available for configuration-focused environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
                Request a Wi-Fi &amp; Network Reliability Review
              </h2>

              <div className="mt-8">
                <Link
                  href="/request-help?source=reliability_review&loc=cta"
                  className="btn-tap btn-mobile-full rounded-xl bg-[var(--pip-orange)] text-white hover:opacity-90 hover:no-underline"
                >
                  Request a Wi-Fi &amp; Network Reliability Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
