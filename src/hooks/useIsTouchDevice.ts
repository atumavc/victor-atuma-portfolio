"use client";

import { useEffect, useState } from "react";

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const hoverCapable = window.matchMedia("(hover: hover)").matches;
    setIsTouch(!(finePointer && hoverCapable));
  }, []);

  return isTouch;
}
