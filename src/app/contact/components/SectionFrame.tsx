export default function SectionFrame({
  title,
  children,
  description,
}: {
  title: string;
  children: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative rounded-xl border border-[var(--pip-border)] bg-[rgba(255,255,255,0.18)] px-4 pb-4 pt-6 sm:px-5 sm:pb-5 sm:pt-7">
      <div className="absolute left-3 top-0 -translate-y-1/2 bg-[var(--pip-bg-light)] px-2 sm:left-4">
        <h3 className="font-heading text-lg font-semibold tracking-heading text-[var(--pip-ink)]">
          {title}
        </h3>
      </div>

      {description ? (
        <p className="mb-4 text-sm text-slate-600">{description}</p>
      ) : null}

      {children}
    </section>
  );
}
