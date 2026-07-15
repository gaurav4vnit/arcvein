import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";

import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md text-sm font-medium",
    "transition-[color,background-color,border-color,transform,box-shadow] duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-primary-deep text-foreground",
          "hover:-translate-y-px hover:bg-primary-deep-hover",
          "hover:shadow-[0_8px_24px_-12px_color-mix(in_srgb,var(--primary-deep)_55%,transparent)]",
          "active:translate-y-0 active:bg-primary-deep-active",
        ].join(" "),
        secondary:
          "bg-surface text-foreground ring-1 ring-inset ring-foreground/10 hover:bg-surface/80 hover:ring-foreground/20",
        outline: [
          "bg-transparent text-foreground/90",
          "border border-foreground/15",
          "hover:border-foreground/25 hover:text-foreground",
        ].join(" "),
        ghost: "bg-transparent text-muted hover:bg-foreground/5 hover:text-foreground",
        accent:
          "bg-accent text-background hover:bg-accent/90 active:bg-accent/80",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-11 px-5 text-sm sm:h-12 sm:px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants>;

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
