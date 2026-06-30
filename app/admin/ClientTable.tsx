"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import ExportButton from "./ExportButton";

interface ClientTableProps {
  leads: any[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
  activeTab: string;
}

export default function ClientTable({ leads, totalPages, currentPage, totalCount, activeTab }: ClientTableProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [isQueuing, setIsQueuing] = useState(false);
  
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "ALL");
  const [priority, setPriority] = useState(searchParams.get("priority") || "ALL");
  const [payment, setPayment] = useState(searchParams.get("payment") || "ALL");
  const [lifecycle, setLifecycle] = useState(searchParams.get("lifecycle") || "ALL");
  const [startDate, setStartDate] = useState(searchParams.get("startDate") || "");
  const [endDate, setEndDate] = useState(searchParams.get("endDate") || "");

  useEffect(() => {
    setMounted(true);
  }, []);

  const createQueryString = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      return params.toString();
    },
    [searchParams]
  );

  const applyFilters = () => {
    const qs = createQueryString({
      search,
      status: activeTab === 'overview' ? (status === "ALL" ? null : status) : null,
      priority: activeTab === 'overview' ? (priority === "ALL" ? null : priority) : null,
      payment: activeTab === 'overview' ? (payment === "ALL" ? null : payment) : null,
      lifecycle: activeTab === 'lifecycle' ? (lifecycle === "ALL" ? null : lifecycle) : null,
      startDate,
      endDate,
      tab: activeTab,
      page: "1", // reset to page 1 on filter change
    });
    router.push(`${pathname}?${qs}`, { scroll: false });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    const qs = createQueryString({ page: newPage.toString() });
    router.push(`${pathname}?${qs}`, { scroll: false });
  };

  const formatDate = (dateString: string) => {
    if (!mounted) return "";
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date(dateString));
  };

  const handleBulkSend = async () => {
    if (leads.length === 0) return;
    setIsQueuing(true);
    try {
      const templateName = `utl_clarity_${lifecycle.toLowerCase().replace('_', '')}`;
      const res = await fetch("/api/bulk/queue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadIds: leads.map(l => l.id),
          templateName
        })
      });
      if (res.ok) {
        alert("Messages successfully queued!");
        setShowBulkModal(false);
      } else {
        alert("Failed to queue messages.");
      }
    } catch (e) {
      alert("Error queuing messages");
    } finally {
      setIsQueuing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Search Phone</label>
            <input 
              type="search" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 placeholder:text-slate-400"
            />
          </div>
          
          {activeTab === 'overview' && (
            <>
              <div className="flex-1 min-w-[140px]">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Status</label>
                <select 
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 bg-white"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="PENDING">Pending</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="COMPLETED">Completed</option>
                </select>
              </div>
              <div className="flex-1 min-w-[140px]">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Priority</label>
                <select 
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 bg-white"
                >
                  <option value="ALL">All Priorities</option>
                  <option value="HIGH">High (80+)</option>
                  <option value="MID">Mid (50-79)</option>
                  <option value="LOW">Low (&lt; 50)</option>
                  <option value="UNSCORED">Unscored</option>
                </select>
              </div>
              <div className="flex-1 min-w-[140px]">
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Payment</label>
                <select 
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 bg-white"
                >
                  <option value="ALL">All Payments</option>
                  <option value="PAID">Paid</option>
                  <option value="UNPAID">Unpaid</option>
                </select>
              </div>
            </>
          )}

          {activeTab === 'lifecycle' && (
            <div className="flex-1 min-w-[140px]">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Lifecycle</label>
              <select 
                value={lifecycle}
                onChange={(e) => setLifecycle(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 bg-white"
              >
                <option value="ALL">All Stages</option>
                <option value="WEEK_1">Week 1 (0-7 Days)</option>
                <option value="WEEK_2">Week 2 (8-14 Days)</option>
                <option value="WEEK_3">Week 3 (15-21 Days)</option>
                <option value="WEEK_4">Week 4 (22-28 Days)</option>
                <option value="EXPIRED">Access Expired (29+ Days)</option>
              </select>
            </div>
          )}

          <div className="flex-1 min-w-[140px]">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Start Date</label>
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900"
            />
          </div>
          <div className="flex-1 min-w-[140px]">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">End Date</label>
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-stretch gap-2 w-full lg:w-auto">
            <button 
              onClick={applyFilters}
              className="w-full sm:w-auto px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors flex justify-center"
            >
              Apply Filters
            </button>
            <div className="w-full sm:w-auto flex justify-center">
              <ExportButton data={leads} filename="leads_export" className="w-full" />
            </div>
            {activeTab === 'lifecycle' && lifecycle !== 'ALL' && lifecycle !== 'EXPIRED' && leads.length > 0 && (
              <button 
                onClick={() => setShowBulkModal(true)}
                className="w-full sm:w-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-sm transition-colors flex justify-center"
              >
                Bulk Message Cohort
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Data Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-sm uppercase tracking-wider text-slate-600">
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Phone</th>
                <th className="p-4 font-semibold">Profession</th>
                <th className="p-4 font-semibold">Last Active</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Score</th>
                <th className="p-4 font-semibold">Priority</th>
                <th className="p-4 font-semibold">Payment</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-slate-500">
                    No leads found matching your criteria.
                  </td>
                </tr>
              )}
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">{lead.name}</td>
                  <td className="p-4 text-slate-600">{lead.phone}</td>
                  <td className="p-4 text-slate-600 font-medium">
                    {lead.assessment?.profession || <span className="text-slate-400 font-normal">-</span>}
                  </td>
                  <td className="p-4 text-slate-500">
                    {formatDate(lead.assessment?.updatedAt || lead.updatedAt)}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lead.assessment?.status === "COMPLETED"
                          ? "bg-green-100 text-green-700"
                          : lead.assessment?.status === "IN_PROGRESS"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {lead.assessment?.status || "NO_ASSESSMENT"}
                    </span>
                  </td>
                  <td className="p-4">
                    {lead.assessment?.score !== null ? (
                      <span className="font-bold text-slate-800">{lead.assessment.score}/100</span>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
                  </td>
                  <td className="p-4">
                    {lead.assessment?.score !== null ? (
                      lead.assessment.score >= 80 ? (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md">HIGH</span>
                      ) : lead.assessment.score >= 50 ? (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-md">MID</span>
                      ) : (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-md">LOW</span>
                      )
                    ) : (
                      <span className="text-slate-400 text-xs font-medium">-</span>
                    )}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lead.hasPaid
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {lead.hasPaid ? "PAID" : "UNPAID"}
                    </span>
                  </td>
                  <td className="p-4 flex gap-4 items-center justify-end">
                    <Link href={`/admin/${lead.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Profile & Logs
                    </Link>
                    {lead.assessment?.pdfUrl && (
                      <a href={lead.assessment.pdfUrl} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        PDF
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Showing <span className="font-medium text-slate-900">{leads.length}</span> of <span className="font-medium text-slate-900">{totalCount}</span> results
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="px-4 py-2 border border-slate-300 rounded-md bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <div className="flex items-center px-4 text-sm text-slate-600 font-medium">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="px-4 py-2 border border-slate-300 rounded-md bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {showBulkModal && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Confirm Bulk Send</h3>
            <p className="text-slate-600 mb-6">
              You are about to queue the <strong>{lifecycle.replace("_", " ")}</strong> template for <strong>{leads.length}</strong> user(s). 
              The system will safely process 1 message per second in the background.
            </p>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setShowBulkModal(false)}
                disabled={isQueuing}
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 font-medium rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={handleBulkSend}
                disabled={isQueuing}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg disabled:opacity-50 flex items-center gap-2"
              >
                {isQueuing ? "Queuing..." : "Confirm & Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
