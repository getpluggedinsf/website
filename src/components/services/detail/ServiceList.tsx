export type ServiceListItem =
  | string
  | {
      title: string;
      description?: string;
    };

type ServiceListProps = {
  items: readonly ServiceListItem[];
  className?: string;
};

export function ServiceList({ items, className = "" }: ServiceListProps) {
  return (
    <ul className={className}>
      {items.map((item) => {
        const text = typeof item === "string" ? item : item.title;

        return (
          <li key={text} className="flex gap-3">
            <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-orange)]" />
            <span>{text}</span>
          </li>
        );
      })}
    </ul>
  );
}
