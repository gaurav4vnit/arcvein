import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/lib/site";

export function AboutHero() {
  const { hero } = aboutContent;

  return (
    <Section
      bordered={false}
      spacing="none"
      labelledBy="about-hero-heading"
      containerClassName="pt-14 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      <h1
        id="about-hero-heading"
        className="max-w-3xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-foreground"
      >
        {hero.title}
      </h1>

      <div className="mt-10 max-w-xl space-y-5 text-[15px] leading-[1.75] text-muted sm:mt-12 sm:space-y-6 sm:text-base">
        {hero.body.map((line, index) => (
          <p
            key={line}
            className={
              index === hero.body.length - 1
                ? "text-foreground"
                : undefined
            }
          >
            {line}
          </p>
        ))}
      </div>
    </Section>
  );
}
