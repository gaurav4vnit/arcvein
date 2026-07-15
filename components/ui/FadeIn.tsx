"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { motionDelay, motionDuration, motionEase } from "@/lib/motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: "div" | "li";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 14,
  duration = motionDuration.default,
  as = "div",
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay: reduceMotion ? 0 : delay,
        ease: motionEase,
      }}
    >
      {children}
    </Component>
  );
}

export function FadeInStagger({
  children,
  className,
  index = 0,
  y = 18,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  y?: number;
}) {
  return (
    <FadeIn
      as="li"
      className={className}
      y={y}
      delay={index * motionDelay.stagger}
      duration={motionDuration.default}
    >
      {children}
    </FadeIn>
  );
}
