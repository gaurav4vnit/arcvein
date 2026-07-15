"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { motionEase } from "@/lib/motion";
import { homeContent } from "@/lib/site";

export function HowWeWork() {
  const reduceMotion = useReducedMotion();
  const { howWeWork } = homeContent;
  const headingId = "how-we-work-heading";

  return (
    <Section labelledBy={headingId}>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: motionEase }}
      >
        <SectionHeading
          id={headingId}
          title={howWeWork.title}
          subtitleClassName="max-w-lg"
        >
          {howWeWork.subtitle}
        </SectionHeading>
      </motion.div>

      <motion.div
        className="mt-20 sm:mt-24 lg:mt-28"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.65,
          delay: reduceMotion ? 0 : 0.08,
          ease: motionEase,
        }}
      >
        <Timeline steps={howWeWork.steps} />
      </motion.div>
    </Section>
  );
}
