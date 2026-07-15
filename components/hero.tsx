"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { siteConfig } from "@/lib/site";
import { ButtonLink } from "@/ui/button";
import { Container } from "@/ui/container";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  const initial = reduceMotion ? false : { opacity: 0, y: 12 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-start sm:min-h-[calc(100svh-4.25rem)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 engineering-grid"
      />

      <Container className="relative grid max-w-7xl flex-1 content-start items-start gap-14 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:grid-cols-2 lg:gap-12 lg:pt-14 lg:pb-24 xl:gap-16">
        <div className="max-w-xl">
          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.65, ease }}
            className="font-heading text-[clamp(3.5rem,10.5vw,7.25rem)] font-medium leading-[0.9] tracking-[-0.045em] text-foreground"
          >
            <span className="block">Build</span>
            <span className="block">Critical</span>
            <span className="block">Software.</span>
          </motion.h1>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.1, ease }}
            className="mt-9 max-w-[26rem] text-[15px] leading-[1.7] text-muted sm:text-base"
          >
            ArcVein partners with ambitious startups to build backend platforms,
            AI systems and high-performance infrastructure with engineers who
            think like owners.
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.18, ease }}
            className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <ButtonLink href={siteConfig.links.contact} size="lg">
              Book a Call
            </ButtonLink>
            <ButtonLink
              href={siteConfig.links.services}
              variant="outline"
              size="lg"
            >
              Explore Services
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={animate}
          transition={{ duration: 0.75, delay: reduceMotion ? 0 : 0.14, ease }}
          className="flex justify-center lg:justify-end lg:pt-2"
        >
          <ArchitectureDiagram />
        </motion.div>
      </Container>
    </section>
  );
}
