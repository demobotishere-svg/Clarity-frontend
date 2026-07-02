"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";

export default function TimeSavingsVisual() {
  return (
    <div className="w-full max-w-lg mx-auto py-8 lg:py-12">
      <div className="flex flex-col gap-4 sm:gap-6">
        
        {/* The Old Way (Wasting Time) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#111111] border border-white/5 rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-6 overflow-hidden shadow-lg backdrop-blur-sm"
        >
           <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white/30" />
           </div>
           
           <div className="w-24 sm:w-36 shrink-0">
              <div className="text-white/40 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mb-1">Traditional Path</div>
              <div className="text-white/60 text-xs sm:text-sm font-semibold leading-tight">Weeks of trial <br/> & error</div>
           </div>

           {/* Tangled SVG Line */}
           <div className="flex-1 h-12 relative opacity-30">
              <svg viewBox="0 0 100 48" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                 <path 
                   d="M 0 24 C 15 -10, 25 58, 40 24 C 55 -10, 65 58, 80 24 C 90 0, 95 30, 100 24" 
                   vectorEffect="non-scaling-stroke"
                   stroke="#ffffff" 
                   strokeWidth="1.5" 
                   fill="none" 
                   strokeDasharray="3 3"
                 />
              </svg>
           </div>
        </motion.div>

        {/* The New Way (Clarity Blueprint) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative bg-gradient-to-r from-[#111111] to-[#E76F51]/15 border border-[#E76F51]/40 rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-6 overflow-hidden shadow-[0_10px_40px_rgba(21,96,78,0.2)] backdrop-blur-xl"
        >
           <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-[#15604E]/20 border border-[#E76F51]/50 flex items-center justify-center shadow-[0_0_20px_rgba(21,96,78,0.6)]">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#E76F51]" />
           </div>
           
           <div className="w-24 sm:w-36 shrink-0">
              <div className="text-[#E76F51] font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mb-1 font-bold">The Blueprint</div>
              <div className="text-white text-xs sm:text-sm font-bold leading-tight tracking-wide">15-Minute <br/> Execution</div>
           </div>

           {/* Straight Glowing Line */}
           <div className="flex-1 h-[2px] relative bg-[#15604E]/30 rounded-full overflow-hidden">
              <motion.div 
                 animate={{ x: ["-100%", "300%"] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                 className="w-1/2 h-full bg-[#15604E] shadow-[0_0_12px_#E76F51]"
              />
           </div>
        </motion.div>

      </div>
    </div>
  );
}
