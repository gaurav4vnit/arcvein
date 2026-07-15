import { cn } from "@/lib/cn";

export type CapabilityBlockProps = {
  title: string;
  description: string;
  keywords: readonly string[];
  reverse?: boolean;
  className?: string;
};

export function CapabilityBlock({
  title,
  description,
  keywords,
  reverse = false,
  className,
}: CapabilityBlockProps) {
  return (
    <article
      className={cn(
        "group grid grid-cols-1 gap-8 border-t border-foreground/[0.08] py-12 sm:gap-10 sm:py-14 lg:grid-cols-2 lg:items-start lg:gap-16 lg:py-16",
        className,
      )}
    >
      <h3
        className={cn(
          "font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground transition-colors duration-200 group-hover:text-foreground",
          reverse && "lg:order-2",
        )}
      >
        {title}
      </h3>

      <div className={cn(reverse && "lg:order-1")}>
        <p className="max-w-md text-[15px] leading-[1.75] text-muted transition-colors duration-200 group-hover:text-muted/90 sm:text-base lg:max-w-lg">
          {description}
        </p>

        <ul className="mt-6 flex list-none flex-wrap gap-x-3 gap-y-2 sm:mt-7">
          {keywords.map((keyword) => (
            <li
              key={keyword}
              className="font-mono text-[12px] tracking-wide text-muted/70 transition-colors duration-200 group-hover:text-muted sm:text-[13px]"
            >
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
