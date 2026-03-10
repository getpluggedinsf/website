import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const problems = [
  {
    title: "POS disruptions",
    body: "Terminals that occasionally lag or disconnect during service.",
  },
  {
    title: "Peak-hour slowdowns",
    body: "Wi-Fi performance drops during lunch or dinner rush.",
  },
  {
    title: "Coverage gaps",
    body: "Dead zones in patios, kitchens, or back offices.",
  },
  {
    title: "Guest traffic interference",
    body: "Guest usage affects internal systems and business-critical devices.",
  },
  {
    title: "Unstructured growth",
    body: "Equipment gets added over time without a clear network plan.",
  },
  {
    title: "Temporary fixes",
    body: "Mesh systems or consumer Wi-Fi gear don’t address the root problem.",
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
        {problems.map((problem) => (
          <Surface
            key={problem.title}
            className="h-full"
            padding="md"
            radius="md"
            border
            shadow={false}
          >
            <div className="flex h-full flex-col">
              <h3 className="text-[20px] font-semibold leading-snug text-[var(--pip-ink)]">
                {problem.title}
              </h3>

              <div className="mt-3 mb-4 h-[3px] w-10 bg-[var(--pip-orange)]" />

              <p className="text-base leading-relaxed text-slate-700">
                {problem.body}
              </p>
            </div>
          </Surface>
        ))}
      </div>

      <div className="mt-10 max-w-3xl mx-auto">
        <p className="text-center text-base font-medium leading-relaxed text-[var(--pip-ink)] md:text-lg">
          When connectivity becomes unpredictable, attention shifts away from
          customers, staff, and daily operations.
        </p>
      </div>
    </Section>
  );
}
