import Link from "next/link";

export default function GuestWifiPosConfigPage() {
  return (
    <main className="w-full">
      {/* H1 */}
      <section className="w-full">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-5xl">
              Guest Wi-Fi &amp; POS Network Configuration
            </h1>
          </div>
        </div>
      </section>

      {/* Opening */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              Guest access should never compromise operations.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Improperly segmented networks allow guest traffic to compete with POS systems and internal
              infrastructure.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              We design structured separation that protects operational stability.
            </p>
          </div>
        </div>
      </section>

      {/* What We Configure */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              What We Configure
            </h2>

            <ul className="mt-6 space-y-3 text-base leading-relaxed text-slate-700">
              {[
                "VLAN-based traffic isolation",
                "Guest SSIDs with defined access policies",
                "Capacity planning for peak device counts",
                "Channel and bandwidth optimization",
                "Controlled network separation between guest and business systems",
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

      {/* Optional Portal Capability */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Optional Portal Capability
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Where supported by your equipment, we configure captive portals or branded splash pages
              with basic access controls.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Compatibility is evaluated before recommending upgrades.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Segmentation and stability remain the priority.
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
                Protect your operational network.
              </h2>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/request-help?source=guest_wifi_pos&loc=cta"
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
