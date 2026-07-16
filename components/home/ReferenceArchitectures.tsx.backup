import { Container } from "@/components/ui/Container";

const architectures = [
  {
    number: "01",
    title: "Low-Latency Trading Platform",
    category: "FinTech systems",
    description:
      "A deterministic architecture for market data, strategy execution, risk management and downstream analytics.",
  },
  {
    number: "02",
    title: "Production AI Platform",
    category: "AI engineering",
    description:
      "A practical architecture for model integration, retrieval, evaluation, observability and secure deployment.",
  },
  {
    number: "03",
    title: "Distributed Backend Platform",
    category: "Backend engineering",
    description:
      "A resilient service architecture designed around explicit boundaries, asynchronous workflows and operational clarity.",
  },
  {
    number: "04",
    title: "Real-Time Analytics Platform",
    category: "Data engineering",
    description:
      "A streaming architecture for ingesting, processing, storing and serving high-volume operational data.",
  },
];

export function ReferenceArchitectures() {
  return (
    <section
      aria-labelledby="reference-architectures-heading"
      className="border-b border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Reference architectures
            </p>

            <h2
              id="reference-architectures-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              How we approach complex engineering systems.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Practical system designs that show how we reason about
              performance, reliability, scale and long-term ownership.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-muted">
              These are engineering reference architectures—not fictional
              client work or inflated case studies.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border-l border-t border-border/60 md:grid-cols-2">
          {architectures.map((architecture) => (
            <article
              key={architecture.title}
              className="group border-b border-r border-border/60 p-7 transition-colors hover:bg-foreground/[0.025] sm:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                  {architecture.number}
                </span>

                <span className="text-xs uppercase tracking-[0.16em] text-muted/70">
                  {architecture.category}
                </span>
              </div>

              <h3 className="mt-10 max-w-md text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                {architecture.title}
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-muted">
                {architecture.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
