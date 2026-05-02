import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { AboutSection } from "@/components/about/AboutSection";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";

export default function AboutPage() {
  return (
    <main className="w-full">

      {/* Hero */}
      <ServiceHero
        eyebrow="About PluggedIn Pros"
        title="Practical Network Infrastructure for San Francisco Small Businesses"
        description="PluggedIn Pros focuses on improving the reliability of Wi-Fi and network environments that businesses depend on every day."
        image={{
          src: "/images/about/restaurant-network-technician-rack-assessment.webp",
          alt: "Technician working on a laptop connected to a network rack in a restaurant environment, analyzing network systems",
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

      {/* Focus */}
      <AboutSection
        title="A Focus on Reliable Network Infrastructure"
        body={`Many IT providers offer broad support across everything from email to devices to software.

PluggedIn Pros focuses specifically on Wi-Fi and network infrastructure — the foundation that modern business systems depend on.

POS systems, handheld devices, guest Wi-Fi, cameras, and payment systems all rely on stable connectivity. When the network becomes unreliable, these systems often appear to fail even when they’re functioning correctly.

Our work focuses on making those environments stable, predictable, and built for real-world usage.`}
      />

      {/* Experience */}
      <AboutSection
        tone="mid"
        title="Built on Real-World Infrastructure Experience"
        body={`PluggedIn Pros is led by Mark Steiner, a San Francisco technology professional with decades of experience working with networked systems and infrastructure.

His background includes early work in UNIX systems administration and enterprise environments supporting production systems where reliability was critical.

More recently, he spent nearly a decade working directly in restaurant technology environments — installing POS systems, configuring networks, and supporting infrastructure during live service.

This combination of enterprise systems experience and hands-on restaurant work informs how PluggedIn Pros approaches network design today.`}
      />

      {/* Real Environments */}
      <AboutSection
        title="Experience in Operational Environments"
        body="Restaurant and small business networks often support multiple systems at the same time:"
        items={[
          "POS terminals",
          "Handheld ordering devices",
          "Guest Wi-Fi",
          "Streaming systems",
          "Security cameras",
          "Payment systems",
        ]}
      />

      {/* Approach */}
      <AboutSection
        tone="mid"
        title="A Structured Approach to Reliable Networks"
        body="Work typically follows a simple progression:"
        items={[
          "Assessment — Understand how the network behaves under real conditions",
          "Stabilization — Resolve configuration issues and performance bottlenecks",
          "Design & Improvement — Upgrade infrastructure when needed to support long-term reliability",
        ]}
      />

      {/* Local Focus */}
      <AboutSection
        title="Serving San Francisco Small Businesses"
        body="San Francisco environments present unique challenges:"
        items={[
          "Dense wireless interference",
          "Multi-tenant buildings",
          "Older construction",
          "Outdoor coverage requirements",
          "High device density",
        ]}
      />

      {/* Closing */}
      <AboutSection
        tone="mid"
        title="Practical Infrastructure, Built to Work"
        body={`PluggedIn Pros was founded to provide small businesses with access to practical network infrastructure expertise.

The goal is simple: stable, predictable networks that support daily operations.`}
      />

      {/* Final CTA */}
      <ServicesFinalCta
        title="Start with a Network Assessment"
        body="If your network has become unreliable or unpredictable, a structured assessment is the first step toward understanding what’s happening and what to do next."
        image={{
          src: "/images/about/restaurant-owner-consultation-network-discussion.webp",
          alt: "Technician having a relaxed conversation with a restaurant owner at a bar, discussing network improvements",
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
