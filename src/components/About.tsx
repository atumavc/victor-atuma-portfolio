"use client";

import { site } from "@/data/site";
import { aboutPillars } from "@/data/skills";
import { SectionReveal } from "@/components/SectionReveal";

export function About() {
  return (
    <section id="about" className="relative bg-[#080808] py-28 md:py-36">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionReveal>
          <p className="eyebrow mb-4">Profile</p>
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white">
            About Me
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <SectionReveal delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-muted md:text-xl">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="text-sm tracking-[0.18em] text-warm uppercase">
                {site.company} · {site.location}
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 gap-4">
            {aboutPillars.map((pillar, i) => (
              <SectionReveal key={pillar.title} delay={0.08 * i}>
                <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-elevated/80 p-5 transition-colors hover:border-accent/50 md:p-6">
                  <div className="pointer-events-none absolute -right-8 -bottom-10 h-28 w-28 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/25" />
                  <p className="display text-xl text-white md:text-2xl">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-[0.65rem] tracking-[0.22em] text-warm uppercase">
                    {pillar.subtitle}
                  </p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
