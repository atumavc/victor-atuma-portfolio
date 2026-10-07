"use client";

import { experience } from "@/data/experience";
import { SectionReveal } from "@/components/SectionReveal";

export function Experience() {
  return (
    <section id="experience" className="relative bg-[#050505] py-28 md:py-36">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionReveal>
          <p className="eyebrow mb-4">Career</p>
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white">
            Experience
          </h2>
        </SectionReveal>

        <div className="relative mt-14">
          <div
            className="absolute top-0 bottom-0 left-[11px] w-px bg-gradient-to-b from-accent via-white/15 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {experience.map((item, index) => (
              <SectionReveal key={item.id} delay={0.08 * index}>
                <li className="relative grid gap-4 md:grid-cols-2 md:gap-12">
                  <div
                    className={`pl-10 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}
                  >
                    <span
                      className="absolute top-1.5 left-0 h-6 w-6 rounded-full border-2 border-accent bg-[#050505] shadow-[0_0_20px_rgba(255,42,42,0.45)] md:left-1/2 md:-translate-x-1/2"
                      aria-hidden="true"
                    />
                    <p className="text-[0.7rem] tracking-[0.2em] text-warm uppercase">
                      {item.period}
                      {item.placeholder && (
                        <span className="placeholder-tag">Edit</span>
                      )}
                    </p>
                    <h3 className="display mt-2 text-2xl text-white md:text-3xl">
                      {item.company}
                    </h3>
                    <p className="mt-2 text-sm tracking-[0.12em] text-white/70 uppercase">
                      {item.role}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.location}</p>
                    <p className="mt-4 text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
