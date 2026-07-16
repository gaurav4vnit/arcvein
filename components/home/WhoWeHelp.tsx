import { Container } from "@/components/ui/Container";

const audiences = [
  {
    number: "01",
    title: "Proprietary Trading Firms",
    description:
      "Engineering support for execution platforms, market data, strategy infrastructure and operational tooling.",
  },
  {
    number: "02",
    title: "Hedge Funds",
    description:
      "Trading technology for research, portfolio workflows, execution, risk and data-intensive investment operations.",
  },
  {
    number: "03",
    title: "Brokerages",
    description:
      "Client-facing trading platforms, order management, exchange connectivity and scalable backend systems.",
  },
  {
    number: "04",
    title: "Crypto Exchanges",
    description:
      "Exchange integrations, market data, automated trading infrastructure and reliable operational systems.",
  },
  {
    number: "05",
    title: "FinTech Companies",
    description:
      "Product engineering for companies building trading, investment and capital markets software.",
  },
  {
    number: "06",
    title: "Software Consultancies",
    description:
      "Specialist C++ and trading-platform engineers for client engagements requiring domain experience.",
  },
];

export function WhoWeHelp() {
  return (
    <section
      aria-labelledby="who-we-help-heading"
      className="border-b border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Who we help
            </p>

            <h2
              id="who-we-help-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Built for organizations developing trading technology.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-muted">
            We work with startups, established capital-markets firms and
            consulting partners that need specialist engineering capability
            without building every skill internally.
          </p>
        </div>

        <div className="mt-14 grid border-l border-t border-border/60 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="border-b border-r border-border/60 p-7 transition-colors hover:bg-foreground/[0.025] sm:p-9"
            >
              <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                {audience.number}
              </span>

              <h3 className="mt-9 text-lg font-medium tracking-tight text-foreground">
                {audience.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
