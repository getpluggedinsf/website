type Props = {
  title: string;
  body?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  body,
  align = "left",
}: Props) {
  const isCentered = align === "center";

  return (
    <div className={`max-w-3xl ${isCentered ? "mx-auto text-center" : ""}`}>
      <h2 className="font-heading tracking-heading text-3xl font-semibold text-[var(--pip-ink)] md:text-4xl">
        {title}
      </h2>

      <div
        className={`mt-4 h-[3px] w-14 bg-[var(--pip-orange)] ${
          isCentered ? "mx-auto" : ""
        }`}
      />

      {body && (
        <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
          {body}
        </p>
      )}
    </div>
  );
}
