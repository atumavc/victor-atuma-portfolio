"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { lerp } from "@/lib/utils";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Pose = {
  rotX: number;
  rotY: number;
  transX: number;
  transY: number;
  scale: number;
  lightX: number;
  lightY: number;
  glow: number;
};

const NEUTRAL: Pose = {
  rotX: 0,
  rotY: 0,
  transX: 0,
  transY: 0,
  scale: 1,
  lightX: 50,
  lightY: 35,
  glow: 0.35,
};

export function PortraitTracker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const current = useRef<Pose>({ ...NEUTRAL });
  const target = useRef<Pose>({ ...NEUTRAL });
  const rafRef = useRef(0);
  const hovering = useRef(false);
  const isTouch = useIsTouchDevice();
  const reduced = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const apply = () => {
      const c = current.current;
      if (frameRef.current) {
        frameRef.current.style.transform = `translate3d(${c.transX}px, ${c.transY}px, 0) rotateX(${c.rotX}deg) rotateY(${c.rotY}deg) scale(${c.scale})`;
      }
      if (lightRef.current) {
        lightRef.current.style.background = `radial-gradient(circle at ${c.lightX}% ${c.lightY}%, rgba(255,60,60,${0.12 + c.glow * 0.18}), transparent 42%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.opacity = String(0.35 + c.glow * 0.45);
        glowRef.current.style.transform = `translate3d(${c.transX * 0.4}px, ${c.transY * 0.4}px, 0) scale(${1 + c.glow * 0.08})`;
      }
    };

    const tick = () => {
      const t = target.current;
      const c = current.current;
      const factor = hovering.current ? 0.1 : 0.08;
      c.rotX = lerp(c.rotX, t.rotX, factor);
      c.rotY = lerp(c.rotY, t.rotY, factor);
      c.transX = lerp(c.transX, t.transX, factor);
      c.transY = lerp(c.transY, t.transY, factor);
      c.scale = lerp(c.scale, t.scale, factor);
      c.lightX = lerp(c.lightX, t.lightX, factor);
      c.lightY = lerp(c.lightY, t.lightY, factor);
      c.glow = lerp(c.glow, t.glow, factor);
      apply();
      rafRef.current = requestAnimationFrame(tick);
    };

    const updateFromPointer = (clientX: number, clientY: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (clientX - cx) / (window.innerWidth * 0.5);
      const ny = (clientY - cy) / (window.innerHeight * 0.5);
      const clampedX = Math.max(-1, Math.min(1, nx));
      const clampedY = Math.max(-1, Math.min(1, ny));
      const boost = hovering.current ? 1.55 : 1;
      const maxRot = 7 * boost;

      target.current = {
        rotX: -clampedY * maxRot,
        rotY: clampedX * maxRot,
        transX: clampedX * 14 * boost,
        transY: clampedY * 10 * boost,
        scale: hovering.current ? 1.03 : 1,
        lightX: 50 + clampedX * 28,
        lightY: 35 + clampedY * 22,
        glow: hovering.current ? 1 : 0.4,
      };
    };

    const onMove = (e: PointerEvent) => {
      if (isTouch) return;
      updateFromPointer(e.clientX, e.clientY);
    };

    const onEnter = () => {
      hovering.current = true;
    };

    const onLeavePortrait = () => {
      hovering.current = false;
    };

    const onLeaveWindow = () => {
      hovering.current = false;
      target.current = { ...NEUTRAL };
    };

    const el = containerRef.current;
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeaveWindow);
    el?.addEventListener("pointerenter", onEnter);
    el?.addEventListener("pointerleave", onLeavePortrait);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeaveWindow);
      el?.removeEventListener("pointerenter", onEnter);
      el?.removeEventListener("pointerleave", onLeavePortrait);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isTouch, reduced]);

  return (
    <div
      ref={containerRef}
      data-cursor="explore"
      className="relative mx-auto aspect-[3/4] w-full max-w-[420px] select-none md:max-w-[520px] lg:max-w-[560px]"
      style={{ perspective: "1200px" }}
      aria-label="Interactive 3D portrait of Victor Atuma"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-[-8%] rounded-[40%] bg-[radial-gradient(circle_at_50%_40%,rgba(255,42,42,0.55),transparent_60%)] blur-2xl transition-opacity"
        aria-hidden="true"
      />

      <div
        ref={frameRef}
        className="relative h-full w-full will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          transition: reduced ? "none" : undefined,
        }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#1a0505] shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#ff2a2a_0%,#8b0d0d_45%,#1a0505_100%)]" />

          <Image
            src="/images/victor-atuma-portrait.webp"
            alt="3D portrait of Victor Atuma in a tan plaid suit against a red backdrop"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 560px"
            className={`object-cover object-[center_18%] transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
          />

          {/* Soft depth veil — does not distort facial features */}
          <div
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{
              background:
                "linear-gradient(120deg, rgba(200,167,122,0.12), transparent 40%, rgba(255,42,42,0.12))",
            }}
            aria-hidden="true"
          />

          <div
            ref={lightRef}
            className="pointer-events-none absolute inset-0 mix-blend-screen"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10"
            aria-hidden="true"
          />
        </div>
      </div>

      {!loaded && (
        <div className="absolute inset-0 animate-pulse rounded-[2rem] bg-elevated" />
      )}
    </div>
  );
}
