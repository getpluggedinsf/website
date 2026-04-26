import Link from "next/link";
import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceSection } from "@/components/services/detail/ServiceSection";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";

export default function NetworkAssessmentPage() {
  return (
    <main className="w-full">
      <ServiceHero
        eyebrow="Network Assessment"
        title="Wi-Fi & Network Reliability Assessment"
        description="Understand how your network is actually performing before making changes. A structured assessment helps identify what’s working, what isn’t, and what to do next."
        image={{
          src: "/images/services/assessment/wifi-network-assessment-small-business-cafe-tablet-analysis.webp",
          alt: "Technician analyzing Wi-Fi network performance on a tablet inside a small business café environment",
        }}
        primaryCta={{
          label: "Start with a Network Assessment",
          href: "/contact?intent=assessment",
        }}
        secondaryCta={{
          label: "Or just reach out",
          href: "/contact?intent=general",
        }}
      />

      <ServiceSection
        title="What This Is"
        tone="mid"
        contained
        body={[
          "A Wi-Fi & Network Reliability Assessment is a structured evaluation of your network environment.",
          "Instead of guessing or making incremental changes, the assessment focuses on how your network behaves under real operating conditions—so decisions can be based on what’s actually happening, not assumptions.",
        ]}
      />

      <ServiceSection
        title="What This Involves"
        body="During an assessment, we evaluate:"
        items={[
          "Wi-Fi coverage and signal behavior",
          "Interference from neighboring networks",
          "Equipment capabilities and limitations",
          "Network segmentation and device usage",
          "Infrastructure design affecting performance",
        ]}
      />

      <ServiceSection
        title="What to Expect"
        tone="mid"
        body={[
          "Assessments are typically performed on-site during normal business conditions.",
          "We observe how the network behaves in real use, review key systems, and evaluate the environment as it operates day to day.",
          "Afterward, we walk through the findings and outline practical next steps—whether that means simple adjustments, targeted improvements, or a broader upgrade.",
        ]}
      />

      <ServiceSection
        title="When This Makes Sense"
        items={[
          "You’re experiencing inconsistent or unreliable performance",
          "You’re not sure what’s causing network issues",
          "Systems behave differently under load than they do when idle",
          "You want to make informed decisions before upgrading",
        ]}
      />

      <ServiceSection
        title="What You Get"
        tone="mid"
        contained
        items={[
          "A clearer understanding of current network behavior",
          "Identification of likely root causes",
          "Practical recommendations",
          "Guidance on the simplest useful next step",
        ]}
      />

      <ServiceSection
        title="What Happens Next"
        body={[
          "Based on what we find, the next step is usually straightforward.",
          "In many cases, issues can be resolved through targeted stabilization without major changes. In others, improvements may require upgrades or expanded coverage.",
          "The goal is not to add complexity, but to take the simplest effective step toward a more reliable network.",
        ]}
      />

      <ServiceSection title="Related Services" tone="mid">
        <div className="flex flex-col gap-3 text-[16px] leading-7">
          <Link
            href="/services/network-troubleshooting"
            className="text-[var(--pip-ink)] underline-offset-4 hover:underline"
          >
            → Network Troubleshooting & Stabilization
          </Link>

          <Link
            href="/services/network-installation"
            className="text-[var(--pip-ink)] underline-offset-4 hover:underline"
          >
            → Network Design, Installation & Upgrades
          </Link>
        </div>
      </ServiceSection>

      <ServicesFinalCta
        title="Not Sure Where to Start?"
        body="Start with a simple assessment to understand what’s working, what isn’t, and what to do next."
        image={{
          src: "/images/services/assessment/network-assessment-cta-owner-review-tablet.webp",
          alt: "Technician reviewing Wi-Fi assessment findings on a tablet with a small business owner",
        }}
        primaryCta={{
          label: "Start with a Network Assessment",
          href: "/contact?intent=assessment",
        }}
        secondaryCta={{
          label: "Or just reach out",
          href: "/contact?intent=general",
        }}
      />      
    </main>
  );
}
