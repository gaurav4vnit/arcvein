import type { Metadata } from "next";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactPanel } from "@/components/contact/ContactPanel";
import { SiteShell } from "@/components/layout/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import { contactContent } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: contactContent.meta.title,
  description: contactContent.meta.description,
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ consultation?: string }>;
}) {
  const params = await searchParams;
  return (
    <SiteShell>
      <ContactHero />
      <ContactPanel consultation={params.consultation} />
    </SiteShell>
  );
}
