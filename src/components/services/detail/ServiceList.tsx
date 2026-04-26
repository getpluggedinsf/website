type ServiceListProps = {
  items: readonly string[];
  className?: string;
};

export function ServiceList({ items, className = "" }: ServiceListProps) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-orange)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
