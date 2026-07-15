import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type EditorialColumnProps = HTMLAttributes<HTMLElement> & {
  title: string;
  children: ReactNode;
  as?: "article" | "div" | "li";
};

export function EditorialColumn({
  title,
  children,
  className,
  as: Component = "article",
  ...props
}: EditorialColumnProps) {
  return (
    <Component className={cn("flex flex-col", className)} {...props}>
      <h3 className="font-heading text-lg font-medium tracking-tight text-foreground sm:text-xl">
        {title}
      </h3>
      <div className="mt-5 text-[15px] leading-[1.75] text-muted sm:mt-6 sm:text-base">
        {children}
      </div>
    </Component>
  );
}
