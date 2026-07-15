import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

const spacingStyles = {
  default: "py-24 sm:py-28 lg:py-32",
  compact: "py-20 sm:py-24 lg:py-28",
  none: "",
} as const;

type SectionProps = {
  children: ReactNode;
  labelledBy?: string;
  className?: string;
  containerClassName?: string;
  spacing?: keyof typeof spacingStyles;
  bordered?: boolean;
  grid?: boolean;
};

export function Section({
  children,
  labelledBy,
  className,
  containerClassName,
  spacing = "default",
  bordered = true,
  grid = true,
}: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cn(
        "relative",
        bordered && "border-t border-foreground/[0.06]",
        className,
      )}
    >
      {grid ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 engineering-grid"
        />
      ) : null}

      <Container className={cn("relative", spacingStyles[spacing], containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
