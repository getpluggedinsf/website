import Link from "next/link";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";

type SectionBlock = {
  title: string;
  intro?: string;
  bullets?: string[];
  closing?: string;
};

type RelatedLink = {
  href: string;
  label: string;
};

type ServiceDetailPageProps = {
  backHref: string;
  backLabel: string;
  title: string;
  opening: string[];
  involves: SectionBlock;
  whenItMakesSense: SectionBlock;
  whatYouGet: SectionBlock;
  whatHappensNext: SectionBlock;
  related: RelatedLink[];
  finalCtaTitle: string;
  finalCtaLabel: string;
  finalCtaHref: string;
};

function BodyBlock({
  intro,
  bullets,
  closing,
}: {
  intro?: string;
  bullets?: string[];
  closing?: string;
}) {
  return (
    <div className="mt-6 max-w-3xl space-y-4 text-[17px] leading-[1.8] text-slate-700">
      {intro ? <p>{intro}</p> : null}

      {bullets ? (
        <ul className="space-y-2">
          {bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : null}

      {closing ? <p>{closing}</p> : null}
    </div>
  );
}

export default function ServiceDetailPage({
  backHref,
  backLabel,
  title,
  opening,
  involves,
  whenItMakesSense,
  whatYouGet,
  whatHappensNext,
  related,
  finalCtaTitle,
  finalCtaLabel,
  finalCtaHref,
}: ServiceDetailPageProps) {
  return (
    <main className="w-full">
      <Section tone="warm" padded="lg">
        <div className="max-w-[42rem]">
          <Link
            href={backHref}
            className="text-sm font-medium text-[var(--pip-ink)] underline-offset-4 hover:underline"
          >
            ← {backLabel}
          </Link>

          <h1 className="mt-5 font-heading tracking-heading text-[2rem] font-semibold leading-[1.05] text-[var(--pip-ink)] sm:text-[2.25rem] lg:text-[2.55rem]">
            {title}
          </h1>

          <div className="mt-6 max-w-xl space-y-4 text-[18px] leading-[1.75] text-slate-700">
            {opening.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="light" padded="lg">
        <SectionHeading align="left" title={involves.title} />
        <BodyBlock
          intro={involves.intro}
          bullets={involves.bullets}
          closing={involves.closing}
        />
      </Section>

      <Section tone="mid" padded="lg">
        <SectionHeading align="left" title={whenItMakesSense.title} />
        <BodyBlock
          intro={whenItMakesSense.intro}
          bullets={whenItMakesSense.bullets}
          closing={whenItMakesSense.closing}
        />
      </Section>

      <Section tone="white" padded="lg">
        <SectionHeading align="left" title={whatYouGet.title} />
        <BodyBlock
          intro={whatYouGet.intro}
          bullets={whatYouGet.bullets}
          closing={whatYouGet.closing}
        />
      </Section>

      <Section tone="light" padded="lg">
        <SectionHeading align="left" title={whatHappensNext.title} />
        <BodyBlock
          intro={whatHappensNext.intro}
          bullets={whatHappensNext.bullets}
          closing={whatHappensNext.closing}
        />
      </Section>

      <Section tone="mid" padded="lg">
        <SectionHeading align="left" title="Related Services" />

        <div className="mt-6 max-w-3xl">
          <div className="grid gap-3 sm:gap-4">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[17px] leading-[1.8] text-[var(--pip-ink)] underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="navy" padded="xl">
        <div className="max-w-[42rem]">
          <h2 className="font-heading tracking-heading text-3xl font-bold text-white md:text-4xl">
            {finalCtaTitle}
          </h2>

          <div className="mt-8">
            <Link
              href={finalCtaHref}
              className="btn-tap btn-mobile-full inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-md bg-[var(--pip-orange)] px-6 py-3 text-sm font-medium text-white no-underline transition hover:opacity-90"
            >
              {finalCtaLabel}
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
