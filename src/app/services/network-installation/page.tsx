import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Network Installation, Expansion & Upgrades",
  description:
    "Business-grade network installation, expansion, and upgrades for coverage, capacity, and long-term reliability.",
  alternates: {
    canonical: "/services/network-installation",
  },
};

export default function NetworkInstallationPage() {
  return (
    <ServiceDetailPage
      backHref="/services"
      backLabel="Back to Services"
      title="Network Installation, Expansion & Upgrades"
      opening={[
        "When existing infrastructure can no longer support operational demand, improvements need to go beyond configuration.",
        "We design and implement business-grade network infrastructure built for reliability, coverage, and long-term performance.",
      ]}
      involves={{
        title: "What This Includes",
        bullets: [
          "upgrading routers, gateways, and access points",
          "expanding coverage with additional access points",
          "improving network layout and organization",
          "integrating new systems into the network",
          "designing and installing networks for new or renovated spaces",
        ],
      }}
      whenItMakesSense={{
        title: "When This Makes Sense",
        bullets: [
          "your current equipment is at capacity",
          "you’re expanding your space or adding systems",
          "coverage gaps affect operations",
          "existing setups rely on consumer-grade hardware",
          "incremental fixes are no longer effective",
        ],
      }}
      whatYouGet={{
        title: "What You Get",
        bullets: [
          "improved reliability under load",
          "better coverage and performance",
          "structured, manageable infrastructure",
          "systems designed for real-world usage",
        ],
      }}
      whatHappensNext={{
        title: "What Happens Next",
        intro: "After implementation:",
        bullets: [
          "networks can be tuned and optimized",
          "systems can be monitored and maintained",
          "future expansion becomes easier and more predictable",
        ],
      }}
      related={[
        {
          href: "/services/network-reliability-review",
          label: "Wi-Fi & Network Reliability Review",
        },
        {
          href: "/services/network-troubleshooting",
          label: "Network Troubleshooting & Stabilization",
        },
      ]}
      finalCtaTitle="Build a network that supports how your business actually operates."
      finalCtaLabel="Discuss Your Project"
      finalCtaHref="/contact?intent=installation"
    />
  );
}
