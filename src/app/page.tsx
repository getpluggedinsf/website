import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* 1) Hero */}
      <section className="w-full">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-5xl">
              Wi-Fi &amp; Network Infrastructure
              <br className="hidden sm:block" />
              for San Francisco Small Businesses
            </h1>

            <p className="mt-5 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              Built for stability under real-world conditions — so your POS, staff
              systems, and guest Wi-Fi perform predictably, even during peak hours.
            </p>

            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              PluggedIn Pros designs, stabilizes, and improves network environments
              that restaurants, retail shops, and offices depend on every day.
            </p>

            <div className="mt-8">
              <Link
                href="/request-help?source=home_hero&loc=cta"
                className="btn-tap btn-mobile-full rounded-xl bg-[var(--pip-orange)] text-white hover:opacity-90 hover:no-underline"
              >
                Request a Wi-Fi &amp; Network Reliability Review
              </Link>
            </div>

            <p className="mt-6 text-sm font-medium text-[var(--pip-navy)]">
              Focused exclusively on Wi-Fi and network infrastructure for small
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* 2) When the Network Becomes a Distraction */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              When the Network Becomes a Distraction
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Most network failures don’t begin as outages.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              They start as:
            </p>

            <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                <span>POS terminals that occasionally lag</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                <span>Wi-Fi slowing during lunch or dinner rush</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                <span>Dead zones in patios or back offices</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                <span>Guest traffic affecting internal systems</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                <span>Equipment added over time without structure</span>
              </li>
            </ul>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              When connectivity becomes unpredictable, it pulls attention away from
              running your business.
            </p>
          </div>
        </div>
      </section>

{/* 3) What We Do */}
<section className="w-full border-t border-slate-200">
  <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
    {/* Muted panel (Layer 2) */}
    <div className="rounded-3xl border border-slate-200 bg-[var(--pip-section-muted)] p-8 shadow-sm sm:p-10">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
          What We Do
        </h2>

        <p className="mt-4 text-base leading-relaxed text-slate-700">
          We specialize in small business Wi-Fi and network infrastructure — not general IT support.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Cards (Layer 3) */}
        <Link 
          href="/services/reliability-review"
          className="group block cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:no-underline">
          <h3 className="text-base font-semibold text-[var(--pip-navy)]">
            Wi-Fi &amp; Network Reliability Reviews
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Structured evaluation of wireless coverage, segmentation, and infrastructure health.
          </p>
        </Link>

        <Link
          href="/services/network-installation"
          className="group block cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:no-underline">
          <h3 className="text-base font-semibold text-[var(--pip-navy)]">
            Network Installation &amp; Upgrades
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Intentional deployment of routers, switches, and access points built for stability and growth.
          </p>
        </Link>

        <Link
          href="/services/network-troubleshooting"
          className="group block cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:no-underline">
          <h3 className="text-base font-semibold text-[var(--pip-navy)]">
            Network Troubleshooting &amp; Stabilization
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Diagnosis and correction of intermittent connectivity and performance issues.
          </p>
        </Link>

        <Link
          href="/services/guest-wifi-pos"
          className="group block cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:no-underline">
          <h3 className="text-base font-semibold text-[var(--pip-navy)]">
            Guest Wi-Fi &amp; POS Network Configuration
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Traffic isolation and capacity planning that protects business-critical systems.
          </p>
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* 4) Why Small Businesses Choose PluggedIn Pros */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Why Small Businesses Choose PluggedIn Pros
            </h2>

            <ul className="mt-6 space-y-2 text-base leading-relaxed text-slate-700">
              {[
                "Focused exclusively on Wi-Fi and network infrastructure",
                "On-site service throughout San Francisco",
                "Clean installations and structured configuration",
                "Clear scope and defined next steps",
                "Infrastructure sized for real operational demand",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Connectivity should support operations — not create new problems.
            </p>
          </div>
        </div>
      </section>

      {/* 5) Serving San Francisco */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Serving San Francisco
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Dense wireless interference, multi-tenant buildings, older
              construction, outdoor seating, and peak-hour device loads require
              intentional network design.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              We build and optimize networks for real urban environments.
            </p>
          </div>
        </div>
      </section>

      {/* 6) Final CTA */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
                Ready for a more stable network environment?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Start with a Wi-Fi &amp; Network Reliability Review.
              </p>

              <div className="mt-8">
                <Link
                  href="/request-help?source=home_final&loc=cta"
                  className="btn-tap btn-mobile-full rounded-xl bg-[var(--pip-orange)] text-white hover:opacity-90 hover:no-underline"
                >
                  Request a Review
                </Link>
              </div>

              <p className="mt-6 text-sm font-medium text-[var(--pip-navy)]">
                Response within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
