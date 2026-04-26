import type { ReactNode } from "react";
import Surface from "@/components/layout/Surface";
import { ServiceList } from "./ServiceList";

type ServiceSectionVariant =
  | "anchor"
  | "scan"
  | "process"
  | "decision"
  | "outcome"
  | "reassurance"
  | "related";

type ServiceSectionProps = {
  title: string;
  body?: string | string[];
  items?: readonly string[];
  contained?: boolean;
  children?: ReactNode;
  variant?: ServiceSectionVariant;
};

const variantStyles: Record<
  ServiceSectionVariant,
  {
    body?: string;
    list?: string;
    listContainer?: string;
    childrenContainer?: string;
  }
> = {
  anchor: {
    body: "mt-4 space-y-4 text-[17px] leading-[1.75] text-slate-700",
  },
  scan: {
    body: "mt-4 space-y-3 text-[17px] leading-[1.65] text-slate-700",
    list: "space-y-3 text-[16px] leading-7 text-slate-700",
    listContainer: "mt-5",
  },
  process: {
    body: "mt-5 space-y-5 text-[17px] leading-[1.7] text-slate-700",
  },
  decision: {
    list: "space-y-4 text-[16px] leading-7 font-medium text-[var(--pip-ink)]",
    listContainer: "mt-5",
  },
  outcome: {
    list: "space-y-2 text-[16px] leading-7 text-slate-700",
    listContainer: "mt-4",
  },
  reassurance: {
    body: "mt-5 space-y-4 text-[17px] leading-[1.75] text-slate-700",
  },
  related: {
    childrenContainer: "mt-5",
  },
};

export function ServiceSection({
  title,
  body,
  items,
  contained = false,
  children,
  variant = "anchor",
}: ServiceSectionProps) {
  const paragraphs = Array.isArray(body) ? body : body ? [body] : [];
  const styles = variantStyles[variant];

  const content = (
    <div className="max-w-3xl">
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)]">
        {title}
      </h2>

      {paragraphs.length > 0 && (
        <div
          className={
            styles.body ??
            "mt-4 space-y-3 text-[17px] leading-[1.65] text-slate-700"
          }
        >
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {items && (
        <div className={styles.listContainer ?? "mt-4"}>
          <ServiceList
            items={items}
            className={
              styles.list ?? "space-y-2 text-[16px] leading-7 text-slate-700"
            }
          />
        </div>
      )}

      {children && (
        <div className={styles.childrenContainer ?? "mt-5"}>{children}</div>
      )}
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
