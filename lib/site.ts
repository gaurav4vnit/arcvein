export const siteConfig = {
  name: "ArcVein",
  tagline: "Build Critical Software.",
  description:
    "ArcVein builds critical software — reliable systems for teams that cannot afford to fail.",
  url: "https://arcvein.com",
  links: {
    services: "/services",
    engineering: "/engineering",
    about: "/about",
    contact: "/contact",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Engineering", href: "/engineering" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
