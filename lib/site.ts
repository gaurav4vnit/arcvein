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

export const servicesContent = {
  meta: {
    title: "Services",
    description:
      "ArcVein helps ambitious companies design, build and scale backend platforms, AI infrastructure and performance-critical software.",
  },
  hero: {
    eyebrow: "Services",
    headline: "Engineering for systems that matter.",
    description:
      "ArcVein helps ambitious companies design, build and scale backend platforms, AI infrastructure and performance-critical software.",
  },
  offerings: [
    {
      name: "High Performance Systems",
      headline:
        "When latency, throughput and reliability are product requirements.",
      body: "We design and build performance-critical systems using modern C++, Linux, concurrency, networking and careful systems architecture.",
      focus: [
        "Low-latency systems",
        "Trading and market-data infrastructure",
        "Concurrency and multithreading",
        "Network programming",
        "Performance profiling and optimization",
      ],
    },
    {
      name: "Backend Platforms",
      headline: "Reliable foundations for products that need to scale.",
      body: "We build backend systems that remain understandable, observable and dependable as products and teams grow.",
      focus: [
        "Distributed systems",
        "APIs and service architecture",
        "Event-driven systems",
        "PostgreSQL, Kafka and Redis",
        "Reliability and observability",
      ],
    },
    {
      name: "AI Infrastructure",
      headline: "Production AI beyond the prototype.",
      body: "We integrate AI into real products with reliable backend services, retrieval systems, inference workflows and operational visibility.",
      focus: [
        "LLM integration",
        "RAG systems",
        "Inference services",
        "Vector search",
        "AI platform backends",
      ],
    },
    {
      name: "Cloud Platforms",
      headline: "Infrastructure designed for production, not demos.",
      body: "We help teams deploy and operate software using pragmatic cloud architecture, automation and observability.",
      focus: [
        "AWS",
        "Docker and Kubernetes",
        "CI/CD",
        "Monitoring and observability",
        "Production operations",
      ],
    },
  ],
  cta: {
    headline:
      "Need senior engineering capability without building a large team?",
    description:
      "Work with ArcVein through dedicated engineers, project delivery or a long-term engineering partnership.",
    button: "Book a Call",
  },
} as const;
