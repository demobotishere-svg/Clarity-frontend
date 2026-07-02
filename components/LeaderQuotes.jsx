"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LeaderQuotes() {
  return (
    <section 
      id="leader-quotes"
      className="relative py-24 md:py-36 bg-[#FAF8F3] text-[#1A1916] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-[#666666] mb-4">
            This is already happening
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            The people who direct AI<br />
            <span className="italic text-[#E76F51]">are pulling away.</span>
          </h2>
          <p className="mt-6 text-lg text-[#666666] max-w-2xl mx-auto">
            You don't have to take our word for it. The builders and leaders watching this shift up close are saying the same thing — and changing who they pay, hire, and keep.
          </p>
        </motion.div>

        {/* Leader Quotes */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 text-left">
          {[
            {
              name: "Sharan Hegde",
              role: "Founder, The 1% Club",
              quote: "I am going to be hiring people at very high salaries very soon because of their upskilling in AI. I've seen people use AI to do the work of 20 people by themselves.",
              image: "/sharan.jpg"
            },
            {
              name: "Jensen Huang",
              role: "CEO, NVIDIA",
              quote: "You're not going to lose your job to an AI. You're going to lose your job to someone who uses AI.",
              image: "/jensen.jpg"
            },
            {
              name: "Sam Altman",
              role: "CEO, OpenAI",
              quote: "AI will be the greatest force for economic empowerment and a lot of people getting rich we have ever seen.",
              image: "/sam.jpg"
            },
            {
              name: "Naval Ravikant",
              role: "Founder, AngelList",
              quote: "AI is a tool to amplify the human mind. The ultimate leverage for the individual builder.",
              image: "/naval.jpg"
            }
          ].map((leader, i) => (
            <motion.div 
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: i * 0.1 }}
              className="relative overflow-hidden bg-[#1A1916] rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-xl flex items-center min-h-[300px] border border-white/5"
            >
              {/* Faded Background Image - Left Side */}
              <div className="absolute inset-y-0 left-0 w-[55%] sm:w-[45%] pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1A1916] z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1916]/30 via-transparent to-[#1A1916]/80 z-10" />
                <img 
                  src={leader.image} 
                  alt="" 
                  className="w-full h-full object-cover object-top opacity-100"
                />
              </div>

              {/* Content - Right Side */}
              <div className="relative z-20 w-[60%] ml-auto flex flex-col justify-center">
                <p className="font-serif italic text-base sm:text-lg md:text-[20px] text-[#FAF8F3] leading-relaxed mb-6 drop-shadow-md">
                  &quot;{leader.quote}&quot;
                </p>
                <div>
                  <div className="font-semibold text-white tracking-wide">{leader.name}</div>
                  <div className="text-xs sm:text-sm text-[#FAF8F3]/60 font-mono tracking-widest uppercase mt-1">{leader.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
