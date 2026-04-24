import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const services = [
  {
    number: "01",
    micro: "START WITH CLARITY",
    title: "Wi-Fi & Network Reliability Assessment",
    href: "/services/network-reliability-review",
    formHref: "/contact?intent=assessment",
    image: "/images/services/wifi-network-assessment-small-business-cafe-tablet.webp",
    imageAlt:
      "Technician analyzing Wi-Fi network performance on a tablet inside a small business café environment",
    description:
      "A structured evaluation of how your network is actually performing — including coverage, interference, segmentation, and infrastructure health.",
    bestFor: [
      "Unclear network problems",
      "Inconsistent Wi-Fi performance",
      "Planning before upgrades",
    ],
    primaryCta: "Request a Network Reliability Review",
    secondaryCta: "Learn more about the Assessment",
  },
  {
    number: "02",
    micro: "RESTORE STABILITY",
    title: "Network Troubleshooting & Stabilization",
    href: "/services/network-troubleshooting",
    formHref: "/contact?intent=troubleshooting",
    image: "/images/home/how-we-help/network-rack-ethernet-cable-troubleshooting.webp",
    imageAlt:
      "Technician troubleshooting network cabling and equipment in a small business network rack",
    description:
      "Identify and fix the issues causing slowdowns, dropouts, and unreliable performance—through targeted tuning, configuration changes, and practical improvements.",
    bestFor: [
      "Dropped connections or slow performance",
      "Peak-hour instability",
      "Device or guest network conflicts",
    ],
    primaryCta: "Get help stabilizing your network",
    secondaryCta: "Learn more about Troubleshooting",
  },
  {
    number: "03",
    micro: "BUILD FOR RELIABILITY",
    title: "Network Design, Installation & Upgrades",
    href: "/services/network-installation",
    formHref: "/contact?intent=installation",
    image: "/images/home/how-we-help/wifi-access-point-installation-ceiling-technician.webp",
    imageAlt:
      "Technician installing a ceiling-mounted wireless access point in a small business",
    description:
      "We design and implement business-grade network infrastructure for environments that require improved coverage, capacity, and long-term reliability—whether that means expanding coverage, upgrading equipment, or designing for a new or changing space.",
    bestFor: [
      "New or renovated spaces",
      "Expanding coverage or capacity",
      "Outgrown equipment or layout",
    ],
    primaryCta: "Plan your next network upgrade",
    secondaryCta: "Learn more about Design & Installation",
  },
] as const;

function BestForList({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-6">
      <p className="text-sm font-semibold text-[var(--pip-ink)]">Best for:</p>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-3 lg:grid-cols-1">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[var(--pip-orange)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OurServices() {
  return (
    <Section tone="mid" padded="lg">
      <SectionHeading
        align="center"
        title="Our Services"
      />

      <p className="mx-auto mt-5 max-w-3xl text-xl leading-[1.6] text-[var(--pip-ink)] md:text-[1.4rem] text-center">
        You do not need to know exactly what service you need before reaching out.
        Most work starts with understanding what is happening, then choosing the
        simplest useful next step.
      </p>

      <div className="mt-12 space-y-8">
        {services.map((service, index) => {
          const reverse = index % 2 === 1;

          return (
            <Surface
              key={service.title}
              padding="sm"
              radius="lg"
              border
              shadow={false}
              className="group overflow-hidden transition duration-200 hover:border-[var(--pip-orange)]/45 hover:shadow-sm"
            >
              <div
                className={[
                  "grid items-stretch lg:grid-cols-2",
                  reverse ? "lg:[&>*:first-child]:order-2" : "",
                ].join(" ")}
              >
                <div className="relative min-h-[260px] overflow-hidden lg:min-h-[420px]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>

                <div className="flex min-h-full flex-col justify-center px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
                  <div className="max-w-xl">
                    <div className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--pip-orange)]">
                      {service.number} {service.micro}
                    </div>

                    <h3 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-[2rem]">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-[17px] leading-[1.75] text-slate-700">
                      {service.description}
                    </p>

                    <BestForList items={service.bestFor} />

                    <div className="mt-8 flex flex-col items-start gap-4">
                      <Link
                        href={service.formHref}
                        className="inline-flex items-center justify-center rounded-md bg-[var(--pip-orange)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-105"
                      >
                        {service.primaryCta}
                      </Link>

                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pip-ink)] underline-offset-4 transition hover:text-[var(--pip-orange)] hover:underline"
                      >
                        {service.secondaryCta}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Surface>
          );
        })}
      </div>
    </Section>
  );
}
