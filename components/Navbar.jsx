"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const NAV = [
  { label: "Clarity", href: "/#clarity" },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "Testimonials", href: "/#proof" },
  { label: "About Me", href: "/#about" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredLabel, setHoveredLabel] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  /* ─── Scroll background ─── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const SECTIONS = ["clarity", "outcomes", "about", "proof"];
    const TRIGGER = window.innerHeight * 0.35; // 35% from top of viewport

    let ticking = false;

    const onScrollSpy = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current = "";
          for (const id of SECTIONS) {
            const el = document.getElementById(id);
            if (!el) continue;
            if (el.getBoundingClientRect().top <= TRIGGER) {
              current = id;
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScrollSpy(); // run once on mount
    window.addEventListener("scroll", onScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", onScrollSpy);
  }, []);

  /* ─── Lock body scroll when mobile menu is open ─── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* ─── Framer Motion variants ─── */
  const bar1 = { closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } };
  const bar2 = { closed: { opacity: 1, scaleX: 1 }, open: { opacity: 0, scaleX: 0 } };
  const bar3 = { closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
    exit: { opacity: 0, transition: { staggerChildren: 0.04, staggerDirection: -1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -8, filter: "blur(4px)", transition: { duration: 0.2 } }
  };

  const handleCTAClick = (e) => {
    e.preventDefault();
    const forms = Array.from(document.querySelectorAll('[data-testid^="lead-section-"]'));
    if (forms.length === 0) {
      window.location.href = "/#enrol";
      setOpen(false);
      return;
    }

    let nearest = forms[0];
    let minDistance = Infinity;

    forms.forEach(form => {
      const rect = form.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const formCenter = rect.top + rect.height / 2;
      const distance = Math.abs(formCenter - viewportCenter);

      if (distance < minDistance) {
        minDistance = distance;
        nearest = form;
      }
    });

    // Scroll gracefully, minus navbar height offset (80px)
    const elementRect = nearest.getBoundingClientRect().top;
    const offsetPosition = window.scrollY + elementRect - 80;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setOpen(false);
  };

  return (
    <>
      {/* ─── Full-screen mobile overlay (renders BEHIND navbar bar) ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#FAF8F3] md:bg-[#FAF8F3]/95 md:backdrop-blur-2xl flex flex-col pt-20 px-8 pb-10 md:hidden overflow-y-auto"
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-1 flex-1"
            >
              {NAV.map((item) => {
                const isActive = activeSection === item.href.split('#')[1];
                return (
                  <motion.a
                    key={item.label}
                    variants={itemVariants}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    data-testid={`nav-mobile-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                    className={`flex justify-between items-center py-5 border-b border-[#DCDCCF]/60 group transition-colors duration-200 ${
                      isActive ? "text-[#E76F51]" : "text-[#1A1916] hover:text-[#E76F51]"
                    }`}
                  >
                    <span className="font-serif text-3xl italic">{item.label}</span>
                    <ArrowUpRight
                      className={`w-6 h-6 text-[#E76F51] transition-all duration-200 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                    />
                  </motion.a>
                );
              })}
            </motion.nav>

            {/* Mobile CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              href="/#enrol"
              onClick={handleCTAClick}
              data-testid="nav-mobile-cta"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-[#15604E] text-white px-6 py-4 rounded-full text-sm font-medium button-sweep-effect w-full shadow-lg hover:bg-[#1B7560] transition-colors duration-300"
            >
              Unlock Access <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Navbar bar (always on top at z-50) ─── */}
      <motion.header
        data-testid="primary-navbar"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || open
            ? "bg-[#FAF8F3]/95 backdrop-blur-xl border-b border-[#DCDCCF] shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" data-testid="nav-logo" className="flex items-center gap-2 shrink-0">
            <span className="font-serif text-2xl md:text-3xl italic leading-none">
              Clarity<span className="text-[#E76F51]">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredLabel(null)}
          >
            {NAV.map((item) => {
              const isActive = activeSection === item.href.split('#')[1];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredLabel(item.label)}
                  data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  className={`relative px-4 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? "text-[#E76F51]" : "text-[#1A1916]/80 hover:text-[#1A1916]"
                  }`}
                >
                  {hoveredLabel === item.label && (
                    <motion.span
                      layoutId="nav-hover-bg"
                      className="absolute inset-0 bg-[#1A1916]/5 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-line"
                      className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#15604E] rounded-full z-20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/#enrol"
            onClick={handleCTAClick}
            data-testid="nav-cta-button"
            className="hidden md:inline-flex items-center gap-2 bg-[#15604E] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1B7560] transition-colors duration-300 button-sweep-effect shrink-0 shadow-sm hover:shadow"
          >
            Unlock Access
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger — always rendered above overlay */}
          <button
            data-testid="nav-mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative z-50 w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-xl hover:bg-[#1A1916]/5 transition-colors focus:outline-none shrink-0"
          >
            <motion.span
              variants={bar1}
              animate={open ? "open" : "closed"}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-[22px] h-[2px] bg-[#1A1916] block origin-center rounded-full"
            />
            <motion.span
              variants={bar2}
              animate={open ? "open" : "closed"}
              transition={{ duration: 0.18 }}
              className="w-[22px] h-[2px] bg-[#1A1916] block rounded-full"
            />
            <motion.span
              variants={bar3}
              animate={open ? "open" : "closed"}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-[22px] h-[2px] bg-[#1A1916] block origin-center rounded-full"
            />
          </button>
        </div>
      </motion.header>
    </>
  );
}
