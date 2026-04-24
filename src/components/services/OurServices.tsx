import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const services = [
  {
    number: "01",
    micro: "Start with clarity",
    title: "Wi-Fi & Network Reliability Assessment",
    href: "/services/network-reliability-review",
    image: "/images/services/wifi-network-assessment-small-business-cafe-tablet.webp",
    imageAlt:
      "Technician analyzing Wi-Fi network performance on a tablet inside a small business café environment",
    description:
      "A structured evaluation of your network environment, including coverage, interference, segmentation, and infrastructure health.",
    listTitle: "Best for:",
    bullets: [
      "Unclear network problems",
      "Inconsistent Wi-Fi performance",
      "Planning before upgrades",
    ],
    closing:
      "A review helps determine whether your current system can be improved or if broader changes are needed.",
    cta: "Learn more about the Assessment",
  },
  {
    number: "02",
    micro: "Restore stability",
    title: "Network Troubleshooting & Stabilization",
    href: "/services/network-troubleshooting",
    image: "/images/home/how-we-help/network-rack-ethernet-cable-troubleshooting.webp",
    imageAlt: "Technician troubleshooting network cabling and equipment in a small business network rack",
    description:
      "We diagnose and correct the underlying causes of unreliable networks through configuration changes, tuning, and targeted improvements.",
    listTitle: "Best for:",
    bullets: [
      "Dropped connections",
      "Peak-hour instability",
      "Device or guest network conflicts",
    ],
    closing:
      "In many cases, stabilization restores predictable performance without requiring major upgrades.",
    cta: "Learn more about Troubleshooting",
  },
  {
    number: "03",
    micro: "Build for reliability",
    title: "Network Design, Installation & Upgrades",
    href: "/services/network-installation",
    image: "/images/home/how-we-help/wifi-access-point-installation-ceiling-technician.webp",
    imageAlt: "Technician installing a ceiling-mounted wireless access point in a small business",
    description:
      "We design and implement business-grade network infrastructure for environments that require improved coverage, capacity, and long-term reliability.",
    listTitle: "Best for:",
    bullets: [
      "New or renovated spaces",
      "Coverage expansion",
      "Outgrown equipment or layout",
    ],
    closing:
      "The goal is not to add complexity — it is to build a network that performs reliably under real-world conditions.",
    cta: "Learn more about Installation",
  },
] as const;

function CompactBulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[var(--pip-orange)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function OurServices() {
  return (
    <Section tone="mid" padded="lg">
      <SectionHeading
        align="center"
        title="Our Services"
        body="Our work typically falls into three categories: clarifying what’s happening, restoring stability, or improving the infrastructure itself."
      />

      <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <Surface
            key={service.title}
            className="group h-full overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:border-[var(--pip-orange)]/45 hover:shadow-sm"
            padding="sm"
            radius="lg"
            border
            shadow={false}
          >
            <Link
              href={service.href}
              className="flex h-full flex-col text-inherit no-underline"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.025]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                <div className="text-[15px] font-semibold tracking-[0.14em] text-[var(--pip-orange)]">
                  {service.number}
                </div>

                <h3 className="mt-3 font-heading text-[1.45rem] font-semibold leading-tight tracking-heading text-[var(--pip-ink)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.11em] text-[var(--pip-ink)]/65">
                  {service.micro}
                </p>

                <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
                  {service.description}
                </p>

                <div className="mt-5 border-t border-[var(--pip-border)] pt-5">
                  <p className="text-sm font-semibold text-[var(--pip-ink)]">
                    {service.listTitle}
                  </p>
                  <CompactBulletList items={service.bullets} />
                </div>

                <p className="mt-5 text-[15px] leading-[1.7] text-slate-700">
                  {service.closing}
                </p>

                <div className="mt-auto pt-7">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pip-ink)] underline-offset-4 group-hover:text-[var(--pip-orange)] group-hover:underline">
                    {service.cta}
                    <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.9} />
                  </span>
                </div>
              </div>
            </Link>
          </Surface>
        ))}
      </div>
    </Section>
  );
}
