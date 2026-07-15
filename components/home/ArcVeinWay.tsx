import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/lib/site";

export function ArcVeinWay() {
  const { arcVeinWay } = homeContent;
  const headingId = "arcvein-way-heading";

  return (
    <Section labelledBy={headingId} spacing="compact">
      <SectionHeading
        id={headingId}
        title={arcVeinWay.title}
        className="max-w-xl"
        subtitleClassName="mt-5 leading-[1.7] sm:mt-5"
      >
        {arcVeinWay.subtitle}
      </SectionHeading>

      <ul className="mt-12 grid list-none grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4">
        {arcVeinWay.principles.map((principle) => (
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
    </Section>
  );
}
