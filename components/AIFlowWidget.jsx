"use client";

import React from "react";
import { motion } from "framer-motion";

const TASKS = [
  { label: "Replying to emails",   manual: 6,   auto: 0.5 },
  { label: "Writing meeting notes", manual: 3,   auto: 0.3 },
  { label: "Pulling data reports",  manual: 4.5, auto: 0.4 },
  { label: "Scheduling & follow-ups", manual: 2.5, auto: 0.2 },
  { label: "First-draft documents", manual: 5,   auto: 0.5 },
];

const TOTAL_MANUAL = TASKS.reduce((s, t) => s + t.manual, 0);
const TOTAL_AUTO   = TASKS.reduce((s, t) => s + t.auto, 0);
const SAVED        = TOTAL_MANUAL - TOTAL_AUTO;

export default function TimeAuditWidget() {
  return (
    <div className="w-full rounded-2xl border border-[#DCDCCF] bg-white ring-glow shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] flex flex-col h-full">
      {/* Header */}
      <div className="px-5 py-5 border-b border-[#DCDCCF] bg-gradient-to-b from-[#F8F8F4] to-white rounded-t-2xl">
        <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-[#666666]">
          Your week · hours spent
        </div>
        <div className="font-serif text-xl md:text-2xl mt-1 text-[#1A1916]">Time Audit</div>
      </div>

      {/* Task rows */}
      <div className="divide-y divide-[#DCDCCF]/40 flex-1">
        {TASKS.map((task, i) => {
          const maxBar  = 6; // max manual time
          const manualPct = (task.manual / maxBar) * 100;
          const autoPct   = (task.auto / maxBar) * 100;

          return (
            <div key={task.label} className="px-5 py-4 hover:bg-black/[0.01] transition-colors">
              <div className="text-sm font-medium text-[#1A1916] mb-3">{task.label}</div>
              
              <div className="flex flex-col gap-3">
                {/* Before AI Bar */}
                <div className="flex items-center gap-3">
                  <div className="w-[65px] text-sm md:text-base font-extrabold font-mono tracking-wider uppercase text-[#15604E]">Before</div>
                  <div className="flex-1 h-1.5 rounded-full bg-[#EAEAE6]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${manualPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#15604E] to-[#ff4d5a] rounded-full shadow-[0_0_10px_rgba(230,57,70,0.4)]"
                    />
                  </div>
                  <div className="w-[45px] text-right font-mono text-xs font-semibold text-[#15604E]">{task.manual.toFixed(1)}h</div>
                </div>

                {/* After AI Bar */}
                <div className="flex items-center gap-3">
                  <div className="w-[65px] text-sm md:text-base font-extrabold font-mono tracking-wider uppercase text-[#15604E]">After AI</div>
                  <div className="flex-1 h-1.5 rounded-full bg-[#EAEAE6]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${autoPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#15604E] to-[#34c2b2] rounded-full shadow-[0_0_10px_rgba(42,157,143,0.4)]"
                    />
                  </div>
                  <div className="w-[45px] text-right font-mono text-xs font-semibold text-[#15604E]">{task.auto.toFixed(1)}h</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary footer */}
      <div className="flex items-center justify-between px-5 py-6 border-t border-[#DCDCCF] bg-[#F8F8F4] rounded-b-2xl">
        <div>
           <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-[#666666]">
             Total hours reclaimed
           </div>
           <div className="font-serif text-3xl md:text-4xl text-[#15604E] mt-1">
             +{SAVED.toFixed(1)} <span className="text-xl md:text-2xl font-sans italic text-[#15604E]/60">hrs/wk</span>
           </div>
        </div>
        <div className="text-right">
           <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-[#666666]">
             New weekly load
           </div>
           <div className="font-serif text-xl md:text-2xl text-[#1A1916] mt-1">
             {TOTAL_AUTO.toFixed(1)} <span className="text-sm md:text-base font-sans italic text-[#666666]">hrs/wk</span>
           </div>
        </div>
      </div>
    </div>
  );
}
