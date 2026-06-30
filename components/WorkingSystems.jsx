import React from "react";
import { motion } from "framer-motion";
import { Mail, Brain, Database, Check } from "lucide-react";

export default function WorkingSystems() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F3] px-6 md:px-12 border-t border-[#DCDCCF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#1A1916] mb-6"
          >
            Real, working systems —<br />
            built by <span className="italic text-[#15604E]">you</span>, live in class.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#666666] text-lg md:text-xl font-medium"
          >
            No watching someone else. By the end you&apos;ve deployed these yourself, on your own accounts, trained on your own work.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: Pipeline */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#EAEAE6] flex flex-col">
            <div className="h-56 lg:h-64 bg-[#15604E] relative flex items-center justify-center p-6 overflow-hidden">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/4 w-1/2 h-[1px] bg-[#F4A261] shadow-[0_0_10px_#F4A261] -translate-y-1/2 z-0" />
              
              <div className="flex items-center justify-between w-full max-w-[280px] relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#0e4336] border border-white/10 flex items-center justify-center shadow-lg">
                  <Mail className="w-5 h-5 text-white/70" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#0e4336] border border-[#F4A261]/30 flex items-center justify-center shadow-[0_0_15px_rgba(244,162,97,0.2)]">
                  <Brain className="w-5 h-5 text-[#F4A261]" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#0e4336] border border-white/10 flex items-center justify-center shadow-lg">
                  <Database className="w-5 h-5 text-blue-400" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#0e4336] border border-white/10 flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 rounded-md bg-green-500 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <div className="text-sm md:text-base font-extrabold font-mono tracking-[0.2em] text-[#3b82f6] uppercase font-bold mb-4">
                WEEK 2 · FLAGSHIP BUILD
              </div>
              <h3 className="font-serif text-2xl text-[#1A1916] mb-3">An automation pipeline</h3>
              <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                Email comes in, AI classifies it, pings your WhatsApp, waits for your approval, then acts. Running live on your accounts.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Chatbot */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#EAEAE6] flex flex-col">
            <div className="h-56 lg:h-64 bg-[#F2EFE9] relative p-6 flex flex-col justify-center gap-3 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white text-[#1A1916] text-xs px-4 py-3 rounded-2xl rounded-tl-sm w-fit shadow-sm max-w-[85%]"
              >
                Hi! How can I help you today?
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-[#15604E] text-white text-xs px-4 py-3 rounded-2xl rounded-tr-sm w-fit shadow-sm self-end max-w-[85%]"
              >
                What&apos;s your refund policy?
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="bg-white text-[#1A1916] text-xs px-4 py-3 rounded-2xl rounded-tl-sm w-fit shadow-sm max-w-[90%]"
              >
                Full refund within 30 days—here&apos;s how it works...
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm w-fit shadow-sm flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 bg-[#DCDCCF] rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-[#DCDCCF] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                <span className="w-1.5 h-1.5 bg-[#DCDCCF] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
              </motion.div>
            </div>
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <div className="text-sm md:text-base font-extrabold font-mono tracking-[0.2em] text-[#3b82f6] uppercase font-bold mb-4">
                WEEK 3 · DEPLOY LIVE
              </div>
              <h3 className="font-serif text-2xl text-[#1A1916] mb-3">A custom AI chatbot</h3>
              <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                Trained on your own documents, answering from your real data, deployed to a URL you own. No code, by Sunday afternoon.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Media Engine */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-[#EAEAE6] flex flex-col">
            <div className="h-56 lg:h-64 bg-[#15604E] relative p-6 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-3 w-full max-w-[240px]">
                <div className="bg-[#1B7560]/40 border border-white/5 rounded-xl aspect-[4/3] flex items-center justify-center shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-2xl drop-shadow-md">🎛️</span>
                </div>
                <div className="bg-[#1B7560]/40 border border-white/5 rounded-xl aspect-[4/3] flex items-center justify-center shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-2xl drop-shadow-md">🎨</span>
                </div>
                <div className="bg-[#1B7560]/40 border border-white/5 rounded-xl aspect-[4/3] flex items-center justify-center shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-2xl drop-shadow-md">🎬</span>
                </div>
                <div className="bg-[#1B7560]/40 border border-white/5 rounded-xl aspect-[4/3] flex items-center justify-center shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-2xl drop-shadow-md">🎤</span>
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <div className="text-sm md:text-base font-extrabold font-mono tracking-[0.2em] text-[#3b82f6] uppercase font-bold mb-4">
                WEEK 3 · YOUR STUDIO
              </div>
              <h3 className="font-serif text-2xl text-[#1A1916] mb-3">A content & media engine</h3>
              <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                Copy, visuals, video and voice — generated on demand. The marketing department you never had to hire.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
