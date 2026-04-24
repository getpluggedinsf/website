import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/Section";

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
            Most clients start with a Network Reliability Review to understand
            what’s working, what isn’t, and what to do next.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/request-help"
              className="inline-flex items-center justify-center rounded-md bg-[var(--pip-orange)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[var(--pip-orange)] focus:ring-offset-2 focus:ring-offset-[var(--pip-navy)]"
            >
              Request a Network Reliability Review
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 underline-offset-4 transition hover:text-white hover:underline"
            >
              Or just contact us
              <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.9} />
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/15 bg-white/5">
          <Image
            src="/images/sections/restaurant-devices.jpg"
            alt="Small business restaurant environment with connected devices in normal operation"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
