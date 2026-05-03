import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import Section from "@/components/layout/Section";
import Surface from "@/components/layout/Surface";
import { HoverImage } from "@/components/common/HoverImage";
import { ServiceHero } from "@/components/services/detail/ServiceHero";
import { ServicesFinalCta } from "@/components/services/ServicesFinalCta";

type HeroProps = Parameters<typeof ServiceHero>[0];
type FinalCtaProps = Parameters<typeof ServicesFinalCta>[0];

type CardItem = {
  title: string;
  description: string;
};

type RelatedService = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

type ServiceDetailPageProps = {
  hero: HeroProps;
  intro: {
    title: string;
    body: ReactNode[];
  };
  involves: {
    title: string;
    body?: ReactNode;
    items: CardItem[];
  };
  process: {
    title: string;
    steps: CardItem[];
  };
  fit: {
    title: string;
    items: ReactNode[];
    note?: ReactNode;
  };
  outcomes: {
    title: string;
    items: ReactNode[];
    note?: ReactNode;
  };
  next: {
    title: string;
    body: ReactNode[];
  };
  related: {
    title: string;
    services: RelatedService[];
  };
  finalCta: FinalCtaProps;
};

function SectionTitle({
  title,
  body,
  align = "center",
}: {
  title: string;
  body?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
        {title}
      </h2>
      {body && (
        <p className="mt-4 text-[17px] leading-[1.7] text-slate-700">{body}</p>
      )}
    </div>
  );
}

function FeatureGrid({ title, body, items }: ServiceDetailPageProps["involves"]) {
  return (
    <Section tone="mid" padded="lg">
      <SectionTitle title={title} body={body} />

      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-4">
        {items.map((item) => (
          <Surface
            key={item.title}
            padding="md"
            radius="lg"
            border
            shadow={false}
            className="w-full transition duration-200 hover:border-[var(--pip-border-strong)] hover:bg-[var(--pip-surface)] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <h3 className="text-[17px] font-semibold leading-snug text-[var(--pip-ink)]">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-6 text-slate-700">
              {item.description}
            </p>
          </Surface>
        ))}
      </div>
    </Section>
  );
}

function ProcessSteps({ title, steps }: ServiceDetailPageProps["process"]) {
  return (
    <Section tone="white" padded="lg">
      <SectionTitle title={title} />

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Surface key={step.title} padding="md" radius="lg" border shadow={false}>
            <div className="text-sm font-semibold tracking-[0.14em] text-[var(--pip-orange)]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3 text-[17px] font-semibold leading-snug text-[var(--pip-ink)]">
              {step.title}
            </h3>
            <p className="mt-3 text-[15px] leading-6 text-slate-700">
              {step.description}
            </p>
          </Surface>
        ))}
      </div>
    </Section>
  );
}

function ChecklistPanel({
  title,
  items,
  note,
}: {
  title: string;
  items: ReactNode[];
  note?: ReactNode;
}) {
  return (
    <Surface padding="lg" radius="lg" border shadow={false}>
      <h3 className="font-heading text-2xl font-semibold tracking-heading text-[var(--pip-ink)]">
        {title}
      </h3>

      <ul className="mt-5 space-y-3 text-[16px] leading-7 text-slate-700">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--pip-orange)]" strokeWidth={2} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {note && (
        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          {note}
        </p>
      )}
    </Surface>
  );
}

function FitAndOutcomes({
  fit,
  outcomes,
}: {
  fit: ServiceDetailPageProps["fit"];
  outcomes: ServiceDetailPageProps["outcomes"];
}) {
  return (
    <Section tone="mid" padded="lg">
      <div className="grid gap-6 lg:grid-cols-2">
        <ChecklistPanel title={fit.title} items={fit.items} note={fit.note} />
        <ChecklistPanel title={outcomes.title} items={outcomes.items} note={outcomes.note} />
      </div>
    </Section>
  );
}

function Narrative({ title, body }: ServiceDetailPageProps["next"]) {
  return (
    <Section tone="white" padded="lg">
      <div className="max-w-3xl">
        <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-[17px] leading-[1.75] text-slate-700">
          {body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

function RelatedServices({ title, services }: ServiceDetailPageProps["related"]) {
  return (
    <Section tone="mid" padded="lg">
      <SectionTitle title={title} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Surface
            key={service.href}
            padding="sm"
            radius="lg"
            border
            shadow={false}
            className="overflow-hidden transition duration-200 hover:border-[var(--pip-border-strong)]"
          >
            <HoverImage
              src={service.image}
              alt={service.alt}
              sizes="(min-width: 768px) 50vw, 100vw"
              aspectClass="aspect-[16/9]"
              className="border border-[var(--pip-border)] bg-white"
            />

            <div className="px-3 pb-3 pt-5">
              <h3 className="font-heading text-2xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)]">
                {service.title}
              </h3>
              <p className="mt-3 text-[16px] leading-7 text-slate-700">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--pip-ink)] no-underline"
              >
                <span className="text-[var(--pip-orange)]" aria-hidden="true">
                  →
                </span>
                <span className="underline-offset-4 group-hover/link:underline">
                  Learn more
                </span>
              </Link>
            </div>
          </Surface>
        ))}
      </div>
    </Section>
  );
}

export function ServiceDetailPage({
  hero,
  intro,
  involves,
  process,
  fit,
  outcomes,
  next,
  related,
  finalCta,
}: ServiceDetailPageProps) {
  return (
    <main className="w-full">
      <ServiceHero {...hero} />

      <Section tone="white" padded="lg">
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
            {intro.title}
          </h2>
          <div className="mt-5 space-y-4 text-[17px] leading-[1.75] text-slate-700">
            {intro.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <FeatureGrid {...involves} />
      <ProcessSteps {...process} />
      <FitAndOutcomes fit={fit} outcomes={outcomes} />
      <Narrative {...next} />
      <RelatedServices {...related} />

      <ServicesFinalCta {...finalCta} />
    </main>
  );
}
