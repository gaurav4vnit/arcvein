"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";

type CoreAssignment = {
  id: string;
  core: string;
  numa: string;
  title: string;
  role: string;
  rationale: string;
  communication: string;
  notes: string[];
};

const assignments: CoreAssignment[] = [
  {
    id: "receiver",
    core: "Core 1",
    numa: "NUMA 0",
    title: "Market Data Receiver",
    role: "NIC receive, timestamping and packet-gap detection.",
    rationale:
      "Pinned close to the market-data NIC to reduce cross-NUMA traffic and scheduling jitter.",
    communication: "Writes normalized packet batches to an SPSC queue.",
    notes: [
      "Kernel bypass where required",
      "No blocking calls",
      "Preallocated receive buffers",
    ],
  },
  {
    id: "normalizer",
    core: "Core 2",
    numa: "NUMA 0",
    title: "Decoder and Normalizer",
    role: "Decode exchange messages and produce stable internal events.",
    rationale:
      "Runs on the same NUMA node as the receiver to preserve cache and memory locality.",
    communication: "Consumes receiver events and publishes normalized updates.",
    notes: [
      "Exchange-specific parsing",
      "Sequence validation",
      "No runtime allocation",
    ],
  },
  {
    id: "book",
    core: "Core 3",
    numa: "NUMA 0",
    title: "Order Book Builder",
    role: "Maintain depth, trades, LTP and strategy-facing market state.",
    rationale:
      "Single-writer ownership keeps the book deterministic and removes synchronization from updates.",
    communication: "Publishes market-state events to strategy queues.",
    notes: [
      "Single writer",
      "Cache-aligned structures",
      "Consistent snapshots",
    ],
  },
  {
    id: "strategy",
    core: "Core 4",
    numa: "NUMA 0",
    title: "Strategy Engine",
    role: "Consume market state and produce attributed order intents.",
    rationale:
      "Dedicated execution prevents unrelated application work from interrupting strategy evaluation.",
    communication: "Writes order intents to the OMS through SPSC.",
    notes: [
      "Plugin-based strategies",
      "Strategy-local state",
      "No shared mutable ownership",
    ],
  },
  {
    id: "oms",
    core: "Core 5",
    numa: "NUMA 0",
    title: "Order Manager",
    role: "Manage order state, identifiers and strategy attribution.",
    rationale:
      "A single owner for lifecycle state avoids locking and simplifies recovery and replay.",
    communication: "Consumes order intents and execution reports.",
    notes: [
      "Deterministic state machine",
      "New / modify / cancel",
      "Execution correlation",
    ],
  },
  {
    id: "risk",
    core: "Core 6",
    numa: "NUMA 0",
    title: "Risk Engine",
    role: "Apply exposure, position, price and kill-switch controls.",
    rationale:
      "Reads immutable snapshots and returns deterministic decisions without blocking the OMS.",
    communication: "Receives validated intents and publishes risk decisions.",
    notes: [
      "Immutable risk snapshot",
      "Atomic configuration updates",
      "Immediate kill switch",
    ],
  },
  {
    id: "gateway",
    core: "Core 7",
    numa: "NUMA 0",
    title: "Exchange Gateway",
    role: "Encode and transmit orders and process execution reports.",
    rationale:
      "Pinned near the order-entry NIC to reduce transmit variance and cross-node memory access.",
    communication: "Consumes approved orders and publishes acknowledgements and fills.",
    notes: [
      "Native protocol / FIX",
      "Solarflare TX",
      "Wire-to-wire timestamping",
    ],
  },
  {
    id: "publisher",
    core: "Core 8",
    numa: "NUMA 1",
    title: "Downstream Publisher",
    role: "Serialize and distribute non-critical events.",
    rationale:
      "Placed away from the critical NUMA node so serialization and network I/O cannot disturb trading cores.",
    communication: "Consumes event copies from low-priority SPSC queues.",
    notes: [
      "TCP / binary stream",
      "Market and execution events",
      "Backpressure isolated",
    ],
  },
];

const queueFlow = [
  "Receiver",
  "Normalizer",
  "Book Builder",
  "Strategy",
  "OMS",
  "Risk",
  "Gateway",
];

export function CpuThreadArchitecture() {
  const [selectedId, setSelectedId] = useState("receiver");

  const selected =
    assignments.find((assignment) => assignment.id === selectedId) ??
    assignments[0];

  return (
    <section
      aria-labelledby="cpu-thread-heading"
      className="border-y border-border/60 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              CPU and thread architecture
            </p>

            <h2
              id="cpu-thread-heading"
              className="mt-5 max-w-xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              Explicit ownership, CPU affinity and predictable communication.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-muted">
              Critical threads are pinned to dedicated cores, kept on the same
              NUMA node and connected through single-producer,
              single-consumer queues.
            </p>

            <div className="mt-8 border-t border-border/60 pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Queue path
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted">
                {queueFlow.map((item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="border border-border/70 px-3 py-2">
                      {item}
                    </span>

                    {index < queueFlow.length - 1 ? (
                      <span aria-hidden="true">→</span>
                    ) : null}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-muted">
                Each boundary uses an SPSC ring buffer with cache-line
                separation between producer and consumer state.
              </p>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden border border-border/70">
              <div className="grid grid-cols-2 border-b border-border/70">
                <div className="border-r border-border/70 px-5 py-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    NUMA 0
                  </p>
                  <p className="mt-1 text-xs text-muted/70">
                    Latency-sensitive cores
                  </p>
                </div>

                <div className="px-5 py-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    NUMA 1
                  </p>
                  <p className="mt-1 text-xs text-muted/70">
                    Supporting workloads
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2">
                <div className="border-b border-border/70 sm:border-b-0 sm:border-r">
                  {assignments
                    .filter((assignment) => assignment.numa === "NUMA 0")
                    .map((assignment) => {
                      const active = selectedId === assignment.id;

                      return (
                        <button
                          key={assignment.id}
                          type="button"
                          onClick={() => setSelectedId(assignment.id)}
                          onMouseEnter={() => setSelectedId(assignment.id)}
                          onFocus={() => setSelectedId(assignment.id)}
                          aria-pressed={active}
                          className={[
                            "block w-full border-b border-border/70 p-5 text-left transition",
                            "hover:bg-blue-400/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/70",
                            active
                              ? "bg-blue-400/[0.055]"
                              : "bg-transparent",
                          ].join(" ")}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-xs uppercase tracking-[0.16em] text-muted/70">
                                {assignment.core}
                              </p>

                              <h3 className="mt-3 text-base font-medium text-foreground">
                                {assignment.title}
                              </h3>

                              <p className="mt-2 text-xs leading-5 text-muted">
                                {assignment.role}
                              </p>
                            </div>

                            <span
                              aria-hidden="true"
                              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300/75"
                            />
                          </div>
                        </button>
                      );
                    })}
                </div>

                <div>
                  {assignments
                    .filter((assignment) => assignment.numa === "NUMA 1")
                    .map((assignment) => {
                      const active = selectedId === assignment.id;

                      return (
                        <button
                          key={assignment.id}
                          type="button"
                          onClick={() => setSelectedId(assignment.id)}
                          onMouseEnter={() => setSelectedId(assignment.id)}
                          onFocus={() => setSelectedId(assignment.id)}
                          aria-pressed={active}
                          className={[
                            "block w-full border-b border-border/70 p-5 text-left transition",
                            "hover:bg-foreground/[0.025] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/70",
                            active
                              ? "bg-foreground/[0.045]"
                              : "bg-transparent",
                          ].join(" ")}
                        >
                          <p className="text-xs uppercase tracking-[0.16em] text-muted/70">
                            {assignment.core}
                          </p>

                          <h3 className="mt-3 text-base font-medium text-foreground">
                            {assignment.title}
                          </h3>

                          <p className="mt-2 text-xs leading-5 text-muted">
                            {assignment.role}
                          </p>
                        </button>
                      );
                    })}

                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-muted/70">
                      Reserved cores
                    </p>

                    <div className="mt-4 space-y-3">
                      <div className="border border-border/70 p-4">
                        <p className="text-sm font-medium text-foreground">
                          Monitoring and logging
                        </p>
                        <p className="mt-2 text-xs leading-5 text-muted">
                          Metrics, health checks and asynchronous log flushing.
                        </p>
                      </div>

                      <div className="border border-border/70 p-4">
                        <p className="text-sm font-medium text-foreground">
                          Admin and configuration
                        </p>
                        <p className="mt-2 text-xs leading-5 text-muted">
                          Authenticated risk and strategy configuration updates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside
              aria-live="polite"
              className="border border-border/70 bg-foreground/[0.018] p-6 xl:sticky xl:top-24 xl:self-start"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Selected thread
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted/70">
                {selected.numa} · {selected.core}
              </p>

              <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground">
                {selected.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {selected.rationale}
              </p>

              <div className="mt-7 border-t border-border/60 pt-6">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted/70">
                  Communication
                </p>

                <p className="mt-3 text-sm leading-6 text-foreground">
                  {selected.communication}
                </p>
              </div>

              <div className="mt-7">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted/70">
                  Implementation notes
                </p>

                <ul className="mt-4 space-y-3">
                  {selected.notes.map((note) => (
                    <li
                      key={note}
                      className="flex gap-3 text-sm leading-6 text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/55"
                      />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
