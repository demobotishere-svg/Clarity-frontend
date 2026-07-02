"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function BlueprintDrawingVisual() {
  return (
    <div className="w-full max-w-lg mx-auto py-4 lg:py-6">
      {/* Blueprint Container */}
      <div className="relative w-full aspect-[4/3] bg-[#E76F51] rounded-xl overflow-hidden shadow-2xl p-4 sm:p-6 border-[6px] border-white/50">
         
         {/* Grid Background */}
         <div 
           className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
             backgroundSize: '20px 20px'
           }}
         />
         <div 
           className="absolute inset-0 opacity-15 pointer-events-none" 
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
             backgroundSize: '100px 100px'
           }}
         />

         {/* Blueprint Label */}
         <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-end gap-3 sm:gap-4 opacity-80 z-20">
            <div className="text-right">
               <div className="text-white font-mono text-[8px] sm:text-[10px] tracking-widest uppercase">Project_Specs:</div>
               <div className="text-white font-serif text-xs sm:text-sm">AUTONOMOUS_SYS_V1</div>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 border border-white/50 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm">
               <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
         </div>

         {/* SVG Drawing (Stacked Architecture) */}
         <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full z-10" style={{ filter: 'drop-shadow(0px 0px 6px rgba(255,255,255,0.4))' }}>
            
            {/* Connecting Vertical Data Lines (Dashed) */}
            <motion.path
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: "loop" }}
               d="M 100 80 L 100 200"
               fill="none"
               stroke="rgba(255,255,255,0.6)"
               strokeWidth="1.5"
               strokeDasharray="4 6"
            />
            <motion.path
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: "loop" }}
               d="M 300 80 L 300 200"
               fill="none"
               stroke="rgba(255,255,255,0.6)"
               strokeWidth="1.5"
               strokeDasharray="4 6"
            />
            <motion.path
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: "loop" }}
               d="M 200 130 L 200 250"
               fill="none"
               stroke="rgba(255,255,255,0.6)"
               strokeWidth="1.5"
               strokeDasharray="4 6"
            />

            {/* Bottom Layer (Database/Memory) */}
            <motion.path
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 3, ease: "easeInOut" }}
               d="M 200 150 L 300 200 L 200 250 L 100 200 Z"
               fill="rgba(255,255,255,0.05)"
               stroke="#ffffff"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            
            {/* Middle Layer (AI Core Processing) */}
            <motion.path
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
               d="M 200 90 L 300 140 L 200 190 L 100 140 Z"
               fill="rgba(255,255,255,0.1)"
               stroke="#ffffff"
               strokeWidth="2.5"
               strokeLinecap="round"
               strokeLinejoin="round"
            />

            {/* Top Layer (Interface/API) */}
            <motion.path
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
               d="M 200 30 L 300 80 L 200 130 L 100 80 Z"
               fill="rgba(255,255,255,0.05)"
               stroke="#ffffff"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />

            {/* Node Indicators (Circles) */}
            <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5 }} cx="200" cy="250" r="4" fill="white" />
            <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5 }} cx="200" cy="190" r="5" fill="white" />
            <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5 }} cx="200" cy="130" r="4" fill="white" />
            
            {/* Animated Data Pulse on Middle Layer */}
            <motion.path
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: [0, 1, 0] }}
               transition={{ duration: 2, delay: 3, ease: "easeOut", repeat: Infinity }}
               d="M 200 90 L 300 140 L 200 190 L 100 140 Z"
               fill="none"
               stroke="#ffffff"
               strokeWidth="4"
               strokeLinecap="round"
               strokeLinejoin="round"
               className="drop-shadow-[0_0_8px_#ffffff]"
            />
         </svg>
      </div>
    </div>
  );
}
