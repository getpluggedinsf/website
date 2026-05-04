import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Surface from "@/components/layout/Surface";

export default function FinalCta() {
  return (
    <Section tone="navy" padded="xl">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">

        {/* LEFT: TEXT */}
        <div className="max-w-[42rem]">
          <h2 className="font-heading tracking-heading text-3xl font-bold text-white md:text-4xl">
            Start with a Network Assessment
          </h2>

          <p className="mt-5 text-[17px] leading-[1.8] text-slate-200">
            If your Wi-Fi or network infrastructure has become unpredictable, the
            first step is understanding what’s happening in the environment.
          </p>

          <p className="mt-4 text-[17px] leading-[1.8] text-slate-200">
            PluggedIn Pros performs structured on-site assessments to identify
            coverage gaps, interference, equipment limitations, and design issues
            before recommending next steps.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact?intent=schedule"
              className="btn-tap btn-mobile-full inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-md bg-[var(--pip-orange)] px-6 py-3.5 text-[16px] font-medium text-white no-underline transition hover:opacity-90 tracking-[0.02em]"
            >
              Schedule a Network Assessment
            </Link>

            <Link href="/services/network-assessment">
              <span className="group/link inline-flex items-start gap-2 text-[16px] font-semibold text-white no-underline">
                <span
                  aria-hidden="true"
                  className="mt-0.5 text-[17px] font-semibold text-[var(--pip-orange)] transition-transform duration-200 group-hover/link:translate-x-0.5"
                >
                  →
                </span>
                <span className="underline-offset-4 group-hover/link:underline">
                  Learn what happens during an assessment
                </span>
              </span>
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-slate-300">
            Response within one business day.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <Surface
          tone="light"
          padding="sm"
          radius="lg"
          border={false}
          shadow={false}
          className="group overflow-hidden bg-white/10"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/home/network-assessment/wifi-analysis-tablet-cafe.webp"
              alt="Technician analyzing Wi-Fi performance on a tablet in a café environment"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </Surface>

      </div>
    </Section>
  );
}
