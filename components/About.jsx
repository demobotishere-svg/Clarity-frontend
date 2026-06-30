"use client";

import React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const STATS = [
  { k: "5000+", v: "Students trained" },
  { k: "Since 2017", v: "AI Educator" },
  { k: "Production", v: "AI agents & RAG" },
  { k: "No upsell", v: "One course · one price" }
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-36 border-t border-[#DCDCCF] bg-[#FAF8F3]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#EAEAE6] aspect-[4/5] border border-[#DCDCCF]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
                alt="Instructor"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1916]/40 via-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F3]">
                <div className="font-mono text-sm md:text-base font-extrabold uppercase tracking-[0.25em] text-[#FAF8F3]/70">
                  Instructor
                </div>
                <div className="font-serif text-3xl mt-1">Ships AI, not slides.</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#666666]">
              About me
            </div>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl leading-[1] tracking-tight">
              An engineer who actually <span className="italic">ships AI</span> —
              <br />
              not a course-selling influencer.
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-[#666666] leading-relaxed max-w-2xl">
              <p>
                I&apos;ve spent the last few years building agents, retrieval
                systems, and chatbots that real teams use in production. Before that,
                years of regular software and product work — so I know what it looks
                like to sit in a meeting and quietly wonder how much of this could
                be automated.
              </p>
              <p>
                I teach this because every working professional in my life —
                doctors, lawyers, marketers, founders, friends in HR — kept asking
                me the same questions, and the honest answers weren&apos;t anywhere
                on the internet.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-[#DCDCCF] pt-8">
              {STATS.map((s) => (
                <div key={s.k} data-testid="about-stat" className="border-l border-[#DCDCCF] pl-4">
                  <div className="font-serif text-xl md:text-2xl italic font-light leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#15604E] via-[#F4A261] to-[#15604E] w-fit pr-1">{s.k}</div>
                  <div className="font-mono text-sm md:text-base font-extrabold md:text-[11px] uppercase tracking-widest text-[#666666] mt-2.5 leading-snug">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-[#666666] italic">
              Full background, links, and prior work shared on enrolment — verify,
              don&apos;t just trust.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
