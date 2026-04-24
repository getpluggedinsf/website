import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const services = [
  {
    number: "01",
    tagline: "Start with clarity",
    title: "Wi-Fi & Network Reliability Assessment",
    href: "/services/network-reliability-review",
    image: "/images/services/wifi-network-assessment-small-business-cafe-tablet.webp",
    imageAlt:
      "Technician analyzing Wi-Fi network performance on a tablet inside a small business café environment",
    description:
      "A structured evaluation of your network environment, including coverage, interference, segmentation, and infrastructure health.",
    bestFor: [
      "Unclear network problems",
      "Inconsistent Wi-Fi performance",
      "Planning before upgrades",
    ],
    cta: "Request a review",
  },
  {
    number: "02",
    tagline: "Restore stability",
    title: "Network Troubleshooting & Stabilization",
    href: "/services/network-troubleshooting",
    image: "/images/home/how-we-help/network-rack-ethernet-cable-troubleshooting.webp",
    imageAlt:
      "Technician troubleshooting network cabling and equipment in a small business network rack",
    description:
      "We diagnose and correct the underlying causes of unreliable networks through configuration changes, tuning, and targeted improvements.",
    bestFor: [
      "Dropped connections",
      "Peak-hour instability",
      "Device or guest network conflicts",
    ],
    cta: "Get help",
  },
  {
    number: "03",
    tagline: "Build for reliability",
    title: "Network Design, Installation & Upgrades",
    href: "/services/network-installation",
    image: "/images/home/how-we-help/wifi-access-point-installation-ceiling-technician.webp",
    imageAlt:
      "Technician installing a ceiling-mounted wireless access point in a small business",
    description:
      "We design and implement business-grade network infrastructure for environments that require improved coverage, capacity, and long-term reliability.",
    bestFor: [
      "New or renovated spaces",
      "Coverage expansion",
      "Outgrown equipment or layout",
    ],
    cta: "Start here",
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
        body="You do not need to know exactly what service you need before reaching out. Most work starts with understanding what is happening, then choosing the simplest useful next step."
      />

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
                    <div className="text-[15px] font-semibold tracking-[0.14em] text-[var(--pip-orange)]">
                      {service.number}
                    </div>

                    <h3 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-[2rem]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.11em] text-[var(--pip-ink)]/65">
                      {service.tagline}
                    </p>

                    <p className="mt-5 text-[17px] leading-[1.75] text-slate-700">
                      {service.description}
                    </p>

                    <BestForList items={service.bestFor} />

                    <div className="mt-8">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pip-ink)] underline-offset-4 transition hover:text-[var(--pip-orange)] hover:underline"
                      >
                        {service.cta}
                        <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.9} />
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
