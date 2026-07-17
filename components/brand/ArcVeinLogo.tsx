import type { SVGProps } from "react";

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  priorityLabel?: string;
};

export function ArcVeinMark({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 72 64"
      role="img"
      aria-label="ArcVein"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 55 30.2 12.8c2.5-4.7 9.1-4.7 11.6 0L64 55"
        stroke="#2563EB"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 55 32.1 25.1c1.6-3.5 6.2-3.5 7.8 0L53.5 55"
        stroke="#4387FF"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 55 34.3 38.7c.6-2 2.8-2 3.4 0L43 55"
        stroke="#8BB7FF"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArcVeinLogo({
  className,
  markClassName,
  wordmarkClassName,
  priorityLabel = "ArcVein home",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <ArcVeinMark className={`h-7 w-auto shrink-0 ${markClassName ?? ""}`} aria-hidden="true" />
      <span
        className={`font-heading text-[17px] font-medium tracking-[-0.035em] text-foreground ${wordmarkClassName ?? ""}`}
      >
        ArcVein
      </span>
      <span className="sr-only">{priorityLabel}</span>
    </span>
  );
}
