import Link from "next/link";

export default function NetworkInstallationPage() {
  return (
    <main className="w-full">
      {/* H1 */}
      <section className="w-full">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-5xl">
              Network Installation &amp; Infrastructure Upgrades
            </h1>
          </div>
        </div>
      </section>

      {/* Opening */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Stable networks are designed — not assembled.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              We implement structured Wi-Fi and wired infrastructure built for operational
              demand, capacity growth, and clean long-term management.
            </p>
          </div>
        </div>
      </section>

      {/* When Installation Is Appropriate */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              When Installation Is Appropriate
            </h2>

            <ul className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
              {[
                "Opening a new location",
                "Replacing consumer-grade equipment",
                "Expanding seating or floor space",
                "Adding new POS systems",
                "Re-architecting an unstable environment",
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

      {/* Scope */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Scope
            </h2>

            <ul className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
              {[
                "Business-grade routers and gateways",
                "Managed switches",
                "Structured VLAN and traffic design",
                "Access point placement and mounting",
                "Clean rack layout and cable management",
                "Performance tuning",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Designed for stability under load — not theoretical maximum speed.
            </p>
          </div>
        </div>
      </section>

      {/* Process Alignment */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Process Alignment
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Most installations begin with a Wi-Fi &amp; Network Reliability Review to confirm layout,
              capacity needs, and compatibility.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Planning prevents rework.
            </p>

            <div className="mt-6">
              <Link
                href="/services/reliability-review"
                className="text-sm font-medium text-[var(--pip-navy)] hover:opacity-80 hover:no-underline"
              >
                Learn more about the Wi-Fi &amp; Network Reliability Review →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
                Planning a new build or upgrade?
              </h2>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/request-help?source=network_installation&loc=cta"
                  className="btn-tap btn-mobile-full rounded-xl bg-[var(--pip-orange)] text-white hover:opacity-90 hover:no-underline"
                >
                  Request a Review
                </Link>

                <Link
                  href="/services/reliability-review"
                  className="text-sm font-medium text-[var(--pip-navy)] hover:opacity-80 hover:no-underline"
                >
                  Start with a Wi-Fi &amp; Network Reliability Review →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
