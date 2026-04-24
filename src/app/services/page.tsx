import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { StructuredApproach } from "@/components/services/StructuredApproach";
import { OurServices } from "@/components/services/OurServices";
import { ChoosingNextStep } from "@/components/services/ChoosingNextStep";
import { ServicesHero } from "@/components/services/ServicesHero";

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

      <ServicesHero />
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
