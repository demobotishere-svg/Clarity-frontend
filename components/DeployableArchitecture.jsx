"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, BrainCircuit, Zap, ArrowRight } from "lucide-react";

export default function DeployableArchitecture() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full mt-8 md:mt-12 p-6 md:p-8 bg-white border border-[#DCDCCF] rounded-[2rem] shadow-sm relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#15604E]/[0.03] to-transparent pointer-events-none" />
      
      <div className="flex justify-between items-center mb-8 relative z-10">
        <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-500">
          The 15-Min Architecture
        </h4>
        <span className="text-[10px] font-bold tracking-wide uppercase bg-[#15604E]/10 text-[#15604E] px-3 py-1.5 rounded-full">
          Deployable Today
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        {/* Node 1 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full bg-gray-50 border border-gray-200 rounded-2xl p-5 text-center relative"
        >
          <div className="w-12 h-12 mx-auto bg-white border shadow-sm rounded-xl flex items-center justify-center mb-3">
            <Database className="w-6 h-6 text-gray-600" />
          </div>
          <div className="text-sm font-bold text-gray-800">Messy Inputs</div>
          <div className="text-[11px] text-gray-500 mt-1 font-medium">Emails, PDFs, Audio</div>
        </motion.div>

        {/* Arrow */}
        <div className="hidden md:flex text-gray-300">
          <ArrowRight className="w-5 h-5" />
        </div>
        <div className="md:hidden text-gray-300 rotate-90 my-1">
          <ArrowRight className="w-5 h-5" />
        </div>

        {/* Node 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1 w-full bg-gradient-to-br from-[#15604E] to-[#0f4538] border border-[#15604E] rounded-2xl p-5 text-center relative shadow-lg shadow-[#15604E]/20"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-2xl border border-white/20 border-dashed pointer-events-none"
          />
          <div className="w-12 h-12 mx-auto bg-white/10 rounded-xl flex items-center justify-center mb-3 relative z-10 backdrop-blur-sm">
            <BrainCircuit className="w-6 h-6 text-white" />
          </div>
          <div className="text-sm font-bold text-white relative z-10">AI Architect</div>
          <div className="text-[11px] text-white/70 mt-1 font-medium relative z-10">Processing Engine</div>
        </motion.div>

        {/* Arrow */}
        <div className="hidden md:flex text-gray-300">
          <ArrowRight className="w-5 h-5" />
        </div>
        <div className="md:hidden text-gray-300 rotate-90 my-1">
          <ArrowRight className="w-5 h-5" />
        </div>

        {/* Node 3 */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex-1 w-full bg-green-50 border border-green-200 rounded-2xl p-5 text-center relative"
        >
          <div className="w-12 h-12 mx-auto bg-white border border-green-100 shadow-sm rounded-xl flex items-center justify-center mb-3">
            <Zap className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-sm font-bold text-green-900">Final Output</div>
          <div className="text-[11px] text-green-700 mt-1 font-medium">Autonomous Work</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
