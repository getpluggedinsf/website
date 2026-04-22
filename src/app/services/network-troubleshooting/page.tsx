import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Network Troubleshooting & Stabilization",
  description:
    "Diagnosis and stabilization for unreliable networks, including configuration fixes, channel planning, segmentation, and infrastructure corrections.",
  alternates: {
    canonical: "/services/network-troubleshooting",
  },
};

export default function NetworkTroubleshootingPage() {
  return (
    <ServiceDetailPage
      backHref="/services"
      backLabel="Back to Services"
      title="Network Troubleshooting & Stabilization"
      opening={[
        "When networks become unreliable, the priority is restoring stable, predictable performance.",
        "We diagnose and correct the underlying causes of instability — not just the symptoms.",
      ]}
      involves={{
        title: "What This Involves",
        intro: "Stabilization work may include:",
        bullets: [
          "correcting configuration issues",
          "improving wireless channel planning",
          "adjusting equipment placement",
          "refining network segmentation",
          "resolving infrastructure-related issues",
        ],
      }}
      whenItMakesSense={{
        title: "When This Makes Sense",
        bullets: [
          "Wi-Fi drops or slows during peak hours",
          "POS or operational systems disconnect",
          "guest traffic interferes with business systems",
          "performance is inconsistent or unpredictable",
        ],
      }}
      whatYouGet={{
        title: "What You Get",
        bullets: [
          "improved reliability under real-world conditions",
          "better separation between systems",
          "fewer disruptions during peak operations",
          "a network that behaves predictably",
        ],
        closing:
          "In many cases, stabilization resolves issues without requiring major upgrades.",
      }}
      whatHappensNext={{
        title: "What Happens Next",
        intro: "If stabilization is not enough:",
        bullets: [
          "equipment limitations may require upgrades",
          "coverage gaps may require expansion",
          "infrastructure changes may be recommended",
        ],
      }}
      related={[
        {
          href: "/services/network-reliability-review",
          label: "Wi-Fi & Network Reliability Review",
        },
        {
          href: "/services/network-installation",
          label: "Network Installation, Expansion & Upgrades",
        },
      ]}
      finalCtaTitle="Restore stability and predictable performance."
      finalCtaLabel="Request Help with Your Network"
      finalCtaHref="/contact?intent=troubleshooting"
    />
  );
}
