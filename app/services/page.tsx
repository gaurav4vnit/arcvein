import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Trading Technology Services",
  description:
    "Trading platform engineering, exchange connectivity, market data infrastructure and dedicated engineering teams for trading firms, fintech companies and capital markets organizations.",
  path: "/services",
});

const services = [
  {
    number: "01",
    eyebrow: "Platform engineering",
    title: "Trading Platform Engineering",
    description:
      "Design, build and modernize reliable trading platforms for execution, order management, risk, portfolio workflows and operational control.",
    focusAreas: [
      "Order management systems",
      "Execution management systems",
      "Execution and order routing",
      "Pre-trade and runtime risk",
      "Portfolio and position management",
      "Strategy and operational infrastructure",
    ],
  },
  {
    number: "02",
    eyebrow: "Connectivity",
    title: "Exchange Connectivity",
    description:
      "Build dependable connectivity to exchanges, brokers and liquidity venues using standard and venue-specific protocols.",
    focusAreas: [
      "FIX connectivity",
      "Native exchange protocols",
      "REST integrations",
      "WebSocket integrations",
      "Market and order gateways",
      "Connection recovery and failover",
    ],
  },
  {
    number: "03",
    eyebrow: "Market infrastructure",
    title: "Market Data Infrastructure",
    description:
      "Engineer real-time market-data systems for ingestion, normalization, order-book construction, distribution, storage and replay.",
    focusAreas: [
      "Feed handlers",
      "Market-data normalization",
      "Order-book construction",
      "Real-time event distribution",
      "Historical storage and replay",
      "Analytics and downstream publishing",
    ],
  },
  {
    number: "04",
    eyebrow: "Engineering capacity",
    title: "Dedicated Engineering Teams",
    description:
      "Add experienced C++ and backend engineers to your organization through contract, embedded-team and staff-augmentation engagements.",
    focusAreas: [
      "Individual contract engineers",
      "Embedded engineering teams",
      "Modern C++ specialists",
      "Trading backend engineers",
      "Project-based delivery teams",
      "Long-term engineering partnerships",
    ],
  },
];

const engagementModels = [
  {
    number: "01",
    title: "Individual Engineer",
    description:
      "Add specialist capability to an existing product or platform team.",
  },
  {
    number: "02",
    title: "Embedded Team",
    description:
      "A focused team working inside your delivery process and technical organization.",
  },
  {
    number: "03",
    title: "Project Delivery",
    description:
      "ArcVein owns a defined platform capability, milestone or modernization initiative.",
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "Flexible engineering capacity that evolves with your roadmap and delivery needs.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60 py-24 sm:py-32">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Trading technology services
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            Trading technology is our focus.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
            ArcVein builds trading platforms, exchange connectivity and
            market-data infrastructure. We also provide experienced engineering
            teams for trading and capital-markets technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              Discuss Your Project
            </ButtonLink>

            <ButtonLink
              href="/engineering-teams"
              variant="outline"
              size="lg"
            >
              Explore Engineering Teams
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="services-heading"
        className="py-20 sm:py-28"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Services
              </p>

              <h2
                id="services-heading"
                className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
              >
                Specialist engineering across the trading-platform lifecycle.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-muted">
                Work with ArcVein for complete platform delivery, a focused
                engineering project or specialist engineers embedded into your
                existing organization.
              </p>
            </div>

            <div className="border-t border-border/60">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="grid gap-8 border-b border-border/60 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                        {service.number}
                      </span>

                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                        {service.eyebrow}
                      </p>
                    </div>

                    <h3 className="mt-6 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-xl leading-7 text-muted">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted/70">
                      Focus areas
                    </p>

                    <ul className="mt-5 border-t border-border/60">
                      {service.focusAreas.map((area) => (
                        <li
                          key={area}
                          className="flex items-center gap-3 border-b border-border/60 py-3 text-sm text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 shrink-0 rounded-full bg-foreground/60"
                          />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="engagement-heading"
        className="border-y border-border/60 py-20 sm:py-28"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Engagement models
              </p>

              <h2
                id="engagement-heading"
                className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
              >
                Start with one engineer or a complete delivery team.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-muted">
                Engagements are structured around your current team, roadmap,
                technical ownership and required delivery timeline.
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

                  <p className="mt-4 text-sm leading-6 text-muted">
                    {model.description}
                  </p>
                </article>
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
                Need trading-platform expertise or specialist engineering
                capacity?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                Tell us about your platform, engineering challenge, current
                team and delivery timeline.
              </p>
            </div>

            <ButtonLink href="/contact" size="lg">
              Discuss Your Requirements
            </ButtonLink>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
