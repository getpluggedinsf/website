import React from "react";
import Container from "./Container";

type SectionTone = "base" | "muted" | "accent";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
  padded?: "md" | "lg";
  borderTop?: boolean;
  containerSize?: "md" | "lg";
};

export default function Section({
  children,
  className = "",
  id,
  tone = "base",
  padded = "lg",
  borderTop = true,
  containerSize = "lg",
}: Props) {
  const bg =
    tone === "muted"
      ? "bg-[var(--pip-section-muted)]"
      : tone === "accent"
      ? "bg-[var(--pip-navy)] text-white"
      : "bg-[var(--pip-section)]";

  const py = padded === "md" ? "py-12 sm:py-14" : "py-14 sm:py-16";
  const border = borderTop ? "border-t border-[var(--pip-border)]" : "";

  return (
    <section id={id} className={`w-full ${bg} ${border} ${className}`.trim()}>
      <Container className={py} size={containerSize}>
        {children}
      </Container>
    </section>
  );
}
