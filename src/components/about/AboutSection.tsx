// src/components/about/AboutSection.tsx

import Section from "@/components/layout/Section";
import Surface from "@/components/layout/Surface";

type AboutSectionProps = {
  title: string;
  body?: string | string[];
  items?: string[];
  tone?: "white" | "mid";
  contained?: boolean;
};

export function AboutSection({
  title,
  body,
  items,
  tone = "white",
  contained = false,
}: AboutSectionProps) {
  const paragraphs = Array.isArray(body) ? body : body ? body.split("\n\n") : [];

  const content = (
    <div className="mx-auto max-w-3xl">
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
        {title}
      </h2>

      {paragraphs.length > 0 && (
        <div className="mt-5 space-y-4 text-[17px] leading-[1.75] text-slate-700">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {items && (
        <ul className="mt-5 space-y-3 text-[16px] leading-7 text-slate-700">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-orange)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <Section tone={tone} padded="lg">
      {contained ? (
        <Surface padding="lg" radius="lg" border shadow={false}>
          {content}
        </Surface>
      ) : (
        content
      )}
    </Section>
  );
}
