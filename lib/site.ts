export const siteConfig = {
  name: "ArcVein",
  tagline: "Build Critical Software.",
  description:
    "ArcVein builds critical software — reliable systems for teams that cannot afford to fail.",
  url: "https://arcvein.com",
  email: "hello@arcvein.com",
  social: {
    linkedin: {
      label: "linkedin.com/company/arcvein",
      href: "https://linkedin.com/company/arcvein",
    },
  },
  links: {
    services: "/services",
    engineering: "/engineering",
    about: "/about",
    contact: "/contact",
  },
  nav: [
    {
      label: "Solutions",
      href: "/services",
    },
    {
      label: "Engineering Teams",
      href: "/engineering-teams",
    },
    {
      label: "Trading Architecture",
      href: "/architectures/low-latency-trading-platform",
    },
    {
      label: "Open Source",
      href: "/#open-source",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
} as const;

export const homeContent = {
  meta: {
    title: "ArcVein",
    description:
      "ArcVein partners with ambitious startups to build backend platforms, AI systems and high-performance infrastructure with engineers who think like owners.",
  },
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

export const aboutContent = {
  meta: {
    title: "About",
    description:
      "ArcVein exists to change how critical software is designed and built — with production-ready systems, senior ownership and long-term thinking.",
  },
  hero: {
    title: "Why ArcVein Exists",
    body: [
      "Most software projects fail long before production.",
      "Not because engineers cannot code.",
      "Because systems are poorly designed.",
      "ArcVein exists to change that.",
    ] as const,
  },
  beliefs: {
    title: "What We Believe",
    items: [
      {
        title: "Build for production.",
        body: [
          "Software should survive real users, real traffic and real failures.",
        ],
      },
      {
        title: "Simplicity scales.",
        body: ["Complexity compounds.", "Simple systems survive."],
      },
      {
        title: "Performance matters.",
        body: [
          "Not because benchmarks matter.",
          "Because users notice.",
        ],
      },
      {
        title: "Engineers own outcomes.",
        body: ["Not tickets.", "Not hours.", "Outcomes."],
      },
      {
        title: "Long-term thinking.",
        body: [
          "Today's shortcut becomes tomorrow's technical debt.",
        ],
      },
    ],
  },
  audience: {
    title: "Who We Work With",
    items: [
      "Technical founders",
      "Engineering managers",
      "CTOs",
      "Product companies",
      "Growing startups",
    ],
  },
  notThis: {
    title: "What We Don't Do",
    items: [
      "We don't sell junior teams.",
      "We don't outsource communication.",
      "We don't promise impossible timelines.",
      "We don't build software we wouldn't maintain ourselves.",
    ],
  },
  cta: {
    headline: "Let's build software that lasts.",
    button: "Book a Call",
  },
} as const;

export const contactContent = {
  meta: {
    title: "Contact",
    description:
      "Tell ArcVein about your platform, product or engineering challenge. Usually replies within one business day.",
  },
  hero: {
    headline: "Let's Build Something That Lasts.",
    description:
      "Whether you're building a new platform, scaling an existing product or solving difficult engineering problems, we'd love to hear about it.",
  },
  form: {
    nameLabel: "Name",
    emailLabel: "Work Email",
    companyLabel: "Company",
    companyOptional: "optional",
    projectLabel: "Tell us about your project",
    submitLabel: "Start the Conversation",
  },
  nextSteps: {
    title: "What Happens Next",
    steps: [
      {
        step: "1",
        lines: ["We'll read your message carefully."],
      },
      {
        step: "2",
        lines: [
          "If we're a good fit,",
          "we'll schedule an introductory call.",
        ],
      },
      {
        step: "3",
        lines: [
          "We'll discuss architecture,",
          "scope and next steps.",
        ],
      },
    ],
  },
  details: {
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    note: "Usually replies within one business day.",
  },
} as const;

export const engineeringContent = {
  meta: {
    title: "Engineering",
    description:
      "How ArcVein approaches architecture, performance engineering, distributed systems and AI infrastructure — from experienced engineers who design for the long term.",
  },
  hero: {
    title: "Engineering Beyond Code.",
    subtitle:
      "We design systems that remain reliable, maintainable and performant long after deployment.",
  },
  architecture: {
    title: "Architecture",
    body: [
      "Good architecture is less about frameworks and more about decisions that still hold when the product grows.",
      "We start with constraints: traffic patterns, failure modes, team structure and the cost of change. Then we draw clear boundaries, keep interfaces deliberate and avoid complexity that cannot pay for itself.",
      "The goal is not a perfect diagram. It is a system teams can understand, operate and evolve — without rewriting the core every year.",
    ],
  },
  domains: [
    {
      name: "Performance Engineering",
      headline:
        "Latency is a product property, not a late-stage optimization.",
      body: "We treat performance as design work: measuring the path end to end, reducing contention and making the system observable enough to prove where time and resources go.",
      focus: [
        "Latency",
        "Concurrency",
        "Networking",
        "Observability",
        "Performance optimization",
      ],
    },
    {
      name: "Distributed Systems",
      headline:
        "Distributed systems fail in the seams. We design for those seams.",
      body: "APIs, events and data paths need clear ownership. We build for partial failure, backpressure and recovery — so reliability is an intentional outcome, not a hope.",
      focus: [
        "APIs",
        "Event-driven architecture",
        "Resilience",
        "Scalability",
        "Reliability",
      ],
    },
    {
      name: "AI Infrastructure",
      headline: "Production AI is a systems problem before it is a model problem.",
      body: "We focus on the infrastructure around models: retrieval, inference services, evaluation hooks and operational visibility — so AI capabilities can be shipped and maintained like any other critical path.",
      focus: [
        "LLM integration",
        "RAG",
        "Inference services",
        "Vector search",
        "Production AI platforms",
      ],
    },
  ],
  principles: {
    title: "Engineering Principles",
    items: [
      { title: "Simplicity wins." },
      { title: "Measure everything." },
      { title: "Reliability is non-negotiable." },
      { title: "Performance is a feature." },
      { title: "Design for change." },
    ],
  },
  cta: {
    headline: "Let's solve difficult engineering problems together.",
    button: "Book a Discovery Call",
  },
} as const;
