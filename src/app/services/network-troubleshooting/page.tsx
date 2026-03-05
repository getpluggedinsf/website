import Link from "next/link";

export default function NetworkTroubleshootingPage() {
  return (
    <main className="w-full">
      {/* H1 */}
      <section className="w-full">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-5xl">
              Network Troubleshooting &amp; Stabilization
            </h1>
          </div>
        </div>
      </section>

      {/* Opening */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              When your network is costing time, transactions, or confidence, structured diagnosis is required.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Intermittent Wi-Fi, POS dropouts, and performance degradation typically indicate underlying
              configuration or design faults.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              We identify and correct root causes — not surface symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Common Scenarios
            </h2>

            <ul className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
              {[
                "POS disconnects during peak service",
                "Wi-Fi degradation under load",
                "ISP transitions causing instability",
                "Misconfigured segmentation",
                "Dead zones in operational areas",
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

      {/* Approach */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Approach
            </h2>

            <ol className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
              {[
                "Symptom analysis",
                "Infrastructure inspection",
                "Root cause isolation",
                "Stabilization and configuration correction",
              ].map((item, idx) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-[var(--pip-navy)]">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Optimization follows once stability is restored.
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
                Experiencing instability?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Start with a Wi-Fi &amp; Network Reliability Review.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/request-help?source=network_troubleshooting&loc=cta"
                  className="btn-tap btn-mobile-full rounded-xl bg-[var(--pip-orange)] text-white hover:opacity-90 hover:no-underline"
                >
                  Request a Review
                </Link>

                <Link
                  href="/services/reliability-review"
                  className="text-sm font-medium text-[var(--pip-navy)] hover:opacity-80 hover:no-underline"
                >
                  Learn more about the Wi-Fi &amp; Network Reliability Review →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
