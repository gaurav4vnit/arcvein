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
              Start a conversation
            </p>

            <h2
              id="home-cta-heading"
              className="mt-5 max-w-3xl text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
            >
              Building something technically ambitious?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Let&apos;s discuss your architecture, engineering roadmap and the
              technical challenges standing between your team and production.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              Book a call
            </ButtonLink>

            <ButtonLink href="/services" variant="outline" size="lg">
              Explore services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
