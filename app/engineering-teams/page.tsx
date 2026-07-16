import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Dedicated Engineering Teams",
  description:
    "Experienced C++ and backend engineers for trading platforms, capital markets technology, market data, OMS, risk and exchange connectivity.",
  path: "/engineering-teams",
});

const engagementModels = [
  {
    number: "01",
    title: "Individual Engineers",
    description:
      "Add a specialist C++ or backend engineer to an existing product team for a defined contract period.",
    bestFor:
      "Filling a critical skills gap without waiting through a long permanent-hiring cycle.",
  },
  {
    number: "02",
    title: "Embedded Engineering Teams",
    description:
      "A focused group of engineers working directly inside your delivery process, tools and communication structure.",
    bestFor:
      "Accelerating an important roadmap while keeping technical direction inside your organization.",
  },
  {
    number: "03",
    title: "Project Teams",
    description:
      "A team assembled around a defined trading-platform capability, milestone or modernization initiative.",
    bestFor:
      "Delivering market data, exchange connectivity, OMS, risk or platform infrastructure with clear ownership.",
  },
  {
    number: "04",
    title: "Long-Term Engineering Partnership",
    description:
      "A flexible engineering relationship that evolves as your platform, priorities and capacity requirements change.",
    bestFor:
      "Organizations that need dependable specialist capacity across multiple phases of product development.",
  },
];

const expertise = [
  {
    title: "Trading Platforms",
    items: [
      "Execution workflows",
      "Multi-asset systems",
      "Trading APIs",
      "Operational tooling",
    ],
  },
  {
    title: "Market Data",
    items: [
      "Feed handlers",
      "Normalization",
      "Order books",
      "Real-time distribution",
    ],
  },
  {
    title: "Exchange Connectivity",
    items: [
      "FIX",
      "REST APIs",
      "WebSocket APIs",
      "Native protocols",
    ],
  },
  {
    title: "OMS and Risk",
    items: [
      "Order lifecycle",
      "Execution state",
      "Pre-trade controls",
      "Position and exposure limits",
    ],
  },
  {
    title: "Modern C++",
    items: [
      "Concurrency",
      "Networking",
      "Performance engineering",
      "Low-latency infrastructure",
    ],
  },
  {
    title: "Trading Backends",
    items: [
      "Distributed services",
      "Event-driven systems",
      "Operational databases",
      "Analytics pipelines",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand the requirement",
    description:
      "We review the platform, current team, technical constraints and the capability you need to add.",
  },
  {
    number: "02",
    title: "Define the engagement",
    description:
      "We agree on skills, ownership, team structure, contract duration and expected timezone overlap.",
  },
  {
    number: "03",
    title: "Select the engineers",
    description:
      "Engineers are evaluated for technical ability, trading-domain relevance and communication.",
  },
  {
    number: "04",
    title: "Integrate and deliver",
    description:
      "The engineers join your workflow with clear responsibilities, reporting and direct technical communication.",
  },
];

const principles = [
  "Trading-domain relevance",
  "Direct access to engineers",
  "Flexible contract duration",
  "Clear technical ownership",
  "Planned timezone overlap",
  "Individual engineers or teams",
];

export default function EngineeringTeamsPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60 py-24 sm:py-32">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Dedicated engineering teams
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            Add experienced engineers who understand trading technology.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
            ArcVein provides C++ and backend engineers for trading platforms,
            market data, exchange connectivity, OMS, risk and capital-markets
            infrastructure.
          </p>

          <p className="mt-5 max-w-3xl leading-7 text-muted">
            Engage one specialist engineer, an embedded delivery team or a
            project team assembled around a defined platform capability.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              Build Your Engineering Team
            </ButtonLink>

            <ButtonLink
              href="/architectures/low-latency-trading-platform"
              variant="outline"
              size="lg"
            >
              Review Our Engineering
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="engagement-models-heading"
        className="py-20 sm:py-28"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Engagement models
              </p>

              <h2
                id="engagement-models-heading"
                className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
              >
                Flexible engineering capacity around your roadmap.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-muted">
                Start with one engineer or assemble a focused team. The
                engagement can expand, reduce or conclude as your priorities
                change.
              </p>
            </div>

            <div className="grid border-l border-t border-border/60 sm:grid-cols-2">
              {engagementModels.map((model) => (
                <article
                  key={model.title}
                  className="border-b border-r border-border/60 p-7 transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/[0.025] sm:p-8"
                >
                  <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                    {model.number}
                  </span>

                  <h3 className="mt-8 text-xl font-medium tracking-tight text-foreground">
                    {model.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted">
                    {model.description}
                  </p>

                  <div className="mt-6 border-t border-border/60 pt-5">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted/70">
                      Best for
                    </p>

                    <p className="mt-3 text-sm leading-6 text-muted">
                      {model.bestFor}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="engineering-expertise-heading"
        className="border-y border-border/60 py-20 sm:py-28"
      >
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Engineering expertise
            </p>

            <h2
              id="engineering-expertise-heading"
              className="mt-5 text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Specialist capability across the trading-platform lifecycle.
            </h2>
          </div>

          <div className="mt-14 grid border-l border-t border-border/60 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((domain, index) => (
              <article
                key={domain.title}
                className="border-b border-r border-border/60 p-7 sm:p-9"
              >
                <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-8 text-xl font-medium tracking-tight text-foreground">
                  {domain.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {domain.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="team-process-heading"
        className="py-20 sm:py-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                How it works
              </p>

              <h2
                id="team-process-heading"
                className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
              >
                From engineering requirement to an integrated team.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-muted">
                The process is designed to keep technical expectations,
                ownership and communication clear from the beginning.
              </p>
            </div>

            <ol className="border-t border-border/60">
              {process.map((step) => (
                <li
                  key={step.number}
                  className="grid gap-4 border-b border-border/60 py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-start"
                >
                  <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                    {step.number}
                  </span>

                  <h3 className="font-medium text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/60 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Engagement principles
              </p>

              <h2 className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Built for technical teams that value clarity and ownership.
              </h2>
            </div>

            <div className="grid border-l border-t border-border/60 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="border-b border-r border-border/60 p-6 sm:p-7"
                >
                  <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-6 font-medium text-foreground">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Start a conversation
              </p>

              <h2 className="mt-5 max-w-4xl text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
                Need specialist engineers for your trading roadmap?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Tell us about the platform, skills, team structure and timeline
                you are working with.
              </p>
            </div>

            <ButtonLink href="/contact" size="lg">
              Discuss Your Team
            </ButtonLink>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
