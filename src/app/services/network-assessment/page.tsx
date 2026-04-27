import { ServiceDetailPage } from "@/components/services/detail/ServiceDetailPage";

export default function NetworkAssessmentPage() {
  return (
    <ServiceDetailPage
      hero={{
        eyebrow: "Network Assessment",
        title: "Wi-Fi & Network Reliability Assessment",
        description:
          "Understand how your network is actually performing before making changes. A structured assessment helps identify what’s working, what isn’t, and what to do next.",
        image: {
          src: "/images/services/assessment/wifi-network-assessment-small-business-cafe-tablet-analysis.webp",
          alt: "Technician analyzing Wi-Fi network performance on a tablet inside a small business café environment",
        },
        primaryCta: {
          label: "Start with a Network Assessment",
          href: "/contact?intent=assessment",
        },
        secondaryCta: {
          label: "Or just reach out",
          href: "/contact?intent=general",
        },
      }}
      intro={{
        title: "What This Is",
        body: [
          "A Wi-Fi & Network Reliability Assessment is a structured evaluation of your network environment.",
          "Instead of guessing or making incremental changes, the assessment focuses on how your network behaves under real operating conditions—so decisions can be based on what’s actually happening, not assumptions.",
        ],
      }}
      involves={{
        title: "What This Involves",
        body: "During an assessment, we evaluate:",
        items: [
          {
            title: "Wi-Fi coverage and signal behavior",
            description:
              "Evaluate strength, coverage, and consistency across your space.",
          },
          {
            title: "Interference from neighboring networks",
            description:
              "Identify sources of interference that can affect performance and stability.",
          },
          {
            title: "Equipment capabilities and limitations",
            description:
              "Review hardware performance, features, and potential bottlenecks.",
          },
          {
            title: "Network segmentation and device usage",
            description:
              "Assess how traffic is organized and how devices are using the network.",
          },
          {
            title: "Infrastructure design affecting performance",
            description:
              "Evaluate cabling, access point placement, and design choices that affect reliability.",
          },
        ],
      }}
      process={{
        title: "What to Expect",
        steps: [
          {
            title: "Observe normal conditions",
            description:
              "Assessments are typically performed on-site during normal business conditions.",
          },
          {
            title: "Review key systems",
            description:
              "We observe how the network behaves in real use and evaluate the environment as it operates day to day.",
          },
          {
            title: "Identify likely causes",
            description:
              "Findings are tied back to coverage, interference, configuration, equipment, or infrastructure limits.",
          },
          {
            title: "Outline practical next steps",
            description:
              "We walk through whether simple adjustments, targeted improvements, or a broader upgrade makes sense.",
          },
        ],
      }}
      fit={{
        title: "When This Makes Sense",
        items: [
          "You’re experiencing inconsistent or unreliable performance",
          "You’re not sure what’s causing network issues",
          "Systems behave differently under load than they do when idle",
          "You want to make informed decisions before upgrading",
        ],
      }}
      outcomes={{
        title: "What You Get",
        items: [
          "A clearer understanding of current network behavior",
          "Identification of likely root causes",
          "Practical recommendations",
          "Guidance on the simplest useful next step",
        ],
      }}
      next={{
        title: "What Happens Next",
        body: [
          "Based on what we find, the next step is usually straightforward.",
          "In many cases, issues can be resolved through targeted stabilization without major changes. In others, improvements may require upgrades or expanded coverage.",
          "The goal is not to add complexity, but to take the simplest effective step toward a more reliable network.",
        ],
      }}
      related={{
        title: "Related Services",
        services: [
          {
            title: "Network Troubleshooting & Stabilization",
            description:
              "For unstable, inconsistent, or unreliable networks that need targeted correction.",
            href: "/services/network-troubleshooting",
            image:
              "/images/services/troubleshooting/network-troubleshooting-server-rack-cable-adjustment.webp",
            alt: "Technician troubleshooting network equipment and cables in a small business IT rack",
          },
          {
            title: "Network Design, Installation & Upgrades",
            description:
              "For spaces that need better coverage, upgraded equipment, or a more reliable infrastructure foundation.",
            href: "/services/network-installation",
            image:
              "/images/services/installation/network-installation-router-small-business-it-rack.webp",
            alt: "Technician installing network equipment into a small business IT rack",
          },
        ],
      }}
      finalCta={{
        title: "Not Sure Where to Start?",
        body: "Start with a simple assessment to understand what’s working, what isn’t, and what to do next.",
        image: {
          src: "/images/services/assessment/network-assessment-cta-owner-review-tablet.webp",
          alt: "Technician reviewing Wi-Fi assessment findings on a tablet with a small business owner",
        },
        primaryCta: {
          label: "Start with a Network Assessment",
          href: "/contact?intent=assessment",
        },
        secondaryCta: {
          label: "Or just reach out",
          href: "/contact?intent=general",
        },
      }}
    />
  );
}
