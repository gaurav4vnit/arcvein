import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type CardProps = HTMLAttributes<HTMLElement> & {
  title: string;
  children: ReactNode;
  as?: "article" | "div" | "li";
};

export function Card({
  title,
  children,
  className,
  as: Component = "article",
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "group flex flex-col border border-foreground/[0.1] bg-transparent p-7 sm:p-8",
        "transition-[border-color,background-color,transform] duration-200 ease-out",
        "hover:-translate-y-px hover:border-foreground/20 hover:bg-surface/40",
        "focus-within:border-foreground/20 focus-within:bg-surface/40",
        className,
      )}
      {...props}
    >
      <h3 className="font-heading text-lg font-medium tracking-tight text-foreground sm:text-xl">
        {title}
      </h3>
      <div className="mt-4 text-[15px] leading-[1.7] text-muted sm:text-base">
        {children}
      </div>
    </Component>
  );
}
