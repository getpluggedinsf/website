import Link from "next/link";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const services = [
  {
    step: "01",
    title: "Wi-Fi & Network Reliability Assessment",
    body: (
      <>
        A structured evaluation of coverage, interference, equipment
        limitations, and network design issues.
      </>
    ),
    href: "/services/reliability-review",
  },
  {
    step: "02",
    title: "Network Troubleshooting & Stabilization",
    body: (
      <>
        Diagnosis and repair of unstable networks so critical systems operate
        reliably during normal business operations.
      </>
    ),
    href: "/services/network-troubleshooting",
  },
  {
    step: "03",
    title: "Network Design, Installation & Upgrades",
    body: (
      <>
        Infrastructure improvements for new sites, redesigns, expansions, and
        existing environments that need more reliable performance and capacity.
      </>
    ),
    href: "/services/network-installation",
  },
];

export default function HowWeHelp() {
  return (
    <Section tone="mid" padded="lg">
      <SectionHeading
        align="center"
        title="How We Help"
        body="Our work typically follows a structured path: assess the environment, stabilize what is causing friction, and make improvements based on what the network actually needs."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <Surface
            key={service.title}
            className="h-full"
            padding="lg"
            radius="md"
            border
            shadow={false}
          >
            <div className="flex h-full flex-col">
              <div className="text-center text-sm font-semibold tracking-[0.08em] text-[var(--pip-orange)]">
                {service.step}
              </div>

              <h3 className="mt-2 text-[24px] font-semibold leading-snug text-[var(--pip-ink)]">
                {service.title}
              </h3>

              <div className="mt-4 text-[18px] leading-relaxed text-slate-700">
                {service.body}
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href={service.href}
                  className="text-sm font-medium text-[var(--pip-ink)] underline-offset-4 hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </Surface>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <p className="text-center text-base font-medium leading-relaxed text-[var(--pip-ink)] md:text-lg">
          Start with the environment, resolve the instability, and make
          improvements that fit how the business actually operates.
        </p>
      </div>
    </Section>
  );
}
