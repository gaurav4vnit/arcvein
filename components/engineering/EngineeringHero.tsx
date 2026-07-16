import { Section } from "@/components/ui/Section";
import { engineeringContent } from "@/lib/site";

export function EngineeringHero() {
  const { hero } = engineeringContent;

  return (
    <Section
      bordered={false}
      spacing="none"
      labelledBy="engineering-hero-heading"
      containerClassName="pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      <h1
        id="engineering-hero-heading"
        className="max-w-3xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-foreground"
      >
        {hero.title}
      </h1>
      <p className="mt-8 max-w-xl text-[15px] leading-[1.75] text-muted sm:mt-9 sm:text-base">
        {hero.subtitle}
      </p>
    </Section>
  );
}
