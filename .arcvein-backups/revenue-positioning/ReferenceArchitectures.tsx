import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function ReferenceArchitectures() {
  return (
    <section
      aria-labelledby="reference-architecture-heading"
      className="border-b border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Reference architecture
            </p>

            <h2
              id="reference-architecture-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              See how we reason about production trading systems.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-muted">
              Our interactive reference architecture covers market data,
              strategy execution, order management, risk, exchange
              connectivity, CPU placement and downstream systems.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-muted">
              It is representative engineering work—not a fictional client
              case study.
            </p>
          </div>
        </div>

        <Link
          href="/architectures/low-latency-trading-platform"
          className="group mt-14 block border border-border/70 p-7 transition duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-foreground/[0.025] sm:p-10"
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted/70">
                Available now
              </p>

              <h3 className="mt-6 max-w-2xl text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                Production-Grade Trading Platform Architecture
              </h3>

              <p className="mt-5 max-w-3xl leading-7 text-muted">
                Explore the deterministic trading path, NUMA and CPU layout,
                SPSC communication, order lifecycle, pre-trade risk, exchange
                gateway and asynchronous downstream platform.
              </p>
            </div>

            <span className="text-sm font-medium text-foreground">
              Explore architecture <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </Container>
    </section>
  );
}
