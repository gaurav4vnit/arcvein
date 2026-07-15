import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  title: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionHeading({
  id,
  title,
  children,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-2xl", className)}>
      <h2
        id={id}
        className={cn(
          "font-heading text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "mt-6 text-[15px] leading-[1.75] text-muted sm:mt-7 sm:text-base",
            subtitleClassName,
          )}
        >
          {children}
        </div>
      ) : null}
    </header>
  );
}
