import type { Metadata } from "next";
import Link from "next/link";

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
      "Performance-critical systems, concurrency, networking, memory optimisation and low-latency infrastructure.",
  },
  {
    number: "02",
    title: "AI Engineering",
    description:
      "Production LLM applications, retrieval systems, inference workflows and practical AI integrations.",
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
      "Cloud-native platforms, containerised workloads, CI/CD, observability and infrastructure automation.",
  },
  {
    number: "06",
    title: "Data Engineering",
    description:
      "Streaming systems, operational data platforms, analytics pipelines and scalable data infrastructure.",
  },
];

const principles = [
  {
    number: "01",
    title: "Performance first",
    description:
      "We design around real workload requirements rather than treating performance as a late-stage optimisation.",
  },
  {
    number: "02",
    title: "Reliable by design",
    description:
      "Failure handling, observability and operational clarity are considered from the beginning.",
  },
  {
    number: "03",
    title: "Production ready",
    description:
      "Our work is designed for deployment, ownership and continued evolution—not just demonstrations.",
  },
  {
    number: "04",
    title: "Simple architecture",
    description:
      "We prefer understandable systems and explicit trade-offs over unnecessary abstraction.",
  },
  {
    number: "05",
    title: "Long-term maintainability",
    description:
      "Clear boundaries, testing and documentation help internal teams confidently own what we build.",
  },
  {
    number: "06",
    title: "Clear communication",
    description:
      "We surface risks early, explain decisions plainly and work closely with technical stakeholders.",
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Discuss your project
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View services
            </Link>
          </div>
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

      <section
        aria-labelledby="engineering-principles-heading"
        className="border-y border-border/60 py-20 sm:py-28"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Engineering principles
              </p>

              <h2
                id="engineering-principles-heading"
                className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
              >
                Software built to survive production, not just the demo.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-muted">
                We make pragmatic engineering decisions around reliability,
                performance, ownership and the long-term health of the product.
              </p>
            </div>

            <div className="grid border-l border-t border-border/60 sm:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="border-b border-r border-border/60 p-6 sm:p-8"
                >
                  <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                    {principle.number}
                  </span>

                  <h3 className="mt-7 text-lg font-medium tracking-tight text-foreground">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
