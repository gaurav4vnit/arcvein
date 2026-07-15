import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type TimelineStepData = {
  step: string;
  title: string;
  description: string;
};

type TimelineProps = {
  steps: readonly TimelineStepData[];
  className?: string;
};

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <ol
      className={cn(
        "relative grid list-none grid-cols-1 gap-0 lg:grid-cols-4",
        className,
      )}
    >
      {steps.map((item, index) => (
        <TimelineStep
          key={item.step}
          step={item.step}
          title={item.title}
          isLast={index === steps.length - 1}
        >
          {item.description}
        </TimelineStep>
      ))}
    </ol>
  );
}

type TimelineStepProps = {
  step: string;
  title: string;
  children: ReactNode;
  isLast?: boolean;
  className?: string;
};

export function TimelineStep({
  step,
  title,
  children,
  isLast = false,
  className,
}: TimelineStepProps) {
  return (
    <li
      className={cn(
        "group relative flex flex-col",
        // Mobile vertical connector
        !isLast &&
          "border-l border-foreground/[0.1] pb-12 pl-6 transition-[border-color] duration-200 hover:border-foreground/25 sm:pl-8 sm:pb-14",
        isLast && "border-l border-transparent pl-6 sm:pl-8",
        // Desktop: drop vertical border, use horizontal rhythm
        "lg:border-l-0 lg:pb-0 lg:pl-0 lg:pr-8 xl:pr-10",
        "lg:last:pr-0",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[13px] tracking-wide text-muted transition-colors duration-200 group-hover:text-foreground/80">
          {step}
        </span>

        {/* Desktop horizontal connector */}
        {!isLast && (
          <span
            aria-hidden="true"
            className="hidden h-px flex-1 bg-foreground/[0.1] transition-colors duration-200 group-hover:bg-foreground/25 lg:block"
          />
        )}
      </div>

      <h3 className="mt-5 font-heading text-lg font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-foreground sm:mt-6 sm:text-xl">
        {title}
      </h3>

      <p className="mt-4 max-w-xs text-[15px] leading-[1.75] text-muted transition-colors duration-200 group-hover:text-muted/90 sm:mt-5 sm:text-base lg:max-w-none">
        {children}
      </p>
    </li>
  );
}
