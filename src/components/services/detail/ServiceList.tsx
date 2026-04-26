type ServiceListProps = {
  items: readonly string[];
};

export function ServiceList({ items }: ServiceListProps) {
  return (
    <ul className="mt-4 space-y-2 text-[16px] leading-7 text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-orange)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
