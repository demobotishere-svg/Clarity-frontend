"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Bot, Send, Workflow } from "lucide-react";

export default function WorkflowMapVisual() {
  return (
    <div className="w-full aspect-[4/3] max-w-lg mx-auto relative rounded-[2rem] border border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
       
       {/* Top Bar (Mock Window) */}
       <div className="flex items-center gap-2 mb-2 opacity-50 relative z-20">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-4 font-mono text-[10px] sm:text-xs text-white/50 flex items-center gap-2">
             <Workflow className="w-3 h-3" /> system_blueprint.flow
          </div>
       </div>

       {/* Flow Area */}
       <div className="relative flex-1 w-full h-full mt-4">
         
         {/* SVG Connections */}
         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Path 1: Trigger -> AI */}
            <path d="M 25% 25% L 50% 50%" stroke="rgba(21, 96, 78, 0.4)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
            <circle r="4" fill="#15604E" className="drop-shadow-[0_0_8px_#E76F51]">
              <animateMotion dur="2s" repeatCount="indefinite" path="M 25% 25% L 50% 50%" />
            </circle>

            {/* Path 2: AI -> Action */}
            <path d="M 50% 50% L 75% 75%" stroke="rgba(21, 96, 78, 0.4)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
            <circle r="4" fill="#15604E" className="drop-shadow-[0_0_8px_#E76F51]">
              <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 50% 50% L 75% 75%" />
            </circle>
         </svg>

         {/* Node 1: Capture */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-[#111111] border border-white/10 rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-3 w-32 sm:w-40 z-10 backdrop-blur-md"
         >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
               <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
            </div>
            <div>
               <div className="text-white/90 text-[10px] sm:text-xs font-bold leading-tight">Incoming Lead</div>
               <div className="text-white/40 text-[8px] sm:text-[10px] font-mono mt-0.5">Webhook</div>
            </div>
         </motion.div>

         {/* Node 2: AI Agent */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#15604E]/10 border border-[#E76F51]/50 rounded-xl p-3 sm:p-4 shadow-[0_0_40px_rgba(21,96,78,0.25)] flex flex-col gap-3 w-40 sm:w-48 z-10 backdrop-blur-xl"
         >
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#15604E] flex items-center justify-center shrink-0 shadow-[0_0_15px_#E76F51]">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
               </div>
               <div>
                  <div className="text-white font-bold text-xs sm:text-sm leading-tight">AI Agent</div>
                  <div className="text-[#E76F51] text-[9px] sm:text-[10px] font-mono animate-pulse mt-0.5">Processing...</div>
               </div>
            </div>
            {/* Progress bar inside node */}
            <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden border border-white/5">
               <motion.div 
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full bg-[#15604E] shadow-[0_0_10px_#E76F51]"
               />
            </div>
         </motion.div>

         {/* Node 3: Action */}
         <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="absolute top-[75%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-[#111111] border border-white/10 rounded-xl p-2 sm:p-3 shadow-lg flex items-center gap-3 w-32 sm:w-40 z-10 backdrop-blur-md"
         >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
               <Send className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            </div>
            <div>
               <div className="text-white/90 text-[10px] sm:text-xs font-bold leading-tight">WhatsApp</div>
               <div className="text-green-500/70 text-[8px] sm:text-[10px] font-mono mt-0.5">Message Sent</div>
            </div>
         </motion.div>

       </div>
    </div>
  );
}
