"use client";

import React, { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    // Avoid running on mobile/touch interfaces
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frameId = null;
    const handleMouseMove = (e) => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(calc(${e.clientX}px - 300px), calc(${e.clientY}px - 300px), 0)`;
        }
        frameId = null;
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("role") === "button";

      if (interactive) {
        if (glowRef.current) glowRef.current.style.background = "radial-gradient(circle, rgba(42, 157, 143, 0.07) 0%, transparent 70%)";
      } else {
        if (glowRef.current) glowRef.current.style.background = "radial-gradient(circle, rgba(230, 57, 70, 0.035) 0%, transparent 70%)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <div ref={glowRef} className="mouse-spotlight" />;
}
