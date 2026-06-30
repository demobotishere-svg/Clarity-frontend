"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#1A1916] border-t border-[#333333] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(42,157,143,0.1),transparent_65%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.18] tracking-tight text-[#FAF8F3] font-light max-w-3xl mx-auto mb-10">
            A year from now, you&apos;ll either be the person who finally understood this — or the one <span className="italic text-[#15604E]">still wondering</span> where to start.
          </h2>
          
          <a 
            href="#lead-form-final"
            className="group inline-flex items-center justify-center gap-3 bg-[#15604E] text-white px-9 py-4 rounded-xl font-semibold text-lg hover:bg-[#21867a] hover:-translate-y-1 transition-all shadow-[0_12px_28px_rgba(42,157,143,0.25)]"
          >
            Unlock Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
