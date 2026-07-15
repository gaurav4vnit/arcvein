import { BeliefBlock } from "@/components/ui/BeliefBlock";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/lib/site";

export function WhatWeBelieve() {
  const { beliefs } = aboutContent;
  const headingId = "what-we-believe-heading";

  return (
    <Section labelledBy={headingId} spacing="compact">
      <SectionHeading id={headingId} title={beliefs.title} />

      <div className="mt-14 sm:mt-16 lg:mt-20">
        {beliefs.items.map((item, index) => (
          <BeliefBlock
            key={item.title}
            title={item.title}
            body={item.body}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
}
