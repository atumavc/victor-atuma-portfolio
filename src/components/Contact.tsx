"use client";

import { site } from "@/data/site";
import { SectionReveal } from "@/components/SectionReveal";

const actions = [
  { label: "Email Me", href: site.links.email },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080808] py-28 md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,42,42,0.22), transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="section-pad relative z-10 mx-auto max-w-7xl text-center">
        <SectionReveal>
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="display mx-auto max-w-4xl text-[clamp(3rem,10vw,7rem)] text-white">
            Let&apos;s Build
            <br />
            Something
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-soft to-warm bg-clip-text text-transparent">
              Great.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-lg text-muted">
            {site.contactIntro}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15} className="mt-12 flex flex-wrap justify-center gap-4">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              data-cursor="hover"
              className="group relative inline-flex min-w-[160px] items-center justify-center overflow-hidden rounded-full border border-white/20 px-8 py-4 text-[0.72rem] tracking-[0.22em] text-white uppercase transition-colors hover:border-accent hover:bg-accent/10"
              {...(action.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="absolute inset-0 translate-y-full bg-accent/20 transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative">{action.label}</span>
            </a>
          ))}
        </SectionReveal>

        <p className="mt-10 text-xs tracking-[0.16em] text-white/35 uppercase">
          Replace placeholder links in{" "}
          <code className="text-warm normal-case tracking-normal">
            src/data/site.ts
          </code>
        </p>
      </div>
    </section>
  );
}
