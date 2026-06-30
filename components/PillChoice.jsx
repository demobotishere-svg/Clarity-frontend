"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function PillChoice() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      data-testid="pill-choice-section"
      className="relative py-24 md:py-36 border-t border-[#DCDCCF] bg-[#FAF8F3] overflow-hidden"
    >
      {/* Dynamic Background Glow Aura */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-35 transition-all duration-[800ms] ease-out"
        style={{
          background: hoveredIndex === 0 
            ? "radial-gradient(circle at 35% 50%, rgba(58, 123, 213, 0.22) 0%, transparent 65%)" 
            : hoveredIndex === 1 
            ? "radial-gradient(circle at 65% 50%, rgba(230, 57, 70, 0.22) 0%, transparent 65%)" 
            : "radial-gradient(circle at 50% 50%, rgba(17, 17, 17, 0.02) 0%, transparent 55%)"
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#666666]">
            The choice
          </div>
          <h2 className="mt-4 font-serif text-[4.5rem] md:text-[6.5rem] lg:text-[8.5rem] leading-[0.95] tracking-tight">
            Choose this. <span className="block md:inline italic text-[#15604E]">Or this.</span>
          </h2>
        </motion.div>

        <div className="mt-14 relative">
          {/* Visual "OR" Divider for Desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full items-center justify-center shadow-2xl border border-[#DCDCCF]">
            <span className="font-serif italic text-2xl text-[#1A1916]">or</span>
          </div>
          
          {/* Visual "OR" Divider for Mobile */}
          <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl border border-[#DCDCCF]">
            <span className="font-serif italic text-xl text-[#1A1916]">or</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
          {/* Blue Pill */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease }}
            onHoverStart={() => setHoveredIndex(0)}
            onHoverEnd={() => setHoveredIndex(null)}
            animate={
              hoveredIndex === 1
                ? { scale: 0.97, opacity: 0.5, filter: "blur(4px) grayscale(100%)" }
                : hoveredIndex === 0
                ? { scale: 1.01, opacity: 1, filter: "blur(0px) grayscale(0%)" }
                : { scale: 1, opacity: 1, filter: "blur(0px) grayscale(0%)" }
            }
            data-testid="blue-pill-card"
            className="relative group overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[3/4] border border-[#DCDCCF] cursor-pointer transition-all duration-[600ms] hover:border-[#3a7bd5]/60 hover:shadow-[0_0_30px_rgba(58,123,213,0.15)]"
          >
            <img
              src="https://images.unsplash.com/photo-1713947503867-3b27964f042b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="Frustrated professional"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1916] via-[#1A1916]/80 to-transparent"></div>
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-[#FAF8F3]">
              <div className="inline-flex items-center gap-2 font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-[#FAF8F3] drop-shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#3a7bd5]"></span> Choose this
              </div>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl lg:text-[3.5rem] leading-[1.1] drop-shadow-lg">
                Log back in tomorrow.
                <br />
                <span className="italic text-[#FAF8F3]/90">
                  Continue the 14-hour grind.
                </span>
              </h3>
              <p className="mt-4 text-base md:text-lg text-[#FAF8F3]/90 max-w-md drop-shadow-md">
                Same loop. Same exhaustion. Same wondering if there was a better
                way.
              </p>
            </div>
          </motion.div>

          {/* Red Pill */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            onHoverStart={() => setHoveredIndex(1)}
            onHoverEnd={() => setHoveredIndex(null)}
            animate={
              hoveredIndex === 0
                ? { scale: 0.97, opacity: 0.5, filter: "blur(4px) grayscale(100%)" }
                : hoveredIndex === 1
                ? { scale: 1.01, opacity: 1, filter: "blur(0px) grayscale(0%)" }
                : { scale: 1, opacity: 1, filter: "blur(0px) grayscale(0%)" }
            }
            data-testid="red-pill-card"
            className="relative group overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[3/4] border border-[#DCDCCF] cursor-pointer transition-all duration-[600ms] hover:border-[#15604E]/60 hover:shadow-[0_0_30px_rgba(230,57,70,0.15)]"
          >
            <img
              src="https://images.unsplash.com/photo-1713947505775-4e3af92a4ee7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="Confident professional"
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#15604E]/90 via-[#15604E]/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-[#FAF8F3]">
              <div className="inline-flex items-center gap-2 font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-[#FAF8F3] drop-shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#e63946] pulse-dot"></span>{" "}
                Or this
              </div>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] drop-shadow-lg">
                Step out of the mundane.
                <br />
                <span className="italic text-[#FAF8F3]/90">
                  Manage the technology before it manages you.
                </span>
              </h3>
              <p className="mt-4 text-base md:text-lg text-[#FAF8F3] max-w-md drop-shadow-md">
                Claim absolute authority over your career and time.
              </p>
              <a
                href="#enrol"
                data-testid="pill-cta-button"
                className="mt-6 inline-flex items-center gap-2 self-start bg-[#FAF8F3] text-[#1A1916] px-5 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors"
              >
                Take the red pill <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-serif text-3xl md:text-5xl leading-tight">
            A year from now, will you wish you&apos;d{" "}
            <span className="italic text-[#15604E]">started?</span>
          </h3>
          <p className="mt-4 text-[#666666] text-base md:text-lg">
            Not because of urgency. Because considered things tend to compound.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
