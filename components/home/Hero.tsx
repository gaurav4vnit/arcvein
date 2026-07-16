"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ArchitectureDiagram } from "@/components/home/ArchitectureDiagram";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { motionDelay, motionDuration, motionEase } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? false : { opacity: 0, y: 12 };
  const animate = { opacity: 1, y: 0 };

  return (
    <Section
      bordered={false}
      spacing="none"
      labelledBy="home-hero-heading"
      className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-start sm:min-h-[calc(100svh-4.25rem)]"
      containerClassName="grid flex-1 content-start items-start gap-14 pb-16 pt-10 sm:pb-20 sm:pt-12 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-14 xl:gap-16"
    >
      <div className="max-w-2xl">
        <motion.p
          initial={initial}
          animate={animate}
          transition={{
            duration: motionDuration.enter,
            ease: motionEase,
          }}
          className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-muted"
        >
          Trading platforms · Capital markets technology
        </motion.p>

        <motion.h1
          id="home-hero-heading"
          initial={initial}
          animate={animate}
          transition={{
            duration: motionDuration.enter,
            ease: motionEase,
          }}
          className="font-heading text-[clamp(3.25rem,9vw,6.75rem)] font-medium leading-[0.92] tracking-[-0.045em] text-foreground"
        >
          <span className="block">Trading Platforms.</span>
          <span className="block">Capital Markets</span>
          <span className="block">Technology.</span>
          <span className="mt-2 block text-foreground/70">
            Dedicated Engineering Teams.
          </span>
        </motion.h1>

        <motion.p
          initial={initial}
          animate={animate}
          transition={{
            duration: motionDuration.enter,
            delay: reduceMotion ? 0 : motionDelay.medium,
            ease: motionEase,
          }}
          className="mt-9 max-w-[38rem] text-[15px] leading-[1.75] text-muted sm:text-base"
        >
          ArcVein designs and builds trading platforms, market-data systems,
          exchange connectivity and capital-markets infrastructure. We also
          provide experienced C++ and backend engineers through dedicated
          engineering teams and staff-augmentation engagements.
        </motion.p>

        <motion.div
          initial={initial}
          animate={animate}
          transition={{
            duration: motionDuration.enter,
            delay: reduceMotion ? 0 : motionDelay.cta,
            ease: motionEase,
          }}
          className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <ButtonLink href="/contact" size="lg">
            Discuss Your Project
          </ButtonLink>

          <ButtonLink
            href="/architectures/low-latency-trading-platform"
            variant="outline"
            size="lg"
          >
            View Reference Architecture
          </ButtonLink>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={animate}
        transition={{
          duration: motionDuration.slow,
          delay: reduceMotion ? 0 : motionDelay.long,
          ease: motionEase,
        }}
        className="flex justify-center lg:justify-end lg:pt-2"
      >
        <ArchitectureDiagram />
      </motion.div>
    </Section>
  );
}
