import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const guidanceItems = [
  "If you’re unsure what’s causing issues, start with a Review",
  "If your network is unstable or inconsistent, we can stabilize it",
  "If your system has outgrown its setup, we’ll help plan improvements",
] as const;

export function ChoosingNextStep() {
  return (
    <Section tone="white" padded="md">
      <Surface padding="lg" radius="lg" border shadow={false}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading align="center" title="Choosing the Right Next Step" />

          <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-slate-700">
            <p className="text-xl leading-[1.6] text-[var(--pip-ink)]">
              You don’t need to diagnose the problem before reaching out.
            </p>

            <p>
              Most work starts with a simple review to understand what’s
              happening, then moves toward the right next step based on what we
              find.
            </p>
          </div>

          <ul className="mx-auto mt-8 max-w-2xl space-y-3 text-left">
            {guidanceItems.map((item) => (
              <li
                key={item}
                className="rounded-md border border-[var(--pip-border)] bg-white px-5 py-4 text-[16px] leading-7 text-slate-700"
              >
                <span className="font-medium text-[var(--pip-ink)]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-[1.7] text-[var(--pip-ink)]">
            The goal is simple: understand what’s happening, then move forward
            with the right solution.
          </p>
        </div>
      </Surface>
    </Section>
  );
}
