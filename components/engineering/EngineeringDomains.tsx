import { Section } from "@/components/ui/Section";
import { ServiceBlock } from "@/components/ui/ServiceBlock";
import { engineeringContent } from "@/lib/site";

export function EngineeringDomains() {
  return (
    <Section bordered spacing="compact">
      {engineeringContent.domains.map((domain, index) => (
        <ServiceBlock
          key={domain.name}
          name={domain.name}
          headline={domain.headline}
          body={domain.body}
          focus={domain.focus}
          reverse={index % 2 === 1}
        />
      ))}
    </Section>
  );
}
