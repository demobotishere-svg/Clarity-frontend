import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { leads, assessments, messages as messagesTable, activityLogs, razorpayPayments, admins } from "@/db/schema";
import ExportButton from "../../ExportButton";
import { sql } from "drizzle-orm";
import ClientTableViewer from "./ClientTableViewer";

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

      <ClientTableViewer 
        data={JSON.parse(JSON.stringify(data))}
        columns={columns}
        totalCount={totalCount}
        page={page}
        totalPages={totalPages}
      />
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
