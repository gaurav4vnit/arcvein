"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/ui/container";
import { EditorialColumn } from "@/ui/editorial-column";

const columns = [
  {
    title: "Architecture",
    description:
      "Design systems that evolve gracefully as products grow.",
  },
  {
    title: "Performance",
    description:
      "Optimize for latency, scalability and operational simplicity.",
  },
  {
    title: "Reliability",
    description:
      "Engineer software that teams can trust under real-world conditions.",
  },
  {
    title: "Maintainability",
    description:
      "Leave every system easier to understand than we found it.",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function HowWeThink() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="how-we-think-heading"
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
            id="how-we-think-heading"
            className="font-heading text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground"
          >
            How We Think
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-muted sm:mt-7 sm:text-base">
            <span className="block">
              Engineering is not about writing code.
            </span>
            <span className="mt-1 block">
              It&apos;s about making good decisions.
            </span>
          </p>
        </motion.header>

        <ul className="mt-20 grid list-none grid-cols-1 gap-x-10 gap-y-14 sm:mt-24 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-0">
          {columns.map((column, index) => (
            <motion.li
              key={column.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : index * 0.08,
                ease,
              }}
            >
              <EditorialColumn title={column.title}>
                <p>{column.description}</p>
              </EditorialColumn>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
