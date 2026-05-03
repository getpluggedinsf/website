import Link from "next/link";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import Surface from "@/components/layout/Surface";

const guidanceItems = [
  {
    prompt: "If you're not sure what's causing issues",
    action: "Start with a Review",
    href: "/contact?intent=assessment",
  },
  {
    prompt: "If your network is unstable or inconsistent",
    action: "Focus on Stabilization",
    href: "/contact?intent=troubleshooting",
  },
  {
    prompt: "If your system has outgrown its setup",
    action: "Plan Improvements",
    href: "/contact?intent=installation",
  },
] as const;

export function ChoosingNextStep() {
  return (
    <Section tone="white" padded="md">
      <Surface padding="lg" radius="lg" border shadow={false}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading align="center" title="Choosing the Right Next Step" />

          <p className="mt-5 text-xl leading-[1.55] text-[var(--pip-ink)] md:text-[1.4rem]">
            You don’t need to diagnose the problem before reaching out.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.65] text-slate-700">
            Most work starts with a simple review, then moves toward the right
            solution based on what we find.
          </p>

          <div className="mx-auto mt-7 max-w-[680px] rounded-lg border border-[var(--pip-border)] bg-[var(--pip-surface)]/70 px-5 py-5 text-left sm:px-6 sm:py-6">
            <ul className="space-y-5">
              {guidanceItems.map((item) => (
                <li key={item.prompt} className="flex gap-3">
                  <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-orange)]" />

                  <div>
                    <p className="text-[16px] leading-6 text-slate-700">
                      {item.prompt}
                    </p>

                    <Link href={item.href}>
                      <span className="group/link inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--pip-ink)] no-underline">
                        <span
                          aria-hidden="true"
                          className="text-[var(--pip-orange)] text-base font-bold transition-transform duration-200 group-hover/link:translate-x-0.5"
                        >
                          →
                        </span>
                        <span className="underline-offset-4 group-hover/link:underline">
                          {item.action}
                        </span>
                      </span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-6 max-w-2xl space-y-2 text-[16px] leading-[1.6]">
            <p className="text-slate-700">
              Or just{" "}
              <Link
                href="/contact?intent=general"
                className="font-medium text-[var(--pip-orange)] underline-offset-4 hover:underline"
              >
                reach out
              </Link>{" "}
              — we’ll help you figure out the right place to start.
            </p>

            <p className="font-medium text-[var(--pip-ink)]">
              The goal is simple: understand what’s happening, then move forward
              with the right solution.
            </p>
          </div>
        </div>
      </Surface>
    </Section>
  );
}
