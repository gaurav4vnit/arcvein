import type { Metadata } from "next";

import { ArcVeinWay } from "@/components/home/ArcVeinWay";
import { Capabilities } from "@/components/home/Capabilities";
import { Hero } from "@/components/home/Hero";
import { HowWeThink } from "@/components/home/HowWeThink";
import { HowWeWork } from "@/components/home/HowWeWork";
import { SiteShell } from "@/components/layout/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import { homeContent } from "@/lib/site";
import { WhyArcVein } from "@/components/home/WhyArcVein";
import { ReferenceArchitectures } from "@/components/home/ReferenceArchitectures";

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
      <ArcVeinWay />
      <HowWeThink />
      <HowWeWork />
      <Capabilities />
      <ReferenceArchitectures />
    </SiteShell>
  );
}
