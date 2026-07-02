"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileCode2, Clock, Workflow, CheckCircle2 } from "lucide-react";

export default function ClarityTakeawaysVisual() {
  const takeaways = [
    {
      icon: FileCode2,
      title: "15-Minute Masterclass",
      desc: "Zero fluff. A pure tactical breakdown of modern AI architecture delivered straight to you.",
    },
    {
      icon: Workflow,
      title: "Deployable Systems",
      desc: "Get the exact blueprint to build and deploy production-ready autonomous workflows.",
    },
    {
      icon: Clock,
      title: "20+ Hours Reclaimed",
      desc: "Learn how to scale your impact, automate tasks, and reclaim your time every single week.",
    }
  ];

  return (
    <div className="w-full max-w-[420px] mx-auto py-6 lg:py-12">
      {/* Background decoration */}
      <div className="relative">
        {/* Animated glowing orb behind */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-4 bg-gradient-to-r from-[#15604E]/20 to-[#A9A9A9]/20 blur-2xl rounded-full"
        />
        
        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-[#DCDCCF] shadow-2xl overflow-hidden relative z-10">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#DCDCCF] bg-gradient-to-br from-gray-50 to-white flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-[#15604E] uppercase mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#15604E] animate-pulse"></span>
                Instant Delivery
              </p>
              <h3 className="text-xl font-serif text-[#1A1916]">Inside The Blueprint</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#15604E]/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#15604E]" />
            </div>
          </div>
          
          {/* Takeaways List */}
          <div className="p-6 space-y-6 bg-white">
            {takeaways.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (0.1 * index), duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F3] border border-[#DCDCCF]/50 flex items-center justify-center shrink-0 group-hover:bg-[#15604E]/5 group-hover:border-[#15604E]/20 transition-all duration-300 shadow-sm">
                  <item.icon className="w-5 h-5 text-gray-500 group-hover:text-[#15604E] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1A1916] mb-1 leading-tight">{item.title}</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed pr-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Footer Ribbon */}
          <div className="bg-[#1A1916] py-3.5 px-6 text-center border-t border-black">
             <p className="text-[11px] font-semibold text-[#FAF8F3]/90 tracking-widest uppercase">
               Sent directly to your WhatsApp
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
