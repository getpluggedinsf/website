import Link from "next/link";
import { Check } from "lucide-react";
import Section from "@/components/layout/Section";
import Surface from "@/components/layout/Surface";
import { HoverImage } from "@/components/common/HoverImage";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";
import Image from "next/image";

export const metadata = {
  title: "Wi-Fi & Network Infrastructure for San Francisco Restaurants",
  description:
    "Wi-Fi and network infrastructure for San Francisco restaurants, supporting POS systems, guest Wi-Fi, streaming music platforms, cameras, and reliable service operations.",
  alternates: { canonical: "/restaurants" },
  openGraph: {
    title: "Wi-Fi & Network Infrastructure for San Francisco Restaurants",
    description:
      "Wi-Fi and network infrastructure for San Francisco restaurants, supporting POS systems, guest Wi-Fi, streaming music platforms, cameras, and reliable service operations.",
    url: "/restaurants",
  },
};


const challenges = [
  {
    title: "High Device Density",
    description:
      "POS systems, staff devices, guest Wi-Fi users, cameras, and streaming systems often operate simultaneously.",
  },
  {
    title: "Physical Interference",
    description:
      "Kitchen equipment, thick walls, patios, and building materials can affect wireless coverage and signal quality.",
  },
  {
    title: "Shared Infrastructure",
    description:
      "Operational systems and guest access often compete for the same network resources without proper design.",
  },
  {
    title: "Unplanned Growth",
    description:
      "Networks often evolve as new devices are added, creating unpredictable performance over time.",
  },
] as const;

const technologies = [
  {
    title: "POS Systems & Payment Terminals",
    description:
      "Reliable connectivity helps orders, payments, and transactions move without disruption.",
  },
  {
    title: "Handheld Ordering Devices",
    description:
      "Staff devices need consistent Wi-Fi across dining rooms, patios, kitchens, and service areas.",
  },
  {
    title: "Guest Wi-Fi",
    description:
      "Guest access should be separated from operational systems so customer traffic does not interfere with business tools.",
  },
  {
    title: "Security Cameras",
    description:
      "Video systems depend on stable network performance for recording, viewing, and remote access.",
  },
  {
    title: "Streaming Audio & Video",
    description:
      "Music and media systems share network capacity with business-critical devices.",
  },
  {
    title: "VoIP Phone Systems",
    description:
      "Internet-based phones need consistent connectivity and low-latency performance.",
  },
] as const;

const struggles = [
  "Consumer equipment is not designed for busy operational environments.",
  "Wireless mesh can become unreliable when used as a substitute for wired infrastructure.",
  "Limited segmentation makes it harder to separate guest traffic from business systems.",
  "Networks added over time often lack a coordinated design.",
] as const;

const reliableNetwork = [
  "Consistent Wi-Fi coverage across dining areas, kitchens, patios, and back-office spaces",
  "Wired infrastructure for access points whenever practical",
  "Separate network segments for POS, staff devices, guest Wi-Fi, and cameras when appropriate",
  "Business-grade networking equipment designed for higher device density",
  "Infrastructure that can support future devices, systems, and operational changes",
] as const;

const scenarios = [
  {
    title: "POS Slows During Busy Hours",
    description:
      "The system works during quiet periods but slows during lunch or dinner rush, often due to congestion or poor coverage under load.",
  },
  {
    title: "Guest Wi-Fi Interferes With Operations",
    description:
      "Guest devices compete with POS terminals or staff tablets when networks are not properly separated.",
  },
  {
    title: "Dead Zones in Kitchens or Patios",
    description:
      "Kitchen equipment, walls, outdoor areas, and building layout can create coverage gaps that affect devices.",
  },
  {
    title: "The Network Grew Without a Plan",
    description:
      "POS systems, cameras, streaming systems, guest Wi-Fi, and staff devices were added over time without coordinated design.",
  },
] as const;

const faqs = [
  {
    question: "Why does restaurant Wi-Fi slow down during busy hours?",
    answer:
      "Busy periods create higher network demand while the physical environment changes as the space fills with people. Networks that work during quiet periods may struggle when device density increases.",
  },
  {
    question: "Do restaurants need separate networks for POS and guest Wi-Fi?",
    answer:
      "In many cases, yes. Separating guest traffic from operational systems helps prevent customer devices from competing with POS terminals, staff tablets, and other business tools.",
  },
  {
    question: "Can mesh Wi-Fi systems work in restaurants?",
    answer:
      "Mesh systems can help when running Ethernet is impractical, but wired access points usually provide more reliable performance in environments with many connected devices.",
  },
  {
    question: "How many access points does a restaurant need?",
    answer:
      "It depends on the size, layout, building materials, and number of connected devices. A network assessment helps determine appropriate placement and coverage.",
  },
  {
    question: "Do restaurants need business-grade networking equipment?",
    answer:
      "Consumer equipment can work in small environments, but restaurants often benefit from systems designed for higher device density, segmentation, and better traffic management.",
  },
] as const;

const helpSteps = [
  {
    title: "Network Assessment",
    description:
      "Evaluate Wi-Fi coverage, interference, equipment limitations, segmentation, and infrastructure design.",
    href: "/services/network-assessment",
  },
  {
    title: "Troubleshooting & Stabilization",
    description:
      "Correct configuration issues, improve segmentation, and resolve bottlenecks affecting reliability.",
    href: "/services/network-troubleshooting",
  },
  {
    title: "Design, Installation & Upgrades",
    description:
      "Build infrastructure that supports POS systems, guest Wi-Fi, cameras, staff devices, and future growth.",
    href: "/services/network-installation",
  },
] as const;

function SectionHeader({
  title,
  body,
}: {
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
        {title}
      </h2>
      {body && (
        <p className="mt-4 text-[17px] leading-[1.7] text-slate-700">
          {body}
        </p>
      )}
    </div>
  );
}

function CardGrid({
  items,
  columns = "three",
}: {
  items: readonly { title: string; description: string }[];
  columns?: "three" | "four";
}) {
  return (
    <div
      className={[
        "mt-8 grid gap-4",
        columns === "four"
          ? "sm:grid-cols-2 lg:grid-cols-4"
          : "sm:grid-cols-2 lg:grid-cols-3",
      ].join(" ")}
    >
      {items.map((item) => (
        <Surface
          key={item.title}
          padding="md"
          radius="lg"
          border
          shadow={false}
          className="transition duration-200 hover:border-[var(--pip-border-strong)] hover:bg-[var(--pip-surface)]"
        >
          <h3 className="text-[17px] font-semibold leading-snug text-[var(--pip-ink)]">
            {item.title}
          </h3>
          <p className="mt-3 text-[15px] leading-6 text-slate-700">
            {item.description}
          </p>
        </Surface>
      ))}
    </div>
  );
}

function Checklist({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-8 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <li key={item}>
          <Surface padding="md" radius="lg" border shadow={false}>
            <div className="flex gap-3 text-[16px] leading-7 text-slate-700">
              <Check
                className="mt-1 h-4 w-4 shrink-0 text-[var(--pip-orange)]"
                strokeWidth={2}
              />
              <span>{item}</span>
            </div>
          </Surface>
        </li>
      ))}
    </ul>
  );
}

export default function RestaurantsPage() {
  return (
    <main className="w-full">
      <Section tone="navy" padded="lg">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-sm text-slate-500"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li className="flex items-center gap-2">
              <Link
                href="/"
                className="hover:text-[var(--pip-ink)] hover:underline"
              >
                Home
              </Link>
              <span aria-hidden="true" className="text-slate-400">
                /
              </span>
            </li>

            <li>
              <span aria-current="page">Restaurants</span>
            </li>
          </ol>
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--pip-orange)]">
              Restaurant Networks
            </p>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-heading text-white md:text-5xl">
              Wi-Fi & Network Infrastructure for San Francisco Restaurants
            </h1>

            <p className="mt-6 text-xl leading-[1.65] text-slate-200">
              Reliable connectivity for POS systems, staff devices, guest
              Wi-Fi, cameras, streaming systems, and the growing number of
              connected technologies used in modern restaurants.
            </p>

            <p className="mt-5 text-[17px] leading-[1.75] text-slate-300">
              PluggedIn Pros helps restaurant owners stabilize and improve the
              network environments their operations depend on every day.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact?intent=assessment"
                className="inline-flex items-center justify-center rounded-md bg-[var(--pip-orange)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Start with a Network Assessment
              </Link>

              <Link href="/contact?intent=general">
                <span className="group/link inline-flex items-center gap-2 text-[16px] font-semibold text-white no-underline">
                  <span
                    aria-hidden="true"
                    className="text-[var(--pip-orange)] text-base font-bold transition-transform duration-200 group-hover/link:translate-x-0.5"
                  >
                    →
                  </span>
                  <span className="underline-offset-4 group-hover/link:underline">
                    Or just reach out
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="group/image relative aspect-[4/3] w-full overflow-hidden rounded-lg lg:max-w-[560px] lg:justify-self-end">
            <Image
              src="/images/restaurants/restaurant-wifi-network-busy-dining-room-pos.webp"
              alt="Busy restaurant environment with staff and connected point of sale technology"
              fill
              className="object-cover transition duration-300 group-hover/image:scale-[1.02]"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>
        </div>
      </Section>

      <Section tone="white" padded="lg">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
            Why Restaurant Networks Are Different
          </h2>

          <div className="mt-5 space-y-4 text-[17px] leading-[1.75] text-slate-700">
            <p>
              Restaurants depend on network connectivity in ways many other
              businesses do not. POS systems, payment terminals, handheld
              ordering devices, guest Wi-Fi, security cameras, streaming
              services, and phone systems may all share the same infrastructure.
            </p>
            <p>
              During busy service periods, dozens — sometimes hundreds — of
              devices may be connected at once. At the same time, restaurant
              environments introduce physical challenges such as stainless steel
              equipment, refrigeration units, masonry walls, patios, and
              multi-room layouts.
            </p>
            <p>
              Reliable performance requires infrastructure designed for these
              real-world conditions.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="mid" padded="lg">
        <SectionHeader title="What Makes Restaurant Networks Challenging" />
        <CardGrid items={challenges} columns="four" />
      </Section>

      <Section tone="white" padded="lg">
        <SectionHeader title="Restaurant Technologies That Depend on Reliable Networks" />
        <CardGrid items={technologies} />
      </Section>

      <Section
        tone="mid"
        padded="lg"
      >
        <SectionHeader
          title="Why Standard Wi-Fi Setups Often Struggle"
          body="Many restaurant networks begin with consumer Wi-Fi equipment, ISP-provided routers, or mesh systems. These may work at first, but often struggle as device count, coverage needs, and operational demands grow."
        />

        <Checklist items={struggles} />
      </Section>

      <Section tone="white" padded="lg">
        <SectionHeader title="What a Reliable Restaurant Network Should Include" />
        <Checklist items={reliableNetwork} />
      </Section>

      <Section tone="mid" padded="lg">
        <SectionHeader title="Real-World Restaurant Network Scenarios" />
        <CardGrid items={scenarios} columns="four" />
      </Section>

      <Section tone="white" padded="lg">
        <SectionHeader title="Common Questions About Restaurant Wi-Fi & Networks" />

        <div className="mx-auto mt-8 max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <Surface
              key={faq.question}
              padding="md"
              radius="lg"
              border
              shadow={false}
            >
              <h3 className="text-[17px] font-semibold leading-snug text-[var(--pip-ink)]">
                {faq.question}
              </h3>
              <p className="mt-3 text-[15px] leading-6 text-slate-700">
                {faq.answer}
              </p>
            </Surface>
          ))}
        </div>
      </Section>

      <Section tone="mid" padded="lg">
        <SectionHeader
          title="How PluggedIn Pros Helps Restaurants"
          body="Work typically starts by understanding the environment, then moves toward the simplest useful next step."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {helpSteps.map((step) => (
            <Surface
              key={step.title}
              padding="md"
              radius="lg"
              border
              shadow={false}
              className="transition duration-200 hover:border-[var(--pip-border-strong)] hover:bg-white"
            >
              <h3 className="text-[17px] font-semibold leading-snug text-[var(--pip-ink)]">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-6 text-slate-700">
                {step.description}
              </p>

              <Link href={step.href}>
                <span className="group/link inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--pip-ink)] no-underline">
                  <span
                    aria-hidden="true"
                    className="text-[var(--pip-orange)] text-base font-bold transition-transform duration-200 group-hover/link:translate-x-0.5"
                  >
                    →
                  </span>
                  <span className="underline-offset-4 group-hover/link:underline">
                    Learn more
                  </span>
                </span>
              </Link>
            </Surface>
          ))}
        </div>
      </Section>

      <Section tone="white" padded="lg">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <HoverImage
            src="/images/restaurants/restaurant-kitchen-chef-using-kds-network-environment.webp"
            alt="Chef using kitchen display system in busy restaurant kitchen during service"
            sizes="(min-width: 1024px) 40vw, 100vw"
            aspectClass="aspect-[4/3]"
            className="border border-[var(--pip-border)] bg-white"
          />

          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
              Serving San Francisco Restaurant Environments
            </h2>

            <div className="mt-5 space-y-4 text-[17px] leading-[1.75] text-slate-700">
              <p>
                San Francisco restaurants operate in a wide range of physical
                environments — historic buildings, dense storefronts, mixed-use
                spaces, patios, and multi-room layouts.
              </p>
              <p>
                PluggedIn Pros provides on-site network assessments,
                troubleshooting, and infrastructure improvements for restaurants
                across San Francisco.
              </p>
              <p className="text-[15px] leading-7 text-slate-600">
                Mission District, SoMa, Castro, Hayes Valley, Marina, Sunset,
                Richmond, and nearby neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <ServicesFinalCta
        title="Start with a Network Assessment"
        body="If your restaurant network has become unpredictable or difficult to manage, a structured assessment can help identify what’s happening and what to do next."
        image={{
          src: "/images/restaurants/restaurant-owner-network-consultation-laptop.webp",
          alt: "Technician discussing network performance with restaurant owner over a laptop at a bar",
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
