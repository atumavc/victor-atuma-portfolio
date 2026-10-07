"use client";

import { useEffect, useState } from "react";

function detectTouch() {
  if (typeof window === "undefined") return true;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const hoverCapable = window.matchMedia("(hover: hover)").matches;
  const coarseOnly =
    window.matchMedia("(pointer: coarse)").matches && !finePointer;
  // Prefer pointer capability over maxTouchPoints — many desktops report
  // touch points (e.g. hybrid devices / remote desktops) while still having a mouse.
  if (finePointer && hoverCapable) return false;
  if (coarseOnly) return true;
  return navigator.maxTouchPoints > 0 && !hoverCapable;
}

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const update = () => setIsTouch(detectTouch());
    update();
    const fine = window.matchMedia("(pointer: fine)");
    const hover = window.matchMedia("(hover: hover)");
    fine.addEventListener("change", update);
    hover.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      hover.removeEventListener("change", update);
    };
  }, []);

  return isTouch;
}
