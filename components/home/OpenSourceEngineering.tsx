import Link from "next/link";

import { Container } from "@/components/ui/Container";

const features = [
  "Modern C++",
  "REST APIs",
  "WebSocket market data",
  "Order management",
  "Authentication",
  "Risk-aware structure",
  "Docker",
  "Unit tests",
];

export function OpenSourceEngineering() {
  return (
    <section
      id="open-source"
      aria-labelledby="open-source-heading"
      className="border-b border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Featured open source
            </p>

            <h2
              id="open-source-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Engineering quality should be visible.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-muted">
              Our open-source work demonstrates the practical engineering
              standards we bring to trading-platform and staff-augmentation
              engagements.
            </p>
          </div>

          <article className="border border-border/70 p-7 sm:p-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted/70">
                  Featured project
                </p>

                <h3 className="mt-5 text-2xl font-medium tracking-tight text-foreground">
                  Delta Exchange Trading Platform
                </h3>

                <p className="mt-2 text-sm text-muted">
                  Modern C++ reference implementation
                </p>
              </div>

              <span className="border border-border/70 px-3 py-2 text-xs uppercase tracking-[0.14em] text-muted">
                Open source
              </span>
            </div>

            <p className="mt-7 max-w-2xl leading-7 text-muted">
              A production-oriented reference implementation demonstrating
              authenticated exchange connectivity, live market data, order
              handling and a maintainable foundation for automated trading.
            </p>

            <div className="mt-8 grid border-l border-t border-border/60 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="border-b border-r border-border/60 p-4 text-sm text-muted"
                >
                  {feature}
                </div>
              ))}
            </div>

            <Link
              href="https://github.com/gaurav4vnit/AlgoTrade-DeltaExchange"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-65"
            >
              View on GitHub
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
}
