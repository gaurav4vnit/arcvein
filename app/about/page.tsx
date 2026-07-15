import type { Metadata } from "next";

import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { WhatWeBelieve } from "@/components/about/WhatWeBelieve";
import { WhatWeDontDo } from "@/components/about/WhatWeDontDo";
import { WhoWeWorkWith } from "@/components/about/WhoWeWorkWith";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { aboutContent, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
  alternates: {
    canonical: siteConfig.links.about,
  },
  openGraph: {
    title: `${aboutContent.meta.title} · ${siteConfig.name}`,
    description: aboutContent.meta.description,
    url: siteConfig.links.about,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${aboutContent.meta.title} · ${siteConfig.name}`,
    description: aboutContent.meta.description,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <AboutHero />
        <WhatWeBelieve />
        <WhoWeWorkWith />
        <WhatWeDontDo />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
