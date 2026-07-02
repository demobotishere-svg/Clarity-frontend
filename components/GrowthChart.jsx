"use client";

import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

const data = [
  { month: "Month 1", traditional: 10, clarity: 15 },
  { month: "Month 2", traditional: 20, clarity: 35 },
  { month: "Month 3", traditional: 30, clarity: 70 },
  { month: "Month 4", traditional: 40, clarity: 130 },
  { month: "Month 5", traditional: 50, clarity: 220 },
  { month: "Month 6", traditional: 60, clarity: 350 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-[#DCDCCF] shadow-lg rounded-xl">
        <p className="font-semibold text-sm mb-1">{label}</p>
        <div className="space-y-1 text-sm">
          <p className="text-[#E76F51] font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#15604E]"></span>
            Clarity: {payload[1].value}
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            Traditional: {payload[0].value}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function GrowthChart({ isDark = false }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="h-64 w-full bg-black/5 animate-pulse rounded-2xl"></div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`w-full h-64 md:h-72 mt-8 p-4 rounded-2xl border shadow-sm ${
        isDark ? "bg-white/5 border-white/10" : "bg-white border-[#DCDCCF]"
      }`}
    >
      <div className="flex justify-between items-center mb-4 px-2">
        <h4 className={`text-xs md:text-sm font-semibold uppercase tracking-wider ${isDark ? "text-white/60" : "text-gray-500"}`}>
          Career Trajectory
        </h4>
        <div className="flex gap-3 text-[10px] md:text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className={isDark ? "text-white/70" : "text-gray-600"}>Without AI</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#15604E]"></span>
            <span className={isDark ? "text-white" : "text-[#E76F51]"}>With Clarity</span>
          </div>
        </div>
      </div>
      
      <div className="w-full h-48 md:h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorClarity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E76F51" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#E76F51" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorTrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={isDark ? "#ffffff" : "#000000"} stopOpacity={0.1}/>
                <stop offset="95%" stopColor={isDark ? "#ffffff" : "#000000"} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: isDark ? 'rgba(255,255,255,0.4)' : '#888' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: isDark ? 'rgba(255,255,255,0.4)' : '#888' }} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="traditional" stroke={isDark ? "rgba(255,255,255,0.3)" : "#ccc"} strokeWidth={2} fillOpacity={1} fill="url(#colorTrad)" />
            <Area type="monotone" dataKey="clarity" stroke="#E76F51" strokeWidth={3} fillOpacity={1} fill="url(#colorClarity)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
