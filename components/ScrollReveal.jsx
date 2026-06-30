"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0, yOffset = 30 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1], // ultra smooth easeOutExpo
      }}
    >
      {children}
    </motion.div>
  );
}
