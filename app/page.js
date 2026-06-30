"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import GridBackground from "@/components/GridBackground";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppWidget from "@/components/WhatsAppWidget";

// Dynamically import heavy components to prevent blocking the main thread on initial load
const LeadForm = dynamic(() => import("@/components/LeadForm"));
const Comparison = dynamic(() => import("@/components/Comparison"));
const Architect = dynamic(() => import("@/components/Architect"));
const Audience = dynamic(() => import("@/components/Audience"));
const About = dynamic(() => import("@/components/About"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const PillChoice = dynamic(() => import("@/components/PillChoice"));
const Footer = dynamic(() => import("@/components/Footer"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));
const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"));
const Curriculum = dynamic(() => import("@/components/Curriculum"));
const ProgramComparison = dynamic(() => import("@/components/ProgramComparison"));
const LeaderQuotes = dynamic(() => import("@/components/LeaderQuotes"));

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        data-testid="landing-page"
        className="relative overflow-x-hidden"
      >
        <GridBackground />
        <Hero />
        
        <section id="enrol" data-testid="lead-section-1" className="border-t border-[#DCDCCF] bg-[#FAF8F3]">
          <LeadForm 
            variant="primary" 
            testIdSuffix="1" 
            layout="split-reverse"
            padding="py-12 md:py-16"
            preTitle="YOUR 15-MINUTE UNFAIR ADVANTAGE"
            formTitle="Ready to future-proof"
            formTitleHighlight="your career?"
            title="15 minutes of pure"
            titleHighlight="signal."
            description="Stop consuming generic AI content. Get the exact architectural blueprint to build an autonomous, AI-Native system. A 15-minute high-density breakdown that will permanently change how you work."
            features={["15-Min tactical breakdown", "Deployable architecture", "Instant WhatsApp access"]}
            buttonText="Send My Free Blueprint Now"
          />
        </section>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <Audience />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <section data-testid="lead-section-3" className="border-t border-[#DCDCCF] bg-[#FAF8F3]">
          <LeadForm 
            variant="primary" 
            testIdSuffix="3" 
            layout="standard"
            preTitle="PURE SIGNAL. ZERO NOISE."
            formTitle="Ready for"
            formTitleHighlight="your AI transformation?"
            title="15 minutes can"
            titleHighlight="transform you."
            description="We compressed 6 years of AI production experience into a 15-minute tactical breakdown. You will leave with a deployable architecture."
            features={["6 years of experience", "Zero fluff allowed", "Actionable right away"]}
            buttonText="Start your transformation"
          />
        </section>

        <ScrollReveal>
          <FeaturesGrid />
        </ScrollReveal>

        <ScrollReveal>
          <Curriculum />
        </ScrollReveal>

        <ScrollReveal>
          <ProgramComparison />
        </ScrollReveal>

        <ScrollReveal>
          <Comparison />
        </ScrollReveal>

        <ScrollReveal>
          <Architect />
        </ScrollReveal>

        <section data-testid="lead-section-2" className="border-t border-[#white/10] bg-[#1A1916]">
          <LeadForm 
            variant="secondary" 
            testIdSuffix="2" 
            layout="centered"
            preTitle="THE 15-MINUTE SYSTEM BUILDER"
            formTitle="Ready to build"
            formTitleHighlight="your first AI system?"
            title="Give us 15 minutes."
            titleHighlight="We'll give you a system."
            description="Watch the exact blueprint our students used to reclaim 20+ hours a week. No fluff, just practical execution."
            features={["No coding required", "100% practical workflows", "Step-by-step guidance"]}
            buttonText="Unlock the system builder"
          />
        </section>






        <ScrollReveal>
          <LeaderQuotes />
        </ScrollReveal>

        <section data-testid="lead-section-4" className="border-t border-[#white/10] bg-[#1A1916]">
          <LeadForm 
            variant="secondary" 
            testIdSuffix="4" 
            layout="split-reverse"
            preTitle="YOUR 15-MINUTE TRANSFORMATION"
            formTitle="Ready to claim"
            formTitleHighlight="your time back?"
            title="Stop wasting time."
            titleHighlight="See the blueprint."
            description="Most people spend weeks trying to learn AI. You just need 15 minutes to see how to actually build and deploy autonomous workflows."
            features={["Skip the learning curve", "Build autonomous workflows", "Direct to WhatsApp"]}
            buttonText="Get the 15-min blueprint"
          />
        </section>

        <ScrollReveal>
          <PillChoice />
        </ScrollReveal>

        <FinalCTA />

        <section id="lead-form-final" data-testid="lead-section-5" className="border-t border-[#DCDCCF] bg-[#FAF8F3]">
          <LeadForm 
            variant="primary" 
            testIdSuffix="5" 
            layout="standard"
            preTitle="THE ARCHITECT'S BLUEPRINT"
            formTitle="Ready to become"
            formTitleHighlight="the AI architect?"
            title="Your final chance to"
            titleHighlight="take the red pill."
            description="The paradigm is shifting. Enter your details to get the 15-minute breakdown delivered straight to your WhatsApp."
            features={["Zero commitment", "Instant WhatsApp delivery", "15-minute blueprint"]}
            buttonText="Unlock the 15-min blueprint"
          />
        </section>

        <Footer />
        <WhatsAppWidget />
      </motion.div>
    </>
  );
}
