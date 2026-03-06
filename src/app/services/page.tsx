import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="w-full">
      {/* H1 / Intro */}
      <section className="w-full">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-5xl">
              Wi-Fi &amp; Network Infrastructure Services
              <br className="hidden sm:block" />
              for San Francisco Small Businesses
            </h1>

            <p className="mt-5 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              Reliable connectivity requires more than fast internet.
            </p>

            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              PluggedIn Pros focuses specifically on Wi-Fi performance and network
              infrastructure — helping small businesses design, stabilize, and improve
              environments that support POS systems, staff devices, and guest access.
            </p>

            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              Most engagements begin with a{" "}
              <span className="font-semibold text-[var(--pip-navy)]">
                Wi-Fi &amp; Network Reliability Review
              </span>
              , then move into targeted implementation where needed.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Our Core Services
            </h2>
          </div>

          <div className="mt-10 grid gap-6">
            {/* 1 */}
            <div
              id="reliability-review"
              className="rounded-3xl border border-slate-200 bg-[var(--pip-section-muted)] p-8 shadow-sm sm:p-10"
            >
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-2xl">
                   Wi-Fi &amp; Network Reliability Review
                </h3>

                <p className="mt-4 text-base font-semibold leading-relaxed text-[var(--pip-navy)]">
                  Start with clarity.
                </p>

                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  A structured evaluation of your wireless coverage and underlying network
                  configuration to identify instability, interference, segmentation risks,
                  and performance bottlenecks.
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  This is the recommended first step for most businesses.
                </p>

                <div className="mt-6">
                  <Link
                    href="/services/reliability-review"
                    className="text-sm font-medium text-[var(--pip-navy)] hover:opacity-80 hover:no-underline"
                  >
                    → Learn more about the Wi-Fi &amp; Network Reliability Review
                  </Link>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-2xl">
                   Network Installation &amp; Upgrades
                </h3>

                <p className="mt-4 text-base font-semibold leading-relaxed text-[var(--pip-navy)]">
                  Build the right foundation.
                </p>

                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  Intentional deployment of routers, switches, and access points designed for:
                </p>

                <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-700">
                  {[
                    "Stability under peak load",
                    "Proper segmentation between POS, staff, and guest traffic",
                    "Clean organization and documentation",
                    "Capacity for growth",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-base leading-relaxed text-slate-700">
                  Whether opening a new location or replacing outdated equipment, we design
                  infrastructure that matches real-world operational demands.
                </p>
                <div className="mt-6">
                  <Link
                    href="/services/network-installation"
                    className="text-sm font-medium text-[var(--pip-navy)] hover:opacity-80 hover:no-underline"
                  >
                    → Learn more about Network Installation &amp; Upgrades
                  </Link>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-2xl">
                   Network Troubleshooting &amp; Stabilization
                </h3>

                <p className="mt-4 text-base font-semibold leading-relaxed text-[var(--pip-navy)]">
                  Restore predictability.
                </p>

                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  When Wi-Fi feels unreliable or POS systems intermittently disconnect, we
                  diagnose root causes and stabilize the environment.
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  Common scenarios include:
                </p>

                <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-700">
                  {[
                    "POS dropouts during service",
                    "Slow Wi-Fi during busy hours",
                    "Guest traffic impacting internal systems",
                    "Configuration conflicts after ISP changes",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-base leading-relaxed text-slate-700">
                  The goal isn’t temporary fixes — it’s long-term stability.
                </p>

                <div className="mt-6">
                  <Link
                    href="/services/network-troubleshooting"
                    className="text-sm font-medium text-[var(--pip-navy)] hover:opacity-80 hover:no-underline"
                  >
                    → Learn more about Network Troubleshooting &amp; Stabilization
                  </Link>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-2xl">
                   Guest Wi-Fi &amp; POS Network Configuration
                </h3>

                <p className="mt-4 text-base font-semibold leading-relaxed text-[var(--pip-navy)]">
                  Protect business-critical systems.
                </p>

                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  Guest networks should never interfere with operations.
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  We configure:
                </p>

                <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-700">
                  {[
                    "Proper segmentation and isolation",
                    "Traffic separation between POS and guest networks",
                    "Channel optimization and capacity planning",
                    "Portal setup where supported",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-base leading-relaxed text-slate-700">
                  Designed to support a smooth guest experience without compromising reliability.
                </p>

                <div className="mt-6">
                  <Link
                    href="/services/guest-wifi-pos"
                    className="text-sm font-medium text-[var(--pip-navy)] hover:opacity-80 hover:no-underline"
                  >
                    → Learn more about Guest Wi-Fi &amp; POS Network Configuration
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How These Services Work Together */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              How These Services Work Together
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Reliable Wi-Fi depends on a properly structured wired foundation.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Most businesses begin with a Review, then move into targeted upgrades,
              configuration changes, or troubleshooting as needed.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              You’ll receive clear recommendations and practical next steps — not unnecessary hardware.
            </p>
          </div>
        </div>
      </section>

      {/* Serving San Francisco */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Serving San Francisco
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              We provide on-site Wi-Fi and network infrastructure services for restaurants,
              retail shops, offices, and service-based businesses throughout San Francisco.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Urban environments present unique challenges — from dense wireless interference to
              multi-floor layouts — and infrastructure must be designed accordingly.
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
                Ready to improve your network reliability?
              </h2>

              <div className="mt-8">
                <Link
                  href="/request-help?source=services&loc=cta"
                  className="btn-tap btn-mobile-full rounded-xl bg-[var(--pip-orange)] text-white hover:opacity-90 hover:no-underline"
                >
                  Request a Wi-Fi &amp; Network Reliability Review →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
