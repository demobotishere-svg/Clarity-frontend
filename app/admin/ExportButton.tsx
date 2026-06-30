"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

interface ExportButtonProps {
  data?: any[]; // Kept for backwards compatibility but not used for main leads
  filename?: string;
  className?: string;
}

export default function ExportButton({ data, filename = "export", className = "" }: ExportButtonProps) {
  const searchParams = useSearchParams();

  const handleExport = () => {
    // If it's a dynamic table viewer using raw local data, fallback to old method
    if (data && filename !== "leads_export") {
      if (data.length === 0) {
        alert("No data to export");
        return;
      }
      const headers = Object.keys(data[0]).join(",");
      const csv = data.map((row) =>
        Object.values(row)
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(",")
      );
      const csvContent = [headers, ...csv].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", `${filename}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // For the main leads dashboard, hit the dedicated export API with exact filters
    const currentParams = searchParams.toString();
    window.location.href = `/api/export/leads?${currentParams}`;
  };

  return (
    <button
      onClick={handleExport}
      className={`px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2 justify-center ${className}`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
      </svg>
      Export CSV
    </button>
  );
}
