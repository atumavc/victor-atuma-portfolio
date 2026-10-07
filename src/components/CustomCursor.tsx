"use client";

import { useEffect, useRef, useState } from "react";
import { lerp } from "@/lib/utils";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CursorMode = "default" | "hover" | "explore";

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reduced = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (isTouch || reduced) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      setVisible(true);

      const target = (e.target as HTMLElement | null)?.closest(
        "[data-cursor]",
      ) as HTMLElement | null;
      const next = (target?.dataset.cursor as CursorMode | undefined) ?? "default";
      const interactive = (e.target as HTMLElement | null)?.closest(
        "a, button, [role='button'], input, textarea, summary",
      );
      setMode(next === "explore" ? "explore" : interactive ? "hover" : "default");
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      pos.current.rx = lerp(pos.current.rx, pos.current.x, 0.18);
      pos.current.ry = lerp(pos.current.ry, pos.current.y, 0.18);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.rx}px, ${pos.current.ry}px, 0)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${pos.current.rx}px, ${pos.current.ry}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isTouch, reduced]);

  if (isTouch || reduced) return null;

  const ringScale = mode === "explore" ? 2.4 : mode === "hover" ? 1.7 : 1;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent will-change-transform"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-soft/70 will-change-transform transition-[width,height,opacity] duration-300"
        style={{
          width: `${28 * ringScale}px`,
          height: `${28 * ringScale}px`,
          opacity: visible ? 0.9 : 0,
          boxShadow:
            mode === "explore"
              ? "0 0 30px rgba(255,42,42,0.35)"
              : "0 0 12px rgba(255,42,42,0.15)",
        }}
      />
      <span
        ref={labelRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[0.55rem] tracking-[0.35em] text-white/90 transition-opacity duration-300"
        style={{
          opacity: visible && mode === "explore" ? 1 : 0,
          marginTop: "2.6rem",
        }}
      >
        EXPLORE
      </span>
    </div>
  );
}
