"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { motionDelay } from "@/lib/motion";
import { homeContent } from "@/lib/site";

export function HowWeWork() {
  const { howWeWork } = homeContent;
  const headingId = "how-we-work-heading";

  return (
    <Section labelledBy={headingId}>
      <FadeIn>
        <SectionHeading
          id={headingId}
          title={howWeWork.title}
          subtitleClassName="max-w-lg"
        >
          {howWeWork.subtitle}
        </SectionHeading>
      </FadeIn>

      <FadeIn className="mt-20 sm:mt-24 lg:mt-28" delay={motionDelay.short} y={18}>
        <Timeline steps={howWeWork.steps} />
      </FadeIn>
    </Section>
  );
}
