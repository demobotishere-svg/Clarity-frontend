"use client";

import { Phone, Mail } from "lucide-react";
import Link from "next/link";

const FacebookIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const InstagramIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>);
const LinkedinIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const YoutubeIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>);
const TwitterIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);

const FooterSection = () => {
  return (
    <>
      <footer id="footer" className="bg-[#1A1916] text-[#FAF8F3] pt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="font-serif font-bold text-2xl pb-3 text-white">School of AI</h2>
            <p className="text-sm leading-relaxed mb-6 text-white/70">
              Empowering the next generation of <br />
              AI professionals with world-class education.
            </p>

            <h4 className="text-lg font-semibold pb-2 text-white">Address</h4>
            <p className="text-sm mb-4 leading-relaxed text-white/70">
              Old No.709, 710, New No.248, <br />
              Prince Center, Pathari Road, Anna Salai, <br />
              Chennai - 600006, Tamil Nadu.
            </p>
            <div className="flex flex-col gap-3">
              <div className="text-sm flex items-center text-white/80 hover:text-white transition-colors">
                <Phone className="mr-3 shrink-0" size={18} />
                <a href="tel:+916369500456" className="hover:underline">
                  +91 63695 00456
                </a>
              </div>

              <div className="text-sm flex items-center text-white/80 hover:text-white transition-colors">
                <Mail className="mr-3 shrink-0" size={18} />
                <a
                  href="mailto:support@schoolofai.io"
                  className="hover:underline"
                >
                  support@schoolofai.io
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                { link: "/#clarity", label: "Clarity" },
                { link: "/#outcomes", label: "Outcomes" },
                { link: "/#proof", label: "Testimonials" },
                { link: "/#about", label: "About Me" },
              ].map(({ link, label }) => (
                <li key={label}>
                  <Link href={link} className="hover:text-white hover:underline transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <ul className="flex gap-4">
                {[
                  {
                    link: "https://www.facebook.com/people/School-Of-AI/61578276746165/",
                    label: "Facebook",
                    icon: FacebookIcon,
                  },
                  {
                    link: "https://www.instagram.com/schoolofai_io/",
                    label: "Instagram",
                    icon: InstagramIcon,
                  },
                  {
                    link: "https://www.linkedin.com/company/school-of-ai-io/",
                    label: "LinkedIn",
                    icon: LinkedinIcon,
                  },
                  {
                    link: "https://www.youtube.com/@SchoolofAI_io",
                    label: "YouTube",
                    icon: YoutubeIcon,
                  },
                  {
                    link: "https://x.com/School_of_Ai_04",
                    label: "X",
                    icon: TwitterIcon,
                  },
                ].map(({ link, label, icon: Icon }) => (
                  <li key={label}>
                    <Link
                      href={link}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#E76F51] hover:text-white hover:border-[#E76F51] transition-all shadow-sm"
                    >
                      <Icon size={18} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-sm">
            <h4 className="font-semibold mb-4 text-lg text-white">Location</h4>
            <div className="text-sm leading-relaxed">
              <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.986877963283!2d80.24122397356933!3d13.060413313368923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266606821262d%3A0xc3baab938b813bba!2sAnna%20Salai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1725863713895!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#111111] py-8 border-t border-white/5 text-white/50 text-xs flex flex-col md:flex-row justify-between gap-6 items-center px-4 md:px-12">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://zgrowsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white hover:underline transition"
              title="zgrowsolutions.com"
            >
              ZGROW SOLUTIONS
            </a>{" "}
            Pvt Ltd.
          </p>
          <ul className="flex flex-wrap justify-center gap-6">
            {[
              { link: "/privacy", label: "Privacy Policy" },
              { link: "/terms", label: "Terms of Service" },
              {
                link: "/cancellationrefund",
                label: "Cancellation & Refund Policy",
              },
            ].map(({ link, label }) => (
              <li key={label}>
                <Link href={link} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
