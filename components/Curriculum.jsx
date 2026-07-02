"use client";

import React from "react";
import { Shield, Zap, Award } from "lucide-react";

function CertificateMockup() {
  return (
    <div className="@container w-full bg-[#1A1916] p-3 sm:p-4 md:p-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)] aspect-[1.414/1] flex flex-col relative rounded-sm">
      {/* Frame Inner Shadow */}
      <div className="absolute inset-0 shadow-[inset_0_0_12px_rgba(0,0,0,0.8)] pointer-events-none rounded-sm" />
      
      {/* Inner Canvas */}
      <div className="w-full h-full bg-[#FCFAEF] p-[1.5cqi] relative shadow-inner flex flex-col border-[0.5px] border-[#DCDCCF]">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="blocks" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                   <rect x="0" y="0" width="40" height="40" fill="#1A1916" />
                   <rect x="40" y="40" width="40" height="40" fill="#1A1916" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blocks)" />
           </svg>
        </div>

        {/* Border Container that perfectly wraps content */}
        <div className="w-full h-full border-[1.5px] border-[#1A1916]/10 flex flex-col justify-between p-[4cqi] relative z-10 overflow-hidden bg-white/40">
          
          {/* Top Row: Logo & Meta */}
          <div className="flex justify-between items-start w-full">
            {/* Top Left: Logo */}
            <div className="flex items-center gap-[1.5cqi]">
               <div className="w-[3.5cqi] h-[3.5cqi] bg-[#2C303A] rounded-sm flex items-center justify-center relative overflow-hidden shrink-0">
                  <div className="absolute -right-[0.5cqi] -top-[0.5cqi] w-[1.5cqi] h-[1.5cqi] bg-[#FCFAEF] rounded-full"></div>
               </div>
               <span className="font-sans text-[1.8cqi] font-bold text-[#2C303A] tracking-[0.15em] uppercase mt-[0.5cqi]">Clarity</span>
            </div>

            {/* Top Right: Meta */}
            <div className="text-right flex flex-col gap-[0.5cqi]">
               <p className="font-sans text-[1.2cqi] text-[#2C303A]/60 tracking-[0.1em] uppercase">
                 Certificate No: <span className="text-[#2C303A]">CFL-2026-89X</span>
               </p>
               <p className="font-sans text-[1.2cqi] text-[#2C303A]/60 tracking-[0.1em] uppercase">
                 Issuing Date: <span className="text-[#2C303A]">{new Date().toLocaleDateString('en-GB')}</span>
               </p>
            </div>
          </div>
          
          {/* Middle Content Group - Pulled slightly higher */}
          <div className="flex flex-col items-center justify-start flex-1 -mt-[2cqi] w-full">
            {/* Center: Wreath & Title */}
             <div className="flex flex-col items-center w-full">
               <svg className="w-[8cqi] h-[8cqi] text-[#2C303A] opacity-80 mb-[2.5cqi]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                  <path d="M19 8a7 7 0 0 0-14 0c0 4.42 3.13 8 7 8s7-3.58 7-8z"/>
                  <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"/>
               </svg>
               <h3 className="text-[4.5cqi] font-serif font-bold text-[#2C303A] tracking-[0.1em] uppercase text-center w-full leading-tight">
                 Certificate of Completion
               </h3>
             </div>
            
            {/* Body */}
            <div className="flex flex-col items-center mt-[4cqi] w-full">
               <p className="text-[1.5cqi] text-[#2C303A]/60 mb-[2cqi] tracking-[0.2em] uppercase text-center">This certificate is proudly presented to</p>
               <h2 className="text-[7cqi] font-serif font-bold text-[#2C303A] mb-[2cqi] tracking-wide uppercase text-center w-full leading-none">
                  Ashok Sai
               </h2>
               <p className="text-[1.6cqi] text-[#2C303A]/60 leading-relaxed max-w-[85%] text-center px-[2cqi] font-medium">
                  Thank you for your dedication. Your outstanding efforts in deploying an autonomous AI system have made the difference between just being good and being great.
               </p>
            </div>
          </div>
          
          {/* Footer: Signatures */}
          <div className="flex justify-center w-full pt-[2cqi] px-[2cqi]">
             {/* Signature */}
             <div className="text-center flex flex-col items-center">
                <div className="font-['Brush_Script_MT',cursive,serif] italic text-[4.5cqi] text-[#2C303A] mb-[1cqi] opacity-90 pb-[0.5cqi]">
                  Clarity
                </div>
                <div className="h-[1px] w-[20cqi] bg-[#2C303A]/20 mb-[1.5cqi]"></div>
                <p className="text-[1.2cqi] text-[#2C303A] font-bold uppercase tracking-[0.15em]">Clarity</p>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default function Curriculum() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#DCDCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#E76F51] font-bold mb-6 flex items-center justify-center gap-4">
            <span className="w-8 md:w-12 h-[1px] bg-[#15604E]/30"></span>
            Official Certification
            <span className="w-8 md:w-12 h-[1px] bg-[#15604E]/30"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#1A1916]">
            The standard of <span className="italic text-[#E76F51]">execution.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Certificate Mockup */}
          <div className="w-full max-w-lg mx-auto lg:max-w-none relative group order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-[#15604E]/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <CertificateMockup />
          </div>

          {/* Right Column: Information/Benefits */}
          <div className="flex flex-col gap-8 lg:gap-12 order-1 lg:order-2">
            
             <div className="text-center lg:text-left">
               <h3 className="font-serif text-3xl md:text-4xl text-[#1A1916] font-bold mb-4">We don't do participation trophies.</h3>
               <p className="text-lg text-[#666666] leading-relaxed">
                 The Clarity certification isn't awarded for watching videos. It is exclusively given to individuals who have successfully built, tested, and deployed a live autonomous AI system.
               </p>
            </div>

            <div className="flex flex-col gap-8">
               
               {/* Item 1 */}
               <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[#FAF8F3] rounded-full flex items-center justify-center shrink-0 border border-[#EAEAE6] shadow-sm">
                     <Shield className="w-5 h-5 text-[#E76F51]" />
                  </div>
                  <div>
                     <h4 className="font-bold text-[#1A1916] text-xl mb-2">Proven Expertise</h4>
                     <p className="text-[#666666] leading-relaxed">
                       This certificate is a testament to your ability to execute. It validates your mastery over the core principles of building and scaling AI systems.
                     </p>
                  </div>
               </div>

               {/* Item 2 */}
               <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[#FAF8F3] rounded-full flex items-center justify-center shrink-0 border border-[#EAEAE6] shadow-sm">
                     <Zap className="w-5 h-5 text-[#E76F51]" />
                  </div>
                  <div>
                     <h4 className="font-bold text-[#1A1916] text-xl mb-2">Hands-on Execution</h4>
                     <p className="text-[#666666] leading-relaxed">
                       We prioritize action over theory. This certification signifies that you have successfully built, tested, and deployed functioning workflows.
                     </p>
                  </div>
               </div>

               {/* Item 3 */}
               <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[#FAF8F3] rounded-full flex items-center justify-center shrink-0 border border-[#EAEAE6] shadow-sm">
                     <Award className="w-5 h-5 text-[#E76F51]" />
                  </div>
                  <div>
                     <h4 className="font-bold text-[#1A1916] text-xl mb-2">Professional Recognition</h4>
                     <p className="text-[#666666] leading-relaxed">
                       Stand out in the industry as a capable builder. This serves as a trusted mark of your technical proficiency to employers and peers.
                     </p>
                  </div>
               </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
