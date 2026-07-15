import type { Metadata } from "next";

import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { WhatWeBelieve } from "@/components/about/WhatWeBelieve";
import { WhatWeDontDo } from "@/components/about/WhatWeDontDo";
import { WhoWeWorkWith } from "@/components/about/WhoWeWorkWith";
import { SiteShell } from "@/components/layout/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import { aboutContent } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutHero />
      <WhatWeBelieve />
      <WhoWeWorkWith />
      <WhatWeDontDo />
      <AboutCta />
    </SiteShell>
  );
}
