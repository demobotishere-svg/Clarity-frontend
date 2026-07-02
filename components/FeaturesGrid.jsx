"use client";

import React from "react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    num: "01",
    title: "Build systems that actually work.",
    description: "Forget generic ChatGPT wrappers. You'll learn how to build robust, fault-tolerant workers that run in the background 24/7 without breaking.",
  },
  {
    num: "02",
    title: "No BS, just signal.",
    description: "No 50-page prompt guides. No theory. We only teach battle-tested engineering principles that actually drive revenue.",
  },
  {
    num: "03",
    title: "Automate the boring stuff.",
    description: "We're handing over the exact same frameworks we use to eliminate 20+ hours of manual data entry every single week.",
  },
  {
    num: "04",
    title: "Steal our client workflows.",
    description: "We don't do hypothetical examples. Every single system you build is based on real work we've actually billed clients for.",
  },
  {
    num: "05",
    title: "Built for your specific job.",
    description: "Whether you're in sales, marketing, HR, or finance—these aren't generic tricks. Apply this directly to the tools you already use every day.",
  },
  {
    num: "06",
    title: "Short, punchy lessons.",
    description: "You're busy. So we compressed years of trial and error into high-density, 15-minute tactical videos you can watch on your lunch break.",
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF8F3] border-t border-[#DCDCCF]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="mb-20 md:mb-32">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight text-[#1A1916]">
            What's actually <br className="hidden md:block"/> <span className="italic text-[#666666]">inside the program.</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-[#1A1916]/10">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="py-10 md:py-16 border-b border-[#1A1916]/10 flex flex-col md:flex-row gap-6 md:gap-16 items-start group cursor-default"
            >
              <div className="text-xl md:text-2xl font-mono text-[#1A1916]/30 font-semibold group-hover:text-[#E76F51] transition-colors">
                {feature.num}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-4xl text-[#1A1916] mb-4 md:mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {feature.title}
                </h3>
                <p className="text-base md:text-xl text-[#666666] leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
