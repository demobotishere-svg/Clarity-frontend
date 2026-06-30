import { db } from "@/lib/db";
import { pendingMessages, leads, bulkBatches } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import Link from "next/link";
import ExportButton from "@/app/admin/ExportButton";

export const dynamic = "force-dynamic";

export default async function BatchDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const batchId = resolvedParams.id;

  const batchResult = await db.select().from(bulkBatches).where(eq(bulkBatches.id, batchId));
  const batch = batchResult[0];

  if (!batch) {
    return <div className="p-8 text-center">Batch not found.</div>;
  }

  const rawMessages = await db.select({
    id: pendingMessages.id,
    templateName: pendingMessages.templateName,
    status: pendingMessages.status,
    errorReason: pendingMessages.errorReason,
    createdAt: pendingMessages.createdAt,
    processedAt: pendingMessages.processedAt,
    leadName: leads.name,
    leadPhone: leads.phone,
  })
  .from(pendingMessages)
  .leftJoin(leads, eq(pendingMessages.leadId, leads.id))
  .where(eq(pendingMessages.batchId, batchId))
  .orderBy(desc(pendingMessages.createdAt));

  const formatDate = (dateString?: Date | null) => {
    if (!dateString) return "-";
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    }).format(new Date(dateString));
  };

  // Prepare data for CSV Export
  const exportData = rawMessages.map(msg => ({
    LeadName: msg.leadName || "Unknown",
    Phone: msg.leadPhone || "Unknown",
    Template: msg.templateName,
    Status: msg.status,
    Error: msg.errorReason || "",
    QueuedAt: msg.createdAt ? new Date(msg.createdAt).toISOString() : "",
    ProcessedAt: msg.processedAt ? new Date(msg.processedAt).toISOString() : ""
  }));

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <Link href="/admin/messages-report" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-2 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Reports
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 mt-2">Batch Details</h1>
          <p className="text-slate-500 mt-1 font-mono text-sm">Batch ID: {batch.id}</p>
        </div>
        <div className="flex gap-3">
          <ExportButton data={exportData} filename={`batch_${batch.id}_report`} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-sm transition-colors" />
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-semibold text-slate-500 uppercase">Template</p>
          <p className="text-xl font-bold text-slate-900 mt-1">{batch.templateName}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm font-semibold text-slate-500 uppercase">Total Messages</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{batch.totalCount}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm">
          <p className="text-sm font-semibold text-emerald-700 uppercase">Sent</p>
          <p className="text-2xl font-bold text-emerald-700 mt-1">{batch.processedCount}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-rose-200 bg-rose-50 shadow-sm">
          <p className="text-sm font-semibold text-rose-700 uppercase">Failed</p>
          <p className="text-2xl font-bold text-rose-700 mt-1">{batch.failedCount}</p>
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-sm uppercase tracking-wider text-slate-600">
                <th className="p-4 font-semibold">Lead Name</th>
                <th className="p-4 font-semibold">Phone</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Processed At</th>
                <th className="p-4 font-semibold">Error Reason</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rawMessages.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    No messages found for this batch.
                  </td>
                </tr>
              )}
              {rawMessages.map((msg) => (
                <tr key={msg.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-slate-900 font-medium">{msg.leadName}</td>
                  <td className="p-4 text-slate-600">{msg.leadPhone}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        msg.status === "SENT"
                          ? "bg-slate-100 text-slate-700"
                          : msg.status === "DELIVERED"
                          ? "bg-blue-100 text-blue-700"
                          : msg.status === "READ"
                          ? "bg-emerald-100 text-emerald-700"
                          : msg.status === "QUEUED" || msg.status === "PROCESSING"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {msg.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500 text-sm">
                    {formatDate(msg.processedAt)}
                  </td>
                  <td className="p-4 text-rose-600 text-xs font-mono max-w-xs truncate" title={msg.errorReason || ""}>
                    {msg.errorReason || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
