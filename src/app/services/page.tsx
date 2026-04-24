import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Network, Wifi, Wrench } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";
import Image from "next/image";
import { StructuredApproach } from "@/components/services/StructuredApproach";

export const metadata: Metadata = {
  title: "Wi-Fi & Network Infrastructure Services for San Francisco Small Businesses",
  description:
    "Structured Wi-Fi and network infrastructure services for San Francisco small businesses, including reliability reviews, troubleshooting, and network installation or upgrades.",
  openGraph: {
    title: "Wi-Fi & Network Infrastructure Services",
    description:
      "Reliable Wi-Fi reviews, troubleshooting, and network installation or upgrades for San Francisco small businesses.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    micro: "Start with clarity",
    title: "Wi-Fi & Network Reliability Review",
    href: "/services/network-reliability-review",
    icon: Wifi,
    description:
      "A structured evaluation of your network environment, including coverage, interference, segmentation, and infrastructure health.",
    listTitle: "Often the best starting point when:",
    bullets: [
      "you’re experiencing instability or inconsistent performance",
      "you’re unsure what’s causing network issues",
      "you want a clearer understanding before making changes",
    ],
    closing:
      "A review helps determine whether your current system can be improved or if broader changes are needed – before time or money is spent in the wrong place.",
    cta: "Learn more about the Review",
  },
  {
    micro: "Restore stability",
    title: "Network Troubleshooting & Stabilization",
    href: "/services/network-troubleshooting",
    icon: Wrench,
    description:
      "We diagnose and correct the underlying causes of unreliable networks through configuration changes, tuning, and targeted improvements.",
    listTitle: "A good fit when:",
    bullets: [
      "Wi-Fi performance is inconsistent or unreliable",
      "systems disconnect during peak hours",
      "business-critical devices are affected by guest traffic or poor segmentation",
      "you want to improve an existing setup before replacing equipment",
    ],
    closing:
      "In many cases, stabilization resolves issues without requiring major upgrades — restoring stable, predictable performance during normal business operations.",
    cta: "Learn more about Troubleshooting & Stabilization",
  },
  {
    micro: "Build for reliability",
    title: "Network Installation, Expansion & Upgrades",
    href: "/services/network-installation",
    icon: Network,
    description:
      "We design and implement business-grade network infrastructure for environments that require improved coverage, capacity, and long-term reliability.",
    listTitle: "This may include:",
    bullets: [
      "upgrading existing equipment",
      "expanding coverage with additional access points",
      "improving network layout and organization",
      "designing and installing networks for new or renovated spaces",
    ],
    secondListTitle: "Typically needed when:",
    secondBullets: [
      "your current equipment cannot support operational demand",
      "you’re expanding your space or adding new systems",
      "you’re opening a new location",
      "the existing environment has outgrown incremental, ad hoc fixes",
    ],
    closing:
      "The goal is not to add complexity — it is to build a network that performs reliably under real-world conditions.",
    cta: "Learn more about Installation, Expansion & Upgrades",
  },
] as const;

const audiences = [
  {
    title: "Restaurants & Cafés",
    body: "Networks that support POS systems, handheld devices, guest Wi-Fi, cameras, and peak-hour traffic without disrupting service.",
  },
  {
    title: "Retail Stores",
    body: "Stable connectivity for checkout systems, inventory tools, staff devices, and customer-facing network access.",
  },
  {
    title: "Professional Offices",
    body: "Structured networks that support staff systems, communication tools, and consistent performance throughout the workday.",
  },
  {
    title: "Other Small Businesses",
    body: "Reliable wireless and wired infrastructure for operational environments that depend on connected devices working quietly in the background.",
  },
] as const;

function ServiceBulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-3 text-[16px] leading-[1.75] text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="shrink-0 text-[var(--pip-orange)] leading-[1.75]">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <main className="w-full">

      <Section tone="warm" padded="lg">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT: TEXT */}
          <div className="max-w-[42rem]">
            <h1 className="font-heading tracking-heading text-[2rem] font-semibold leading-[1.05] text-[var(--pip-ink)] sm:text-[2.25rem] lg:text-[2.55rem]">
              Our Wi-Fi & Network Infrastructure Services
            </h1>

            <div className="mt-6 max-w-xl space-y-4 text-[18px] leading-[1.75] text-slate-700">
              <p>
                We help San Francisco small businesses design, stabilize, and improve the
                network infrastructure their operations depend on every day.
              </p>
              <p>
                Most projects begin with a structured evaluation to understand how your
                current network is performing — and what’s needed to improve reliability,
                coverage, and capacity.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact?intent=assessment"
                className="btn-tap btn-mobile-full inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-md bg-[var(--pip-orange)] px-6 py-3 text-sm font-medium text-white no-underline transition hover:opacity-90"
              >
                Request a Network Reliability Review
              </Link>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/services/wifi-network-assessment-small-business-cafe-tablet.webp"
                alt="Technician analyzing Wi-Fi network performance on a tablet inside a small business café environment"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      <StructuredApproach />


      <Section tone="mid" padded="lg">
        <SectionHeading
          align="center"
          title="Our Services"
          body="Our work typically falls into three categories: clarifying what’s happening, restoring stability, or improving the infrastructure itself."
        />

        <div className="mt-8 grid gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Surface
                key={service.title}
                className="h-full"
                padding="md"
                radius="md"
                border
                shadow={false}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start gap-3">
                    <Icon
                      className="mt-1 h-5 w-5 shrink-0 text-[var(--pip-ink)]/70"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <h3 className="text-[22px] font-semibold leading-snug text-[var(--pip-ink)]">
                      {service.title}
                    </h3>
                  </div>

                  <div className="mt-4 text-sm font-semibold tracking-[0.08em] text-[var(--pip-orange)]">
                    {service.micro}
                  </div>

                  <p className="mt-2 text-[16px] leading-[1.75] text-slate-700">
                    {service.description}
                  </p>

                  {"secondListTitle" in service && service.secondListTitle ? (
                    <div className="mt-5 grid gap-6 lg:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium text-[var(--pip-ink)]">
                          {service.listTitle}
                        </p>
                        <ServiceBulletList items={service.bullets} />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-[var(--pip-ink)]">
                          {service.secondListTitle}
                        </p>
                        <ServiceBulletList items={service.secondBullets} />
                      </div>
                    </div>
                  ) : (
                    <div className="mt-5">
                      <p className="text-sm font-medium text-[var(--pip-ink)]">
                        {service.listTitle}
                      </p>
                      <ServiceBulletList items={service.bullets} />
                    </div>
                  )}

                  <p className="mt-5 text-[16px] leading-[1.75] text-slate-700">
                    {service.closing}
                  </p>

                  <div className="mt-auto pt-6">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--pip-ink)]/82 underline-offset-4 hover:text-[var(--pip-ink)] hover:underline"
                    >
                      <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.9} />
                      <span>{service.cta}</span>
                    </Link>
                  </div>
                </div>
              </Surface>
            );
          })}
        </div>
      </Section>

      <Section tone="white" padded="lg">
        <SectionHeading align="center" title="Choosing the Right Next Step" />

        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[17px] leading-[1.8] text-slate-700">
          <p>Every network environment is different.</p>

          <p>
            Some businesses need greater visibility into how their network is behaving.
            Others need targeted stabilization work to resolve persistent connectivity
            issues. And in some environments, improving reliability requires stronger
            infrastructure that can support the demands of daily operations.
          </p>

          <ul className="space-y-2 pt-2">
            <li>• If you’re unsure what’s causing issues, start with a Review.</li>
            <li>• If your network is unstable or inconsistent, focus on Stabilization.</li>
            <li>
              • If your system has outgrown its current setup, Infrastructure improvements
              may be needed.
            </li>
          </ul>

          <p className="pt-2">
            Understanding what the network is doing today is the first step toward
            building a network that performs reliably over time.
          </p>
        </div>
      </Section>

      <Section tone="navy" padded="xl">
        <div className="max-w-[42rem]">
          <h2 className="font-heading tracking-heading text-3xl font-bold text-white md:text-4xl">
            Not Sure Where to Start?
          </h2>

          <p className="mt-5 text-[17px] leading-[1.8] text-slate-200">
            Most clients begin with a Network Reliability Review to understand what’s
            working, what isn’t, and what to do next.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact?intent=assessment"
              className="text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              → Request a Network Reliability Review
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-200 underline-offset-4 hover:text-white hover:underline"
            >
              → Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
