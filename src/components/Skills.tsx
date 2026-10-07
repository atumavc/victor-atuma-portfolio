"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { SectionReveal } from "@/components/SectionReveal";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState(skillCategories[0]?.id ?? "software");
  const category =
    skillCategories.find((c) => c.id === active) ?? skillCategories[0];

  return (
    <section id="skills" className="relative bg-[#050505] py-28 md:py-36">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionReveal>
          <p className="eyebrow mb-4">Capabilities</p>
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white">
            Skills
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              data-cursor="hover"
              onClick={() => setActive(cat.id)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-[0.68rem] tracking-[0.18em] uppercase transition-all",
                active === cat.id
                  ? "border-accent bg-accent/15 text-white"
                  : "border-white/15 text-white/60 hover:border-white/35 hover:text-white",
              )}
            >
              {cat.title}
            </button>
          ))}
        </SectionReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {category?.items.map((skill, i) => (
            <SectionReveal key={`${category.id}-${skill.name}`} delay={0.04 * i}>
              <div
                data-cursor="hover"
                title={skill.note}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-charcoal px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_40px_rgba(255,42,42,0.15)]"
              >
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-soft to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm tracking-[0.08em] text-white uppercase">
                    {skill.name}
                  </p>
                  {skill.placeholder && (
                    <span className="placeholder-tag ml-0 shrink-0">Edit</span>
                  )}
                </div>
                {skill.note && (
                  <p className="mt-2 text-xs text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {skill.note}
                  </p>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
