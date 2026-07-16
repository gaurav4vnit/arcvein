import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const challenges = [
  {
    number: "01",
    title: "Hiring experienced trading engineers",
    description:
      "Add C++ and backend engineers who understand market data, execution workflows, OMS, risk and exchange connectivity.",
  },
  {
    number: "02",
    title: "Modernizing a legacy platform",
    description:
      "Improve architecture, reliability and delivery speed without introducing unnecessary operational risk.",
  },
  {
    number: "03",
    title: "Building exchange connectivity",
    description:
      "Implement reliable FIX, REST, WebSocket or native protocol integrations with exchanges, brokers and liquidity venues.",
  },
  {
    number: "04",
    title: "Scaling market-data infrastructure",
    description:
      "Design ingestion, normalization, order books, distribution, historical storage and real-time analytics.",
  },
  {
    number: "05",
    title: "Adding OMS and risk capabilities",
    description:
      "Build deterministic order lifecycles, execution state, pre-trade controls, limits and position-aware workflows.",
  },
  {
    number: "06",
    title: "Accelerating a delayed roadmap",
    description:
      "Add an embedded engineer or focused project team without waiting through a long permanent-hiring cycle.",
  },
];

export function CommonEngineeringChallenges() {
  return (
    <section
      aria-labelledby="common-challenges-heading"
      className="border-b border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Common engineering challenges
            </p>

            <h2
              id="common-challenges-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Where specialist trading engineering makes the difference.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-muted">
              ArcVein helps teams resolve delivery bottlenecks, domain-specific
              hiring gaps and platform risks across the trading-technology
              lifecycle.
            </p>

            <ButtonLink
              href="/contact"
              variant="outline"
              size="lg"
              className="mt-8"
            >
              Discuss Your Challenge
            </ButtonLink>
          </div>

          <div className="grid border-l border-t border-border/60 sm:grid-cols-2">
            {challenges.map((challenge) => (
              <article
                key={challenge.title}
                className="border-b border-r border-border/60 p-7 transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/[0.025] sm:p-8"
              >
                <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                  {challenge.number}
                </span>

                <h3 className="mt-8 text-lg font-medium tracking-tight text-foreground">
                  {challenge.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-muted">
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
