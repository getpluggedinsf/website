import Link from "next/link";
import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceSection } from "@/components/services/detail/ServiceSection";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";
import { ServiceSectionGroup } from "@/components/services/detail/ServiceSectionGroup";

export default function NetworkTroubleshootingPage() {
  return (
    <main className="w-full">
      <ServiceHero
        eyebrow="Network Troubleshooting"
        title="Network Troubleshooting & Stabilization"
        description="Restore stable, predictable network performance. We identify and fix the issues causing slowdowns, dropouts, and unreliable behavior—including situations where networks are no longer functioning as expected."
        image={{
          src: "/images/services/troubleshooting/network-troubleshooting-server-rack-cable-adjustment.webp",
          alt: "Technician troubleshooting network equipment and cables in a small business IT rack",
        }}
        primaryCta={{
          label: "Get help stabilizing your network",
          href: "/contact?intent=troubleshooting",
        }}
        secondaryCta={{
          label: "Or just reach out",
          href: "/contact?intent=general",
        }}
      />

      <ServiceSectionGroup tone="white">
      <ServiceSection
        title="What This Is"
        contained
        body={[
          "Network Troubleshooting & Stabilization focuses on correcting the underlying causes of unreliable network performance.",
          "Instead of working around issues or adding temporary fixes, the goal is to make the network behave consistently under real operating conditions.",
        ]}
      />

      <ServiceSection
        title="What This Involves"
        body="Stabilization work may include:"
        items={[
          "Correcting configuration issues",
          "Improving wireless channel planning",
          "Adjusting equipment placement",
          "Refining network segmentation",
          "Resolving infrastructure-related issues",
        ]}
      />
      </ServiceSectionGroup>

      <ServiceSectionGroup tone="mid">
      <ServiceSection
        title="What to Expect"
        body={[
          "Stabilization focuses on correcting the causes of instability as they are identified.",
          "In some cases, this work follows a formal assessment. In others, issues are diagnosed and resolved directly as part of the stabilization process.",
          "Changes are made carefully and tested under real conditions to help ensure the network behaves consistently during normal operation.",
        ]}
      />

      <ServiceSection
        title="When This Makes Sense"
        items={[
          "Wi-Fi drops or slows during peak hours",
          "POS or operational systems disconnect",
          "Guest traffic interferes with business systems",
          "Performance is inconsistent or unpredictable",
          "The network is no longer functioning as expected",
        ]}
      />
      </ServiceSectionGroup>

      <ServiceSectionGroup tone="white">
      <ServiceSection
        title="What You Get"
        contained
        items={[
          "Improved reliability under real-world conditions",
          "Better separation between systems",
          "Fewer disruptions during peak operations",
          "A network that behaves more predictably",
        ]}
      />

      <ServiceSection
        title="What Happens Next"
        body={[
          "In many cases, stabilization resolves issues without requiring major upgrades.",
          "If underlying limitations remain, the next step may involve targeted improvements, equipment upgrades, or expanded infrastructure.",
          "The goal is always to take the simplest effective step toward a stable, reliable network.",
        ]}
      />

      <ServiceSection title="Related Services">
        <div className="flex flex-col gap-3 text-[16px] leading-7">
          <Link
            href="/services/network-assessment"
            className="text-[var(--pip-ink)] underline-offset-4 hover:underline"
          >
            → Wi-Fi & Network Reliability Assessment
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
        title="Need Help Stabilizing Your Network?" 
        body="If your network is slow, unstable, or unreliable, we can help identify the cause and move toward the simplest effective fix." 
        image={{ 
          src: "/images/services/troubleshooting/network-troubleshooting-cta-owner-resolution-review.webp", 
          alt: "Technician discussing network troubleshooting results with a small business owner", 
        }}
        primaryCta={{ 
          label: "Get Help Stabilizing Your Network", 
          href: "/contact?intent=troubleshooting", 
        }} 
        secondaryCta={{ 
          label: "Or just reach out", 
          href: "/contact?intent=general", 
        }}
      />
    </main>
  );
}
