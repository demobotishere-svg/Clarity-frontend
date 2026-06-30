"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform, useSpring, animate } from "framer-motion";
import { LoaderCircle, Check, Clock } from "lucide-react";

const TASKS = [
  {
    id: 1,
    title: "Reconcile 150 Q3 Invoices",
    saved: 6.5,
    time: "0.8s"
  },
  {
    id: 2,
    title: "Draft 45 Personalized Outreach Emails",
    saved: 4.0,
    time: "1.2s"
  },
  {
    id: 3,
    title: "Analyze Competitor Pricing Data",
    saved: 8.0,
    time: "2.1s"
  },
  {
    id: 4,
    title: "Generating Weekly Analytics Report",
    saved: 0,
    processing: true,
    time: "…"
  }
];

const TARGET_TOTAL = 18.5;

export default function AgentDashboard() {
  const [step, setStep] = useState(0);
  const mountedRef = useRef(true);

  // 3D Tilt effect
  const cardRef = useRef(null);
  const rectRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 22 });

  const handleMouseEnter = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e) => {
    if (!rectRef.current) {
      if (cardRef.current) rectRef.current = cardRef.current.getBoundingClientRect();
      else return;
    }
    const rect = rectRef.current;
    const width = rect.width;
    const height = rect.height;
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rectRef.current = null;
  };

  // Saved Hours Counter direct-DOM references
  const counterValue = useMotionValue(0);
  const spanRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    mountedRef.current = true;
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const unsubscribe = counterValue.on("change", (v) => {
      if (spanRef.current) {
        spanRef.current.textContent = v.toFixed(1);
      }
      if (progressRef.current) {
        progressRef.current.style.width = `${(v / TARGET_TOTAL) * 100}%`;
      }
    });

    let currentAnim = null;

    const run = async () => {
      while (mountedRef.current) {
        setStep(0);
        counterValue.set(0);
        await sleep(800);
        for (let i = 1; i <= TASKS.length; i++) {
          if (!mountedRef.current) return;
          await sleep(900);
          setStep(i);
          const target = TASKS.slice(0, i).reduce((a, b) => a + b.saved, 0);

          if (currentAnim) currentAnim.stop();
          currentAnim = animate(counterValue, target, {
            duration: 0.6,
            ease: "easeOut"
          });
          await currentAnim;
        }
        await sleep(3200);
      }
    };

    run();

    return () => {
      mountedRef.current = false;
      unsubscribe();
      if (currentAnim) currentAnim.stop();
    };
  }, [counterValue]);

  return (
    <div style={{ perspective: 1200 }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform"
        }}
        data-testid="hero-dashboard-mockup"
        className="relative bg-white border border-[#DCDCCF] rounded-2xl ring-glow overflow-hidden shadow-lg"
      >
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#DCDCCF] bg-[#F8F8F4]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
          <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
        </div>
        <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-[#666666]">
          ai-native.system / live
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#15604E] pulse-dot"></span>
          <span className="font-mono text-[10px] text-[#666666]">online</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-[#666666]">
              My AI Agents
            </div>
            <div className="font-serif text-2xl mt-1">Active workflows</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-[#666666]">
              live
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15604E] pulse-dot"></span>
              <span className="text-xs">{step}/4 running</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {TASKS.map((task, idx) => {
            const isVisible = idx < step;
            const isProcessing = task.processing && idx === step - 1;

            return (
              <div key={task.id} className="relative h-[58px] w-full">
                {/* Static Dashed Placeholder slot (remains fixed size) */}
                <div className="absolute inset-0 rounded-xl border border-dashed border-[#DCDCCF]/60 flex items-center px-4 text-[10px] text-[#666666]/35 font-mono select-none">
                  slot_{idx + 1} // idle
                </div>

                {/* Active/Completed Task Card (fades on top within slot boundary) */}
                <AnimatePresence>
                  {isVisible && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, borderColor: "#DCDCCF", boxShadow: "0px 0px 0px rgba(42,157,143,0)" }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        borderColor: isProcessing ? "#F4A261" : ["#DCDCCF", "#15604E", "#15604E"],
                        boxShadow: isProcessing 
                          ? "0 0 10px rgba(244,162,97,0.12)" 
                          : ["0px 0px 0px rgba(42,157,143,0)", "0px 0px 16px rgba(42,157,143,0.45)", "0px 0px 10px rgba(42,157,143,0.1)"]
                      }}
                      whileHover={{ 
                        scale: 1.015,
                        boxShadow: isProcessing 
                          ? "0 0 16px rgba(244,162,97,0.22)" 
                          : "0 0 18px rgba(42,157,143,0.25)" 
                      }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ 
                        opacity: { duration: 0.25, ease: "easeOut" },
                        y: { duration: 0.25, ease: "easeOut" },
                        borderColor: { duration: 0.6, ease: "easeInOut" },
                        boxShadow: { duration: 0.8, ease: "easeInOut" }
                      }}
                      data-testid={`agent-task-${idx + 1}`}
                      className="absolute inset-0 flex items-center gap-3 p-3 rounded-xl bg-[#F8F8F4] border cursor-pointer"
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${
                          isProcessing
                            ? "bg-[#F4A261]/15 text-[#F4A261]"
                            : "bg-[#15604E]/15 text-[#15604E]"
                        }`}
                      >
                        {isProcessing ? (
                          <LoaderCircle className="w-4 h-4 animate-spin" />
                        ) : (
                          <Check className="w-4 h-4" strokeWidth={3} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          {task.title}
                        </div>
                        <div className="text-xs text-[#666666] mt-0.5">
                          {isProcessing
                            ? "Processing data…"
                            : `Saved ${task.saved.toFixed(1)} hours`}
                        </div>
                      </div>
                      <div
                        className={`font-mono text-[10px] px-2 py-1 rounded-full ${
                          isProcessing
                            ? "bg-[#F4A261]/10 text-[#F4A261]"
                            : "bg-[#15604E]/10 text-[#15604E]"
                        }`}
                      >
                        {isProcessing ? "in progress" : `done · ${task.time}`}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-5 rounded-2xl bg-[#1A1916] text-[#FAF8F3] flex items-end justify-between overflow-hidden relative">
          <div>
            <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-[#FAF8F3]/60">
              Saved this week
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span
                ref={spanRef}
                data-testid="hero-saved-counter"
                className="font-serif text-5xl md:text-6xl leading-none tabular-nums"
              >
                0.0
              </span>
              <span className="font-mono text-sm text-[#FAF8F3]/70">hrs</span>
            </div>
          </div>
          <div className="text-right text-[#FAF8F3]/80 text-sm">
            <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-[#FAF8F3]/60">
              target
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{TARGET_TOTAL} hrs</span>
            </div>
          </div>
          <div className="absolute left-0 bottom-0 h-[2px] bg-[#DCDCCF]/20 w-full">
            <div
              ref={progressRef}
              className="h-full bg-[#15604E]"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);
}
