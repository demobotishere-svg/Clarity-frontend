"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#15604E] via-[#F4A261] to-[#15604E] z-[100] pointer-events-none"
      style={{
        scaleX,
        boxShadow: "0 0 8px rgba(230, 57, 70, 0.6), 0 0 4px rgba(42, 157, 143, 0.4)",
        transformOrigin: "left"
      }}
    />
  );
}
