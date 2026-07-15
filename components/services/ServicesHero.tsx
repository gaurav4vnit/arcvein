import { Section } from "@/components/ui/Section";
import { servicesContent } from "@/lib/site";

export function ServicesHero() {
  const { hero } = servicesContent;

  return (
    <Section
      bordered={false}
      spacing="none"
      labelledBy="services-hero-heading"
      containerClassName="pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      <p className="font-mono text-[13px] tracking-wide text-muted">
        {hero.eyebrow}
      </p>
      <h1
        id="services-hero-heading"
        className="mt-6 max-w-3xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:mt-7"
      >
        {hero.headline}
      </h1>
      <p className="mt-8 max-w-xl text-[15px] leading-[1.75] text-muted sm:mt-9 sm:text-base">
        {hero.description}
      </p>
    </Section>
  );
}
