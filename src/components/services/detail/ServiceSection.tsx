import type { ReactNode } from "react";
import Surface from "@/components/layout/Surface";
import { ServiceList, type ServiceListItem } from "./ServiceList";

type ServiceSectionVariant =
  | "anchor"
  | "scan"
  | "process"
  | "decision"
  | "outcome"
  | "reassurance"
  | "related"
  | "grid";

type ServiceSectionProps = {
  title: string;
  body?: string | string[];
  items?: readonly ServiceListItem[];
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
  grid: {
    body: "mx-auto mt-4 max-w-3xl text-center text-[17px] leading-[1.65] text-slate-700",
    listContainer: "mt-5",
  },
};

function GridItems({ items }: { items: readonly ServiceListItem[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((item) => {
        const card =
          typeof item === "string" ? { title: item, description: undefined } : item;

        return (
          <div
            key={card.title}
            className="w-full rounded-lg border border-[var(--pip-border)] bg-white p-5 transition duration-200 hover:border-[var(--pip-border-strong)] hover:bg-[var(--pip-surface)] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <h3 className="text-[17px] font-semibold leading-snug text-[var(--pip-ink)]">
              {card.title}
            </h3>

            {card.description && (
              <p className="mt-3 text-[15px] leading-6 text-slate-700">
                {card.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

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
  const isGrid = variant === "grid";

  const content = (
    <div className={isGrid ? "max-w-6xl" : "max-w-3xl"}>
      <h2
        className={[
          "font-heading text-3xl font-semibold leading-tight tracking-heading text-[var(--pip-ink)]",
          isGrid ? "text-center" : "",
        ].join(" ")}
      >
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
          {isGrid ? (
            <GridItems items={items} />
          ) : (
            <ServiceList
              items={items}
              className={
                styles.list ?? "space-y-2 text-[16px] leading-7 text-slate-700"
              }
            />
          )}
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
