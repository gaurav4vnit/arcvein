import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { contactContent, siteConfig } from "@/lib/site";

export function ContactPanel() {
  const { nextSteps, details } = contactContent;
  const stepsHeadingId = "what-happens-next-heading";

  return (
    <Section
      bordered
      spacing="none"
      containerClassName="pb-20 pt-4 sm:pb-24 sm:pt-6 lg:pb-28 lg:pt-8"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
        <div>
          <ContactForm />
        </div>

        <aside className="lg:pt-1" aria-labelledby={stepsHeadingId}>
          <h2
            id={stepsHeadingId}
            className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.03em] text-foreground"
          >
            {nextSteps.title}
          </h2>

          <ol className="mt-10 list-none space-y-8 sm:mt-12">
            {nextSteps.steps.map((item) => (
              <li key={item.step} className="flex gap-5 sm:gap-6">
                <span
                  aria-hidden="true"
                  className="font-mono text-[13px] tracking-wide text-muted"
                >
                  {item.step}
                </span>
                <div className="space-y-1 text-[15px] leading-[1.75] text-muted sm:text-base">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 space-y-6 border-t border-foreground/[0.08] pt-10 sm:mt-16 sm:pt-12">
            <div>
              <p className="font-mono text-[12px] tracking-wide text-muted/70 sm:text-[13px]">
                {details.emailLabel}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block text-[15px] text-foreground transition-colors duration-200 hover:text-foreground/80 sm:text-base"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <p className="font-mono text-[12px] tracking-wide text-muted/70 sm:text-[13px]">
                {details.linkedinLabel}
              </p>
              <a
                href={siteConfig.social.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-[15px] text-foreground transition-colors duration-200 hover:text-foreground/80 sm:text-base"
              >
                {siteConfig.social.linkedin.label}
              </a>
            </div>

            <p className="pt-2 text-[13px] leading-relaxed text-muted/70">
              {details.note}
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
