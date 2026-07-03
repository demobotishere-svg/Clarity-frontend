import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | School of AI",
  description: "Terms of Service for School of AI.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-[#FAF8F3] min-h-screen text-[#1A1916]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#1A1916] mb-2">Terms of Service</h1>
          <p className="text-[#666666] mb-12 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-[#1A1916]/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">1. Agreement to Terms</h2>
              <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and ZGROW SOLUTIONS Pvt Ltd, doing business as School of AI ("School of AI", "we", "us", or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">2. Intellectual Property Rights</h2>
              <p>Unless otherwise indicated, the Site and all content, materials, course structures, video materials, and intellectual property contained therein are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">3. User Representations</h2>
              <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">4. Course Access and Usage</h2>
              <p>Purchasing a course grants you a limited, non-exclusive, non-transferable license to access and view the course content for which you have paid all required fees, solely for your personal, non-commercial, educational purposes. All content remains the property of School of AI.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">5. Governing Law</h2>
              <p>These Terms shall be governed by and defined following the laws of India. ZGROW SOLUTIONS Pvt Ltd and yourself irrevocably consent that the courts of Chennai, Tamil Nadu shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">6. Contact Us</h2>
              <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
              <div className="mt-4 bg-white/50 p-6 rounded-xl border border-[#DCDCCF]">
                <strong>School of AI (ZGROW SOLUTIONS Pvt Ltd)</strong><br />
                Old No.709, 710, New No.248,<br />
                Prince Center, Pathari Road, Anna Salai,<br />
                Chennai - 600006, Tamil Nadu.<br />
                Email: support@schoolofai.io<br />
                Phone: +91 63695 00456
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
