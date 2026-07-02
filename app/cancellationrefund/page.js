import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cancellation & Refund Policy | School of AI",
  description: "Cancellation & Refund Policy for School of AI.",
};

export default function CancellationRefundPolicy() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-[#FAF8F3] min-h-screen text-[#1A1916]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-4xl font-bold mb-2">Cancellation & Refund Policy</h1>
          <p className="text-[#666666] mb-12 text-sm">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-[#1A1916]/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">1. Cancellation Policy</h2>
              <p className="mb-4">At School of AI (operated by ZGROW SOLUTIONS Pvt Ltd), we are committed to providing high-quality digital content and live educational programs. However, once a purchase is confirmed and access is granted, we do not accept cancellations for any of our courses or programs.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">2. Refund Policy</h2>
              <p className="mb-4">All sales are final. We maintain a strict no-refund policy for all products and services offered through the School of AI website.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No Refunds:</strong> Because our products are digital and educational in nature, we do not issue refunds, partial refunds, or credits under any circumstances, including "change of mind" or failure to attend live sessions.</li>
                <li><strong>Technical Issues:</strong> If you experience any technical difficulties accessing the course material, our support team will work diligently to resolve the issue and ensure you have full access to what you purchased. Technical difficulties do not qualify for a refund.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1A1916]">3. Contact Us</h2>
              <p>If you have any questions or require support regarding your purchase, please contact our support team:</p>
              <div className="mt-4 bg-white/50 p-6 rounded-xl border border-[#DCDCCF]">
                <strong>Email:</strong> support@schoolofai.io<br />
                <strong>Phone:</strong> +91 63695 00456
              </div>
              <p className="mt-4 text-sm text-[#666666]">Our support team will review your inquiry and respond within 24-48 business hours.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
