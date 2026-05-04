import type { Metadata } from "next";
import { StructuredApproach } from "@/components/services/StructuredApproach";
import { OurServices } from "@/components/services/OurServices";
import { ChoosingNextStep } from "@/components/services/ChoosingNextStep";
import { ServicesHero } from "@/components/services/ServicesHero";
import { RealWorldEnvironments } from "@/components/services/RealWorldEnvironments";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";

export const metadata: Metadata = {
  title: "Wi-Fi & Network Services",
  description:
    "Network reliability assessments, troubleshooting, stabilization, and infrastructure design for small business Wi-Fi and network systems.",
  openGraph: {
    title: "Wi-Fi & Network Services",
    description:
      "Network reliability assessments, troubleshooting, stabilization, and infrastructure design for small business Wi-Fi and network systems.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};


export default function ServicesPage() {
  return (
    <main className="w-full">
      <ServicesHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <StructuredApproach />
      <OurServices />
      <ChoosingNextStep />
      <RealWorldEnvironments />
      <ServicesFinalCta /> 
    </main>
  );
}
