import { Section } from "@/components/ui/Section";
import { ServiceBlock } from "@/components/ui/ServiceBlock";
import { servicesContent } from "@/lib/site";

export function ServiceOfferings() {
  return (
    <Section bordered spacing="compact">
      {servicesContent.offerings.map((offering, index) => (
        <ServiceBlock
          key={offering.name}
          name={offering.name}
          headline={offering.headline}
          body={offering.body}
          focus={offering.focus}
          reverse={index % 2 === 1}
        />
      ))}
    </Section>
  );
}
