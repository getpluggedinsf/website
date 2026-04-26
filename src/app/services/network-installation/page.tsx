import Link from "next/link";
import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServiceSection } from "@/components/services/detail/ServiceSection";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";
import { ServiceSectionGroup } from "@/components/services/detail/ServiceSectionGroup";

export default function NetworkInstallationPage() {
  return (
    <main className="w-full">
      <ServiceHero
        eyebrow="Network Installation"
        title="Network Design, Installation & Upgrades"
        description="Build a network that supports how your business actually operates. When your current setup can’t keep up, we design and implement practical, reliable infrastructure for coverage, performance, and long-term growth."
        image={{
          src: "/images/services/installation/network-installation-router-small-business-it-rack.webp",
          alt: "Technician installing network equipment into a small business IT rack",
        }}
        primaryCta={{
          label: "Plan your network upgrade",
          href: "/contact?intent=installation",
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
          "Network design, installation, and upgrade work focuses on improving or rebuilding network infrastructure when existing systems can no longer support operational demand.",
          "Rather than layering fixes on top of outdated or limited setups, the goal is to create a network that is structured, manageable, and reliable under real-world conditions.",
        ]}
      />

      <ServiceSection
        title="Types of Work This Includes"
        variant="scan"
        items={[
          "Upgrading routers, gateways, switches, and access points",
          "Expanding coverage with additional access points",
          "Improving network layout, rack organization, and cable management",
          "Integrating new systems into the network",
          "Designing and installing networks for new or renovated spaces",
          "Enabling capabilities such as remote monitoring, troubleshooting access, and guest network management",
        ]}
      />
      </ServiceSectionGroup>

      <ServiceSectionGroup tone="mid">
      <ServiceSection
        title="What to Expect"
        variant="process"
        body={[
          "Work typically begins by reviewing the current environment or project requirements, then designing a solution that fits how the space is actually used.",
          "Installation and upgrades are carried out with an emphasis on clean, organized infrastructure and minimal disruption to operations.",
          "The result is a network that is easier to manage, more predictable under load, and better suited for future growth.",
        ]}
      />

      <ServiceSection
        title="When This Makes Sense"
        variant="decision"
        items={[
          "Your current equipment is at capacity",
          "You’re expanding your space or adding systems",
          "Coverage gaps affect operations",
          "Existing setups rely on consumer-grade hardware",
          "Incremental fixes are no longer effective",
          "You want to add capabilities such as remote access, monitoring, or guest network management",
        ]}
      />
      </ServiceSectionGroup>

      <ServiceSectionGroup tone="white">
      <ServiceSection
        title="What You Get"
        variant="outcome"
        contained
        items={[
          "Improved reliability under load",
          "Better coverage and performance",
          "Structured, manageable infrastructure",
          "Systems designed for real-world usage",
          "Clear, practical documentation of how your network is structured and configured",
        ]}
      />

      <ServiceSection
        title="What Happens Next"
        variant="reassurance"
        body={[
          "After installation or upgrades, the network can be tuned and optimized as needed to support consistent performance.",
          "With a solid foundation in place, future changes—whether expansion, new systems, or increased demand—become easier and more predictable.",
        ]}
      />

      <ServiceSection title="Related Services" variant="related">
        <div className="flex flex-col gap-3 text-[16px] leading-7">
          <Link
            href="/services/network-assessment"
            className="text-[var(--pip-ink)] underline-offset-4 hover:underline"
          >
            → Wi-Fi & Network Reliability Assessment
          </Link>

          <Link
            href="/services/network-troubleshooting"
            className="text-[var(--pip-ink)] underline-offset-4 hover:underline"
          >
            → Network Troubleshooting & Stabilization
          </Link>
        </div>
      </ServiceSection>
      </ServiceSectionGroup>

      <ServicesFinalCta
        title="Ready to Discuss Your Project?"
        body="Whether you’re upgrading equipment, expanding coverage, or planning a new space, we can help design the right next step."
        image={{
          src: "/images/services/installation/network-installation-cta-upgrade-planning-laptop.webp",
          alt: "Technician reviewing a network upgrade plan with a small business owner",
        }}
        primaryCta={{
          label: "Plan Your Network Upgrade",
          href: "/contact?intent=installation",
        }}
        secondaryCta={{
          label: "Or just reach out",
          href: "/contact?intent=general",
        }}
      />
    </main>
  );
}
