import Link from "next/link";
import { HoverImage } from "@/components/common/HoverImage";
import Section from "@/components/layout/Section";

type ServiceHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
}: ServiceHeroProps) {
  return (
    <Section tone="white" padded="lg">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--pip-orange)]">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-5xl">
            {title}
          </h1>

          <p className="mt-6 text-xl leading-[1.6] text-slate-700 md:text-[1.35rem]">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-[var(--pip-orange)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105"
            >
              {primaryCta.label}
            </Link>

            <Link
              href={secondaryCta.href}
              className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[var(--pip-ink)] no-underline"
            >
              <span aria-hidden="true" className="text-[var(--pip-orange)]">
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
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="border border-[var(--pip-border)] bg-white"
        />
      </div>
    </Section>
  );
}
