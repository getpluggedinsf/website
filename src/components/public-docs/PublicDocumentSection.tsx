import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function PublicDocumentSection({
  title,
  children,
}: Props) {
  return (
    <section className="mb-10">
      <h2
        className="mb-4 text-2xl font-semibold text-[var(--pip-ink)]"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        {title}
      </h2>

      <div className="space-y-4 leading-7 text-[var(--pip-ink)]">
        {children}
      </div>
    </section>
  );
}
