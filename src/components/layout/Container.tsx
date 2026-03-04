import React, { ComponentPropsWithoutRef, ElementType } from "react";

type Props<T extends ElementType = "div"> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
  size?: "md" | "lg";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "size" | "className" | "children">;

export default function Container<T extends ElementType = "div">({
  children,
  className = "",
  as,
  size = "lg",
  ...props
}: Props<T>) {
  const Tag = (as ?? "div") as ElementType;
  const max = size === "md" ? "max-w-4xl" : "max-w-5xl";

  return (
    <Tag className={`mx-auto ${max} px-6 ${className}`} {...props}>
      {children}
    </Tag>
  );
}
