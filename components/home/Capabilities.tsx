import Link from "next/link";

import { Container } from "@/components/ui/Container";

const solutions = [
  {
    number: "01",
    title: "Dedicated Engineering Teams",
    description:
      "Experienced C++ and backend engineers integrated directly into your product team through contract and staff-augmentation engagements.",
  },
  {
    number: "02",
    title: "Trading Platform Development",
    description:
      "End-to-end engineering for trading platforms covering execution, market data, order management, risk and operational tooling.",
  },
  {
    number: "03",
    title: "Market Data Systems",
    description:
      "Feed handling, normalization, order books, real-time distribution, historical storage and analytical pipelines.",
  },
  {
    number: "04",
    title: "Exchange Connectivity",
    description:
      "REST, WebSocket, FIX and native protocol integrations with exchanges, brokers and liquidity venues.",
  },
  {
    number: "05",
    title: "OMS and Risk Systems",
    description:
      "Order lifecycle management, execution routing, limits, exposure controls and position-aware trading workflows.",
  },
  {
    number: "06",
    title: "Trading Platform Modernization",
    description:
      "Incremental modernization of legacy trading infrastructure with careful attention to operational continuity and risk.",
  },
];

export function Capabilities() {
  return (
    <section
      aria-labelledby="home-solutions-heading"
      className="border-y border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Solutions
            </p>

            <h2
              id="home-solutions-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Build the platform. Add the engineers. Accelerate delivery.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
              Engage ArcVein for complete platform delivery or strengthen your
              existing team with specialist trading-technology engineers.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-65"
            >
              Explore services
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid border-l border-t border-border/60 sm:grid-cols-2">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="group border-b border-r border-border/60 p-6 transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/[0.025] sm:p-8"
              >
                <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                  {solution.number}
                </span>

                <h3 className="mt-8 text-lg font-medium tracking-tight text-foreground">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
