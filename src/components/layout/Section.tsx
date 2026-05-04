import React from "react";
import Container from "./Container";

type SectionTone = "warm" | "light" | "mid" | "navy" | "white";

type SectionPadding = "md" | "lg" | "xl";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
  padded?: SectionPadding;
  borderTop?: boolean;
  containerClassName?: string;
};

export default function Section({
  children,
  className = "",
  id,
  tone = "white",
  padded = "lg",
  borderTop = false,
  containerClassName = "",
}: Props) {
  const bg =
    tone === "warm"
      ? "bg-[var(--pip-bg-warm)]"
      : tone === "light"
      ? "bg-[var(--pip-bg-light)]"
      : tone === "mid"
      ? "bg-[var(--pip-bg-mid)]"
      : tone === "navy"
      ? "bg-[var(--pip-navy)] text-white"
      : "bg-white";

  const py =
    padded === "md"
      ? "py-12 md:py-16"
      : padded === "xl"
      ? "py-20 md:py-28"
      : "py-16 md:py-24";

  const border = borderTop ? "border-t border-[var(--pip-border)]" : "";

  return (
    <section id={id} className={`w-full ${bg} ${border} ${className}`.trim()}>
      <Container className={`${py} ${containerClassName}`.trim()}>
        {children}
      </Container>
    </section>
  );
}
