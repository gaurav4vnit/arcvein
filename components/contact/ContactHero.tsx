import { Section } from "@/components/ui/Section";
import { contactContent } from "@/lib/site";

export function ContactHero() {
  const { hero } = contactContent;

  return (
    <Section
      bordered={false}
      spacing="none"
      labelledBy="contact-hero-heading"
      containerClassName="pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20"
    >
      <h1
        id="contact-hero-heading"
        className="max-w-3xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-foreground"
      >
        {hero.headline}
      </h1>
      <p className="mt-8 max-w-xl text-[15px] leading-[1.75] text-muted sm:mt-9 sm:text-base">
        {hero.description}
      </p>
    </Section>
  );
}
