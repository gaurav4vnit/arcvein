import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { aboutContent, siteConfig } from "@/lib/site";

export function AboutCta() {
  const { cta } = aboutContent;
  const headingId = "about-cta-heading";

  return (
    <Section labelledBy={headingId}>
      <div className="max-w-2xl">
        <h2
          id={headingId}
          className="font-heading text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground"
        >
          {cta.headline}
        </h2>
        <div className="mt-10 sm:mt-11">
          <ButtonLink href={siteConfig.links.contact} size="lg">
            {cta.button}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
