import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | School of AI",
  description: "Privacy Policy for School of AI.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-[#FAF8F3] min-h-screen text-[#1A1916]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-[#666666] mb-12 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-[#1A1916]/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">1. Introduction</h2>
              <p>Welcome to School of AI, operated by ZGROW SOLUTIONS Pvt Ltd. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">2. The Data We Collect About You</h2>
              <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">3. How We Use Your Personal Data</h2>
              <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">4. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">5. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
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
