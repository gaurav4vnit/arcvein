"use client";

import { motion, useReducedMotion } from "framer-motion";

import { CapabilityBlock } from "@/components/ui/CapabilityBlock";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motionEase } from "@/lib/motion";
import { homeContent } from "@/lib/site";

export function Capabilities() {
  const reduceMotion = useReducedMotion();
  const { capabilities } = homeContent;
  const headingId = "capabilities-heading";

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
          title={capabilities.title}
          subtitleClassName="max-w-xl"
        >
          {capabilities.subtitle}
        </SectionHeading>
      </motion.div>

      <div className="mt-16 sm:mt-20 lg:mt-24">
        {capabilities.items.map((capability, index) => (
          <motion.div
            key={capability.title}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: reduceMotion ? 0 : 0.04,
              ease: motionEase,
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
    </Section>
  );
}
