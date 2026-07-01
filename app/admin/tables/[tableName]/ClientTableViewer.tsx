"use client";

import { useState } from "react";
import Link from "next/link";

interface ClientTableViewerProps {
  data: any[];
  columns: string[];
  totalCount: number;
  page: number;
  totalPages: number;
}

export default function ClientTableViewer({
  data,
  columns,
  totalCount,
  page,
  totalPages,
}: ClientTableViewerProps) {
  const [selectedRow, setSelectedRow] = useState<any | null>(null);

  const formatValue = (val: any): string => {
    if (val === null || val === undefined) return "null";
    if (typeof val === "boolean") return val ? "true" : "false";
    if (val instanceof Date) return val.toISOString();
    if (typeof val === "object") return JSON.stringify(val);
    return String(val);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[75vh]">
        {data.length === 0 ? (
          <div className="p-8 text-center text-slate-500 flex-1 flex items-center justify-center">
            Table is empty.
          </div>
        ) : (
          <div className="overflow-x-auto overflow-y-auto flex-1 p-0">
            <table className="w-full text-left border-collapse whitespace-nowrap text-sm">
              <thead className="sticky top-0 bg-white z-10 shadow-sm border-b border-slate-200">
                <tr className="uppercase tracking-wider text-slate-500 text-xs">
                  {columns.map((col) => (
                    <th key={col} className="p-4 font-semibold">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.map((row, i) => (
                  <tr 
                    key={i} 
                    onClick={() => setSelectedRow(row)}
                    className="hover:bg-slate-50 transition-colors font-sans text-sm cursor-pointer"
                  >
                    {columns.map((col) => (
                      <td key={col} className="p-4 text-slate-700 max-w-sm truncate">
                        {formatValue(row[col])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Pagination Footer */}
        {data.length > 0 && (
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between mt-auto">
            <div className="text-sm text-slate-500">
              Showing <span className="font-medium text-slate-900">{data.length}</span> of <span className="font-medium text-slate-900">{totalCount}</span> results
            </div>
            <div className="flex gap-2">
              {page > 1 ? (
                <Link href={`?page=${page - 1}`} className="px-4 py-2 border border-slate-300 rounded-md bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">
                  Previous
                </Link>
              ) : (
                <button disabled className="px-4 py-2 border border-slate-300 rounded-md bg-slate-100 text-slate-400 text-sm font-medium cursor-not-allowed">
                  Previous
                </button>
              )}
              <div className="flex items-center px-4 text-sm text-slate-600 font-medium">
                Page {page} of {totalPages}
              </div>
              {page < totalPages ? (
                <Link href={`?page=${page + 1}`} className="px-4 py-2 border border-slate-300 rounded-md bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">
                  Next
                </Link>
              ) : (
                <button disabled className="px-4 py-2 border border-slate-300 rounded-md bg-slate-100 text-slate-400 text-sm font-medium cursor-not-allowed">
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Row Details Modal */}
      {selectedRow && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900">Record Details</h3>
              <button 
                onClick={() => setSelectedRow(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-full hover:bg-slate-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-4">
              {columns.map((col) => (
                <div key={col} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{col}</div>
                  <div className="text-sm text-slate-800 whitespace-pre-wrap break-words font-medium">
                    {formatValue(selectedRow[col])}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
