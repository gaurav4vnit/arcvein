import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeCta() {
  return (
    <section
      aria-labelledby="home-cta-heading"
      className="border-b border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Complimentary Strategy Session
            </p>

            <h2
              id="home-cta-heading"
              className="mt-5 max-w-4xl text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
            >
              Free 1-Hour Trading Technology Strategy Session
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-muted sm:text-lg">
              Whether you&apos;re launching a new trading desk or scaling an existing
              platform, we&apos;ll help you plan your architecture, technology stack,
              and engineering team.
            </p>

            <ul className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-2">
              <li>✓ Low-Latency Architecture Review</li>
              <li>✓ Exchange Connectivity Planning</li>
              <li>✓ Market Data Strategy</li>
              <li>✓ Engineering Team Planning</li>
            </ul>

            <p className="mt-6 text-sm text-muted">
              Designed for brokers, proprietary trading firms, fintechs, and
              capital markets companies actively building or modernizing trading
              platforms.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href="/contact?consultation=strategy-session"
              size="lg"
            >
              Book Your Free Session
            </ButtonLink>

            <ButtonLink href="/services" variant="outline" size="lg">
              Explore Services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}