import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";
import { TradingArchitectureDiagram } from "@/components/architectures/TradingArchitectureDiagram";
import { CpuThreadArchitecture } from "@/components/architectures/CpuThreadArchitecture";
import { EngineeringExplorerNav } from "@/components/architectures/EngineeringExplorerNav";

export const metadata: Metadata = createPageMetadata({
  title: "Low-Latency Trading Platform Architecture",
  description:
    "A production-oriented reference architecture for deterministic market data processing, strategy execution, risk management and downstream analytics.",
  path: "/architectures/low-latency-trading-platform",
});

const criticalPath = [
  {
    number: "01",
    title: "Market data receive",
    description:
      "Receive exchange market data through a low-jitter network path with kernel bypass where required.",
  },
  {
    number: "02",
    title: "Decode and normalize",
    description:
      "Decode exchange-specific protocols and convert them into stable, exchange-agnostic events.",
  },
  {
    number: "03",
    title: "Order book and market state",
    description:
      "Maintain order books, trades, reference data and strategy-facing market state.",
  },
  {
    number: "04",
    title: "Strategy execution",
    description:
      "Run strategy logic against deterministic snapshots without blocking calls or runtime allocation.",
  },
  {
    number: "05",
    title: "Risk and order management",
    description:
      "Apply pre-trade controls, position limits and order lifecycle management before transmission.",
  },
  {
    number: "06",
    title: "Exchange gateway",
    description:
      "Encode and transmit orders while processing acknowledgements, fills, rejects and cancels.",
  },
];

const supportingSystems = [
  {
    title: "Downstream publishing",
    description:
      "Publish market data, orders, executions, positions and risk events outside the critical path.",
  },
  {
    title: "State replication",
    description:
      "Replicate strategy attribution, positions and execution state to a warm standby environment.",
  },
  {
    title: "Historical data",
    description:
      "Store normalized market data and execution events for replay, analytics and research.",
  },
  {
    title: "Operations",
    description:
      "Provide time synchronization, health monitoring, latency measurement, alerting and auditability.",
  },
];

const principles = [
  "Pinned CPU cores",
  "Preallocated memory",
  "No blocking calls",
  "Lock-free communication",
  "Explicit state ownership",
  "Deterministic critical path",
];

export default function LowLatencyTradingPlatformPage() {
  return (
    <SiteShell>
      <section className="border-b border-border/60 py-24 sm:py-32">
        <Container>
          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
          >
            Reference architectures
          </Link>

          <h1 className="mt-7 max-w-5xl text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            Designing a production-grade low-latency trading platform.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
            A reference architecture for deterministic market data processing,
            strategy execution, risk controls, order management and reliable
            downstream distribution.
          </p>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/60 pt-6 text-sm text-muted">
            <span>Domain: FinTech systems</span>
            <span>Focus: Low latency</span>
            <span>Architecture: Event driven</span>
          </div>
        </Container>
      </section>

      <EngineeringExplorerNav />

      <section id="overview" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Design objective
              </p>

              <h2 className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Keep the trading path deterministic.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-muted">
              <p>
                The critical path should do only the work required to transform
                market events into validated exchange orders.
              </p>

              <p>
                Storage, analytics, dashboards, reporting and research remain
                outside the latency-sensitive process and consume published
                events asynchronously.
              </p>
            </div>
          </div>

          <div className="mt-14 grid border-l border-t border-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="border-b border-r border-border/60 p-7 sm:p-8"
              >
                <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-7 font-medium text-foreground">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div id="architecture" className="scroll-mt-24">
        <TradingArchitectureDiagram />
      </div>
      <div id="cpu-threads" className="scroll-mt-24">
        <CpuThreadArchitecture />
      </div>

      <section className="border-y border-border/60 py-20 sm:py-28">
        <Container>
          <span id="critical-path" className="block scroll-mt-24" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Critical path
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            From exchange packet to validated order.
          </h2>

          <div className="mt-14 grid border-l border-t border-border/60 md:grid-cols-2 lg:grid-cols-3">
            {criticalPath.map((stage) => (
              <article
                key={stage.title}
                className="border-b border-r border-border/60 p-7 transition-colors hover:bg-foreground/[0.025] sm:p-9"
              >
                <span className="text-xs tabular-nums tracking-[0.16em] text-muted/70">
                  {stage.number}
                </span>

                <h3 className="mt-9 text-xl font-medium tracking-tight text-foreground">
                  {stage.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span id="supporting-platform" className="block scroll-mt-24" />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Supporting platform
              </p>

              <h2 className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Everything important does not belong in the critical path.
              </h2>
            </div>

            <div className="grid border-l border-t border-border/60 sm:grid-cols-2">
              {supportingSystems.map((system) => (
                <article
                  key={system.title}
                  className="border-b border-r border-border/60 p-7 sm:p-8"
                >
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {system.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-muted">
                    {system.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border/60 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Engineering partnership
              </p>

              <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
                Building latency-sensitive infrastructure?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Let&apos;s discuss your exchange connectivity, execution path,
                risk model and operational requirements.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Start a conversation
            </Link>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
