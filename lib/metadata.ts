import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Use when the title should not use the root `%s · ArcVein` template. */
  absoluteTitle?: boolean;
};

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — Trading Infrastructure Engineering`,
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const displayTitle = absoluteTitle
    ? title
    : `${title} · ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,

    alternates: {
      canonical: path,
    },

    openGraph: {
      title: displayTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [socialImage],
    },

    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      images: ["/twitter-image"],
    },
  };
}
