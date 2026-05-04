import { ServiceDetailPage } from "@/components/services/detail/ServiceDetailPage";
import Link from "next/link";

const inlineLinkClass =
  "font-medium text-[var(--pip-ink)] underline underline-offset-4 decoration-[var(--pip-orange)]/45 hover:decoration-[var(--pip-orange)]";

export const metadata = {
  title: "Network Troubleshooting & Stabilization",
  description:
    "Diagnose and resolve network instability, slow performance, and system conflicts affecting Wi-Fi, POS systems, and connected business devices.",
  alternates: { canonical: "/services/network-troubleshooting" },
  openGraph: {
    title: "Network Troubleshooting & Stabilization",
    description:
      "Diagnose and resolve network instability, slow performance, and system conflicts affecting Wi-Fi, POS systems, and connected business devices.",
    url: "/services/network-troubleshooting",
  },
};

export default function NetworkTroubleshootingPage() {
  return (
    <ServiceDetailPage
      hero={{
        breadcrumb: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Stabilization" },
        ],

        eyebrow: "Network Troubleshooting",
        title: "Network Troubleshooting & Stabilization",
        description:
          "Restore stable, predictable network performance. We identify and fix the issues causing slowdowns, dropouts, and unreliable behavior—including situations where networks are no longer functioning as expected.",
        image: {
          src: "/images/services/troubleshooting/network-troubleshooting-server-rack-cable-adjustment-v1.webp",
          alt: "Technician troubleshooting network equipment and cables in a small business IT rack",
        },
        primaryCta: {
          label: "Get help stabilizing your network",
          href: "/contact?intent=troubleshooting",
        },
        secondaryCta: {
          label: "Or just reach out",
          href: "/contact?intent=general",
        },
      }}
      intro={{
        title: "What This Is",
        body: [
          "Network Troubleshooting & Stabilization focuses on correcting the underlying causes of unreliable network performance.",
          "Instead of working around issues or adding temporary fixes, the goal is to make the network behave consistently under real operating conditions.",
          <>
            In{" "}
            <Link href="/restaurants" className={inlineLinkClass}>
              restaurant environments
            </Link>
            , these issues often appear during peak service when POS systems, guest Wi-Fi, and staff devices are all competing for network resources.
          </>,
        ],
      }}
      involves={{
        title: "What This Involves",
        body: "Stabilization work may include:",
        items: [
          {
            title: "Correcting configuration issues",
            description:
              "Resolve settings or configuration choices that contribute to slowdowns, dropouts, or inconsistent behavior.",
          },
          {
            title: "Improving wireless channel planning",
            description:
              "Reduce interference and congestion by adjusting how wireless access points use available channels.",
          },
          {
            title: "Adjusting equipment placement",
            description:
              "Improve performance by evaluating where access points, routers, or network equipment are positioned.",
          },
          {
            title: "Refining network segmentation",
            description:
              "Separate business systems, guest access, and devices so traffic is better organized and conflicts are reduced.",
          },
          {
            title: "Resolving infrastructure-related issues",
            description:
              "Identify cabling, hardware, or layout issues that may be contributing to unreliable performance.",
          },
        ],
      }}
      process={{
        title: "What to Expect",
        steps: [
          {
            title: "Identify the issue",
            description:
              "We look for the likely causes of slowdowns, dropouts, conflicts, or unreliable behavior.",
          },
          {
            title: "Make targeted changes",
            description:
              "Configuration, placement, segmentation, and infrastructure changes are made carefully and intentionally.",
          },
          {
            title: "Test under real conditions",
            description:
              "Changes are checked against normal operating conditions, not just idle or ideal network behavior.",
          },
          {
            title: "Clarify next steps",
            description:
              "If limitations remain, we identify whether targeted improvements or infrastructure upgrades make sense.",
          },
        ],
      }}
      fit={{
        title: "When This Makes Sense",
        items: [
          "Wi-Fi drops or slows during peak hours",
          "POS or operational systems disconnect",
          "Guest traffic interferes with business systems",
          "Performance is inconsistent or unpredictable",
          "The network is no longer functioning as expected",
        ],
        note: (
          <>
            These patterns are especially common in{" "}
            <Link href="/restaurants" className={inlineLinkClass}>
              restaurant environments
            </Link>{" "}
            where demand spikes and multiple systems rely on the network simultaneously.
          </>
        ),
      }}
      outcomes={{
        title: "What You Get",
        items: [
          "Improved reliability under real-world conditions",
          "Better separation between systems",
          "Fewer disruptions during peak operations",
          "A network that behaves more predictably",
        ],
      }}
      next={{
        title: "What Happens Next",
        body: [
          "In many cases, stabilization resolves issues without requiring major upgrades.",
          "If underlying limitations remain, the next step may involve targeted improvements, equipment upgrades, or expanded infrastructure.",
          "The goal is always to take the simplest effective step toward a stable, reliable network.",
          <>
            This approach is based on{" "}
            <Link href="/about" className={inlineLinkClass}>
              real-world experience
            </Link>{" "}
            working with live network environments where reliability matters day to day.
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
              "/images/services/assessment/wifi-network-assessment-small-business-cafe-tablet-analysis-v1.webp",
            alt: "Technician analyzing Wi-Fi network performance on a tablet inside a small business café environment",
          },
          {
            title: "Network Design, Installation & Upgrades",
            description:
              "For spaces that need better coverage, upgraded equipment, or a more reliable infrastructure foundation.",
            href: "/services/network-installation",
            image:
              "/images/services/installation/network-installation-router-small-business-it-rack-v1.webp",
            alt: "Technician installing network equipment into a small business IT rack",
          },
        ],
      }}
      finalCta={{
        title: "Need Help Stabilizing Your Network?",
        body: "If your network is slow, unstable, or unreliable, we can help identify the cause and move toward the simplest effective fix.",
        image: {
          src: "/images/services/troubleshooting/network-troubleshooting-cta-owner-resolution-review-v1.webp",
          alt: "Technician discussing network troubleshooting results with a small business owner",
        },
        primaryCta: {
          label: "Get Help Stabilizing Your Network",
          href: "/contact?intent=troubleshooting",
        },
        secondaryCta: {
          label: "Or just reach out",
          href: "/contact?intent=general",
        },
      }}
    />
  );
}
