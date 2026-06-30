import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function PricingCard() {
  const details = [
    { label: "Format", value: "Live · Online" },
    { label: "Duration", value: "4 weekends · 20 hrs" },
    { label: "Schedule", value: "Sat & Sun mornings" },
    { label: "Cohort size", value: "35 seats only" },
    { label: "Level", value: "Any background" },
    { label: "Upsells", value: "None, ever" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#EAEAE6] max-w-[420px] w-full mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-medium text-[#1A1916]">₹</span>
          <span className="font-serif text-5xl md:text-[3.5rem] leading-none text-[#1A1916]">5,000</span>
          <span className="text-sm text-[#666666] font-medium ml-1 whitespace-nowrap">one-time</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        {details.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2.5 border-b border-[#EAEAE6] last:border-0">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15604E]"></span>
              <span className="text-[#666666] text-sm md:text-base font-medium">{item.label}</span>
            </div>
            <div className="font-bold text-[#1A1916] text-sm md:text-base text-right">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <a 
        href="#enrol"
        className="w-full bg-[#15604E] hover:bg-[#1B7560] text-white rounded-2xl py-3.5 font-bold text-lg transition-colors flex items-center justify-center gap-2 mb-3 shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
      >
        Reserve your seat <span className="text-xl leading-none transition-transform group-hover:translate-x-1">→</span>
      </a>

      <div className="flex items-center justify-center gap-1.5 text-xs md:text-sm text-[#666666] font-medium mt-3">
        No payment today · full refund if you dont like it<span className="text-[#F4A261] text-lg leading-none mt-1">*</span>
      </div>
    </motion.div>
  );
}
