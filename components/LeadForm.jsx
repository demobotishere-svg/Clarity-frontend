"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Lock, ShieldCheck, Zap, Clock, Rocket, BrainCircuit } from "lucide-react";
import { toast } from "sonner";

export default function LeadForm({ 
  variant = "primary", 
  testIdSuffix = "1",
  preTitle = "15 MINUTES TO PARADIGM SHIFT",
  title = "15 minutes of pure AI gyan.",
  titleHighlight = "Transform your career.",
  description = "The 15-minute architectural preview video and the AI-Native Design Blueprint — delivered straight to your WhatsApp instantly.",
  features = [
    "15-minute tactical breakdown",
    "100% practical workflows",
    "Instant WhatsApp access"
  ],
  buttonText = "Send me the 15-min blueprint",
  layout = "standard", // standard, centered, split-reverse
  formTitle = "Ready to take",
  formTitleHighlight = "the next step?",
  padding = "py-16 md:py-20",
  visualComponent = null
}) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) {
      toast.error("Please share your name and WhatsApp number");
      return;
    }
    
    if (name.trim().length < 2 || name.trim().length > 50) {
      toast.error("Please enter a valid name (2-50 characters)");
      return;
    }
    
    const formattedPhone = whatsapp.replace(/[^0-9]/g, "");
    if (formattedPhone.length < 10 || formattedPhone.length > 15) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setSubmitting(true);
    
    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
      const res = await fetch(`${backendUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone: whatsapp }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setDone(true);
        toast.success("System unlocked. Check WhatsApp in a few seconds.");
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Failed to connect to server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const isDark = variant === "secondary";

  // Different animations based on layout
  const textAnimation = 
    layout === "centered" ? { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 } } :
    layout === "split-reverse" ? { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 } } :
    { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 } };

  const formAnimation = 
    layout === "centered" ? { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 } } :
    layout === "split-reverse" ? { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 } } :
    { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 } };

  return (
    <div
      data-testid={`lead-form-${testIdSuffix}`}
      className={`${padding} overflow-hidden ${
        isDark ? "bg-transparent text-[#FAF8F3]" : "bg-[#FAF8F3] text-[#1A1916]"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {layout === "centered" ? (
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto relative z-10">
            <motion.div {...textAnimation} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div className={`inline-block font-mono text-[11px] md:text-sm font-extrabold uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-5 ${isDark ? "bg-white/5 border border-white/10 text-white/90" : "bg-[#15604E]/10 text-[#E76F51]"}`}>
                {preTitle}
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
                {title}{" "}
                <span className={isDark ? "italic text-[#F4A261]" : "italic text-[#E76F51]"}>
                  {titleHighlight}
                </span>
              </h2>
              <p className={`mt-4 text-sm md:text-base leading-relaxed mx-auto max-w-xl ${isDark ? "text-[#FAF8F3]/70" : "text-[#666666]"}`}>
                {description}
              </p>
            </motion.div>
            
            {visualComponent && (
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.1 }}
                 className="w-full mt-10 mb-2 relative z-0"
              >
                 {visualComponent}
              </motion.div>
            )}

            <motion.div {...formAnimation} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="w-full max-w-md mt-10 relative z-20">
              <FormBox done={done} onSubmit={onSubmit} name={name} setName={setName} whatsapp={whatsapp} setWhatsapp={setWhatsapp} submitting={submitting} isDark={isDark} buttonText={buttonText} formTitle={formTitle} formTitleHighlight={formTitleHighlight} />
            </motion.div>
          </div>
        ) : (
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${layout === "split-reverse" ? "lg:flex-row-reverse" : ""}`}>
            
            <motion.div 
              {...textAnimation} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`lg:col-span-6 xl:col-span-6 ${layout === "split-reverse" ? "lg:order-2" : ""}`}
            >
              <div className={`font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] ${isDark ? "text-[#E76F51]" : "text-[#E76F51]"}`}>
                {preTitle}
              </div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
                {title}{" "}
                <span className={isDark ? "italic text-[#F4A261]" : "italic text-[#E76F51]"}>
                  {titleHighlight}
                </span>
              </h2>
              <p className={`mt-4 max-w-lg text-sm md:text-base leading-relaxed ${isDark ? "text-[#FAF8F3]/70" : "text-[#666666]"}`}>
                {description}
              </p>
              <ul className="mt-6 flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3">
                {features.map((t) => (
                  <li key={t} className={`flex items-center gap-2 text-[13px] md:text-sm font-medium ${isDark ? "text-[#FAF8F3]/80" : "text-[#1A1916]/80"}`}>
                    <div className={isDark ? "text-[#E76F51]" : "text-[#E76F51]"}><Check className="w-3.5 h-3.5" /></div>
                    {t}
                  </li>
                ))}
              </ul>
              {visualComponent && (
                <div className="mt-8 lg:mt-10">
                  {visualComponent}
                </div>
              )}
            </motion.div>

            <motion.div 
              {...formAnimation} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`lg:col-span-6 xl:col-span-6 lg:sticky lg:top-32 ${layout === "split-reverse" ? "lg:order-1" : ""}`}
            >
              <div className="w-full max-w-[680px] mx-auto lg:mx-0 lg:ml-auto">
                <FormBox done={done} onSubmit={onSubmit} name={name} setName={setName} whatsapp={whatsapp} setWhatsapp={setWhatsapp} submitting={submitting} isDark={isDark} buttonText={buttonText} formTitle={formTitle} formTitleHighlight={formTitleHighlight} />
              </div>
            </motion.div>

          </div>
        )}
      </div>
    </div>
  );
}

function FormBox({ done, onSubmit, name, setName, whatsapp, setWhatsapp, submitting, isDark, buttonText, formTitle, formTitleHighlight }) {
  return (
    <AnimatePresence mode="wait">
      {!done ? (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className={`relative w-full rounded-[2rem] p-8 md:p-10 lg:p-12 border shadow-2xl ${
            isDark
              ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
              : "bg-white border-[#DCDCCF] ring-glow"
          }`}
        >
          <div className="space-y-5">
            {(formTitle || formTitleHighlight) && (
              <h4 className={`font-serif text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-6 text-center ${isDark ? "text-[#FAF8F3]" : "text-[#1A1916]"}`}>
                {formTitle}{" "}
                {formTitleHighlight && (
                  <span className={`italic ${isDark ? "text-white/70" : "text-[#E76F51]"}`}>
                    {formTitleHighlight}
                  </span>
                )}
              </h4>
            )}
            <div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className={`w-full px-6 py-3.5 md:py-4 text-lg md:text-xl rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#E76F51]/50 transition-all ${
                  isDark
                    ? "bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-white/20"
                    : "bg-black/5 border-black/10 text-black placeholder-black/20"
                }`}
              />
            </div>
            <div>
              <input
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="WhatsApp Number"
                className={`w-full px-6 py-3.5 md:py-4 text-lg md:text-xl rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#E76F51]/50 transition-all ${
                  isDark
                    ? "bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-white/20"
                    : "bg-black/5 border-black/10 text-black placeholder-black/20"
                }`}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className={`w-full group relative flex items-center justify-center gap-2 px-6 py-4 md:py-4 rounded-2xl font-semibold text-xl text-white transition-all overflow-hidden mt-4 ${
                submitting ? "bg-gray-500 cursor-not-allowed" : "bg-[#15604E] hover:bg-[#21867a]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {submitting ? "Unlocking..." : buttonText}
                {!submitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
            <p className={`text-center text-xs md:text-sm font-medium ${isDark ? 'text-white/40' : 'text-[#666666]/70'} pt-2`}>
              <Lock className="w-3.5 h-3.5 inline-block mr-1.5 -translate-y-[1px]" />
              Secure delivery to your WhatsApp
            </p>
          </div>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-3xl p-8 md:p-12 text-center border ${
            isDark ? "bg-[#1a1a1a] border-white/10" : "bg-white border-[#DCDCCF]"
          }`}
        >
          <div className="w-16 h-16 bg-[#15604E]/10 text-[#E76F51] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl mb-2">Blueprint Unlocked</h3>
          <p className={isDark ? "text-white/60" : "text-black/60"}>
            Your 15-minute system preview has been sent to your WhatsApp.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
