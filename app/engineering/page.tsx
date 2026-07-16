import type { Metadata } from "next";

import { ArchitectureSection } from "@/components/engineering/ArchitectureSection";
import { EngineeringCta } from "@/components/engineering/EngineeringCta";
import { EngineeringDomains } from "@/components/engineering/EngineeringDomains";
import { EngineeringHero } from "@/components/engineering/EngineeringHero";
import { EngineeringPrinciples } from "@/components/engineering/EngineeringPrinciples";
import { SiteShell } from "@/components/layout/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import { engineeringContent } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: engineeringContent.meta.title,
  description: engineeringContent.meta.description,
  path: "/engineering",
});

export default function EngineeringPage() {
  return (
    <SiteShell>
      <EngineeringHero />
      <ArchitectureSection />
      <EngineeringDomains />
      <EngineeringPrinciples />
      <EngineeringCta />
    </SiteShell>
  );
}
