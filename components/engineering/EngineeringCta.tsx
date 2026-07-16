import { PageCta } from "@/components/ui/PageCta";
import { engineeringContent } from "@/lib/site";

export function EngineeringCta() {
  const { cta } = engineeringContent;

  return (
    <PageCta
      headingId="engineering-cta-heading"
      headline={cta.headline}
      buttonLabel={cta.button}
    />
  );
}
