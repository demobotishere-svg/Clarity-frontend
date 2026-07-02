"use client";

import React from "react";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { ArrowDown, Sparkle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const sentence = "Learn AI That Automates Work, Saves Time & Scales Your Output.";
  const words = sentence.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(3px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="clarity"
      data-testid="hero-section"
      className="relative pt-20 md:pt-24 pb-4 grain"
    >
      {/* Background Effects Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[40%] md:top-1/2 left-[50%] md:left-[30%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[150vw] max-h-[150vw]">
          {/* Revolving Background Glows (Intensified) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
            <div
              className="absolute inset-0 origin-center animate-spin-20 opacity-80"
            >
              <div className="absolute -top-16 -left-16 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(21,96,78,0.2) 0%, rgba(21,96,78,0) 70%)" }} />
              <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(244,162,97,0.2) 0%, rgba(244,162,97,0) 70%)" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(26,25,22,0.05) 0%, rgba(26,25,22,0) 70%)" }} />
            </div>
          </div>

          {/* Spinning Tech Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
             <div
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-[#E76F51]/15 border-dashed animate-spin-reverse-60"
             />
             <div
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-[#F4A261]/10 border-dotted animate-spin-40"
             />
          </div>

          {/* Orbiting Particles (More Noticeable) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-10 animate-spin-30"
          >
            <div 
               className="absolute top-[5%] left-[25%] text-[#E76F51]/60 animate-spin-reverse-30"
            >
              <Sparkle size={32} />
            </div>
            <div 
               className="absolute bottom-[15%] right-[15%] text-[#F4A261]/60 animate-spin-reverse-30"
            >
              <Sparkle size={24} />
            </div>
            <div 
               className="absolute top-[50%] right-[-10%] flex items-center justify-center animate-spin-reverse-30"
            >
              <div className="w-4 h-4 rounded-full bg-[#E76F51]/20 absolute shadow-[0_0_15px_#E76F51]" />
              <div className="w-2 h-2 rounded-full bg-[#E76F51] shadow-[0_0_15px_#E76F51]" />
            </div>
            <div 
               className="absolute bottom-[-5%] left-[10%] flex items-center justify-center animate-spin-reverse-30"
            >
              <div className="w-3 h-3 rounded-full bg-[#F4A261]/20 absolute shadow-[0_0_20px_#F4A261]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#F4A261] shadow-[0_0_10px_#F4A261]" />
              <div className="w-6 h-6 rounded-full bg-[#F4A261]/30 absolute shadow-[0_0_20px_#F4A261]" />
              <div className="w-3 h-3 rounded-full bg-[#F4A261] shadow-[0_0_20px_#F4A261]" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
          <div className="lg:col-span-7 relative z-10">
            <div className="animate-float-text">
              <motion.h1
              data-testid="hero-headline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight relative z-10"
            >
              {words.map((word, idx) => {
                const isAI = word === "AI";
                
                return (
                  <motion.span
                    key={idx}
                    variants={wordVariants}
                    className="inline-block mr-[0.25em]"
                  >
                    {isAI ? (
                      <span className="relative inline-block">
                        {word}
                        <motion.span
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
                          style={{ transformOrigin: "left" }}
                          className="absolute left-0 -bottom-1 md:-bottom-2 h-[4px] md:h-[6px] w-full bg-[#F4A261]/80 block"
                        ></motion.span>
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                );
              })}
            </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
              className="mt-6 max-w-xl pl-5 border-l-[3px] border-[#E76F51] relative z-10"
            >
              <p className="text-base md:text-lg text-[#1A1916] leading-relaxed font-sans">
                With our practical AI Framework, we help you cut through the noise,{" "}
                <span className="font-bold text-[#E76F51] text-base md:text-lg">
                  build real production-ready systems,
                </span>{" "}
                and automate your repetitive tasks so you can focus on what actually matters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4 relative z-20"
            >
              <a
                href="#enrol"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-3 bg-[#E76F51] text-white px-7 py-4 rounded-full text-sm md:text-base font-medium hover:bg-[#1B7560] transition-colors duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Unlock the Blueprint
                <span className="inline-flex w-7 h-7 rounded-full bg-white/15 items-center justify-center group-hover:translate-x-1 transition-transform">
                  <Sparkle className="w-3.5 h-3.5" />
                </span>
              </a>
            </motion.div>


          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-28 flex items-center justify-center lg:justify-end"
          >
            <PricingCard />
          </motion.div>
        </div>
      </div>

      <div className="mt-16 md:mt-20 border-y border-[#DCDCCF] overflow-hidden">
        <div className="marquee-pause">
          <div className="marquee-track flex whitespace-nowrap py-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-10 px-6 font-mono text-xs uppercase tracking-[0.25em] text-[#666666]"
              >
                {[
                  "Boss the machine",
                  "Design, don't execute",
                  "1 person + AI = powerhouse",
                  "No code required",
                  "Architect your workflow",
                  "From clutter to clarity"
                ].map((t) => (
                  <span key={t} className="flex items-center gap-10">
                    {t}
                    <span className="inline-block w-1 h-1 rounded-full bg-[#E76F51]"></span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Removed Floating Workflows Accents to keep background clean */}

      {/* Removed scroll indicator to eliminate the huge empty gap */}
    </section>
  );
}
