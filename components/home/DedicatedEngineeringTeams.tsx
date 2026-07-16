import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    number: "01",
    title: "Modern C++ Engineers",
    description:
      "Engineers for performance-sensitive trading infrastructure, networking, concurrency and exchange-facing systems.",
  },
  {
    number: "02",
    title: "Trading Backend Engineers",
    description:
      "Backend specialists for OMS, execution workflows, market data, risk, APIs and distributed trading services.",
  },
  {
    number: "03",
    title: "Embedded Project Teams",
    description:
      "Small, focused teams that integrate into your delivery process with clear ownership and direct communication.",
  },
  {
    number: "04",
    title: "Contract Staff Augmentation",
    description:
      "Add specialist engineering capacity for defined periods without committing to permanent hiring.",
  },
];

const engagementPoints = [
  "Trading-domain screening",
  "Direct access to engineers",
  "Flexible contract duration",
  "Individual engineers or complete teams",
  "Planned timezone overlap",
  "Clear technical ownership",
];

export function DedicatedEngineeringTeams() {
  return (
    <section
      aria-labelledby="dedicated-teams-heading"
      className="border-b border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Dedicated engineering teams
            </p>

            <h2
              id="dedicated-teams-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Add engineers who already understand trading technology.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
              Strengthen your existing organization with experienced C++ and
              backend engineers through contract, staff-augmentation and
              embedded-team engagements.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="lg">
                Build Your Engineering Team
              </ButtonLink>

              <ButtonLink href="/services" variant="outline" size="lg">
                View Engagement Options
              </ButtonLink>
            </div>
          </div>

          <div>
            <div className="grid border-l border-t border-border/60 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="border-b border-r border-border/60 p-7 transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/[0.025] sm:p-8"
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

            <div className="mt-8 border border-border/70 p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Engagement principles
              </p>

              <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {engagementPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
