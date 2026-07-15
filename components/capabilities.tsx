"use client";

import { motion, useReducedMotion } from "framer-motion";

import { CapabilityBlock } from "@/ui/capability-block";
import { Container } from "@/ui/container";

const capabilities = [
  {
    title: "High Performance Systems",
    description:
      "Low-latency systems, modern C++, concurrency, networking and performance engineering.",
    keywords: [
      "Low-latency",
      "Modern C++",
      "Concurrency",
      "Networking",
      "Performance",
    ],
  },
  {
    title: "Backend Platforms",
    description:
      "Distributed systems, APIs, event-driven architecture, PostgreSQL, Kafka and Redis.",
    keywords: [
      "Distributed systems",
      "APIs",
      "Event-driven",
      "PostgreSQL",
      "Kafka",
      "Redis",
    ],
  },
  {
    title: "AI Infrastructure",
    description:
      "LLM integration, RAG, inference services, vector search and AI platforms.",
    keywords: [
      "LLM integration",
      "RAG",
      "Inference",
      "Vector search",
      "AI platforms",
    ],
  },
  {
    title: "Cloud Platforms",
    description:
      "AWS, Docker, Kubernetes, observability, CI/CD and production operations.",
    keywords: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Observability",
      "CI/CD",
      "Production ops",
    ],
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function Capabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="capabilities-heading"
      className="relative border-t border-foreground/[0.06]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 engineering-grid"
      />

      <Container className="relative max-w-7xl py-24 sm:py-28 lg:py-32">
        <motion.header
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <h2
            id="capabilities-heading"
            className="font-heading text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground"
          >
            Capabilities
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-muted sm:mt-7 sm:text-base">
            Engineering expertise across performance, backend infrastructure, AI
            and cloud platforms.
          </p>
        </motion.header>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : 0.04,
                ease,
              }}
            >
              <CapabilityBlock
                title={capability.title}
                description={capability.description}
                keywords={capability.keywords}
                reverse={index % 2 === 1}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
