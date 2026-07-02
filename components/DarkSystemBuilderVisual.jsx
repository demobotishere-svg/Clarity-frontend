"use client";

import React from "react";
import { motion } from "framer-motion";
import { Webhook, BrainCircuit, Database } from "lucide-react";

export default function DarkSystemBuilderVisual() {
  return (
    <div className="w-full max-w-lg mx-auto py-12 flex flex-col items-center">
       {/* Visual container */}
       <div className="relative w-full flex flex-col items-center gap-8">
          
          {/* Vertical connecting line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#E76F51]/60 to-transparent z-0">
             {/* Falling Particle */}
             <div className="w-full h-full absolute inset-0 overflow-hidden rounded-full">
               <motion.div 
                 animate={{ y: ["-100%", "400%"] }}
                 transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                 className="w-full h-[30%] bg-gradient-to-b from-transparent via-[#E76F51] to-transparent shadow-[0_0_15px_#E76F51]"
               />
             </div>
          </div>

          {/* Block 1: Input */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 w-full max-w-[300px] bg-[#111111] border border-white/5 rounded-2xl p-4 flex items-center gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.6)] backdrop-blur-md"
          >
             <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Webhook className="w-6 h-6 text-white/50" />
             </div>
             <div>
                <div className="text-white/90 font-semibold text-sm">Input Trigger</div>
                <div className="text-white/40 text-xs font-mono mt-0.5">Webhook Received</div>
             </div>
          </motion.div>

          {/* Block 2: Processing (Highlight) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 w-full max-w-[340px] bg-gradient-to-r from-[#111111] to-[#161616] border border-[#E76F51]/40 rounded-2xl p-5 flex items-center gap-5 shadow-[0_0_40px_rgba(21,96,78,0.2)] backdrop-blur-xl"
          >
             <div className="w-14 h-14 rounded-xl bg-[#E76F51]/10 border border-[#E76F51]/30 flex items-center justify-center relative overflow-hidden">
                <BrainCircuit className="w-7 h-7 text-[#E76F51] relative z-10" />
                {/* Rotating background effect */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-50%] bg-gradient-to-tr from-transparent via-[#E76F51]/20 to-transparent"
                />
             </div>
             <div>
                <div className="text-white font-bold text-base tracking-tight">AI Engine</div>
                <div className="text-[#E76F51] text-xs font-mono mt-1 animate-pulse font-medium tracking-wide">Executing Logic...</div>
             </div>
          </motion.div>

          {/* Block 3: Output */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative z-10 w-full max-w-[300px] bg-[#111111] border border-white/5 rounded-2xl p-4 flex items-center gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.6)] backdrop-blur-md"
          >
             <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-white/50" />
             </div>
             <div>
                <div className="text-white/90 font-semibold text-sm">Autonomous Action</div>
                <div className="text-white/40 text-xs font-mono mt-0.5">Database Updated</div>
             </div>
          </motion.div>

       </div>
    </div>
  );
}
