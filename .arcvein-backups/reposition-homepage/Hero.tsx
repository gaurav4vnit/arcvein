"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ArchitectureDiagram } from "@/components/home/ArchitectureDiagram";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { motionDelay, motionDuration, motionEase } from "@/lib/motion";
import { homeContent, siteConfig } from "@/lib/site";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { hero } = homeContent;

  const initial = reduceMotion ? false : { opacity: 0, y: 12 };
  const animate = { opacity: 1, y: 0 };

  return (
    <Section
      bordered={false}
      spacing="none"
      labelledBy="home-hero-heading"
      className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-start sm:min-h-[calc(100svh-4.25rem)]"
      containerClassName="grid flex-1 content-start items-start gap-14 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:grid-cols-2 lg:gap-12 lg:pt-14 lg:pb-24 xl:gap-16"
    >
      <div className="max-w-xl">
        <motion.h1
          id="home-hero-heading"
          initial={initial}
          animate={animate}
          transition={{ duration: motionDuration.enter, ease: motionEase }}
          className="font-heading text-[clamp(3.5rem,10.5vw,7.25rem)] font-medium leading-[0.9] tracking-[-0.045em] text-foreground"
        >
          {hero.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={initial}
          animate={animate}
          transition={{
            duration: motionDuration.enter,
            delay: reduceMotion ? 0 : motionDelay.medium,
            ease: motionEase,
          }}
          className="mt-9 max-w-[26rem] text-[15px] leading-[1.7] text-muted sm:text-base"
        >
          {hero.description}
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
          <ButtonLink href={siteConfig.links.contact} size="lg">
            {hero.primaryCta}
          </ButtonLink>
          <ButtonLink
            href={siteConfig.links.services}
            variant="outline"
            size="lg"
          >
            {hero.secondaryCta}
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
