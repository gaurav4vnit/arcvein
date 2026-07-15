import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { EngagementCta } from "@/components/services/EngagementCta";
import { ServiceOfferings } from "@/components/services/ServiceOfferings";
import { ServicesHero } from "@/components/services/ServicesHero";
import { servicesContent, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: servicesContent.meta.title,
  description: servicesContent.meta.description,
  alternates: {
    canonical: siteConfig.links.services,
  },
  openGraph: {
    title: `${servicesContent.meta.title} · ${siteConfig.name}`,
    description: servicesContent.meta.description,
    url: siteConfig.links.services,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${servicesContent.meta.title} · ${siteConfig.name}`,
    description: servicesContent.meta.description,
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <ServicesHero />
        <ServiceOfferings />
        <EngagementCta />
      </main>
      <Footer />
    </>
  );
}
