import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted";
  rounded?: "xl" | "2xl" | "3xl";
  border?: boolean;
  shadow?: boolean;
};

export default function Surface({
  children,
  className = "",
  tone = "default",
  rounded = "3xl",
  border = true,
  shadow = true,
}: Props) {
  const bg =
    tone === "muted"
      ? "bg-[var(--pip-surface-muted)]"
      : "bg-[var(--pip-surface)]";

  const r =
    rounded === "xl"
      ? "rounded-xl"
      : rounded === "2xl"
      ? "rounded-2xl"
      : "rounded-3xl";

  const b = border ? "border border-[var(--pip-border)]" : "";
  const s = shadow ? "shadow-sm" : "";

  return (
    <div className={`${r} ${b} ${bg} ${s} ${className}`.trim()}>
      {children}
    </div>
  );
}
