import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/layout/Section";
import { StructuredApproach } from "@/components/services/StructuredApproach";
import { OurServices } from "@/components/services/OurServices";
import { ChoosingNextStep } from "@/components/services/ChoosingNextStep";
import { ServicesHero } from "@/components/services/ServicesHero";
import { RealWorldEnvironments } from "@/components/services/RealWorldEnvironments";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";

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
      <RealWorldEnvironments />
      <ServicesFinalCta /> 
    </main>
  );
}
