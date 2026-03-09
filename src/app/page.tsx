import Link from "next/link";

const problemSigns = [
  "POS terminals that occasionally lag or disconnect",
  "Wi-Fi slowing during lunch or dinner rush",
  "Dead zones in patios, kitchens, or back offices",
  "Guest traffic affecting internal systems",
  "Equipment added over time without a clear structure",
];

const serviceLadder = [
  {
    title: "Wi-Fi & Network Reliability Assessment",
    description:
      "A structured evaluation of your network to identify coverage gaps, interference, equipment limitations, and design issues.",
    href: "/services/reliability-review",
  },
  {
    title: "Network Troubleshooting & Stabilization",
    description:
      "Diagnosis and repair of unstable networks so critical systems operate reliably.",
    href: "/services/network-troubleshooting",
  },
  {
    title: "Network Design, Installation & Upgrades",
    description:
      "Implementation of network infrastructure designed for POS systems, guest Wi-Fi, and multiple connected devices.",
    href: "/services/network-installation",
  },
];

const differentiators = [
  {
    title: "Focused expertise",
    description:
      "Dedicated exclusively to Wi-Fi and network infrastructure.",
  },
  {
    title: "Restaurant & small-business experience",
    description:
      "Hands-on experience in busy operational environments.",
  },
  {
    title: "Deep infrastructure background",
    description:
      "Built on decades of experience supporting networked systems.",
  },
  {
    title: "Structured problem solving",
    description:
      "Root causes are identified and addressed — not just temporary fixes.",
  },
];

const businessTypes = [
  "Restaurants and cafés",
  "Retail shops and storefront businesses",
  "Professional offices and studios",
  "Other small businesses with device-heavy networks",
];

export default function HomePage() {
  return (
    <main className="w-full">
      {/* 1) Hero */}
      <section className="w-full">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-5xl md:text-6xl">
              Reliable Wi-Fi &amp; Network Infrastructure
              <br className="hidden sm:block" />
              for San Francisco Restaurants &amp; Small Businesses
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              Built for busy environments where POS systems, staff devices,
              guest Wi-Fi, security cameras, and streaming systems all share
              the same infrastructure.
            </p>

            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              PluggedIn Pros designs and stabilizes network environments so
              these systems perform predictably — even during peak service
              hours.
            </p>

            <div className="mt-8">
              <Link
                href="/request-help?source=home_hero&loc=cta"
                className="btn-tap btn-mobile-full inline-flex rounded-lg bg-[var(--pip-orange)] px-6 py-3 text-white transition hover:opacity-90 hover:no-underline"
              >
                Request a Network Reliability Assessment
              </Link>
            </div>

            <p className="mt-6 text-sm font-medium text-[var(--pip-navy)]">
              Focused exclusively on Wi-Fi and network infrastructure for small
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* 2) Problems */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Signs Your Network May Be Struggling
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Network problems rarely start as full outages.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              They usually appear as recurring frustrations:
            </p>

            <ul className="mt-5 space-y-3 text-base leading-relaxed text-slate-700">
              {problemSigns.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Many businesses try adding mesh systems or consumer Wi-Fi
              equipment to solve these issues — but the underlying network
              problems remain.
            </p>
          </div>
        </div>
      </section>

      {/* 3) How We Help */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="rounded-2xl border border-slate-200 bg-[var(--pip-section-muted)] p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
                How We Help
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Reliable networks start with understanding the environment and
                addressing the root causes of instability.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                PluggedIn Pros helps businesses evaluate, stabilize, and improve
                their network infrastructure.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {serviceLadder.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md hover:no-underline"
                >
                  <h3 className="text-lg font-semibold text-[var(--pip-navy)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-block text-sm font-medium text-[var(--pip-navy)]">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4) Why Choose Us */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Why Small Businesses Choose PluggedIn Pros
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Reliable networks require thoughtful design, structured
              troubleshooting, and practical experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-[var(--pip-navy)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) Who We Serve */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Who We Serve
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              PluggedIn Pros works with businesses where reliable connectivity is
              essential to daily operations.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Common environments include:
            </p>

            <ul className="mt-5 space-y-3 text-base leading-relaxed text-slate-700">
              {businessTypes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              These networks often support POS systems, guest Wi-Fi, staff
              devices, cameras, and other connected equipment that must perform
              reliably throughout the day.
            </p>
          </div>
        </div>
      </section>

      {/* 6) Restaurant Environments */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1.5fr_auto] md:items-center">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
                  Designed for Restaurant Environments
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  Restaurant networks often support POS systems, guest Wi-Fi,
                  staff devices, music systems, and security cameras
                  simultaneously.
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  These systems must operate reliably even during peak service
                  hours. PluggedIn Pros designs and stabilizes networks built for
                  these conditions.
                </p>
              </div>

              <div>
                <Link
                  href="/restaurants"
                  className="btn-tap inline-flex rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-[var(--pip-navy)] transition hover:border-slate-400 hover:bg-slate-50 hover:no-underline"
                >
                  Explore Restaurant Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7) Serving San Francisco */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Serving San Francisco Businesses
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              San Francisco environments present unique networking challenges —
              dense wireless environments, mixed-use buildings, and evolving
              equipment layouts.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              PluggedIn Pros provides on-site network assessments,
              troubleshooting, and infrastructure improvements across San
              Francisco neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* 8) Final CTA */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="rounded-2xl border border-slate-200 bg-[var(--pip-navy)] p-8 shadow-sm sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Start with a Network Reliability Assessment
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-200">
                If your Wi-Fi or network infrastructure has become
                unpredictable, the first step is understanding what’s happening
                in the environment.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-200">
                PluggedIn Pros performs structured on-site assessments to
                identify coverage gaps, interference, equipment limitations, and
                network design issues.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/request-help?source=home_final&loc=cta"
                  className="btn-tap btn-mobile-full inline-flex rounded-lg bg-[var(--pip-orange)] px-6 py-3 text-white transition hover:opacity-90 hover:no-underline"
                >
                  Request a Network Reliability Assessment
                </Link>

                <Link
                  href="/services/reliability-review"
                  className="text-sm font-medium text-white underline-offset-4 hover:underline"
                >
                  Find out what happens during a network assessment →
                </Link>
              </div>

              <p className="mt-6 text-sm font-medium text-slate-200">
                Response within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
