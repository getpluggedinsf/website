import React, { ComponentPropsWithoutRef, ElementType } from "react";

type Props<T extends ElementType = "div"> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function Container<T extends ElementType = "div">({
  children,
  className = "",
  as,
  ...props
}: Props<T>) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`} {...props}>
      {children}
    </Tag>
  );
}
