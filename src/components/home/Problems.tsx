import {
  Gauge,
  Waypoints,
  TabletSmartphone,
  Users,
  WifiOff,
  Wrench,
} from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const problems = [
  {
    title: "POS disruptions",
    body: "Terminals that occasionally lag or disconnect during service.",
    icon: TabletSmartphone,
  },
  {
    title: "Peak-hour slowdowns",
    body: "Wi-Fi performance drops during lunch or dinner rush.",
    icon: Gauge,
    flip: true
  },
  {
    title: "Coverage gaps",
    body: "Dead zones in patios, kitchens, or back offices.",
    icon: WifiOff,
  },
  {
    title: "Guest traffic interference",
    body: "Guest usage affects internal systems and business-critical devices.",
    icon: Users,
  },
  {
    title: "Unstructured growth",
    body: "Equipment gets added over time without a clear network plan.",
    icon: Waypoints,
  },
  {
    title: "Temporary fixes",
    body: "Mesh systems or consumer Wi-Fi gear don’t address the root problem.",
    icon: Wrench,
  },
];

export default function Problems() {
  return (
    <Section tone="light" padded="lg">
      <SectionHeading
        align="center"
        title="Signs Your Network May Be Struggling"
        body="Network problems rarely begin as full outages. More often, they show up first as recurring friction that disrupts daily operations."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => {
          const Icon = problem.icon;

          return (
            <Surface
              key={problem.title}
              className="h-full bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[var(--pip-ink)] hover:shadow-sm"
              padding="md"
              radius="md"
              border
              shadow={false}
            >
              <div className="flex h-full flex-col items-center text-center">
                <Icon
                  className={`mb-4 h-7 w-7 text-[var(--pip-orange)]/90 ${problem.flip ? "scale-x-[-1]" : ""}`}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                <h3 className="text-[22px] font-semibold leading-snug text-[var(--pip-ink)]">
                  {problem.title}
                </h3>

                <p className="mt-1 max-w-[26ch] text-[17px] leading-relaxed text-slate-700 flex-grow">
                  {problem.body}
                </p>
              </div>
            </Surface>
          );
        })}
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <p className="text-center text-base font-medium leading-relaxed text-[var(--pip-ink)] md:text-lg">
          When connectivity becomes unpredictable, attention shifts away from
          customers, staff, and daily operations. Understanding what is happening in
          the network is the first step toward restoring stability.
        </p>
      </div>
    </Section>
  );
}
