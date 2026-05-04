import Link from "next/link";
import Section from "@/components/layout/Section";
import { HoverImage } from "@/components/common/HoverImage";

type ServicesFinalCtaProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  image?: {
    src: string;
    alt: string;
  };
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

const defaultImage = {
  src: "/images/services/where-to-start/restaurant-network-consultation-small-business-wifi-review-v1.webp",
  alt: "Technician and restaurant owner reviewing network performance on a tablet during a Wi-Fi assessment",
};

export function ServicesFinalCta({
  eyebrow = "Ready when you are",
  title = "Not Sure Where to Start?",
  body = "Most clients start with a simple review to understand what’s working, what isn’t, and what to do next.",
  image = defaultImage,
  primaryCta = {
    label: "Start with a Network Assessment",
    href: "/contact?intent=assessment",
  },
  secondaryCta = {
    label: "Or just reach out",
    href: "/contact?intent=general",
  },
}: ServicesFinalCtaProps) {
  return (
    <Section tone="navy" padded="xl">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--pip-orange)]">
            {eyebrow}
          </p>

          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-heading text-white md:text-5xl">
            {title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            {body}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-[var(--pip-orange)] px-6 py-3.5 text-[16px] font-semibold text-white transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[var(--pip-orange)] focus:ring-offset-2 focus:ring-offset-[var(--pip-navy)]"
            >
              {primaryCta.label}
            </Link>

            <Link
              href={secondaryCta.href}
              className="group/link inline-flex items-center gap-2 text-[16px] font-semibold text-white no-underline"
            >
              <span aria-hidden="true" className="text-[var(--pip-orange)] text-base font-bold transition-transform duration-200 group-hover/link:translate-x-0.5">
                →
              </span>
              <span className="underline-offset-4 group-hover/link:underline">
                {secondaryCta.label}
              </span>
            </Link>
          </div>
        </div>

        <HoverImage
          src={image.src}
          alt={image.alt}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="border border-white/15 bg-white/5"
        />
      </div>
    </Section>
  );
}
