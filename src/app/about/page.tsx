import Section from "@/components/layout/Section";
import Surface from "@/components/layout/Surface";
import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";
import {
  BadgeDollarSign,
  Camera,
  Check,
  CreditCard,
  Music,
  TabletSmartphone,
  Wifi,
} from "lucide-react";

export const metadata = {
  title: "About PluggedIn Pros",
  description:
    "Learn about PluggedIn Pros and the experience behind a structured approach to reliable Wi-Fi and network infrastructure for small businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About PluggedIn Pros",
    description:
      "Learn about PluggedIn Pros and the experience behind a structured approach to reliable Wi-Fi and network infrastructure for small businesses.",
    url: "/about",
  },
};

const operationalSystems = [
  { label: "POS terminals", icon: CreditCard },
  { label: "Handheld ordering devices", icon: TabletSmartphone },
  { label: "Guest Wi-Fi", icon: Wifi },
  { label: "Streaming systems", icon: Music },
  { label: "Security cameras", icon: Camera },
  { label: "Payment systems", icon: BadgeDollarSign },
];

const approachSteps = [
  {
    step: "01",
    title: "Assessment",
    body: "Understand how the network behaves under real conditions.",
  },
  {
    step: "02",
    title: "Stabilization",
    body: "Resolve configuration issues and performance bottlenecks.",
  },
  {
    step: "03",
    title: "Design & Improvement",
    body: "Upgrade infrastructure when needed to support long-term reliability.",
  },
];

const sanFranciscoChallenges = [
  "Dense wireless interference",
  "Multi-tenant buildings",
  "Older construction",
  "Outdoor coverage requirements",
  "High device density",
];

function NarrativeCard({
  title,
  children,
  tone = "white",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "white" | "mid";
}) {
  return (
    <Section tone={tone} padded="lg">
      <Surface
        padding="lg"
        radius="lg"
        border
        shadow={false}
        className="mx-auto max-w-3xl bg-white transition duration-200 hover:border-[var(--pip-ink)] hover:shadow-sm"
      >
        <h2 className="text-center font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
          {title}
        </h2>

        <div className="mt-6 space-y-4 text-left text-[17px] leading-[1.75] text-slate-700">
          {children}
        </div>
      </Surface>
    </Section>
  );
}

function OperationalEnvironmentGrid() {
  return (
    <Section tone="white" padded="lg">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
          Experience in Operational Environments
        </h2>
        <p className="mt-4 text-[17px] leading-[1.7] text-slate-700">
          Restaurant and small business networks often support multiple systems at the same time:
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {operationalSystems.map((item) => {
          const Icon = item.icon;

          return (
            <Surface
              key={item.label}
              padding="md"
              radius="lg"
              border
              shadow={false}
              className="bg-white text-center transition duration-200 hover:-translate-y-0.5 hover:border-[var(--pip-ink)] hover:shadow-sm"
            >
              <Icon
                className="mx-auto mb-4 h-6 w-6 text-[var(--pip-orange)]"
                strokeWidth={2}
                aria-hidden="true"
              />

              <p className="text-[16px] font-semibold leading-snug text-[var(--pip-ink)]">
                {item.label}
              </p>
            </Surface>
          );
        })}
      </div>
    </Section>
  );
}

function StructuredApproach() {
  return (
    <Section tone="mid" padded="lg">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
          A Structured Approach to Reliable Networks
        </h2>
        <p className="mt-4 text-[17px] leading-[1.7] text-slate-700">
          Work typically follows a simple progression:
        </p>
      </div>

      <div className="mx-auto mt-8 grid gap-4 md:grid-cols-3">
        {approachSteps.map((step) => (
          <Surface
            key={step.step}
            padding="md"
            radius="lg"
            border
            shadow={false}
            className="group/card bg-white text-center transition duration-200 hover:-translate-y-0.5 hover:border-[var(--pip-ink)] hover:shadow-sm"
          >
            <div className="mx-auto flex h-10 w-10 items-center justify-center text-sm font-bold tracking-[0.12em] text-[var(--pip-orange)] transition duration-200 group-hover/card:rounded-full group-hover/card:bg-[var(--pip-orange)]/10 group-hover/card:scale-105">
              {step.step}
            </div>
            <h3 className="mt-2 text-[17px] font-semibold leading-snug text-[var(--pip-ink)]">
              {step.title}
            </h3>
            <p className="mt-3 text-[15px] leading-6 text-slate-700">
              {step.body}
            </p>
          </Surface>
        ))}
      </div>
    </Section>
  );
}

function SanFranciscoChecklist() {
  return (
    <Section tone="white" padded="lg">
      <Surface
        padding="lg"
        radius="lg"
        border
        shadow={false}
        className="mx-auto max-w-3xl bg-white transition duration-200 hover:border-[var(--pip-ink)] hover:shadow-sm"
      >
        <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
          Serving San Francisco Small Businesses
        </h2>

        <p className="mt-4 text-[17px] leading-[1.7] text-slate-700">
          San Francisco environments present unique challenges:
        </p>

        <ul className="mt-5 grid gap-x-8 gap-y-2 text-[16px] leading-7 text-slate-700 sm:grid-cols-2">
          {sanFranciscoChallenges.map((item) => (
            <li
              key={item}
              className="group/item flex gap-3 rounded-md px-2 py-1.5 transition duration-200 hover:bg-[var(--pip-bg-light)]"
            >
              <Check
                className="mt-1 h-5 w-5 shrink-0 text-[var(--pip-orange)] transition duration-200 group-hover/item:scale-110"
                strokeWidth={2.6}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Surface>
    </Section>
  );
}

export default function AboutPage() {
  return (
    <main className="w-full">
      <ServiceHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
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

      <NarrativeCard title="A Focus on Reliable Network Infrastructure">
        <p>
          Many IT providers offer broad support across everything from email to devices to software.
        </p>
        <p>
          PluggedIn Pros focuses specifically on Wi-Fi and network infrastructure — the foundation that modern business systems depend on.
        </p>
        <p>
          POS systems, handheld devices, guest Wi-Fi, cameras, and payment systems all rely on stable connectivity. When the network becomes unreliable, these systems often appear to fail even when they’re functioning correctly.
        </p>
        <p>
          Our work focuses on making those environments stable, predictable, and built for real-world usage.
        </p>
      </NarrativeCard>

      <NarrativeCard title="Built on Real-World Infrastructure Experience" tone="mid">
        <p>
          PluggedIn Pros is led by Mark Steiner, a San Francisco technology professional with decades of experience working with networked systems and infrastructure.
        </p>
        <p>
          His background includes early work in UNIX systems administration and enterprise environments supporting production systems where reliability was critical.
        </p>
        <p>
          More recently, he spent nearly a decade working directly in restaurant technology environments — installing POS systems, configuring networks, and supporting infrastructure during live service.
        </p>
        <p>
          This combination of enterprise systems experience and hands-on restaurant work informs how PluggedIn Pros approaches network design today.
        </p>
      </NarrativeCard>

      <OperationalEnvironmentGrid />
      <StructuredApproach />
      <SanFranciscoChecklist />

      <NarrativeCard title="Practical Infrastructure, Built to Work" tone="mid">
        <p>
          PluggedIn Pros was founded to provide small businesses with access to practical network infrastructure expertise.
        </p>
        <p>
          The goal is simple: stable, predictable networks that support daily operations.
        </p>
      </NarrativeCard>

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
