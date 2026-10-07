import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12">
      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display text-xl tracking-[0.16em] text-white">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Software Developer
            <br />
            DevOps Engineer
            <br />
            3D Animator
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-[0.7rem] tracking-[0.2em] text-white/55 uppercase">
          <a
            href={site.links.email}
            className="transition-colors hover:text-accent-soft"
          >
            Email
          </a>
          <a
            href={site.links.linkedin}
            className="transition-colors hover:text-accent-soft"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            className="transition-colors hover:text-accent-soft"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm text-white/40">
          © 2026 {site.shortName}
        </p>
      </div>
    </footer>
  );
}
