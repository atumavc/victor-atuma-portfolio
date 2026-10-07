"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 section-pad pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6",
          scrolled
            ? "glass border-white/10 bg-black/70 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            : "border border-transparent bg-transparent",
        )}
        aria-label="Primary"
      >
        <a
          href="#top"
          className="display text-sm tracking-[0.18em] text-white transition-colors hover:text-accent-soft md:text-base"
          data-cursor="hover"
        >
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[0.7rem] tracking-[0.22em] text-white/70 uppercase transition-colors hover:text-white"
                data-cursor="hover"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={cn(
                "h-px w-full bg-white transition-transform",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-white transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-white transition-transform",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="glass mt-3 rounded-2xl p-6 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="display text-2xl text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
