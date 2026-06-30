import { db } from "@/lib/db";
import { bulkBatches } from "@/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function MessagesReportPage() {
  const batches = await db.select()
    .from(bulkBatches)
    .orderBy(desc(bulkBatches.createdAt));

  const formatDate = (dateString: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'UTC'
    }).format(new Date(dateString));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Messages Report</h1>
          <p className="text-slate-500 mt-2">Track all your bulk message triggers and their delivery status.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-sm uppercase tracking-wider text-slate-600">
                <th className="p-4 font-semibold">Trigger Date</th>
                <th className="p-4 font-semibold">Template</th>
                <th className="p-4 font-semibold">Total Messages</th>
                <th className="p-4 font-semibold">Delivered</th>
                <th className="p-4 font-semibold">Failed</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {batches.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-500">
                    No message triggers found.
                  </td>
                </tr>
              )}
              {batches.map((batch) => (
                <tr key={batch.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 text-slate-900 font-medium">{formatDate(batch.createdAt)}</td>
                  <td className="p-4 text-slate-600 font-mono text-sm">
                    <span className="px-2 py-1 bg-slate-100 rounded-md border border-slate-200">{batch.templateName}</span>
                  </td>
                  <td className="p-4 text-slate-600">{batch.totalCount}</td>
                  <td className="p-4 text-emerald-600 font-medium">{batch.processedCount}</td>
                  <td className="p-4 text-rose-600 font-medium">{batch.failedCount}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        batch.status === "COMPLETED"
                          ? "bg-emerald-100 text-emerald-700"
                          : batch.status === "PARTIAL"
                          ? "bg-amber-100 text-amber-700"
                          : batch.status === "PROCESSING"
                          ? "bg-blue-100 text-blue-700"
                          : batch.status === "FAILED"
                          ? "bg-rose-100 text-rose-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {batch.status}
                    </span>
                  </td>
                  <td className="p-4 flex gap-4 items-center justify-end">
                    <Link 
                      href={`/admin/messages-report/${batch.id}`} 
                      className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm font-medium rounded-lg transition-colors border border-indigo-200"
                    >
                      View Details
                    </Link>
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
