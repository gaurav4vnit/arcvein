import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { EngagementCta } from "@/components/services/EngagementCta";
import { ServiceOfferings } from "@/components/services/ServiceOfferings";
import { ServicesHero } from "@/components/services/ServicesHero";
import { createPageMetadata } from "@/lib/metadata";
import { servicesContent } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: servicesContent.meta.title,
  description: servicesContent.meta.description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <ServicesHero />
      <ServiceOfferings />
      <EngagementCta />
    </SiteShell>
  );
}
