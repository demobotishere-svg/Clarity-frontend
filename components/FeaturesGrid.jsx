"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Workflow, Zap, Briefcase, LayoutGrid, Clock, ArrowRight } from "lucide-react";

const FEATURES = [
  {
    id: "architecture",
    title: "Production-Ready Architecture",
    shortTitle: "Architecture",
    description: "Learn to build autonomous systems that actually work in the real world, not just generic toy examples. We teach you how to deploy, monitor, and scale AI workers safely.",
    icon: Layers,
    color: "from-[#15604E] to-[#0A3D30]"
  },
  {
    id: "signal",
    title: "Zero Fluff, Pure Signal",
    shortTitle: "Pure Signal",
    description: "No 50-page prompt guides that expire next week. Just timeless engineering principles applied to AI. We focus on systems, not fragile hacks.",
    icon: Zap,
    color: "from-[#F4A261] to-[#D97D3A]"
  },
  {
    id: "automation",
    title: "Complete Automation Blueprint",
    shortTitle: "Automation",
    description: "Get the exact frameworks we use to automate repetitive tasks and reclaim 20+ hours a week. From webhook triggers to parallel processing.",
    icon: Workflow,
    color: "from-[#1A1916] to-[#333333]"
  },
  {
    id: "cases",
    title: "Real Client Use Cases",
    shortTitle: "Client Work",
    description: "Every concept is taught using real client workflows and execution models from live production work. See what companies actually pay for.",
    icon: Briefcase,
    color: "from-[#15604E] to-[#1A1916]"
  },
  {
    id: "domain",
    title: "Domain-Specific Application",
    shortTitle: "Application",
    description: "Whether you're in marketing, HR, ops, or finance, apply these systems directly to your specific field. AI isn't one-size-fits-all.",
    icon: LayoutGrid,
    color: "from-[#4A5568] to-[#2D3748]"
  },
  {
    id: "tactical",
    title: "15-Minute Breakdowns",
    shortTitle: "15-Min Breakdowns",
    description: "High-density learning designed for busy professionals. Get the core insights rapidly without the filler.",
    icon: Clock,
    color: "from-[#15604E] to-[#0A3D30]"
  }
];

export default function FeaturesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFeature = FEATURES[activeIndex];
  const ActiveIcon = activeFeature.icon;

  return (
    <section className="py-16 md:py-20 bg-[#FAF8F3] border-t border-[#DCDCCF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#15604E] font-bold mb-5 flex items-center justify-center gap-4">
            <span className="w-8 md:w-12 h-[1px] bg-[#15604E]/30"></span>
            The Architecture
            <span className="w-8 md:w-12 h-[1px] bg-[#15604E]/30"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-[#1A1916]">
            Why Choose Our <span className="italic text-[#15604E]">AI Program?</span>
          </h2>
        </div>

        {/* Interactive Console Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 bg-white rounded-[2rem] lg:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#EAEAE6]">
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible hide-scrollbar snap-x snap-mandatory gap-2 pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            {FEATURES.map((feature, idx) => {
              const isActive = activeIndex === idx;
              const Icon = feature.icon;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`snap-start shrink-0 lg:w-full text-left px-4 py-3 lg:px-5 lg:py-4 rounded-xl lg:rounded-2xl flex items-center justify-between transition-all duration-300 ${
                    isActive 
                      ? "bg-[#1A1916] text-white shadow-md" 
                      : "bg-transparent text-[#666666] hover:bg-[#FAF8F3] hover:text-[#1A1916]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className={`w-5 h-5 transition-colors duration-200 ${isActive ? "text-[#F4A261]" : "text-[#1A1916]/40"}`} />
                    <span className={`font-semibold text-sm md:text-base transition-colors duration-200 ${isActive ? "text-white" : ""}`}>
                      {feature.shortTitle}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="hidden lg:block ml-4"
                    >
                      <ArrowRight className="w-5 h-5 text-white/50" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Display */}
          <div className="lg:col-span-8 bg-[#FAF8F3] rounded-2xl lg:rounded-[2rem] overflow-hidden relative min-h-[350px] lg:min-h-[400px] border border-[#EAEAE6]">
            <AnimatePresence>
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col p-6 sm:p-8 md:p-12 will-change-transform will-change-opacity"
              >
                {/* Background Gradient Slash */}
                <div className={`absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl ${activeFeature.color} opacity-[0.03] lg:opacity-[0.03] -translate-y-1/4 translate-x-1/4 rotate-12 pointer-events-none`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 md:mb-8 lg:mb-12 shadow-sm bg-gradient-to-br ${activeFeature.color}`}>
                    <ActiveIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#1A1916] mb-4 md:mb-5 tracking-tight max-w-2xl">
                    {activeFeature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base md:text-lg text-[#666666] leading-relaxed max-w-xl font-medium mt-auto lg:mt-0">
                    {activeFeature.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
