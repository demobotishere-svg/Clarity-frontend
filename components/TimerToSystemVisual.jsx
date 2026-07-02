"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Zap, Network } from "lucide-react";

export default function TimerToSystemVisual() {
  return (
    <div className="w-full max-w-2xl mx-auto py-10 md:py-14">
      <div className="relative flex items-center justify-between px-6 sm:px-16">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E76F51]/40 to-transparent -translate-y-1/2" />
        
        {/* Animated particle on the line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 overflow-hidden pointer-events-none">
           <motion.div 
             animate={{ x: ["-100%", "300%"] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
             className="w-1/4 h-full bg-gradient-to-r from-transparent via-[#E76F51] to-transparent shadow-[0_0_10px_#E76F51]"
           />
        </div>

        {/* Node 1: Time */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.02)] relative overflow-hidden group backdrop-blur-sm">
             <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
             <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-white/50 group-hover:text-white/80 transition-colors" />
          </div>
          <span className="mt-5 font-mono text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.2em] font-semibold">15 Minutes</span>
        </motion.div>

        {/* Center: Transformation Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative z-10 bg-[#1A1916] px-4 -translate-y-4"
        >
           <div className="w-10 h-10 rounded-full bg-[#E76F51]/10 flex items-center justify-center border border-[#E76F51]/30">
               <Zap className="w-4 h-4 text-[#E76F51]" />
           </div>
        </motion.div>

        {/* Node 2: System */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#111111] border border-[#E76F51]/40 flex items-center justify-center shadow-[0_0_50px_rgba(21,96,78,0.2)] relative overflow-hidden group backdrop-blur-sm">
             <div className="absolute inset-0 bg-[#E76F51]/10 group-hover:bg-[#E76F51]/20 transition-colors" />
             <Network className="w-8 h-8 sm:w-10 sm:h-10 text-[#E76F51]" />
             
             {/* Glowing pulse */}
             <motion.div
                animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-[#E76F51] z-[-1]"
             />
          </div>
          <span className="mt-5 font-mono text-[10px] sm:text-xs text-[#E76F51] uppercase tracking-[0.2em] font-bold">Live System</span>
        </motion.div>

      </div>
    </div>
  );
}
