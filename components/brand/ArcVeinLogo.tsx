import type { SVGProps } from "react";

import { cn } from "@/lib/cn";

type BrandMarkProps = SVGProps<SVGSVGElement> & {
  monochrome?: boolean;
};

export function BrandMark({
  className,
  monochrome = false,
  ...props
}: BrandMarkProps) {
  const outer = monochrome ? "currentColor" : "#2563EB";
  const middle = monochrome ? "currentColor" : "#3B82F6";
  const inner = monochrome ? "currentColor" : "#7BAAF7";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path
        d="M7 54L25.75 13.5C27.15 10.45 29.1 8.75 31 8.35"
        stroke={outer}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 8.35C34.9 8.75 36.85 10.45 38.25 13.5L57 54"
        stroke={outer}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 54L28.25 26.1C29.15 24.15 30.35 23.05 31.25 22.7"
        stroke={middle}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.75 22.7C33.65 23.05 34.85 24.15 35.75 26.1L48.5 54"
        stroke={middle}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 54L30.45 39.8C30.9 38.8 31.45 38.2 31.75 38.05"
        stroke={inner}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.25 38.05C32.55 38.2 33.1 38.8 33.55 39.8L40 54"
        stroke={inner}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ArcVeinLogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  monochrome?: boolean;
};

export function ArcVeinLogo({
  className,
  markClassName,
  wordmarkClassName,
  monochrome = false,
}: ArcVeinLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark
        monochrome={monochrome}
        className={cn("h-7 w-7", markClassName)}
      />
      <span
        className={cn(
          "font-heading text-base font-medium tracking-[-0.035em]",
          wordmarkClassName,
        )}
      >
        ArcVein
      </span>
    </span>
  );
}
