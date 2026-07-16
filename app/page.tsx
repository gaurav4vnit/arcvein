import type { Metadata } from "next";

import { Capabilities } from "@/components/home/Capabilities";
import { Hero } from "@/components/home/Hero";
import { HomeCta } from "@/components/home/HomeCta";
import { HowWeWork } from "@/components/home/HowWeWork";
import { OpenSourceEngineering } from "@/components/home/OpenSourceEngineering";
import { ReferenceArchitectures } from "@/components/home/ReferenceArchitectures";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";
import { WhyArcVein } from "@/components/home/WhyArcVein";
import { SiteShell } from "@/components/layout/SiteShell";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "ArcVein — Trading Platform Engineering & Engineering Teams",
  description:
    "ArcVein builds trading platforms and capital markets technology, and provides experienced C++ and backend engineers through dedicated-team and staff-augmentation engagements.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <WhoWeHelp />
      <WhyArcVein />
      <Capabilities />
      <ReferenceArchitectures />
      <HowWeWork />
      <OpenSourceEngineering />
      <HomeCta />
    </SiteShell>
  );
}
