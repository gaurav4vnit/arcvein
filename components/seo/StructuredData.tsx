const SITE_URL = "https://www.arcvein.com";

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const professionalServiceId = `${SITE_URL}/#professional-service`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "ArcVein",
      alternateName: "ArcVein Engineering",
      url: SITE_URL,
      description:
        "ArcVein is an engineering company specializing in trading platforms, market data infrastructure, exchange connectivity and dedicated engineering teams for capital-markets organizations.",
      email: "hello@arcvein.com",
      sameAs: [
        "https://github.com/gaurav4vnit/AlgoTrade-DeltaExchange",
      ],
      knowsAbout: [
        "Trading platform engineering",
        "Capital markets technology",
        "Electronic trading systems",
        "Low-latency trading systems",
        "Algorithmic trading infrastructure",
        "Market data infrastructure",
        "Market data feed handlers",
        "Market data normalization",
        "Order book construction",
        "Order management systems",
        "Execution management systems",
        "Pre-trade risk systems",
        "Exchange connectivity",
        "FIX protocol",
        "REST exchange APIs",
        "WebSocket market data",
        "Modern C++",
        "High-performance computing",
        "Dedicated engineering teams",
        "Engineering staff augmentation",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@arcvein.com",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: "ArcVein",
      alternateName: "ArcVein Trading Infrastructure Engineering",
      description:
        "Trading infrastructure engineering, capital-markets technology and dedicated engineering teams.",
      publisher: {
        "@id": organizationId,
      },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": professionalServiceId,
      name: "ArcVein",
      url: SITE_URL,
      description:
        "Specialist engineering services for trading platforms, exchange connectivity, market data infrastructure, OMS, risk systems and dedicated engineering teams.",
      provider: {
        "@id": organizationId,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Worldwide",
      },
      audience: [
        {
          "@type": "BusinessAudience",
          audienceType: "Trading firms",
        },
        {
          "@type": "BusinessAudience",
          audienceType: "Hedge funds",
        },
        {
          "@type": "BusinessAudience",
          audienceType: "Brokerages",
        },
        {
          "@type": "BusinessAudience",
          audienceType: "FinTech companies",
        },
        {
          "@type": "BusinessAudience",
          audienceType: "Capital markets technology companies",
        },
        {
          "@type": "BusinessAudience",
          audienceType: "Software consultancies",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Trading Technology Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_URL}/services#trading-platform-engineering`,
              name: "Trading Platform Engineering",
              serviceType: "Trading platform development",
              url: `${SITE_URL}/services`,
              provider: {
                "@id": organizationId,
              },
              description:
                "Design, development and modernization of trading platforms, order management systems, execution systems, risk controls and portfolio workflows.",
              areaServed: "Worldwide",
              audience: {
                "@type": "BusinessAudience",
                audienceType:
                  "Trading firms, brokerages, hedge funds and FinTech companies",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_URL}/services#exchange-connectivity`,
              name: "Exchange Connectivity Engineering",
              serviceType: "Exchange and broker connectivity",
              url: `${SITE_URL}/services`,
              provider: {
                "@id": organizationId,
              },
              description:
                "FIX, REST, WebSocket and native exchange integrations covering market gateways, order gateways, recovery and failover.",
              areaServed: "Worldwide",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_URL}/services#market-data-infrastructure`,
              name: "Market Data Infrastructure",
              serviceType: "Market data platform engineering",
              url: `${SITE_URL}/services`,
              provider: {
                "@id": organizationId,
              },
              description:
                "Market data feed handlers, normalization, order books, real-time distribution, historical storage, replay and downstream analytics.",
              areaServed: "Worldwide",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_URL}/engineering-teams#dedicated-engineering-teams`,
              name: "Dedicated Engineering Teams",
              serviceType: "Trading technology staff augmentation",
              url: `${SITE_URL}/engineering-teams`,
              provider: {
                "@id": organizationId,
              },
              description:
                "Modern C++ and backend engineers supplied through individual contract, embedded team, project delivery and long-term engineering engagements.",
              areaServed: "Worldwide",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_URL}/services#oms-risk`,
              name: "OMS and Risk Systems Engineering",
              serviceType: "Order management and trading risk engineering",
              url: `${SITE_URL}/services`,
              provider: {
                "@id": organizationId,
              },
              description:
                "Order lifecycle management, execution state, pre-trade controls, limits, position management and exposure monitoring.",
              areaServed: "Worldwide",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_URL}/services#platform-modernization`,
              name: "Trading Platform Modernization",
              serviceType: "Legacy trading infrastructure modernization",
              url: `${SITE_URL}/services`,
              provider: {
                "@id": organizationId,
              },
              description:
                "Incremental modernization of trading systems with attention to operational continuity, reliability, performance and maintainability.",
              areaServed: "Worldwide",
            },
          },
        ],
      },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
