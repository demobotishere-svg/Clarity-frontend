"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || (typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}:3001` : "http://localhost:3001");
    await fetch(`${backendUrl}/api/auth/logout`, { method: 'POST', credentials: 'include' });
    router.push('/auth/login');
  };

  const links = [
    { name: "Main Dashboard", href: "/admin" },
    { name: "Lead Table", href: "/admin/tables/leads" },
    { name: "Assessment Table", href: "/admin/tables/assessments" },
    { name: "Message Table", href: "/admin/tables/messages" },
    { name: "ActivityLog Table", href: "/admin/tables/activityLogs" },
    { name: "Payments Table", href: "/admin/tables/razorpayPayments" },
    { name: "Messages Report", href: "/admin/messages-report" },
    { name: "Admins", href: "/admin/tables/admins" },
  ];

  return (
    <>
      {/* Hamburger Button (Fixed Top Left) */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-slate-900 rounded-md shadow-md border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Overlay Background */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out border-r border-slate-800 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center space-x-3 mb-8 mt-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl shadow-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">ClarityAdmin</span>
          </div>

          <nav className="flex-1 space-y-1">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 mt-6 px-2">
              Navigation
            </div>
            
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600/10 text-indigo-400 shadow-sm"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-slate-800 mt-auto">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center px-4 py-2 mb-4 text-sm font-medium rounded-lg text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 hover:text-rose-300 transition-colors"
            >
              Sign Out
            </button>
            <p className="text-xs text-slate-500 text-center font-medium tracking-wide">Version 2.0</p>
          </div>
        </div>
      </div>
    </>
  );
}

