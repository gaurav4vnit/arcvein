import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { servicesContent, siteConfig } from "@/lib/site";

export function EngagementCta() {
  const { cta } = servicesContent;
  const headingId = "engagement-cta-heading";

  return (
    <Section labelledBy={headingId} spacing="default">
      <div className="max-w-2xl">
        <h2
          id={headingId}
          className="font-heading text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground"
        >
          {cta.headline}
        </h2>
        <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-muted sm:mt-7 sm:text-base">
          {cta.description}
        </p>
        <div className="mt-10 sm:mt-11">
          <ButtonLink href={siteConfig.links.contact} size="lg">
            {cta.button}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
