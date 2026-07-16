import { Container } from "@/components/ui/Container";

const principles = [
  {
    number: "01",
    title: "Trading-domain understanding",
    description:
      "We understand market data, order lifecycles, execution workflows, risk controls and the operational realities of trading systems.",
  },
  {
    number: "02",
    title: "Engineering-first delivery",
    description:
      "Architecture, reliability, performance and maintainability guide our decisions from the beginning.",
  },
  {
    number: "03",
    title: "Flexible engagement",
    description:
      "Work with ArcVein through project delivery, embedded engineers or a focused team assembled around your roadmap.",
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
              Trading expertise without the weight of a generic consultancy.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              ArcVein combines trading-technology experience with the
              flexibility of a focused engineering partner.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-muted">
              Clients can engage us to deliver a system, modernize an existing
              platform or add experienced C++ and backend engineers directly to
              their teams.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border-l border-t border-border/60 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="border-b border-r border-border/60 p-7 transition-colors hover:bg-foreground/[0.025] sm:p-9"
            >
              <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                {principle.number}
              </span>

              <h3 className="mt-9 text-lg font-medium tracking-tight text-foreground">
                {principle.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
