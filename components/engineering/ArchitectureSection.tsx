import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engineeringContent } from "@/lib/site";

export function ArchitectureSection() {
  const { architecture } = engineeringContent;
  const headingId = "architecture-heading";

  return (
    <Section labelledBy={headingId} spacing="compact">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeading id={headingId} title={architecture.title} />
        <div className="max-w-lg space-y-5 text-[15px] leading-[1.75] text-muted sm:space-y-6 sm:text-base">
          {architecture.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
