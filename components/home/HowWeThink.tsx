"use client";

import { motion, useReducedMotion } from "framer-motion";

import { EditorialColumn } from "@/components/ui/EditorialColumn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motionEase } from "@/lib/motion";
import { homeContent } from "@/lib/site";

export function HowWeThink() {
  const reduceMotion = useReducedMotion();
  const { howWeThink } = homeContent;
  const headingId = "how-we-think-heading";

  return (
    <Section labelledBy={headingId}>
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: motionEase }}
      >
        <SectionHeading id={headingId} title={howWeThink.title} className="max-w-2xl" subtitleClassName="max-w-md">
          <span className="block">{howWeThink.subtitle[0]}</span>
          <span className="mt-1 block">{howWeThink.subtitle[1]}</span>
        </SectionHeading>
      </motion.div>

      <ul className="mt-20 grid list-none grid-cols-1 gap-x-10 gap-y-14 sm:mt-24 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-0">
        {howWeThink.columns.map((column, index) => (
          <motion.li
            key={column.title}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: reduceMotion ? 0 : index * 0.08,
              ease: motionEase,
            }}
          >
            <EditorialColumn title={column.title}>
              <p>{column.description}</p>
            </EditorialColumn>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
