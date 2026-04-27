import Link from "next/link";
import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceSection } from "@/components/services/detail/ServiceSection";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";
import { ServiceSectionGroup } from "@/components/services/detail/ServiceSectionGroup";

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

      <ServiceSectionGroup tone="white">
        <ServiceSection
            title="What This Is"
          variant="anchor"
          contained
          body={[
            "A Wi-Fi & Network Reliability Assessment is a structured evaluation of your network environment.",
            "Instead of guessing or making incremental changes, the assessment focuses on how your network behaves under real operating conditions—so decisions can be based on what’s actually happening, not assumptions.",
          ]}
        />

       <ServiceSection
         title="What This Involves"
         body="During an assessment, we evaluate:"
         variant="grid"
         items={[
           {
             title: "Wi-Fi coverage and signal behavior",
             description: "Evaluate strength, coverage, and consistency across your space.",
           },
           {
             title: "Interference from neighboring networks",
             description:
               "Identify sources of interference that can affect performance and stability.",
           },
           {
             title: "Equipment capabilities and limitations",
             description: "Review hardware performance, features, and potential bottlenecks.",
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
         ]}
       />
     </ServiceSectionGroup>

      <ServiceSectionGroup tone="mid">
        <ServiceSection
          title="What to Expect"
          variant="process"
          body={[
            "Assessments are typically performed on-site during normal business conditions.",
            "We observe how the network behaves in real use, review key systems, and evaluate the environment as it operates day to day.",
            "Afterward, we walk through the findings and outline practical next steps—whether that means simple adjustments, targeted improvements, or a broader upgrade.",
          ]}
        />
  
        <ServiceSection
          title="When This Makes Sense"
          variant="decision"
          items={[
            "You’re experiencing inconsistent or unreliable performance",
            "You’re not sure what’s causing network issues",
            "Systems behave differently under load than they do when idle",
            "You want to make informed decisions before upgrading",
          ]}
        />
      </ServiceSectionGroup>

      <ServiceSectionGroup tone="white">
        <ServiceSection
          title="What You Get"
          variant="outcome"
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
          variant="reassurance"
          body={[
            "Based on what we find, the next step is usually straightforward.",
            "In many cases, issues can be resolved through targeted stabilization without major changes. In others, improvements may require upgrades or expanded coverage.",
            "The goal is not to add complexity, but to take the simplest effective step toward a more reliable network.",
          ]}
        />

        <ServiceSection title="Related Services" variant="related">
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
      </ServiceSectionGroup>

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
