import Link from "next/link";
import Section from "@/components/layout/Section";
import Surface from "@/components/layout/Surface";

const assessmentPoints = [
  "Wi-Fi coverage and signal behavior",
  "Interference from neighboring networks",
  "Equipment capabilities and limitations",
  "Network segmentation and device usage",
  "Infrastructure design issues affecting performance",
];

const troubleshootingPoints = [
  "Correcting configuration issues",
  "Improving wireless channel planning",
  "Adjusting equipment placement or coverage",
  "Implementing better network segmentation",
  "Resolving infrastructure design problems affecting device communication",
];

const upgradePoints = [
  "Improved reliability under high device load",
  "Stronger control over segmentation and traffic behavior",
  "Better visibility into network performance",
  "Remote monitoring and troubleshooting capabilities",
  "Support for advanced features such as guest network integrations",
  "More predictable operation in demanding environments",
];

const newLocationPoints = [
  "POS systems and handheld ordering devices",
  "Guest Wi-Fi access",
  "Staff devices and operational systems",
  "Cameras and security infrastructure",
  "Streaming audio and other connected services",
];

export default function ServicesPage() {
  return (
    <main className="w-full">
      <Section tone="warm" padded="lg" borderTop={false}>
        <div className="max-w-3xl">
          <h1 className="font-heading tracking-heading text-4xl font-bold text-[var(--pip-ink)] sm:text-5xl">
            A Structured Approach to Reliable Networks
          </h1>

          <div className="mt-6 space-y-4 text-[18px] leading-[1.75] text-slate-700">
            <p>
              Reliable connectivity rarely happens by accident. Networks evolve
              over time as devices are added, equipment is replaced, and
              operational needs change. Eventually, the network that once worked
              well may begin to struggle under the demands placed on it.
            </p>

            <p>
              PluggedIn Pros focuses exclusively on{" "}
              <strong className="font-semibold text-[var(--pip-ink)]">
                Wi-Fi and network infrastructure for small businesses
              </strong>{" "}
              — helping restaurants, retail shops, and offices maintain
              reliable connectivity for POS systems, staff devices, guest
              access, cameras, and other connected systems.
            </p>

            <p>
              Most engagements begin with understanding how the existing network
              behaves in the real environment. From there, the work typically
              moves toward{" "}
              <strong className="font-semibold text-[var(--pip-ink)]">
                stabilization, expansion, or infrastructure improvements
              </strong>
              , depending on what the network needs to support.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light" padded="lg">
        <div className="max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.08em] text-[var(--pip-orange)]">
              HOW THE WORK TYPICALLY UNFOLDS
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <Surface
              padding="lg"
              radius="lg"
              border
              shadow={false}
              className="bg-white"
            >
              <div className="max-w-4xl">
                <div className="text-sm font-semibold tracking-[0.08em] text-[var(--pip-orange)]">
                  01
                </div>

                <h2 className="mt-2 text-[28px] font-semibold leading-snug text-[var(--pip-ink)]">
                  Wi-Fi &amp; Network Reliability Assessment
                </h2>

                <p className="mt-4 max-w-3xl text-[17px] font-medium leading-[1.75] text-[var(--pip-ink)]">
                  A structured evaluation of the current network environment.
                </p>

                <p className="mt-4 max-w-3xl text-[17px] leading-[1.8] text-slate-700">
                  During an assessment, we examine factors that commonly affect
                  reliability, including:
                </p>

                <div className="mt-5 max-w-[44rem] pl-2 md:pl-6">
                  <ul className="space-y-3 text-[17px] leading-[1.8] text-slate-700">
                    {assessmentPoints.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-ink)] opacity-70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 max-w-3xl text-[17px] leading-[1.8] text-slate-700">
                  The goal is to understand how the network behaves under real
                  operating conditions and identify the factors contributing to
                  instability.
                </p>

                <p className="mt-4 max-w-3xl text-[17px] leading-[1.8] text-slate-700">
                  In many cases, the assessment reveals opportunities to
                  stabilize the existing network without major infrastructure
                  changes. In other environments, it highlights equipment or
                  design limitations that may require broader improvements.
                </p>

                <div className="mt-6">
                  <Link
                    href="/services/reliability-review"
                    className="text-sm font-medium text-[var(--pip-orange)] underline-offset-4 hover:underline"
                  >
                    Learn more about Network Reliability Assessments
                  </Link>
                </div>
              </div>
            </Surface>

            <Surface padding="lg" radius="lg" border shadow={false} className="bg-white">
              <div className="max-w-4xl">
                <div className="text-sm font-semibold tracking-[0.08em] text-[var(--pip-orange)]">
                  02
                </div>

                <h2 className="mt-2 text-[28px] font-semibold leading-snug text-[var(--pip-ink)]">
                  Network Troubleshooting &amp; Stabilization
                </h2>

                <p className="mt-4 max-w-3xl text-[17px] font-medium leading-[1.75] text-[var(--pip-ink)]">
                  When networks become unreliable, the first priority is
                  restoring stable and predictable performance.
                </p>

                <p className="mt-4 max-w-3xl text-[17px] leading-[1.8] text-slate-700">
                  PluggedIn Pros diagnoses the underlying causes of connectivity
                  problems and implements targeted improvements that address the
                  issues affecting the environment.
                </p>

                <p className="mt-4 max-w-3xl text-[17px] leading-[1.8] text-slate-700">
                  This work may involve:
                </p>

                <div className="mt-5 max-w-[44rem] pl-2 md:pl-6">
                  <ul className="space-y-3 text-[17px] leading-[1.8] text-slate-700">
                    {troubleshootingPoints.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-ink)] opacity-70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 max-w-3xl text-[17px] leading-[1.8] text-slate-700">
                  The goal is not simply to “reset” the network, but to
                  identify and correct the factors that cause instability.
                </p>

                <p className="mt-4 max-w-3xl text-[17px] leading-[1.8] text-slate-700">
                  In many environments, thoughtful stabilization work can
                  significantly improve reliability without requiring major
                  infrastructure changes.
                </p>

                <div className="mt-6">
                  <Link
                    href="/services/network-troubleshooting"
                    className="text-sm font-medium text-[var(--pip-orange)] underline-offset-4 hover:underline"
                  >
                    Learn more about Network Troubleshooting &amp;
                    Stabilization
                  </Link>
                </div>
              </div>
            </Surface>

            <Surface padding="lg" radius="lg" border shadow={false} className="bg-white">
              <div className="max-w-4xl">
                <div className="text-sm font-semibold tracking-[0.08em] text-[var(--pip-orange)]">
                  03
                </div>

                <h2 className="mt-2 text-[28px] font-semibold leading-snug text-[var(--pip-ink)]">
                  Network Design, Installation &amp; Upgrades
                </h2>

                <p className="mt-4 max-w-3xl text-[17px] font-medium leading-[1.75] text-[var(--pip-ink)]">
                  In some environments, improving reliability requires
                  expanding, upgrading, or redesigning the network
                  infrastructure itself.
                </p>

                <p className="mt-4 max-w-3xl text-[17px] leading-[1.8] text-slate-700">
                  Consumer-oriented and ISP-provided equipment often works well
                  for basic connectivity, but may struggle when supporting busy
                  business environments where many devices and systems operate
                  simultaneously.
                </p>

                <p className="mt-4 max-w-3xl text-[17px] leading-[1.8] text-slate-700">
                  PluggedIn Pros designs and implements{" "}
                  <strong className="font-semibold text-[var(--pip-ink)]">
                    business-grade network infrastructure
                  </strong>{" "}
                  that supports the demands of real operational environments.
                </p>

                <div className="mt-8 max-w-[46rem] space-y-10 pl-2 md:pl-6"> 
                  <div className="border-l border-[var(--pip-border)] pl-4 md:pl-6 bg-[var(--pip-bg-light)]/50 rounded-lg py-4">
                    <p className="text-xs tracking-widest mb-1 text-[var(--pip-orange)] opacity-100">
                      UPGRADES
                    </p>

                    <h3 className="text-[22px] font-semibold leading-snug text-[var(--pip-ink)]">
                      Network Infrastructure Upgrades
                    </h3>

                    <p className="mt-3 text-[17px] leading-[1.8] text-slate-700">
                      Some environments reach the limits of what existing
                      equipment can support.
                    </p>

                    <p className="mt-4 text-[17px] leading-[1.8] text-slate-700">
                      Upgrading to business-grade network infrastructure can
                      provide:
                    </p>

                    <div className="mt-5 max-w-[42rem] pl-2 md:pl-4">
                      <ul className="space-y-3 text-[17px] leading-[1.8] text-slate-700">
                        {upgradePoints.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-ink)] opacity-70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-5 text-[17px] leading-[1.8] text-slate-700">
                      The goal is not complexity — it is stability, control,
                      and predictable performance.
                    </p>
                  </div>

                  <div className="border-l border-[var(--pip-border)] pl-4 md:pl-6">
                    <p className="text-xs tracking-widest mb-1 text-[var(--pip-orange)] opacity-100">
                      EXPANSION
                    </p>

                    <h3 className="text-[22px] font-semibold leading-snug text-[var(--pip-ink)]">
                      Network Expansion &amp; Device Integration
                    </h3>

                    <p className="mt-3 text-[17px] leading-[1.8] text-slate-700">
                      As businesses grow, new systems are often introduced into
                      the network environment — including POS systems, cameras,
                      audio streaming devices, and additional wireless coverage.
                    </p>

                    <p className="mt-4 text-[17px] leading-[1.8] text-slate-700">
                      PluggedIn Pros helps ensure these additions are integrated
                      properly without introducing instability elsewhere in the
                      network.
                    </p>
                  </div>

                  <div className="border-l border-[var(--pip-border)] pl-4 md:pl-6">
                    <p className="text-xs tracking-widest mb-1 text-[var(--pip-orange)] opacity-100">
                      NEW INSTALLATIONS
                    </p>

                    <h3 className="text-[22px] font-semibold leading-snug text-[var(--pip-ink)]">
                      New Location Network Design &amp; Installation
                    </h3>

                    <p className="mt-3 text-[17px] leading-[1.8] text-slate-700">
                      For new locations or major renovations, the most reliable
                      networks are those designed intentionally from the
                      beginning.
                    </p>

                    <p className="mt-4 text-[17px] leading-[1.8] text-slate-700">
                      PluggedIn Pros designs and installs network infrastructure
                      that supports:
                    </p>

                    <div className="mt-5 max-w-[42rem] pl-2 md:pl-4">
                      <ul className="space-y-3 text-[17px] leading-[1.8] text-slate-700">
                        {newLocationPoints.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-ink)] opacity-70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-5 text-[17px] leading-[1.8] text-slate-700">
                      The goal is to build a network environment that performs
                      reliably during real business operations — not just under
                      ideal conditions.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/services/network-installation"
                    className="text-sm font-medium text-[var(--pip-orange)] underline-offset-4 hover:underline"
                  >
                    Learn more about Network Design &amp; Installation
                  </Link>
                </div>
              </div>
            </Surface>
          </div>
        </div>
      </Section>

      <Section tone="white" padded="md">
        <div className="max-w-3xl">
          <h2 className="font-heading tracking-heading text-3xl font-bold text-[var(--pip-ink)] md:text-4xl">
            Choosing the Right Next Step
          </h2>

          <div className="mt-6 space-y-4 text-[17px] leading-[1.8] text-slate-700">
            <p>Every network environment is different.</p>

            <p>
              Some businesses need greater visibility into how their network is
              behaving. Others need targeted stabilization work to resolve
              persistent connectivity issues. And in some environments,
              improving reliability requires stronger infrastructure that can
              support the demands of daily operations.
            </p>

            <p>
              Understanding what the network is doing today is the first step
              toward building a network that performs reliably over time.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="navy" padded="xl">
        <div className="max-w-[42rem]">
          <h2 className="font-heading tracking-heading text-3xl font-bold text-white md:text-4xl">
            Start with a Network Reliability Assessment
          </h2>

          <p className="mt-5 text-[17px] leading-[1.8] text-slate-200">
            A Network Reliability Assessment provides a structured evaluation of
            your existing network and practical recommendations for improving
            reliability.
          </p>

          <div className="mt-8">
            <Link
              href="/contact?intent=schedule"
              className="btn-tap btn-mobile-full inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-md bg-[var(--pip-orange)] px-6 py-3 text-sm font-medium text-white no-underline transition hover:opacity-90"
            >
              Schedule a Network Assessment
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
