// src/components/services/detail/ServiceSectionGroup.tsx

import type { ReactNode } from "react";
import Section from "@/components/layout/Section";

type ServiceSectionGroupProps = {
  tone?: "white" | "mid";
  children: ReactNode;
};

export function ServiceSectionGroup({
  tone = "white",
  children,
}: ServiceSectionGroupProps) {
  return (
    <Section tone={tone} padded="lg">
      <div className="space-y-10">{children}</div>
    </Section>
  );
}
