import Link from "next/link";
import Section from "@/components/layout/Section";
import { HoverImage } from "@/components/common/HoverImage";

export function ServicesFinalCta() {
  return (
    <Section tone="navy" padded="xl">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--pip-orange)]">
            Ready when you are
          </p>

          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-heading text-white md:text-5xl">
            Not Sure Where to Start?
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            Most clients start with a simple review to understand what’s
            working, what isn’t, and what to do next.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
            <Link
              href="/contact?intent=assessment"
              className="inline-flex items-center justify-center rounded-md bg-[var(--pip-orange)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[var(--pip-orange)] focus:ring-offset-2 focus:ring-offset-[var(--pip-navy)]"
            >
              Start with a Network Reliability Review
            </Link>

            <Link
              href="/contact?intent=general"
              className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white/75 no-underline transition hover:text-white"
            >
              <span aria-hidden="true" className="text-[var(--pip-orange)] no-underline">
                →
              </span>
              <span className="underline-offset-4 group-hover/link:underline">
                Or just reach out
              </span>
            </Link>
          </div>
        </div>

        <HoverImage
          src="/images/services/where-to-start/restaurant-network-consultation-small-business-wifi-review.webp"
          alt="Technician and restaurant owner reviewing network performance on a tablet during a Wi-Fi assessment"
          className="border border-white/15 bg-white/5"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
    </Section>
  );
}
