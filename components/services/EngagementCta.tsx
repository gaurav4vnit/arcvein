import { PageCta } from "@/components/ui/PageCta";
import { servicesContent } from "@/lib/site";

export function EngagementCta() {
  const { cta } = servicesContent;

  return (
    <PageCta
      headingId="engagement-cta-heading"
      headline={cta.headline}
      description={cta.description}
      buttonLabel={cta.button}
    />
  );
}
