"use client";

import { education } from "@/data/experience";
import { SectionReveal } from "@/components/SectionReveal";

export function Education() {
  return (
    <section id="education" className="relative bg-[#080808] py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionReveal>
          <p className="eyebrow mb-4">Foundation</p>
          <h2 className="display text-[clamp(2.4rem,5vw,4.5rem)] text-white">
            Education
          </h2>
        </SectionReveal>

        <div className="mt-12 space-y-6">
          {education.map((item, i) => (
            <SectionReveal key={item.id} delay={0.08 * i}>
              <article className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-elevated to-[#120808] p-8 md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[0.7rem] tracking-[0.22em] text-warm uppercase">
                      {item.note}
                    </p>
                    <h3 className="display mt-3 text-3xl text-white md:text-4xl">
                      {item.school}
                    </h3>
                    <p className="mt-3 text-lg text-muted">{item.program}</p>
                  </div>
                  <div className="text-sm tracking-[0.14em] text-white/50 uppercase">
                    {item.location && <p>{item.location}</p>}
                    {item.period && (
                      <p className="mt-1">
                        {item.period}
                        {item.period.includes("[EDIT]") && (
                          <span className="placeholder-tag">Edit</span>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
