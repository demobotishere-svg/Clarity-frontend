"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Architect() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F3] border-t border-[#DCDCCF]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.1] text-[#1A1916] tracking-tight max-w-3xl mx-auto">
            AI can <span className="italic text-[#15604E]">generate.</span> But it cannot <span className="italic text-[#15604E]">architect.</span>
          </h2>
        </motion.div>

        {/* Visual Diagram */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20 md:gap-32 mb-16 md:mb-24"
        >
          
          {/* Left Side: Generation */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 140 90" className="w-[120px] md:w-[160px] h-auto mb-6">
              <circle cx="20" cy="20" r="4" fill="#ABA499" className="animate-pulse" />
              <circle cx="55" cy="14" r="4" fill="#ABA499" className="animate-pulse" style={{ animationDelay: "1s" }} />
              <circle cx="95" cy="26" r="4" fill="#ABA499" className="animate-pulse" />
              <circle cx="125" cy="16" r="4" fill="#ABA499" className="animate-pulse" style={{ animationDelay: "1s" }} />
              <circle cx="30" cy="50" r="4" fill="#ABA499" className="animate-pulse" />
              <circle cx="72" cy="44" r="4" fill="#ABA499" className="animate-pulse" style={{ animationDelay: "1s" }} />
              <circle cx="110" cy="56" r="4" fill="#ABA499" className="animate-pulse" />
              <circle cx="18" cy="76" r="4" fill="#ABA499" className="animate-pulse" style={{ animationDelay: "1s" }} />
              <circle cx="60" cy="74" r="4" fill="#ABA499" className="animate-pulse" />
              <circle cx="100" cy="80" r="4" fill="#ABA499" className="animate-pulse" style={{ animationDelay: "1s" }} />
            </svg>
            <span className="text-xs md:text-sm font-medium text-[#ABA499] tracking-wide">
              Generation — infinite, scattered
            </span>
          </div>

          {/* Arrow */}
          <div className="text-[#ABA499] text-2xl md:text-3xl font-light">
            &rarr;
          </div>

          {/* Right Side: Architecture */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 140 90" className="w-[120px] md:w-[160px] h-auto mb-6">
              <rect x="58" y="8" width="24" height="16" rx="3" fill="none" stroke="#15604E" strokeWidth="2" />
              <rect x="20" y="40" width="24" height="16" rx="3" fill="none" stroke="#15604E" strokeWidth="2" />
              <rect x="58" y="40" width="24" height="16" rx="3" fill="none" stroke="#15604E" strokeWidth="2" />
              <rect x="96" y="40" width="24" height="16" rx="3" fill="none" stroke="#15604E" strokeWidth="2" />
              <rect x="58" y="70" width="24" height="14" rx="3" fill="none" stroke="#15604E" strokeWidth="2" />
              <path d="M70 24v16M70 40v0M32 40v-8h76v8M70 56v14" stroke="#15604E" strokeWidth="1.5" fill="none" opacity="0.5" />
            </svg>
            <span className="text-xs md:text-sm font-semibold text-[#15604E] tracking-wide">
              Architecture — chosen, structured
            </span>
          </div>

        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-lg md:text-[20px] text-[#1A1916] font-medium leading-relaxed max-w-3xl mx-auto"
        >
          It produces anything you ask. It cannot decide what&apos;s worth producing, why it matters, or how the pieces fit. That judgment is yours — it always has been. This course makes you the architect, and turns AI into the team you never had.
        </motion.p>

      </div>
    </section>
  );
}
