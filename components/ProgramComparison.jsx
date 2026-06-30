"use client";

import React from "react";
import { motion } from "framer-motion";

const COMPARISON_DATA = [
  {
    feature: "Who Teaches",
    clarity: "Lead Architects & working AI engineers",
    typical: "Generic trainers or part-time mentors",
  },
  {
    feature: "Curriculum",
    clarity: "Updated from live enterprise deployments & AI-led workflows",
    typical: "Outdated lessons reused for years",
  },
  {
    feature: "Learning Style",
    clarity: "Practical execution on real AI agents",
    typical: "Mostly theory-based",
  },
  {
    feature: "Projects",
    clarity: "Real enterprise-style deployments, plans & dashboards",
    typical: "Mock or surface-level projects",
  },
  {
    feature: "AI & Automation",
    clarity: "Autonomous AI agents built into workflows",
    typical: "Little or no AI coverage",
  },
];

export default function ProgramComparison() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#1A1916]">
            Why we are <span className="italic text-[#15604E]">different.</span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="w-full bg-white rounded-2xl border border-[#EAEAE6] shadow-sm overflow-hidden text-sm md:text-base">
          
          {/* Header Row (Hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-3 items-stretch border-b border-[#EAEAE6]">
            <div className="p-5 md:p-8 font-bold text-[#1A1916] flex items-center md:justify-start justify-center text-center md:text-left">
              What You Get
            </div>
            <div className="p-5 md:p-8 font-bold text-[#15604E] flex items-center justify-center text-center bg-[#F4F9F5]">
              The Clarity Program
            </div>
            <div className="p-5 md:p-8 text-[#666666] flex items-center justify-center text-center">
              Typical Academies
            </div>
          </div>

          {/* Data Rows */}
          {COMPARISON_DATA.map((row, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:grid md:grid-cols-3 items-stretch ${
                idx !== COMPARISON_DATA.length - 1 ? "border-b border-[#EAEAE6]" : ""
              }`}
            >
              <div className="p-3 md:p-8 font-semibold text-[#1A1916] flex items-center justify-center md:justify-start text-center md:text-left bg-gray-50 md:bg-transparent border-b border-[#EAEAE6] md:border-b-0 text-[11px] uppercase tracking-widest md:normal-case md:text-base md:tracking-normal">
                {row.feature}
              </div>
              <div className="flex flex-row md:contents">
                <div className="flex-1 p-4 md:p-8 text-[#15604E] font-medium flex flex-col md:flex-row items-center justify-center text-center bg-[#F4F9F5] border-r md:border-x border-[#EAEAE6]/50">
                  <span className="md:hidden text-[9px] uppercase tracking-widest text-[#15604E]/50 font-bold mb-1">Clarity</span>
                  {row.clarity}
                </div>
                <div className="flex-1 p-4 md:p-8 text-[#666666] flex flex-col md:flex-row items-center justify-center text-center">
                  <span className="md:hidden text-[9px] uppercase tracking-widest text-[#666666]/50 font-bold mb-1">Typical</span>
                  {row.typical}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
