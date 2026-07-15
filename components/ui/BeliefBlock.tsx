import { cn } from "@/lib/cn";

export type BeliefBlockProps = {
  title: string;
  body: readonly string[];
  reverse?: boolean;
  className?: string;
};

export function BeliefBlock({
  title,
  body,
  reverse = false,
  className,
}: BeliefBlockProps) {
  const headingId = `${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className={cn(
        "grid grid-cols-1 gap-6 border-t border-foreground/[0.08] py-12 sm:gap-8 sm:py-14 lg:grid-cols-2 lg:items-start lg:gap-16 lg:py-16",
        className,
      )}
    >
      <h3
        id={headingId}
        className={cn(
          "font-heading text-[clamp(1.5rem,2.8vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.03em] text-foreground",
          reverse && "lg:order-2 lg:text-right",
        )}
      >
        {title}
      </h3>

      <div
        className={cn(
          "max-w-md space-y-1 text-[15px] leading-[1.75] text-muted sm:text-base",
          reverse && "lg:order-1",
          !reverse && "lg:justify-self-end lg:text-left",
        )}
      >
        {body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}
