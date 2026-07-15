import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/lib/site";

export function WhoWeWorkWith() {
  const { audience } = aboutContent;
  const headingId = "who-we-work-with-heading";

  return (
    <Section labelledBy={headingId}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeading id={headingId} title={audience.title} />

        <ul className="list-none border-t border-foreground/[0.08]">
          {audience.items.map((item) => (
            <li
              key={item}
              className="border-b border-foreground/[0.08] py-5 font-heading text-xl font-medium tracking-tight text-foreground sm:py-6 sm:text-2xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
