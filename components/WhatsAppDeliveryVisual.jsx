"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, PlayCircle, Bot } from "lucide-react";

export default function WhatsAppDeliveryVisual() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timeout;
    const runSequence = () => {
       setStep(0); // Typing...
       timeout = setTimeout(() => {
          setStep(1); // Msg 1
          timeout = setTimeout(() => {
             setStep(2); // Msg 2
             timeout = setTimeout(() => {
                setStep(3); // Msg 3
                timeout = setTimeout(() => {
                   runSequence(); // Restart after a hold
                }, 5000);
             }, 1500);
          }, 1500);
       }, 2000);
    };
    
    runSequence();
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto py-4">
      {/* Phone/Chat Frame */}
      <div className="w-full max-w-[320px] mx-auto bg-white rounded-[2.5rem] border-[6px] sm:border-[8px] border-[#1A1916] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col h-[480px]">
         
         {/* WhatsApp Header */}
         <div className="bg-[#E76F51] text-white px-4 py-3 flex items-center gap-3 z-20 shadow-md relative">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 shadow-inner">
               <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
               <div className="font-bold text-[13px] leading-tight">Clarity Architect</div>
               <div className="text-white/80 text-[10px] flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_5px_#4ADE80] animate-pulse" /> Online
               </div>
            </div>
         </div>

         {/* Chat Area Background */}
         <div className="flex-1 bg-[#efeae2] relative p-4 flex flex-col overflow-hidden">
            
            <div className="flex-1 w-full space-y-3 relative z-10 flex flex-col justify-start">
               
               <AnimatePresence mode="popLayout">
                  {step >= 1 && (
                     <motion.div 
                       key="msg1"
                       layout
                       initial={{ opacity: 0, y: 10, scale: 0.95, originX: 0 }}
                       animate={{ opacity: 1, y: 0, scale: 1 }}
                       className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm self-start max-w-[85%] border border-black/5"
                     >
                       <div className="text-[#1A1916] text-xs sm:text-[13px] leading-relaxed font-medium">
                         Here is the exact blueprint you requested. Ready to build?
                       </div>
                       <div className="text-right text-[9px] text-gray-400 mt-1 font-medium">11:42 AM</div>
                     </motion.div>
                  )}

                  {step >= 2 && (
                     <motion.div 
                       key="msg2"
                       layout
                       initial={{ opacity: 0, y: 10, scale: 0.95, originX: 0 }}
                       animate={{ opacity: 1, y: 0, scale: 1 }}
                       className="bg-white rounded-2xl rounded-tl-none p-2 shadow-sm self-start max-w-[90%] w-full border border-black/5"
                     >
                       <div className="bg-[#FAF8F3] border border-[#DCDCCF] rounded-xl p-2.5 flex items-center gap-3 mb-1.5 cursor-pointer hover:bg-[#f5f1e8] transition-colors">
                          <div className="w-9 h-9 rounded-lg bg-[#E76F51]/10 flex items-center justify-center shrink-0">
                             <FileText className="w-4 h-4 text-[#E76F51]" />
                          </div>
                          <div className="flex-1 min-w-0">
                             <div className="text-[#1A1916] text-[11px] font-bold truncate">Architects_Blueprint.pdf</div>
                             <div className="text-[#666666] text-[9px] mt-0.5 uppercase tracking-wider font-mono">3.4 MB • PDF</div>
                          </div>
                       </div>
                       <div className="text-right text-[9px] text-gray-400 mt-1 px-1 font-medium">11:42 AM</div>
                     </motion.div>
                  )}

                  {step >= 3 && (
                     <motion.div 
                       key="msg3"
                       layout
                       initial={{ opacity: 0, y: 10, scale: 0.95, originX: 0 }}
                       animate={{ opacity: 1, y: 0, scale: 1 }}
                       className="bg-white rounded-2xl rounded-tl-none p-2 shadow-sm self-start max-w-[90%] w-full border border-black/5"
                     >
                       <div className="relative w-full h-28 rounded-xl bg-black overflow-hidden mb-2 group cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#E76F51] to-[#1A1916] opacity-90 group-hover:opacity-70 transition-opacity" />
                          <div className="absolute inset-0 flex items-center justify-center">
                             <PlayCircle className="w-10 h-10 text-white opacity-90 shadow-2xl group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="absolute bottom-2 left-2 text-white text-[9px] font-bold bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">15:00</div>
                       </div>
                       <div className="text-[#1A1916] text-xs px-1 font-medium leading-relaxed">
                         Watch this video first. It explains everything.
                       </div>
                       <div className="text-right text-[9px] text-gray-400 mt-1 px-1 font-medium">11:43 AM</div>
                     </motion.div>
                  )}

                  {/* Typing Indicator */}
                  {step === 0 && (
                     <motion.div 
                       key="typing"
                       layout
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, scale: 0.9, originX: 0 }}
                       className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm self-start inline-flex items-center gap-1 border border-black/5"
                     >
                       <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-[#E76F51]/50 rounded-full" />
                       <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#E76F51]/50 rounded-full" />
                       <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#E76F51]/50 rounded-full" />
                     </motion.div>
                  )}
               </AnimatePresence>

            </div>
         </div>
      </div>
    </div>
  );
}
