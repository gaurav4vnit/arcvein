"use client";

import { FadeIn, FadeInStagger } from "@/components/ui/FadeIn";
import { EditorialColumn } from "@/components/ui/EditorialColumn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/lib/site";

export function HowWeThink() {
  const { howWeThink } = homeContent;
  const headingId = "how-we-think-heading";

  return (
    <Section labelledBy={headingId}>
      <FadeIn>
        <SectionHeading
          id={headingId}
          title={howWeThink.title}
          className="max-w-2xl"
          subtitleClassName="max-w-md"
        >
          <span className="block">{howWeThink.subtitle[0]}</span>
          <span className="mt-1 block">{howWeThink.subtitle[1]}</span>
        </SectionHeading>
      </FadeIn>

      <ul className="mt-20 grid list-none grid-cols-1 gap-x-10 gap-y-14 sm:mt-24 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-0">
        {howWeThink.columns.map((column, index) => (
          <FadeInStagger key={column.title} index={index}>
            <EditorialColumn title={column.title}>
              <p>{column.description}</p>
            </EditorialColumn>
          </FadeInStagger>
        ))}
      </ul>
    </Section>
  );
}
