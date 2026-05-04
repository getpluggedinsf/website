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
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <h3 className="shrink-0 font-heading text-xl font-semibold tracking-heading text-[var(--pip-ink)] sm:text-[1.35rem]">
          {title}
        </h3>
        <div className="h-px flex-1 bg-[var(--pip-border)]" />
      </div>

      {description ? (
        <p className="text-sm text-[var(--pip-ink)]/72">{description}</p>
      ) : null}

      {children}
    </section>
  );
}
