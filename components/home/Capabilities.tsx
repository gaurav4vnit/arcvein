"use client";

import { CapabilityBlock } from "@/components/ui/CapabilityBlock";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motionDelay } from "@/lib/motion";
import { homeContent } from "@/lib/site";

export function Capabilities() {
  const { capabilities } = homeContent;
  const headingId = "capabilities-heading";

  return (
    <Section labelledBy={headingId}>
      <FadeIn>
        <SectionHeading
          id={headingId}
          title={capabilities.title}
          subtitleClassName="max-w-xl"
        >
          {capabilities.subtitle}
        </SectionHeading>
      </FadeIn>

      <div className="mt-16 sm:mt-20 lg:mt-24">
        {capabilities.items.map((capability, index) => (
          <FadeIn key={capability.title} delay={motionDelay.short} y={18}>
            <CapabilityBlock
              title={capability.title}
              description={capability.description}
              keywords={capability.keywords}
              reverse={index % 2 === 1}
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
