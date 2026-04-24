// src/components/services/StructuredApproach.tsx

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const approachCards = [
  {
    title: "Diagnose the root causes",
    body: "Analyze the existing network: coverage, capacity, interference, equipment limitations, configuration issues, and the symptoms affecting day-to-day operations.",
  },
  {
    title: "Stabilize existing systems",
    body: "Address the issues causing slowdowns, dropouts, device conflicts, or unreliable business systems before adding unnecessary complexity.",
  },
  {
    title: "Design the right next step",
    body: "Upgrade or expand the network when the existing environment can no longer support operational demand reliably."
  },
];

export function StructuredApproach() {
  return (
    <Section tone="white" padded="lg">
      <Surface padding="lg" radius="lg" border shadow={false}>
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--pip-orange)]">
            How We Work
          </div>

          <div className="mt-4">
            <SectionHeading
              align="center"
              title="A Structured Approach to Reliable Networks"
            />
          </div>

          <p className="mt-5 text-xl leading-[1.6] text-[var(--pip-ink)] md:text-[1.4rem]">
            Improving network reliability starts by separating symptoms from causes.
            From there, the path usually falls into one of three practical directions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {approachCards.map((card, index) => (
            <Surface key={card.title} padding="md" radius="md" border shadow={false}>
              <div className="space-y-3">
                <div className="text-sm font-semibold tracking-[0.12em] text-[var(--pip-orange)]/85">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-heading text-2xl font-semibold leading-snug tracking-heading text-[var(--pip-ink)]">
                  {card.title}
                </h3>

                <p className="text-base leading-7 text-slate-700">{card.body}</p>
              </div>
            </Surface>
          ))}
        </div>
      </Surface>
    </Section>
  );
}
