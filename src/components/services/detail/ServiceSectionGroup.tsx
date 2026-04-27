import type { ReactNode } from "react";
import Section from "@/components/layout/Section";
import Surface from "@/components/layout/Surface";

type ServiceSectionGroupProps = {
  title?: string;
  intro?: string;
  tone?: "white" | "mid";
  contained?: boolean;
  children: ReactNode;
};

export function ServiceSectionGroup({
  title,
  intro,
  tone = "white",
  contained = false,
  children,
}: ServiceSectionGroupProps) {
  const content = (
    <div>
      {(title || intro) && (
        <div className="mb-10 max-w-3xl">
          {title && (
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)] md:text-4xl">
              {title}
            </h2>
          )}

          {intro && (
            <p className="mt-4 text-[17px] leading-[1.7] text-slate-700">
              {intro}
            </p>
          )}
        </div>
      )}

      <div className="space-y-8">{children}</div>
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
