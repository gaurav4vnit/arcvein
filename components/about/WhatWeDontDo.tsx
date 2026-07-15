import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/lib/site";

export function WhatWeDontDo() {
  const { notThis } = aboutContent;
  const headingId = "what-we-dont-do-heading";

  return (
    <Section labelledBy={headingId}>
      <SectionHeading id={headingId} title={notThis.title} />

      <ul className="mt-14 max-w-2xl list-none border-t border-foreground/[0.08] sm:mt-16">
        {notThis.items.map((item) => (
          <li
            key={item}
            className="border-b border-foreground/[0.08] py-5 text-[15px] leading-[1.75] text-muted sm:py-6 sm:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
