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
import ClarityTakeawaysVisual from "@/components/ClarityTakeawaysVisual";
import LazyLoad from "@/components/LazyLoad";

// Dynamically import heavy components to prevent blocking the main thread on initial load
const LeadForm = dynamic(() => import("@/components/LeadForm"));
const Comparison = dynamic(() => import("@/components/Comparison"));
const Architect = dynamic(() => import("@/components/Architect"));
const PremiumBlueprintVisual = dynamic(() => import("@/components/PremiumBlueprintVisual"));
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
const WorkflowMapVisual = dynamic(() => import("@/components/WorkflowMapVisual"));
const TimeSavingsVisual = dynamic(() => import("@/components/TimeSavingsVisual"));
const WhatsAppDeliveryVisual = dynamic(() => import("@/components/WhatsAppDeliveryVisual"));

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
        
        <LazyLoad height="400px">
          <section id="enrol" data-testid="lead-section-1" className="border-t border-[#DCDCCF] bg-[#FAF8F3]">
            <LeadForm 
              variant="primary" 
              testIdSuffix="1" 
              layout="standard"
              padding="py-12 md:py-16"
              preTitle="EXPONENTIAL CAREER GROWTH"
              formTitle="Ready to accelerate"
              formTitleHighlight="your growth?"
              title="Scale your impact"
              titleHighlight="without scaling your hours."
              description="The AI paradigm doesn't just improve efficiency—it changes the trajectory of your career. See exactly how Clarity alumni are achieving non-linear growth."
              features={["15-Min tactical breakdown", "Deployable architecture", "Instant WhatsApp access"]}
              buttonText="Unlock Growth Blueprint"
              visualComponent={<ClarityTakeawaysVisual />}
            />
          </section>
        </LazyLoad>

        <LazyLoad height="600px">
          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
        </LazyLoad>

        <LazyLoad height="600px">
          <ScrollReveal>
            <Audience />
          </ScrollReveal>
        </LazyLoad>

        <LazyLoad height="600px">
          <ScrollReveal>
            <About />
          </ScrollReveal>
        </LazyLoad>

        <LazyLoad height="500px">
          <section data-testid="lead-section-3" className="border-t border-[#DCDCCF] bg-[#FAF8F3]">
            <LeadForm 
              variant="primary" 
              testIdSuffix="3" 
              layout="standard"
              preTitle="THE MASTERCLASS BLUEPRINT"
              formTitle="Ready to engineer"
              formTitleHighlight="your unfair advantage?"
              title="We compressed 6 years into"
              titleHighlight="15 tactical minutes."
              description="Stop endlessly scrolling through generic AI advice. We have stripped away the noise to hand you the exact architectural blueprint used by top-tier tech executives to automate their entire workflow."
              features={["Zero generic prompt templates", "100% production-ready systems", "Instant WhatsApp delivery"]}
              buttonText="Unlock the Architecture"
              visualComponent={<PremiumBlueprintVisual />}
            />
          </section>
        </LazyLoad>

        <LazyLoad height="800px">
          <ScrollReveal>
            <FeaturesGrid />
          </ScrollReveal>
        </LazyLoad>

        <LazyLoad height="800px">
          <ScrollReveal>
            <Curriculum />
          </ScrollReveal>
        </LazyLoad>

        <LazyLoad height="600px">
          <ScrollReveal>
            <ProgramComparison />
          </ScrollReveal>
        </LazyLoad>

        <LazyLoad height="600px">
          <ScrollReveal>
            <Comparison />
          </ScrollReveal>
        </LazyLoad>

        <LazyLoad height="600px">
          <ScrollReveal>
            <Architect />
          </ScrollReveal>
        </LazyLoad>

        <LazyLoad height="500px">
          <section data-testid="lead-section-2" className="border-t border-[#white/10] bg-[#1A1916]">
            <LeadForm 
              variant="secondary" 
              testIdSuffix="2" 
              layout="standard"
              preTitle="THE 15-MINUTE SYSTEM BUILDER"
              formTitle="Ready to build"
              formTitleHighlight="your first AI system?"
              title="Give us 15 minutes."
              titleHighlight="We'll give you a system."
              description="Watch the exact blueprint our students used to reclaim 20+ hours a week. Pure, practical execution."
              features={["No coding required", "100% practical workflows", "Step-by-step guidance"]}
              buttonText="Unlock the system builder"
              visualComponent={<WorkflowMapVisual />}
            />
          </section>
        </LazyLoad>

        <LazyLoad height="600px">
          <ScrollReveal>
            <LeaderQuotes />
          </ScrollReveal>
        </LazyLoad>

        <LazyLoad height="500px">
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
              visualComponent={<TimeSavingsVisual />}
            />
          </section>
        </LazyLoad>

        <LazyLoad height="600px">
          <ScrollReveal>
            <PillChoice />
          </ScrollReveal>
        </LazyLoad>

        <LazyLoad height="300px">
          <FinalCTA />
        </LazyLoad>

        <LazyLoad height="500px">
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
              visualComponent={<WhatsAppDeliveryVisual />}
            />
          </section>
        </LazyLoad>

        <LazyLoad height="300px">
          <Footer />
        </LazyLoad>
        
        <WhatsAppWidget />
      </motion.div>
    </>
  );
}
