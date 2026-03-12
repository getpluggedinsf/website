import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import PlugIcon from "@/components/icons/PlugIcon";

export default function Hero() {
  return (
    <Section
      tone="warm"
      containerClassName="grid items-center gap-12 md:grid-cols-2"
    >
      <div className="max-w-[36rem]">
        <h1 className="font-heading tracking-heading text-[2rem] font-semibold leading-[1.05] text-[var(--pip-ink)] sm:text-[2.25rem] lg:text-[2.55rem]">
          Reliable Wi-Fi & Network Infrastructure for San&nbsp;Francisco Restaurants and  Small&nbsp;Businesses
        </h1>

        <div className="mt-6 max-w-xl space-y-4 text-[18px] font-medium leading-relaxed text-slate-700">
          <p>
            Built for busy environments where{" "}
            <span className="whitespace-nowrap">POS systems</span>, staff devices,
            guest <span className="whitespace-nowrap">Wi-Fi</span>, security cameras,
            and streaming systems all share the same infrastructure.
          </p>

          <p>
            PluggedIn Pros designs and stabilizes networks so these systems
            perform predictably — even during peak service hours.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/contact?intent=schedule"
            className="btn-tap btn-mobile-full inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-md bg-[var(--pip-orange)] px-6 py-3 text-sm font-medium text-white no-underline transition hover:opacity-90"
          >
            Schedule a Network Assessment
          </Link>
        </div>

        <div className="mt-6 flex max-w-xl items-start gap-2 text-sm leading-relaxed text-[var(--pip-navy)]">
          <PlugIcon className="mt-[2px] h-4 w-4 shrink-0 text-[var(--pip-orange)]" />
          <p>
            Focused exclusively on Wi-Fi and network infrastructure for small
            businesses.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="h-[460px] overflow-hidden rounded-xl border border-[var(--pip-border)] bg-white shadow-sm md:h-[560px]">
          <Image
            src="/images/hero/restaurant-network-ap.jpg"
            alt="Business Wi-Fi access point installed in a commercial environment"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
