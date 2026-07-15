import { Card } from "@/ui/card";
import { Container } from "@/ui/container";

const principles = [
  {
    title: "Performance",
    description: "Software should be fast, reliable and observable.",
  },
  {
    title: "Ownership",
    description: "We think like founders, not contractors.",
  },
  {
    title: "Precision",
    description: "Small decisions compound into reliable systems.",
  },
  {
    title: "Longevity",
    description: "Build systems that evolve, not systems that expire.",
  },
] as const;

export function ArcVeinWay() {
  return (
    <section
      aria-labelledby="arcvein-way-heading"
      className="relative border-t border-foreground/[0.06]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 engineering-grid"
      />

      <Container className="relative max-w-7xl py-20 sm:py-24 lg:py-28">
        <header className="max-w-xl">
          <h2
            id="arcvein-way-heading"
            className="font-heading text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground"
          >
            The ArcVein Way
          </h2>
          <p className="mt-5 text-[15px] leading-[1.7] text-muted sm:text-base">
            Built like engineers. Not marketers.
          </p>
        </header>

        <ul className="mt-12 grid list-none grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">
          {principles.map((principle) => (
            <Card
              key={principle.title}
              as="li"
              title={principle.title}
              className="h-full"
            >
              <p>{principle.description}</p>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  );
}
