import { ServiceDetailPage } from "@/components/services/detail/ServiceDetailPage";
import Link from "next/link";

const inlineLinkClass =
  "font-medium text-[var(--pip-ink)] underline underline-offset-4 decoration-[var(--pip-orange)]/45 hover:decoration-[var(--pip-orange)]";

export const metadata = {
  title: "Network Design, Installation & Upgrades",
  description:
    "Design and install reliable network infrastructure, upgrade existing systems, and build networks that support business operations and future growth.",
  alternates: { canonical: "/services/network-installation" },
  openGraph: {
    title: "Network Design, Installation & Upgrades",
    description:
      "Design and install reliable network infrastructure, upgrade existing systems, and build networks that support business operations and future growth.",
    url: "/services/network-installation",
  },
};

export default function NetworkInstallationPage() {
  return (
    <ServiceDetailPage
      hero={{
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Design & Installation" },
        ],

        eyebrow: "Network Installation",
        title: "Network Design, Installation & Upgrades",
        description:
          "Build a network that supports how your business actually operates. When your current setup can’t keep up, we design and implement practical, reliable infrastructure for coverage, performance, and long-term growth.",
        image: {
          src: "/images/services/installation/network-installation-router-small-business-it-rack.webp",
          alt: "Technician installing network equipment into a small business IT rack",
        },
        primaryCta: {
          label: "Plan your network upgrade",
          href: "/contact?intent=installation",
        },
        secondaryCta: {
          label: "Or just reach out",
          href: "/contact?intent=general",
        },
      }}
      intro={{
        title: "What This Is",
        body: [
          "Network design, installation, and upgrade work focuses on improving or rebuilding network infrastructure when existing systems can no longer support operational demand.",
          "Rather than layering fixes on top of outdated or limited setups, the goal is to create a network that is structured, manageable, and reliable under real-world conditions.",
          <>
            In{" "}
            <Link href="/restaurants" className={inlineLinkClass}>
              restaurant environments
            </Link>
            , this includes supporting POS systems, guest Wi-Fi, streaming services, and staff devices without performance conflicts.
          </>,
        ],
      }}
      involves={{
        title: "Types of Work This Includes",
        body: "Installation and upgrade work may include:",
        items: [
          {
            title: "Upgrading network equipment",
            description:
              "Replace or improve routers, gateways, switches, and access points when current hardware can no longer keep up.",
          },
          {
            title: "Expanding wireless coverage",
            description:
              "Add or reposition access points to reduce dead zones and improve performance across the space.",
          },
          {
            title: "Improving layout and organization",
            description:
              "Clean up network layout, rack organization, and cable management so the system is easier to support.",
          },
          {
            title: "Integrating new systems",
            description:
              "Connect new POS, camera, guest access, or operational systems into the network more reliably.",
          },
          {
            title: "Designing for new or renovated spaces",
            description:
              "Plan and install network infrastructure around how the space will actually be used.",
          },
          {
            title: "Adding management capabilities",
            description:
              "Enable capabilities such as remote monitoring, troubleshooting access, and guest network management when appropriate.",
          },
        ],
        note: (
          <>
            These design considerations are especially important in{" "}
            <Link href="/restaurants" className={inlineLinkClass}>
              restaurant environments
            </Link>{" "}
            where multiple systems operate simultaneously throughout the day.
          </>
        ),
      }}
      process={{
        title: "What to Expect",
        steps: [
          {
            title: "Review requirements",
            description:
              "Work begins by understanding the current environment, project goals, and how the space is actually used.",
          },
          {
            title: "Design the right approach",
            description:
              "The plan is shaped around coverage, capacity, reliability, layout, and practical business needs.",
          },
          {
            title: "Install cleanly",
            description:
              "Equipment, cabling, and network layout are implemented with organization and minimal disruption in mind.",
          },
          {
            title: "Prepare for growth",
            description:
              "The finished setup should be easier to manage, support, and expand as the business changes.",
          },
        ],
      }}
      fit={{
        title: "When This Makes Sense",
        items: [
          "Your current equipment is at capacity",
          "You’re expanding your space or adding systems",
          "Coverage gaps affect operations",
          "Existing setups rely on consumer-grade hardware",
          "Incremental fixes are no longer effective",
          "You want to add capabilities such as remote access, monitoring, or guest network management",
        ],
      }}
      outcomes={{
        title: "What You Get",
        items: [
          "Improved reliability under load",
          "Better coverage and performance",
          "Structured, manageable infrastructure",
          "Systems designed for real-world usage",
          "Clear, practical documentation of how your network is structured and configured",
        ],
      }}
      next={{
        title: "What Happens Next",
        body: [
          "After installation or upgrades, the network can be tuned and optimized as needed to support consistent performance.",
          "With a solid foundation in place, future changes—whether expansion, new systems, or increased demand—become easier and more predictable.",
          <>
            These decisions are based on{" "}
            <Link href="/about" className={inlineLinkClass}>
              real-world experience
            </Link>{" "}
            designing and supporting network infrastructure in live business environments.
          </>
        ],
      }}
      related={{
        title: "Related Services",
        services: [
          {
            title: "Wi-Fi & Network Reliability Assessment",
            description:
              "For understanding what is happening before deciding whether stabilization, upgrades, or installation work makes sense.",
            href: "/services/network-assessment",
            image:
              "/images/services/assessment/wifi-network-assessment-small-business-cafe-tablet-analysis.webp",
            alt: "Technician analyzing Wi-Fi network performance on a tablet inside a small business café environment",
          },
          {
            title: "Network Troubleshooting & Stabilization",
            description:
              "For unstable, inconsistent, or unreliable networks that need targeted correction.",
            href: "/services/network-troubleshooting",
            image:
              "/images/services/troubleshooting/network-troubleshooting-server-rack-cable-adjustment.webp",
            alt: "Technician troubleshooting network equipment and cables in a small business IT rack",
          },
        ],
      }}
      finalCta={{
        title: "Ready to Discuss Your Project?",
        body: "Whether you’re upgrading equipment, expanding coverage, or planning a new space, we can help design the right next step.",
        image: {
          src: "/images/services/installation/network-installation-cta-upgrade-planning-laptop.webp",
          alt: "Technician reviewing a network upgrade plan with a small business owner",
        },
        primaryCta: {
          label: "Plan Your Network Upgrade",
          href: "/contact?intent=installation",
        },
        secondaryCta: {
          label: "Or just reach out",
          href: "/contact?intent=general",
        },
      }}
    />
  );
}
