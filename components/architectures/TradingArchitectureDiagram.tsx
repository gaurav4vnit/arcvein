"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";

type ArchitectureNode = {
  id: string;
  title: string;
  subtitle: string;
  core?: string;
  technology?: string;
  responsibilities: string[];
  tone: "exchange" | "critical" | "supporting";
};

const nodes: Record<string, ArchitectureNode> = {
  exchangeIn: {
    id: "exchangeIn",
    title: "Exchange",
    subtitle: "Market data and order entry",
    technology: "Native protocol / FIX",
    responsibilities: [
      "Publishes market data",
      "Accepts new, modify and cancel requests",
      "Returns acknowledgements, fills and rejects",
    ],
    tone: "exchange",
  },
  receiver: {
    id: "receiver",
    title: "Market Data Receiver",
    subtitle: "Packet receive and validation",
    core: "CPU Core 1",
    technology: "Solarflare / ef_vi",
    responsibilities: [
      "Receive multicast or UDP packets",
      "Hardware or software timestamping",
      "Sequence validation and packet-gap detection",
      "NIC affinity and kernel-bypass integration",
    ],
    tone: "critical",
  },
  normalizer: {
    id: "normalizer",
    title: "Decode and Normalize",
    subtitle: "Exchange protocol to stable events",
    core: "CPU Core 1",
    technology: "Modern C++",
    responsibilities: [
      "Decode exchange-specific binary messages",
      "Validate message structure and sequence",
      "Normalize instruments, prices and event types",
      "Publish exchange-agnostic market events",
    ],
    tone: "critical",
  },
  book: {
    id: "book",
    title: "Order Book and Market State",
    subtitle: "Depth, trades and reference state",
    core: "CPU Core 2",
    technology: "Preallocated C++ structures",
    responsibilities: [
      "Maintain L1 and L2 order books",
      "Track trades, LTP, OHLC and depth",
      "Provide consistent strategy-facing snapshots",
      "Avoid allocation and locks on the hot path",
    ],
    tone: "critical",
  },
  strategyA: {
    id: "strategyA",
    title: "Strategy A",
    subtitle: "Independent strategy instance",
    core: "CPU Core 3",
    technology: "Plugin interface",
    responsibilities: [
      "Consume deterministic market state",
      "Maintain strategy-local state",
      "Generate new, modify and cancel requests",
      "Attach strategy attribution to every order",
    ],
    tone: "critical",
  },
  strategyB: {
    id: "strategyB",
    title: "Strategy B",
    subtitle: "Independent strategy instance",
    core: "Dedicated or shared core",
    technology: "Plugin interface",
    responsibilities: [
      "Run independently from other strategies",
      "Consume normalized market events",
      "Maintain isolated positions and parameters",
      "Publish attributed order intents",
    ],
    tone: "critical",
  },
  oms: {
    id: "oms",
    title: "Order Manager",
    subtitle: "Order lifecycle and attribution",
    core: "CPU Core 4",
    technology: "State-machine driven C++",
    responsibilities: [
      "Validate order lifecycle transitions",
      "Assign internal and exchange order identifiers",
      "Preserve strategy attribution",
      "Track pending, active, filled and cancelled state",
    ],
    tone: "critical",
  },
  risk: {
    id: "risk",
    title: "Pre-Trade Risk",
    subtitle: "Limits, exposure and kill controls",
    core: "CPU Core 5",
    technology: "Immutable risk snapshot",
    responsibilities: [
      "Fat-finger and price-band checks",
      "Position and exposure limits",
      "Account and instrument-level controls",
      "Immediate kill-switch enforcement",
    ],
    tone: "critical",
  },
  gateway: {
    id: "gateway",
    title: "Exchange Gateway",
    subtitle: "Encode, transmit and receive executions",
    core: "CPU Core 6",
    technology: "Solarflare TX / Native protocol",
    responsibilities: [
      "Encode exchange-native order messages",
      "Transmit new, modify and cancel requests",
      "Receive acknowledgements, fills and rejects",
      "Measure wire-to-wire and application latency",
    ],
    tone: "critical",
  },
  exchangeOut: {
    id: "exchangeOut",
    title: "Exchange",
    subtitle: "Order acknowledgements and executions",
    technology: "Native protocol / FIX",
    responsibilities: [
      "Accepts validated orders",
      "Returns acknowledgements and rejects",
      "Publishes partial and complete fills",
      "Maintains exchange-side order state",
    ],
    tone: "exchange",
  },
  publisher: {
    id: "publisher",
    title: "Downstream Publisher",
    subtitle: "Asynchronous event distribution",
    core: "Low-priority CPU core",
    technology: "TCP / Protobuf / Binary stream",
    responsibilities: [
      "Publish market-data events",
      "Publish orders, executions and positions",
      "Keep serialization outside the critical path",
      "Provide replayable event streams",
    ],
    tone: "supporting",
  },
  clickhouse: {
    id: "clickhouse",
    title: "ClickHouse",
    subtitle: "Historical market and execution data",
    technology: "ClickHouse",
    responsibilities: [
      "Store normalized tick data",
      "Store orders, executions and positions",
      "Support high-volume analytical queries",
      "Provide research and reporting datasets",
    ],
    tone: "supporting",
  },
  monitoring: {
    id: "monitoring",
    title: "Monitoring",
    subtitle: "Latency, health and alerts",
    technology: "Prometheus / Grafana",
    responsibilities: [
      "Track end-to-end and stage latency",
      "Detect packet gaps and stalled components",
      "Monitor CPU, memory and NIC health",
      "Publish real-time operational alerts",
    ],
    tone: "supporting",
  },
  analytics: {
    id: "analytics",
    title: "Analytics",
    subtitle: "Operational and trading insight",
    technology: "Python / Go",
    responsibilities: [
      "Analyse execution quality",
      "Calculate PnL and strategy metrics",
      "Support dashboards and reporting",
      "Provide research-facing APIs",
    ],
    tone: "supporting",
  },
  replay: {
    id: "replay",
    title: "Replay and Research",
    subtitle: "Deterministic event reconstruction",
    technology: "C++ / Python",
    responsibilities: [
      "Replay historical market events",
      "Reconstruct order and execution state",
      "Support incident investigation",
      "Enable strategy testing and research",
    ],
    tone: "supporting",
  },
};

const toneClasses: Record<ArchitectureNode["tone"], string> = {
  exchange:
    "border-violet-400/40 bg-violet-400/[0.045] hover:border-violet-300/65",
  critical:
    "border-blue-400/35 bg-blue-400/[0.035] hover:border-blue-300/65",
  supporting:
    "border-border/70 bg-foreground/[0.018] hover:border-foreground/35",
};

type NodeButtonProps = {
  nodeId: keyof typeof nodes;
  selectedId: string;
  onSelect: (id: string) => void;
};

function NodeButton({
  nodeId,
  selectedId,
  onSelect,
}: NodeButtonProps) {
  const node = nodes[nodeId];
  const selected = selectedId === node.id;

  return (
    <button
      type="button"
      onMouseEnter={() => onSelect(node.id)}
      onFocus={() => onSelect(node.id)}
      onClick={() => onSelect(node.id)}
      aria-pressed={selected}
      className={[
        "group relative flex min-h-24 w-full flex-col justify-center border px-4 py-4 text-left",
        "transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70",
        "hover:-translate-y-0.5",
        toneClasses[node.tone],
        selected ? "border-foreground/70 bg-foreground/[0.055]" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium tracking-tight text-foreground">
            {node.title}
          </p>

          <p className="mt-1 text-[11px] leading-5 text-muted">
            {node.subtitle}
          </p>
        </div>

        <span
          aria-hidden="true"
          className={[
            "mt-1 h-1.5 w-1.5 rounded-full transition",
            node.tone === "critical"
              ? "bg-blue-300/75"
              : node.tone === "exchange"
                ? "bg-violet-300/75"
                : "bg-foreground/35",
          ].join(" ")}
        />
      </div>

      {node.core ? (
        <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-muted/70">
          {node.core}
        </p>
      ) : null}
    </button>
  );
}

function VerticalConnector() {
  return (
    <div aria-hidden="true" className="flex h-7 justify-center">
      <div className="h-full w-px bg-border/80" />
    </div>
  );
}

function DetailPanel({ node }: { node: ArchitectureNode }) {
  return (
    <aside
      aria-live="polite"
      className="border border-border/70 bg-foreground/[0.018] p-6 lg:sticky lg:top-24"
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
        Selected component
      </p>

      <h3 className="mt-5 text-2xl font-medium tracking-tight text-foreground">
        {node.title}
      </h3>

      <p className="mt-2 leading-7 text-muted">
        {node.subtitle}
      </p>

      <dl className="mt-7 space-y-5 border-t border-border/60 pt-6">
        {node.core ? (
          <div>
            <dt className="text-[10px] uppercase tracking-[0.16em] text-muted/70">
              Placement
            </dt>
            <dd className="mt-2 text-sm text-foreground">
              {node.core}
            </dd>
          </div>
        ) : null}

        {node.technology ? (
          <div>
            <dt className="text-[10px] uppercase tracking-[0.16em] text-muted/70">
              Technology
            </dt>
            <dd className="mt-2 text-sm text-foreground">
              {node.technology}
            </dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-7">
        <p className="text-[10px] uppercase tracking-[0.16em] text-muted/70">
          Responsibilities
        </p>

        <ul className="mt-4 space-y-3">
          {node.responsibilities.map((responsibility) => (
            <li
              key={responsibility}
              className="flex gap-3 text-sm leading-6 text-muted"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/55"
              />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function TradingArchitectureDiagram() {
  const [selectedId, setSelectedId] = useState("receiver");
  const selectedNode = nodes[selectedId] ?? nodes.receiver;

  return (
    <section
      aria-labelledby="trading-architecture-heading"
      className="border-y border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              System architecture
            </p>

            <h2
              id="trading-architecture-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Separate the deterministic trading path from the supporting
              platform.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-muted">
              Select or hover over a component to inspect its responsibilities,
              CPU placement and implementation choices.
            </p>

            <div className="mt-8 space-y-3 text-sm text-muted">
              <p className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-300/75" />
                Latency-sensitive processing
              </p>

              <p className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-violet-300/75" />
                Exchange boundary
              </p>

              <p className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-foreground/35" />
                Supporting and downstream systems
              </p>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
            <div className="overflow-hidden border border-border/70 bg-background">
              <div className="border-b border-border/70 px-5 py-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    Colocated trading system
                  </p>

                  <p className="text-xs text-muted/70">
                    Interactive architecture
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="mx-auto max-w-xl">
                  <NodeButton
                    nodeId="exchangeIn"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />

                  <VerticalConnector />

                  <NodeButton
                    nodeId="receiver"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />

                  <VerticalConnector />

                  <NodeButton
                    nodeId="normalizer"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />

                  <VerticalConnector />

                  <NodeButton
                    nodeId="book"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />

                  <VerticalConnector />

                  <div className="grid grid-cols-2 gap-4">
                    <NodeButton
                      nodeId="strategyA"
                      selectedId={selectedId}
                      onSelect={setSelectedId}
                    />

                    <NodeButton
                      nodeId="strategyB"
                      selectedId={selectedId}
                      onSelect={setSelectedId}
                    />
                  </div>

                  <VerticalConnector />

                  <NodeButton
                    nodeId="oms"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />

                  <VerticalConnector />

                  <NodeButton
                    nodeId="risk"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />

                  <VerticalConnector />

                  <NodeButton
                    nodeId="gateway"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />

                  <VerticalConnector />

                  <NodeButton
                    nodeId="exchangeOut"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />
                </div>
              </div>

              <div className="border-t border-border/70 bg-foreground/[0.012] p-5 sm:p-7">
                <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  Asynchronous event publishing
                </p>

                <NodeButton
                  nodeId="publisher"
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                />

                <VerticalConnector />

                <div className="grid gap-3 sm:grid-cols-3">
                  <NodeButton
                    nodeId="clickhouse"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />

                  <NodeButton
                    nodeId="monitoring"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />

                  <NodeButton
                    nodeId="analytics"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                  />
                </div>

                <VerticalConnector />

                <NodeButton
                  nodeId="replay"
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                />
              </div>
            </div>

            <DetailPanel node={selectedNode} />
          </div>
        </div>
      </Container>
    </section>
  );
}
