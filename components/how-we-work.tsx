"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/ui/container";
import { Timeline } from "@/ui/timeline";

const steps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the product, constraints and goals.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architect solutions that prioritize simplicity, performance and longevity.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Ship production-quality software with continuous feedback.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Support growth with reliable infrastructure, observability and long-term ownership.",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function HowWeWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="how-we-work-heading"
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
            id="how-we-work-heading"
            className="font-heading text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground"
          >
            How We Work
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-muted sm:mt-7 sm:text-base">
            Small teams. Senior engineers. Direct communication. Fast execution.
          </p>
        </motion.header>

        <motion.div
          className="mt-20 sm:mt-24 lg:mt-28"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.08, ease }}
        >
          <Timeline steps={steps} />
        </motion.div>
      </Container>
    </section>
  );
}
