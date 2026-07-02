"use client";

import React from "react";
import { motion } from "framer-motion";
import { MousePointerClick, Bot, Check, X } from "lucide-react";

export default function ParadigmShiftVisual() {
  return (
    <div className="w-full max-w-lg mx-auto py-6 lg:py-10">
      
      <div className="relative flex items-stretch gap-3 sm:gap-5">
         
         {/* VS Badge */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#DCDCCF] shadow-md flex items-center justify-center z-10 font-mono text-[9px] font-bold text-[#1A1916] tracking-widest">
            VS
         </div>

         {/* The Blue Pill (Status Quo) */}
         <motion.div 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex-1 rounded-2xl border border-[#DCDCCF] bg-white/50 p-5 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-sm"
         >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FAF8F3] border border-[#DCDCCF] flex items-center justify-center mb-4">
               <MousePointerClick className="w-4 h-4 sm:w-5 sm:h-5 text-[#999999]" />
            </div>
            <h4 className="font-serif text-sm sm:text-lg font-bold text-[#1A1916] mb-3">The Worker</h4>
            <ul className="text-[9px] sm:text-[11px] text-[#666666] flex flex-col gap-2.5 w-full font-medium">
               <li className="flex items-center gap-1.5 sm:gap-2 justify-center"><X className="w-3 h-3 text-red-400/70 shrink-0" /> Manual execution</li>
               <li className="flex items-center gap-1.5 sm:gap-2 justify-center"><X className="w-3 h-3 text-red-400/70 shrink-0" /> Linear scaling</li>
               <li className="flex items-center gap-1.5 sm:gap-2 justify-center"><X className="w-3 h-3 text-red-400/70 shrink-0" /> Time for money</li>
            </ul>
         </motion.div>

         {/* The Red Pill (AI Architect) */}
         <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex-1 rounded-2xl border border-[#15604E]/30 bg-[#1A1916] p-5 flex flex-col items-center text-center shadow-[0_15px_40px_rgba(21,96,78,0.25)] relative overflow-hidden"
         >
            {/* Glowing background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#15604E]/20 blur-2xl rounded-full pointer-events-none" />
            
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#15604E]/20 border border-[#15604E]/50 flex items-center justify-center mb-4 relative shadow-[0_0_20px_rgba(21,96,78,0.4)]">
               <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-[#15604E] relative z-10" />
               <motion.div 
                 animate={{ scale: [1, 1.25, 1] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute inset-0 rounded-full bg-[#15604E]/30"
               />
            </div>
            <h4 className="font-serif text-sm sm:text-lg font-bold text-white mb-3">The Architect</h4>
            
            <ul className="text-[9px] sm:text-[11px] text-white/80 flex flex-col gap-2.5 w-full font-medium">
               <li className="flex items-center gap-1.5 sm:gap-2 justify-center"><Check className="w-3 h-3 text-[#15604E] shrink-0" /> Autonomous systems</li>
               <li className="flex items-center gap-1.5 sm:gap-2 justify-center"><Check className="w-3 h-3 text-[#15604E] shrink-0" /> Exponential scaling</li>
               <li className="flex items-center gap-1.5 sm:gap-2 justify-center"><Check className="w-3 h-3 text-[#15604E] shrink-0" /> Infinite leverage</li>
            </ul>
         </motion.div>

      </div>
    </div>
  );
}
