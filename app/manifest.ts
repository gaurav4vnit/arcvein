import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ArcVein — Trading Infrastructure Engineering",
    short_name: "ArcVein",
    description:
      "Trading platforms, market data infrastructure, exchange connectivity and dedicated engineering teams.",
    start_url: "/",
    display: "standalone",
    background_color: "#080B10",
    theme_color: "#080B10",
    categories: ["business", "finance", "technology"],
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
