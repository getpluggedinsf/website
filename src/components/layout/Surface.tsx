import React from "react";

type SurfaceTone = "white" | "light" | "glass";

type SurfaceRadius = "md" | "lg";

type SurfacePadding = "sm" | "md" | "lg";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: SurfaceTone;
  radius?: SurfaceRadius;
  padding?: SurfacePadding;
  border?: boolean;
  shadow?: boolean;
};

export default function Surface({
  children,
  className = "",
  tone = "white",
  radius = "md",
  padding = "md",
  border = true,
  shadow = false,
}: Props) {
  const bg =
    tone === "light"
      ? "bg-[var(--pip-bg-light)]"
      : tone === "glass"
      ? "bg-white/70 backdrop-blur-sm"
      : "bg-white";

  const r = radius === "lg" ? "rounded-lg" : "rounded-md";

  const p =
    padding === "sm"
      ? "p-4"
      : padding === "lg"
      ? "p-8"
      : "p-6";

  const b = border ? "border border-[var(--pip-border)]" : "";
  const s = shadow ? "shadow-sm" : "";

  return (
    <div className={`${r} ${p} ${b} ${bg} ${s} ${className}`.trim()}>
      {children}
    </div>
  );
}
