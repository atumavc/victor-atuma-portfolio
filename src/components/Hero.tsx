"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { PortraitTracker } from "@/components/PortraitTracker";

function Particles() {
  const dots = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent-soft/60"
          style={{
            left: `${8 + ((i * 17) % 84)}%`,
            top: `${10 + ((i * 29) % 75)}%`,
            animation: `float-particle ${4 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
            opacity: 0.25 + (i % 4) * 0.1,
          }}
        />
      ))}
      <div className="absolute -top-24 right-[10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[110px]" />
      <div className="absolute bottom-0 left-[-10%] h-[320px] w-[320px] rounded-full bg-warm/10 blur-[100px]" />
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;

  const fade = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#050505] pt-28 pb-16"
    >
      <Particles />

      <div className="section-pad relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="order-1 max-w-2xl">
          <motion.p className="eyebrow mb-6" {...fade(0.05)}>
            {site.label}
          </motion.p>

          <motion.h1
            className="display text-[clamp(3rem,9vw,7.5rem)] text-white"
            {...fade(0.12)}
          >
            {site.heroTitle.map((line) => (
              <span key={line} className="block">
                {line === "EXPERIENCES." ? (
                  <span className="bg-gradient-to-r from-white via-white to-accent-soft bg-clip-text text-transparent">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-7 max-w-lg text-base leading-relaxed text-muted md:text-lg"
            {...fade(0.22)}
          >
            {site.heroSupporting}
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap gap-4" {...fade(0.32)}>
            <a
              href="#work"
              data-cursor="hover"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-accent px-7 py-3.5 text-[0.72rem] font-medium tracking-[0.22em] text-white uppercase transition-transform hover:scale-[1.03]"
            >
              <span className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative">View My Work</span>
            </a>
            <a
              href="#contact"
              data-cursor="hover"
              className="inline-flex items-center rounded-full border border-white/20 px-7 py-3.5 text-[0.72rem] tracking-[0.22em] text-white uppercase transition-colors hover:border-accent-soft hover:bg-white/5"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            className="mt-12 hidden grid-cols-3 gap-6 border-t border-white/10 pt-8 lg:grid"
            {...fade(0.4)}
          >
            {site.disciplines.map((item) => (
              <div key={item.title}>
                <p className="display text-sm tracking-[0.16em] text-white/90">
                  {item.title}
                </p>
                <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-warm uppercase">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="order-2 lg:justify-self-end"
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0, scale: 0.94, filter: "blur(12px)" },
                animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                transition: { duration: 1.1, delay: 0.15, ease },
              })}
        >
          <PortraitTracker />
        </motion.div>

        <motion.div
          className="order-3 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 lg:hidden"
          {...fade(0.35)}
        >
          {site.disciplines.map((item) => (
            <div key={item.title}>
              <p className="display text-xs tracking-[0.12em] text-white/90">
                {item.title}
              </p>
              <p className="mt-1 text-[0.58rem] tracking-[0.16em] text-warm uppercase">
                {item.subtitle}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
