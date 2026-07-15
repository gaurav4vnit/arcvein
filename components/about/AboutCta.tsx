import { PageCta } from "@/components/ui/PageCta";
import { aboutContent } from "@/lib/site";

export function AboutCta() {
  const { cta } = aboutContent;

  return (
    <PageCta
      headingId="about-cta-heading"
      headline={cta.headline}
      buttonLabel={cta.button}
    />
  );
}
