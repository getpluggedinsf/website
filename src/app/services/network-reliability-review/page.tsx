import type { Metadata } from "next";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Wi-Fi & Network Reliability Review",
  description:
    "A structured evaluation of Wi-Fi coverage, interference, infrastructure health, and network behavior for San Francisco small businesses.",
  alternates: {
    canonical: "/services/network-reliability-review",
  },
};

export default function NetworkReliabilityReviewPage() {
  return (
    <ServiceDetailPage
      backHref="/services"
      backLabel="Back to Services"
      title="Wi-Fi & Network Reliability Review"
      opening={[
        "Start with a clear understanding of how your network actually behaves.",
        "A Wi-Fi & Network Reliability Review is a structured evaluation of your environment designed to identify the factors affecting performance, stability, and coverage.",
      ]}
      involves={{
        title: "What This Involves",
        intro: "During a review, we evaluate:",
        bullets: [
          "Wi-Fi coverage and signal behavior",
          "interference from neighboring networks",
          "equipment capabilities and limitations",
          "network segmentation and device usage",
          "infrastructure design affecting performance",
        ],
        closing:
          "This provides a clear picture of how your network performs under real operating conditions.",
      }}
      whenItMakesSense={{
        title: "When a Review Makes Sense",
        bullets: [
          "you’re experiencing inconsistent or unreliable performance",
          "you’re not sure what’s causing network issues",
          "systems behave differently under load vs idle conditions",
          "you want to make informed decisions before upgrading",
        ],
      }}
      whatYouGet={{
        title: "What You Get",
        bullets: [
          "clear understanding of current network behavior",
          "identification of root causes",
          "practical recommendations",
          "guidance on next steps",
        ],
        closing:
          "In many cases, the review reveals that existing systems can be improved without major changes.",
      }}
      whatHappensNext={{
        title: "What Happens Next",
        intro: "Depending on what we find:",
        bullets: [
          "issues may be resolved through stabilization",
          "improvements may require targeted upgrades",
          "or a broader redesign may be recommended",
        ],
      }}
      related={[
        {
          href: "/services/network-troubleshooting",
          label: "Network Troubleshooting & Stabilization",
        },
        {
          href: "/services/network-installation",
          label: "Network Installation, Expansion & Upgrades",
        },
      ]}
      finalCtaTitle="Start with a structured evaluation."
      finalCtaLabel="Request a Network Reliability Review"
      finalCtaHref="/contact?intent=assessment"
    />
  );
}
