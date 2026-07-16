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
    title: "Modern C++",
    description:
      "Performance-critical software, concurrency, networking and low-latency systems.",
  },
  {
    title: "AI Engineering",
    description:
      "LLM applications, RAG systems, AI integrations and production inference workflows.",
  },
  {
    title: "Backend Systems",
    description:
      "Reliable APIs, event-driven services, distributed systems and high-throughput platforms.",
  },
  {
    title: "FinTech Engineering",
    description:
      "Trading infrastructure, market data, order management and financial platforms.",
  },
];

export default function CapabilitiesPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60 py-24 sm:py-32">
        <Container>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Capabilities
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            Engineering for technically ambitious products.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            ArcVein brings deep engineering experience across AI, FinTech,
            distributed systems and high-performance software.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid border-l border-t border-border/60 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="border-b border-r border-border/60 p-8 sm:p-10"
              >
                <h2 className="text-xl font-medium tracking-tight text-foreground">
                  {capability.title}
                </h2>

                <p className="mt-4 max-w-md leading-7 text-muted">
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
