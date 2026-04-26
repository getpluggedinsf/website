import type { ReactNode } from "react";
import Section from "@/components/layout/Section";
import Surface from "@/components/layout/Surface";
import { ServiceList } from "./ServiceList";

type ServiceSectionProps = {
  title: string;
  body?: string | string[];
  items?: readonly string[];
  tone?: "white" | "mid";
  contained?: boolean;
  children?: ReactNode;
};

export function ServiceSection({
  title,
  body,
  items,
  tone = "white",
  contained = false,
  children,
}: ServiceSectionProps) {
  const paragraphs = Array.isArray(body) ? body : body ? [body] : [];

  const content = (
    <div className="max-w-3xl">
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)]">
        {title}
      </h2>

      {paragraphs.length > 0 && (
        <div className="mt-5 space-y-4 text-[17px] leading-[1.7] text-slate-700">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {items && <ServiceList items={items} />}

      {children && <div className="mt-5">{children}</div>}
    </div>
  );

  return (
    <Section tone={tone} padded="md">
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
