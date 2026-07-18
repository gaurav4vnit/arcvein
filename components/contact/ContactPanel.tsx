import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

const process = [
  {
    number: "01",
    title: "Discovery conversation",
    description:
      "We discuss your product, engineering goals, current team and immediate constraints.",
  },
  {
    number: "02",
    title: "Technical review",
    description:
      "We assess the architecture, delivery risks, required skills and practical engagement options.",
  },
  {
    number: "03",
    title: "Recommended approach",
    description:
      "You receive a clear recommendation covering scope, team structure and the next delivery milestone.",
  },
  {
    number: "04",
    title: "Start building",
    description:
      "Once aligned, we establish communication, ownership and a focused delivery plan.",
  },
];

const engagement = [
  "Experienced engineers",
  "Small, focused teams",
  "Direct technical communication",
  "Clear ownership and reporting",
  "Flexible engagement structure",
  "Timezone overlap planned around the client",
];

const bestFit = [
  "AI products and platforms",
  "FinTech and trading systems",
  "Modern C++ and performance engineering",
  "Distributed backend systems",
  "Cloud and platform engineering",
];

type ContactPanelProps = {
  consultation?: string;
};

export function ContactPanel({
  consultation,
}: ContactPanelProps) {
  return (
    <Section
      bordered
      spacing="none"
      containerClassName="pb-20 pt-4 sm:pb-24 sm:pt-6 lg:pb-28 lg:pt-8"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.92fr] lg:gap-20 xl:gap-24">
        <div>
          <ContactForm consultation={consultation} />
        </div>

        <aside className="lg:pt-1" aria-labelledby="contact-process-heading">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Start a project
          </p>

          <h2
            id="contact-process-heading"
            className="mt-5 font-heading text-[clamp(1.75rem,3vw,2.35rem)] font-medium tracking-[-0.03em] text-foreground"
          >
            What happens after you contact us.
          </h2>

          <ol className="mt-10 border-t border-foreground/[0.1]">
            {process.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-foreground/[0.1] py-7"
              >
                <span className="font-mono text-xs tracking-[0.16em] text-muted/70">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="border border-foreground/[0.1] p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Typical engagement
              </p>

              <ul className="mt-5 space-y-3">
                {engagement.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-foreground/[0.1] p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Best fit
              </p>

              <ul className="mt-5 space-y-3">
                {bestFit.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-foreground/[0.1] pt-8">
            <p className="text-xs uppercase tracking-[0.16em] text-muted/70">
              Direct email
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-block text-base text-foreground transition-opacity hover:opacity-70"
            >
              {siteConfig.email}
            </a>

            <p className="mt-5 text-sm leading-6 text-muted">
              We normally respond within one business day.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
