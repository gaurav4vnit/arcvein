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

export const homeContent = {
  hero: {
    headline: ["Build", "Critical", "Software."] as const,
    description:
      "ArcVein partners with ambitious startups to build backend platforms, AI systems and high-performance infrastructure with engineers who think like owners.",
    primaryCta: "Book a Call",
    secondaryCta: "Explore Services",
  },
  arcVeinWay: {
    title: "The ArcVein Way",
    subtitle: "Built like engineers. Not marketers.",
    principles: [
      {
        title: "Performance",
        description: "Software should be fast, reliable and observable.",
      },
      {
        title: "Ownership",
        description: "We think like founders, not contractors.",
      },
      {
        title: "Precision",
        description: "Small decisions compound into reliable systems.",
      },
      {
        title: "Longevity",
        description: "Build systems that evolve, not systems that expire.",
      },
    ],
  },
  howWeThink: {
    title: "How We Think",
    subtitle: [
      "Engineering is not about writing code.",
      "It's about making good decisions.",
    ] as const,
    columns: [
      {
        title: "Architecture",
        description:
          "Design systems that evolve gracefully as products grow.",
      },
      {
        title: "Performance",
        description:
          "Optimize for latency, scalability and operational simplicity.",
      },
      {
        title: "Reliability",
        description:
          "Engineer software that teams can trust under real-world conditions.",
      },
      {
        title: "Maintainability",
        description:
          "Leave every system easier to understand than we found it.",
      },
    ],
  },
  howWeWork: {
    title: "How We Work",
    subtitle:
      "Small teams. Senior engineers. Direct communication. Fast execution.",
    steps: [
      {
        step: "01",
        title: "Discover",
        description: "Understand the product, constraints and goals.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Architect solutions that prioritize simplicity, performance and longevity.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Ship production-quality software with continuous feedback.",
      },
      {
        step: "04",
        title: "Scale",
        description:
          "Support growth with reliable infrastructure, observability and long-term ownership.",
      },
    ],
  },
  capabilities: {
    title: "Capabilities",
    subtitle:
      "Engineering expertise across performance, backend infrastructure, AI and cloud platforms.",
    items: [
      {
        title: "High Performance Systems",
        description:
          "Low-latency systems, modern C++, concurrency, networking and performance engineering.",
        keywords: [
          "Low-latency",
          "Modern C++",
          "Concurrency",
          "Networking",
          "Performance",
        ],
      },
      {
        title: "Backend Platforms",
        description:
          "Distributed systems, APIs, event-driven architecture, PostgreSQL, Kafka and Redis.",
        keywords: [
          "Distributed systems",
          "APIs",
          "Event-driven",
          "PostgreSQL",
          "Kafka",
          "Redis",
        ],
      },
      {
        title: "AI Infrastructure",
        description:
          "LLM integration, RAG, inference services, vector search and AI platforms.",
        keywords: [
          "LLM integration",
          "RAG",
          "Inference",
          "Vector search",
          "AI platforms",
        ],
      },
      {
        title: "Cloud Platforms",
        description:
          "AWS, Docker, Kubernetes, observability, CI/CD and production operations.",
        keywords: [
          "AWS",
          "Docker",
          "Kubernetes",
          "Observability",
          "CI/CD",
          "Production ops",
        ],
      },
    ],
  },
} as const;
