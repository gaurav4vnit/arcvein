import { cn } from "@/lib/cn";

export type ServiceBlockProps = {
  name: string;
  headline: string;
  body: string;
  focus: readonly string[];
  reverse?: boolean;
  className?: string;
};

export function ServiceBlock({
  name,
  headline,
  body,
  focus,
  reverse = false,
  className,
}: ServiceBlockProps) {
  const headingId = `${name.toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className={cn(
        "grid grid-cols-1 gap-10 border-t border-foreground/[0.08] py-14 sm:gap-12 sm:py-16 lg:grid-cols-2 lg:items-start lg:gap-16 lg:py-20",
        className,
      )}
    >
      <div className={cn(reverse && "lg:order-2")}>
        <p className="font-mono text-[13px] tracking-wide text-muted">
          {name}
        </p>
        <h2
          id={headingId}
          className="mt-5 font-heading text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.03em] text-foreground sm:mt-6"
        >
          {headline}
        </h2>
      </div>

      <div className={cn(reverse && "lg:order-1")}>
        <p className="max-w-lg text-[15px] leading-[1.75] text-muted sm:text-base">
          {body}
        </p>

        <div className="mt-10 sm:mt-12">
          <h3 className="font-mono text-[12px] tracking-wide text-muted/70 sm:text-[13px]">
            Focus areas
          </h3>
          <ul className="mt-5 list-none border-t border-foreground/[0.08]">
            {focus.map((item) => (
              <li
                key={item}
                className="border-b border-foreground/[0.08] py-3.5 text-[15px] leading-snug text-foreground/85 sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
