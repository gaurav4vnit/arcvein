import { Container } from "@/components/ui/Container";

const principles = [
  {
    number: "01",
    title: "Engineering first",
    description:
      "We prioritise software quality, performance and long-term maintainability.",
  },
  {
    number: "02",
    title: "Pragmatic architecture",
    description:
      "Every decision balances performance, simplicity and operational clarity.",
  },
  {
    number: "03",
    title: "Long-term partnership",
    description:
      "We integrate with your team and build software designed to evolve with the product.",
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
              Built by engineers for engineering teams.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              ArcVein partners with startups and technology companies building
              AI applications, FinTech platforms and high-performance
              software.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-muted">
              We focus on difficult engineering problems with experienced
              engineers, pragmatic architecture and production-ready software.
              No inflated claims or unnecessary complexity.
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
