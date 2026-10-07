"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { SectionReveal } from "@/components/SectionReveal";

const pillars = ["CODE", "SYSTEMS", "DESIGN", "3D"] as const;

export function CreativeSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="creative"
      className="relative overflow-hidden bg-[#050505] py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,42,42,0.16),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="section-pad relative z-10 mx-auto max-w-7xl">
        <SectionReveal>
          <p className="eyebrow mb-4">Signature</p>
          <h2 className="display text-[clamp(2.4rem,7vw,5.5rem)] text-white">
            Engineering
            <span className="text-accent"> × </span>
            Creativity
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted">{site.creativeIntro}</p>
        </SectionReveal>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {pillars.map((item, i) => (
            <SectionReveal key={item} delay={0.1 * i}>
              <motion.div
                className="group relative flex min-h-[180px] items-end overflow-hidden rounded-2xl border border-white/10 bg-charcoal p-6"
                whileHover={reduced ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 120%, rgba(255,42,42,0.35), transparent 55%)",
                  }}
                />
                <div>
                  <p className="text-[0.65rem] tracking-[0.28em] text-warm uppercase">
                    0{i + 1}
                  </p>
                  <p className="display mt-3 text-3xl text-white md:text-4xl">
                    {item}
                  </p>
                </div>
                {i < pillars.length - 1 && (
                  <span
                    className="absolute top-6 right-5 text-accent/70"
                    aria-hidden="true"
                  >
                    +
                  </span>
                )}
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
