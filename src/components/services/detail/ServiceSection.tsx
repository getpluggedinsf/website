import type { ReactNode } from "react";
import Surface from "@/components/layout/Surface";
import { ServiceList } from "./ServiceList";

type ServiceSectionProps = {
  title: string;
  body?: string | string[];
  items?: readonly string[];
  contained?: boolean;
  children?: ReactNode;
};

export function ServiceSection({
  title,
  body,
  items,
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
        <div className="mt-4 space-y-3 text-[17px] leading-[1.65] text-slate-700">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {items && <ServiceList items={items} />}

      {children && <div className="mt-5">{children}</div>}
    </div>
  );

  return contained ? (
    <Surface padding="lg" radius="lg" border shadow={false}>
      {content}
    </Surface>
  ) : (
    content
  );
}
