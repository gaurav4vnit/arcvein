import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

type PageCtaProps = {
  headingId: string;
  headline: string;
  description?: string;
  buttonLabel: string;
  buttonHref?: string;
};

export function PageCta({
  headingId,
  headline,
  description,
  buttonLabel,
  buttonHref = siteConfig.links.contact,
}: PageCtaProps) {
  return (
    <Section labelledBy={headingId}>
      <div className="max-w-2xl">
        <h2
          id={headingId}
          className="font-heading text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground"
        >
          {headline}
        </h2>
        {description ? (
          <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-muted sm:mt-7 sm:text-base">
            {description}
          </p>
        ) : null}
        <div className="mt-10 sm:mt-11">
          <ButtonLink href={buttonHref} size="lg">
            {buttonLabel}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
