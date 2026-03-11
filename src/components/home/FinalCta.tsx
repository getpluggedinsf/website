import Link from "next/link";
import Section from "@/components/layout/Section";

export default function FinalCta() {
  return (
    <Section tone="navy" padded="xl">
      <div className="max-w-3xl">
        <h2 className="font-heading tracking-heading text-3xl font-semibold text-white md:text-4xl">
          Start with a Network Assessment
        </h2>

        <p className="mt-5 text-base leading-relaxed text-slate-200 md:text-lg">
          If your Wi-Fi or network infrastructure has become unpredictable, the
          first step is understanding what’s happening in the environment.
        </p>

        <p className="mt-4 text-base leading-relaxed text-slate-200 md:text-lg">
          PluggedIn Pros performs structured on-site assessments to identify
          coverage gaps, interference, equipment limitations, and design issues
          before recommending next steps.
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact?intent=schedule"
            className="btn-tap btn-mobile-full inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-md bg-[var(--pip-orange)] px-6 py-3 text-sm font-medium text-white no-underline transition hover:opacity-90"
          >
            Schedule a Network Assessment
          </Link>

          <Link
            href="/services/reliability-review"
            className="text-sm font-medium text-white underline-offset-4 hover:underline"
          >
            Learn what happens during an assessment
          </Link>
        </div>

        <p className="mt-8 text-sm font-medium text-slate-200">
          Response within one business day.
        </p>
      </div>
    </Section>
  );
}
