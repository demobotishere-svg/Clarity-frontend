"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const LOOP = [
  "I've got Claude, ChatGPT, Gemini bookmarked. I open them, get a decent answer, and nothing actually changes about how I work.",
  "I'm so much more than the mundane hours I pour in — but those hours cost me my evenings, my family time, my own space.",
  "My junior finished in 20 minutes what takes me two hours. I need to figure this out — and I don't want to ask out loud."
];

const PAIRS = [
  {
    old: "Typing meeting summaries",
    next: "System joins the call, transcribes, extracts action items, logs tasks to your project board."
  },
  {
    old: "Digging for data",
    next: "System reads requests, pulls files from your database, hands you a pre-drafted response."
  },
  {
    old: "Manual scheduling",
    next: "System cross-references calendars, qualifies requests, books deep-work blocks — zero back-and-forth."
  }
];

export default function Comparison() {
  return (
    <section
      id="outcomes"
      data-testid="comparison-section"
      className="relative py-24 md:py-36 border-t border-[#DCDCCF]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden rounded-[2rem] py-8 px-8 md:py-10 md:px-12 lg:py-12 lg:px-16 bg-[#1A1916] shadow-2xl"
        >
          {/* Infused background image */}
          <div
            className="absolute inset-y-0 right-0 w-full md:w-1/2 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 z-10 hidden md:block"
              style={{
                background: "linear-gradient(to right, #1A1916 0%, #1A1916 30%, transparent 100%)"
              }}
            />
            <div
              className="absolute inset-0 z-10 md:hidden"
              style={{
                background: "linear-gradient(to top, #1A1916 0%, #1A1916 50%, transparent 100%)"
              }}
            />
            <img
              src="/abstract_tech_banner.png"
              alt=""
              className="w-full h-full object-cover object-center grayscale opacity-[0.35] mix-blend-screen"
            />
          </div>

          <div className="relative z-20 max-w-4xl">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF8F3]/60 mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#FAF8F3]/30"></span>
              Industry insight
            </div>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.1] tracking-tight text-[#FAF8F3]">
              The new math:{" "}
              <span className="italic text-[#FAF8F3]/70">1 person + AI</span> ={" "}
              <span className="relative inline-block mt-1">
                total powerhouse
                <span className="absolute left-0 -bottom-2 h-[3px] md:h-[4px] w-full bg-[#15604E] rounded-full" />
              </span>
              .
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mt-16">

          {/* ── YOU NOW card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            whileHover={{ scale: 1.01, y: -2, transition: { duration: 0.3, ease } }}
            data-testid="exhausting-loop-card"
            className="relative rounded-3xl p-8 md:p-10 bg-red-50/80 border-[4px] border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] cursor-default overflow-hidden"
          >
            {/* Frustrated man image — right half, faded in from the left */}
            <div
              className="absolute inset-y-0 right-0 w-1/2 hidden md:block pointer-events-none"
              aria-hidden="true"
            >
              {/* Left-edge gradient fade so image blends into card bg */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: "linear-gradient(to right, #fef2f2 0%, #fef2f2 10%, transparent 55%)"
                }}
              />
              <img
                src="/frustrated_pro.png"
                alt=""
                className="w-full h-full object-cover object-center grayscale mix-blend-multiply"
                style={{ opacity: 0.15 }}
              />
            </div>

            {/* Text content — left half, always on top */}
            <div className="relative z-10">
              <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-red-800/70">
                The exhausting loop{" "}
                <span className="inline-flex items-center ml-2 px-3 py-1 rounded-md bg-red-600 text-white font-bold text-xs uppercase tracking-widest shadow-sm">
                  you now
                </span>
              </div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl text-[#1A1916] leading-[1.1]">
                The honest truth.
              </h3>
              <ol className="mt-10 space-y-5">
                {LOOP.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease }}
                    className="flex items-center gap-4"
                  >
                    <span className="font-mono text-xs text-red-500/60 font-bold w-8 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm md:text-base text-[#1A1916]/80 italic leading-relaxed">&quot;{s}&quot;</span>
                  </motion.li>
                ))}
              </ol>
              <div className="mt-10 inline-flex items-center gap-2 font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-red-700/80">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                Output: tired you
              </div>
            </div>
          </motion.div>

          {/* ── WHAT YOU BECOME card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3, ease } }}
            data-testid="ai-native-card"
            className="relative rounded-3xl p-8 md:p-10 bg-white border border-[#15604E]/20 ring-glow shimmer-border overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-[0_25px_60px_-20px_rgba(230,57,70,0.12)]"
          >
            {/* Happy man image — right half, faded in from left */}
            <div
              className="absolute inset-y-0 right-0 w-1/2 hidden md:block pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: "linear-gradient(to right, #ffffff 0%, #ffffff 10%, transparent 55%)"
                }}
              />
              <img
                src="/confident_pro.png"
                alt=""
                className="w-full h-full object-cover object-center"
                style={{ opacity: 0.2 }}
              />
            </div>

            {/* Text content */}
            <div className="relative z-10">
              <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-[#15604E]">
                The AI-Native System{" "}
                <span className="inline-flex items-center ml-2 px-3 py-1 rounded-md bg-[#15604E] text-white font-bold text-xs uppercase tracking-widest shadow-sm">
                  what you become
                </span>
              </div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                Design once. <span className="italic">Run forever.</span>
              </h3>
              <div className="mt-8 space-y-5">
                {PAIRS.map((p, i) => (
                  <motion.div
                    key={p.old}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease }}
                    data-testid="ai-native-row"
                    className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5 border-t border-[#DCDCCF] pt-5"
                  >
                    <div className="md:col-span-4">
                      <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-[#666666]">
                        Old way
                      </div>
                      <div className="text-[#666666] line-through decoration-[#666666]/30 mt-1">
                        {p.old}
                      </div>
                    </div>
                    <div className="md:col-span-1 flex md:justify-center md:items-center">
                      <ArrowRight className="w-4 h-4 text-[#15604E]" />
                    </div>
                    <div className="md:col-span-7">
                      <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-[#15604E]">
                        AI-native system
                      </div>
                      <div className="mt-1 text-[#1A1916]">{p.next}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 inline-flex items-center gap-2 font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-[#15604E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15604E] pulse-dot" />
                Output: rested you, scaled
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
