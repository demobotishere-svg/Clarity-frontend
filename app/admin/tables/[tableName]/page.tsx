import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { leads, assessments, messages as messagesTable, activityLogs, razorpayPayments, admins } from "@/db/schema";
import ExportButton from "../../ExportButton";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function TableViewerPage({
  params,
  searchParams
}: {
  params: Promise<{ tableName: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const { tableName } = resolvedParams;

  const page = typeof resolvedSearchParams.page === "string" ? parseInt(resolvedSearchParams.page, 10) : 1;
  const take = 100;
  const skip = (Math.max(1, page) - 1) * take;

  let data: any[] = [];
  let title = "";
  let totalCount = 0;

  // Dynamic switch based on the table name
  switch (tableName.toLowerCase()) {
    case "leads":
      totalCount = (await db.select({ count: sql<number>`cast(count(${leads.id}) as int)` }).from(leads))[0].count;
      data = await db.query.leads.findMany({ limit: take, offset: skip, orderBy: (table, { desc }) => [desc(table.createdAt)] });
      title = "Lead Table";
      break;
    case "admins":
      totalCount = (await db.select({ count: sql<number>`cast(count(${admins.id}) as int)` }).from(admins))[0].count;
      data = await db.query.admins.findMany({ limit: take, offset: skip, orderBy: (table, { desc }) => [desc(table.createdAt)] });
      
      // Sanitize passwordHash from output
      data = data.map(admin => {
        const { passwordHash, ...safeAdmin } = admin;
        return safeAdmin;
      });
      
      title = "Admins Table";
      break;
    case "assessments":
      totalCount = (await db.select({ count: sql<number>`cast(count(${assessments.id}) as int)` }).from(assessments))[0].count;
      data = await db.query.assessments.findMany({ limit: take, offset: skip, orderBy: (table, { desc }) => [desc(table.createdAt)] });
      title = "Assessment Table";
      break;
    case "messages":
      totalCount = (await db.select({ count: sql<number>`cast(count(${messagesTable.id}) as int)` }).from(messagesTable))[0].count;
      data = await db.query.messages.findMany({ limit: take, offset: skip, orderBy: (table, { desc }) => [desc(table.createdAt)] });
      title = "Message Table";
      break;
    case "activitylogs":
      totalCount = (await db.select({ count: sql<number>`cast(count(${activityLogs.id}) as int)` }).from(activityLogs))[0].count;
      data = await db.query.activityLogs.findMany({ limit: take, offset: skip, orderBy: (table, { desc }) => [desc(table.createdAt)] });
      title = "ActivityLog Table";
      break;
    case "razorpaypayments":
      totalCount = (await db.select({ count: sql<number>`cast(count(${razorpayPayments.id}) as int)` }).from(razorpayPayments))[0].count;
      data = await db.query.razorpayPayments.findMany({ limit: take, offset: skip, orderBy: (table, { desc }) => [desc(table.createdAt)] });
      title = "Razorpay Payments Table";
      break;
    default:
      notFound();
  }

  const totalPages = Math.max(1, Math.ceil(totalCount / take));
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
          <p className="text-slate-500">Read-only view of the most recent 100 records from the {title}.</p>
        </div>
        <ExportButton data={data} filename={tableName} />
      </div>

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
                  <tr key={i} className="hover:bg-slate-50 transition-colors font-sans text-sm">
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
    </div>
  );
}

function formatValue(val: any): string {
  if (val === null || val === undefined) return "null";
  if (typeof val === "boolean") return val ? "true" : "false";
  if (val instanceof Date) return val.toISOString();
  if (typeof val === "object") return JSON.stringify(val);
  return String(val);
}
