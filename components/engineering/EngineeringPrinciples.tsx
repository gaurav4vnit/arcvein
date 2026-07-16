import { BeliefBlock } from "@/components/ui/BeliefBlock";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engineeringContent } from "@/lib/site";

export function EngineeringPrinciples() {
  const { principles } = engineeringContent;
  const headingId = "engineering-principles-heading";

  return (
    <Section labelledBy={headingId}>
      <SectionHeading id={headingId} title={principles.title} />

      <div className="mt-14 sm:mt-16 lg:mt-20">
        {principles.items.map((item, index) => (
          <BeliefBlock
            key={item.title}
            title={item.title}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
}
