import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Capabilities",
  description:
    "Engineering expertise across AI, modern C++, backend systems, distributed platforms and high-performance software.",
  path: "/capabilities",
});

const capabilities = [
  {
    number: "01",
    title: "Modern C++",
    description:
      "Performance-critical systems, concurrency, networking, memory optimization and low-latency infrastructure.",
  },
  {
    number: "02",
    title: "AI Engineering",
    description:
      "Production LLM applications, retrieval systems, inference workflows and AI integrations.",
  },
  {
    number: "03",
    title: "Backend Engineering",
    description:
      "Reliable APIs, event-driven services, distributed systems and high-throughput platforms.",
  },
  {
    number: "04",
    title: "FinTech Systems",
    description:
      "Trading infrastructure, market data, order management, risk systems and financial platforms.",
  },
  {
    number: "05",
    title: "Cloud & Platform",
    description:
      "Cloud-native platforms, containerized workloads, CI/CD, observability and infrastructure automation.",
  },
  {
    number: "06",
    title: "Data Engineering",
    description:
      "Streaming systems, operational data platforms, analytics pipelines and scalable data infrastructure.",
  },
];

export default function CapabilitiesPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60 py-24 sm:py-32">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Engineering capabilities
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            Engineering for technically demanding products.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            ArcVein helps product and engineering teams build dependable
            software across AI, FinTech, distributed systems and
            high-performance computing.
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="capability-domains-heading"
        className="py-20 sm:py-28"
      >
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Core domains
            </p>

            <h2
              id="capability-domains-heading"
              className="mt-5 text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Depth where engineering quality matters most.
            </h2>
          </div>

          <div className="mt-12 grid border-l border-t border-border/60 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="border-b border-r border-border/60 p-7 transition-colors hover:bg-foreground/[0.025] sm:p-9"
              >
                <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                  {capability.number}
                </span>

                <h3 className="mt-10 text-xl font-medium tracking-tight text-foreground">
                  {capability.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
