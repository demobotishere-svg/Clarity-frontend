"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminSetupPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || (typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}:3001` : "http://localhost:3001");
      const res = await fetch(`${backendUrl}/api/admin/setup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ phone }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to update phone number");
      }

      router.push("/admin");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-8 text-center bg-slate-50 border-b border-slate-200">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Setup Notifications</h2>
          <p className="text-slate-500 mt-2 text-sm">
            Please enter your WhatsApp phone number to receive instant alerts when a new user initiates a conversation.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="p-4 rounded-xl bg-rose-50 text-rose-700 text-sm font-medium border border-rose-200">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              WhatsApp Phone Number
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 919876543210 (include country code)"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-slate-900"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
            />
            <p className="text-xs text-slate-500 mt-2">Do not include the + or spaces.</p>
          </div>

          <button
            type="submit"
            disabled={loading || phone.length < 10}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-md shadow-indigo-200 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}

