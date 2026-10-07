"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: Props) {
  const reduced = useReducedMotion();

  const offset =
    direction === "up"
      ? { y: 40, x: 0 }
      : direction === "left"
        ? { y: 0, x: -40 }
        : direction === "right"
          ? { y: 0, x: 40 }
          : { y: 0, x: 0 };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, filter: "blur(8px)", ...offset }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </motion.div>
  );
}
