import Link from "next/link";

import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    number: "01",
    title: "Modern C++",
    description:
      "Performance-critical software, concurrency, networking and low-latency infrastructure.",
  },
  {
    number: "02",
    title: "AI Engineering",
    description:
      "Production LLM applications, retrieval systems, inference workflows and AI integrations.",
  },
  {
    number: "03",
    title: "Backend Systems",
    description:
      "Reliable APIs, distributed services, event-driven platforms and high-throughput systems.",
  },
  {
    number: "04",
    title: "FinTech Engineering",
    description:
      "Trading infrastructure, market data, order management, risk and financial platforms.",
  },
];

export function Capabilities() {
  return (
    <section
      aria-labelledby="home-capabilities-heading"
      className="border-y border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Engineering capabilities
            </p>

            <h2
              id="home-capabilities-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Built for technically demanding products.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
              ArcVein helps engineering teams design and deliver dependable
              software across AI, FinTech, distributed systems and
              high-performance computing.
            </p>

            <Link
              href="/capabilities"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-65"
            >
              Explore all capabilities
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid border-l border-t border-border/60 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="group border-b border-r border-border/60 p-6 transition-colors hover:bg-foreground/[0.025] sm:p-8"
              >
                <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                  {capability.number}
                </span>

                <h3 className="mt-8 text-lg font-medium tracking-tight text-foreground">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
