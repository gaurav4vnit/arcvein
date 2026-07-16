import type { Metadata } from "next";

import { Capabilities } from "@/components/home/Capabilities";
import { Hero } from "@/components/home/Hero";
import { HomeCta } from "@/components/home/HomeCta";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ReferenceArchitectures } from "@/components/home/ReferenceArchitectures";
import { WhyArcVein } from "@/components/home/WhyArcVein";
import { SiteShell } from "@/components/layout/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import { homeContent } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: homeContent.meta.title,
  description: homeContent.meta.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <WhyArcVein />
      <Capabilities />
      <ReferenceArchitectures />
      <HowWeWork />
      <HomeCta />
    </SiteShell>
  );
}
