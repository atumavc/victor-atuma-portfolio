"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import { SectionReveal } from "@/components/SectionReveal";

export function Projects() {
  return (
    <section id="work" className="relative bg-[#080808] py-28 md:py-36">
      <div className="section-pad mx-auto max-w-7xl">
        <SectionReveal>
          <p className="eyebrow mb-4">Portfolio</p>
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white">
            Selected Work
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Case studies are editable placeholders — replace entries in{" "}
            <code className="text-warm">src/data/projects.ts</code> with your
            real work.
          </p>
        </SectionReveal>

        <div className="mt-14 space-y-10 md:space-y-16">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={0.05 * index}>
              <article className="group grid gap-6 overflow-hidden border-b border-white/10 pb-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10 lg:pb-16">
                <a
                  href={project.link}
                  data-cursor="explore"
                  className="relative block aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-elevated"
                  aria-label={`View project ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,42,42,0.28),transparent_45%)]" />
                  </div>
                </a>

                <div className="flex flex-col justify-end">
                  <p className="text-[0.7rem] tracking-[0.28em] text-warm uppercase">
                    {project.id} / Project
                    {project.placeholder && (
                      <span className="placeholder-tag">Placeholder</span>
                    )}
                  </p>
                  <h3 className="display mt-3 text-3xl text-white md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm tracking-[0.14em] text-white/50 uppercase">
                    {project.category}
                  </p>
                  <p className="mt-5 text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] tracking-[0.14em] text-white/70 uppercase"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    data-cursor="hover"
                    className="mt-8 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.22em] text-white uppercase transition-colors hover:text-accent-soft"
                  >
                    View Project
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
