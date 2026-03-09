import React from "react";

type Props = {
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  title,
  body,
  align = "left",
  className = "",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`.trim()}>
      <h2 className="font-heading tracking-heading text-3xl text-[var(--pip-ink)] md:text-4xl">
        {title}
      </h2>

      <div className="mt-4 h-[3px] w-10 bg-[var(--pip-orange)]" />

      {body ? (
        <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
