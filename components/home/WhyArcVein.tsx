import { Container } from "@/components/ui/Container";

const reasons = [
  {
    number: "01",
    title: "Trading expertise",
    description:
      "Experience across market data, execution workflows, order management, risk controls and capital-markets infrastructure.",
  },
  {
    number: "02",
    title: "Flexible engagement",
    description:
      "Dedicated engineers, embedded project teams or complete platform delivery based on your roadmap and internal capacity.",
  },
  {
    number: "03",
    title: "Long-term engineering",
    description:
      "Small, experienced teams focused on reliability, maintainability, operational clarity and direct technical communication.",
  },
];

export function WhyArcVein() {
  return (
    <section
      aria-labelledby="why-arcvein-heading"
      className="border-b border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Why ArcVein
            </p>

            <h2
              id="why-arcvein-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Specialist trading engineering without the weight of a generic
              consultancy.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              ArcVein helps organizations access trading-domain engineering
              capability without building every specialist skill internally.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-muted">
              We can extend an existing team, assemble a focused project team
              or take responsibility for delivering a defined trading-platform
              capability.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border-l border-t border-border/60 md:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="border-b border-r border-border/60 p-7 transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/[0.025] sm:p-9"
            >
              <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                {reason.number}
              </span>

              <h3 className="mt-9 text-lg font-medium tracking-tight text-foreground">
                {reason.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
