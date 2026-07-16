import { Container } from "@/components/ui/Container";

const features = [
  "Modern C++",
  "REST integration",
  "WebSocket market data",
  "Authenticated order APIs",
  "Order management",
  "Risk-aware structure",
];

export function OpenSourceEngineering() {
  return (
    <section
      aria-labelledby="open-source-heading"
      className="border-b border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Open source engineering
            </p>

            <h2
              id="open-source-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Engineering quality should be visible.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-muted">
              Our open-source work demonstrates the practical engineering
              standards we bring to trading-platform engagements.
            </p>
          </div>

          <article className="border border-border/70 p-7 sm:p-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted/70">
                  Featured project
                </p>

                <h3 className="mt-5 text-2xl font-medium tracking-tight text-foreground">
                  Delta Exchange Trading Bot
                </h3>

                <p className="mt-2 text-sm text-muted">
                  Modern C++ reference implementation
                </p>
              </div>

              <span className="border border-border/70 px-3 py-2 text-xs uppercase tracking-[0.14em] text-muted">
                In development
              </span>
            </div>

            <p className="mt-7 max-w-2xl leading-7 text-muted">
              A practical Delta Exchange integration demonstrating market-data
              streaming, authenticated REST APIs, order handling and a clean
              foundation for automated trading workflows.
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

            <p className="mt-7 text-sm font-medium text-muted">
              Public GitHub release in preparation.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
