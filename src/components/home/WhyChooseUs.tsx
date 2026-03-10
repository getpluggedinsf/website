import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const reasons = [
  {
    title: "Deep infrastructure background",
    body: "Built on decades of experience supporting networked systems and real-world business operations.",
  },
  {
    title: "Restaurant & small-business experience",
    body: "Hands-on experience in busy operational environments where reliable connectivity matters every day.",
  },
  {
    title: "Structured problem solving",
    body: "Root causes are identified and addressed rather than masked by temporary fixes.",
  },
  {
    title: "Focused expertise",
    body: "Dedicated exclusively to Wi-Fi and network infrastructure.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section tone="white" padded="lg">
      <SectionHeading
        align="center"
        title="Why Small Businesses Choose PluggedIn Pros"
        body="Reliable networks require thoughtful design, structured troubleshooting, and practical experience."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <Surface
              key={reason.title}
              className="h-full"
              padding="md"
              radius="md"
              border
              shadow={false}
            >
              <div className="flex h-full flex-col">
                <h3 className="text-[22px] font-semibold leading-snug text-[var(--pip-ink)]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-[17px] leading-relaxed text-slate-700">
                  {reason.body}
                </p>
              </div>
            </Surface>
          ))}
        </div>

        <Surface
          tone="light"
          padding="lg"
          radius="md"
          border
          shadow={false}
          className="h-fit self-start"
        >
          <div className="max-w-xl">
            <blockquote className="text-[22px] leading-relaxed text-[var(--pip-ink)]">
              “Reliable connectivity should support operations quietly in the
              background — not become another source of friction.”
            </blockquote>

            <p className="mt-5 text-sm font-medium tracking-[0.04em] text-slate-600">
              PluggedIn Pros approach
            </p>
          </div>
        </Surface>
      </div>
    </Section>
  );
}
