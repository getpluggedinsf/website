import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Image from "next/image";
import { StructuredApproach } from "@/components/services/StructuredApproach";
import { OurServices } from "@/components/services/OurServices";
import { ChoosingNextStep } from "@/components/services/ChoosingNextStep";

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
      <OurServices />
      <ChoosingNextStep />
  

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
