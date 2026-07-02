"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, LayoutTemplate, Layers } from "lucide-react";

export default function PremiumBlueprintVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0 mt-12 md:mt-16 mb-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E76F51] rounded-full blur-[80px] opacity-15 pointer-events-none" />

      {/* Back Card */}
      <motion.div 
        initial={{ opacity: 0, y: 60, rotate: -2 }}
        whileInView={{ opacity: 1, y: -20, rotate: -8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-[#f4f4ec] border border-[#DCDCCF] rounded-[2rem] shadow-sm pointer-events-none origin-bottom-left"
      />

      {/* Middle Card */}
      <motion.div 
        initial={{ opacity: 0, y: 60, rotate: -1 }}
        whileInView={{ opacity: 1, y: -10, rotate: -4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-[#faf8f3] border border-[#DCDCCF] rounded-[2rem] shadow-md pointer-events-none origin-bottom-left"
      />

      {/* Front Hero Card */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white border border-[#DCDCCF] rounded-[2rem] p-7 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] z-10"
      >
        <div className="flex items-center gap-4 mb-7">
          <div className="w-14 h-14 bg-gradient-to-br from-[#E76F51] to-[#114b3d] rounded-2xl flex items-center justify-center shadow-lg shadow-[#E76F51]/20">
            <Layers className="w-7 h-7 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 font-sans text-xl">The Master Blueprint</h4>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">Ready for deployment</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-full bg-[#FAF8F3] rounded-2xl p-4 border border-[#DCDCCF] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LayoutTemplate className="w-5 h-5 text-[#E76F51]" />
              <span className="font-bold text-[13px] text-gray-800 tracking-wide uppercase">Tactical Architecture</span>
            </div>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>

          <div className="w-full bg-[#FAF8F3] rounded-2xl p-4 border border-[#DCDCCF] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-amber-500" />
              <span className="font-bold text-[13px] text-gray-800 tracking-wide uppercase">Execution Speed</span>
            </div>
            <span className="text-[11px] font-bold bg-amber-100/50 border border-amber-200 text-amber-600 px-3 py-1 rounded-full">10x BOOST</span>
          </div>

          <div className="w-full bg-[#FAF8F3] rounded-2xl p-4 border border-[#DCDCCF] flex flex-col gap-3 relative overflow-hidden">
             <div className="absolute top-0 bottom-0 left-0 bg-[#E76F51]/5 w-3/4 animate-pulse" />
             <div className="flex justify-between items-center relative z-10">
                <span className="font-bold text-[13px] text-gray-800 tracking-wide uppercase">Workflow Systems</span>
                <span className="text-xs font-bold text-[#E76F51] italic">Compiling...</span>
             </div>
             <div className="w-full h-2 bg-gray-200/60 rounded-full relative z-10 overflow-hidden shadow-inner">
                <div className="h-full bg-gradient-to-r from-[#E76F51] to-[#25a889] w-[75%] rounded-full relative">
                  <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite] -skew-x-12" />
                </div>
             </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
