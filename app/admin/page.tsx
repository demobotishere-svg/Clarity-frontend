import { db } from "@/lib/db";
import { leads, assessments, razorpayPayments } from "@/db/schema";
import { eq, ilike, and, gte, lte, desc, sql } from "drizzle-orm";
import ClientTable from "./ClientTable";
import DataVisualization from "./DataVisualization";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  
  const page = typeof resolvedParams.page === "string" ? parseInt(resolvedParams.page, 10) : 1;
  const search = typeof resolvedParams.search === "string" ? resolvedParams.search : "";
  const status = typeof resolvedParams.status === "string" ? resolvedParams.status : "ALL";
  const priority = typeof resolvedParams.priority === "string" ? resolvedParams.priority : "ALL";
  const payment = typeof resolvedParams.payment === "string" ? resolvedParams.payment : "ALL";
  const lifecycle = typeof resolvedParams.lifecycle === "string" ? resolvedParams.lifecycle : "ALL";
  const startDate = typeof resolvedParams.startDate === "string" ? resolvedParams.startDate : "";
  const endDate = typeof resolvedParams.endDate === "string" ? resolvedParams.endDate : "";
  const tab = typeof resolvedParams.tab === "string" ? resolvedParams.tab : "overview";

  const take = 10;
  const skip = (Math.max(1, page) - 1) * take;

  const conditions = [];

  if (search) {
    conditions.push(ilike(leads.phone, `%${search}%`));
  }

  if (status !== "ALL" && tab === 'overview') {
    conditions.push(eq(assessments.status, status as any));
  }

  if (priority !== "ALL" && tab === 'overview') {
    if (priority === "HIGH") {
      conditions.push(gte(assessments.score, 80));
    } else if (priority === "MID") {
      conditions.push(and(gte(assessments.score, 50), lte(assessments.score, 79)));
    } else if (priority === "LOW") {
      conditions.push(lte(assessments.score, 49));
    } else if (priority === "UNSCORED") {
      conditions.push(sql`${assessments.score} IS NULL`);
    }
  }

  if (payment !== "ALL" && tab === 'overview') {
    if (payment === "PAID") {
      conditions.push(eq(leads.hasPaid, true));
    } else if (payment === "UNPAID") {
      conditions.push(eq(leads.hasPaid, false));
    }
  }

  if (tab === 'lifecycle') {
    // For lifecycle cohorts, strictly filter to only those who have PAID and COMPLETED the assessment
    conditions.push(eq(leads.hasPaid, true));
    conditions.push(eq(assessments.status, "COMPLETED"));
  }

  if (lifecycle !== "ALL" && tab === 'lifecycle') {
    if (lifecycle === "WEEK_1") {
      conditions.push(sql`EXTRACT(DAY FROM CURRENT_TIMESTAMP - ${leads.createdAt}) <= 7`);
    } else if (lifecycle === "WEEK_2") {
      conditions.push(sql`EXTRACT(DAY FROM CURRENT_TIMESTAMP - ${leads.createdAt}) > 7 AND EXTRACT(DAY FROM CURRENT_TIMESTAMP - ${leads.createdAt}) <= 14`);
    } else if (lifecycle === "WEEK_3") {
      conditions.push(sql`EXTRACT(DAY FROM CURRENT_TIMESTAMP - ${leads.createdAt}) > 14 AND EXTRACT(DAY FROM CURRENT_TIMESTAMP - ${leads.createdAt}) <= 21`);
    } else if (lifecycle === "WEEK_4") {
      conditions.push(sql`EXTRACT(DAY FROM CURRENT_TIMESTAMP - ${leads.createdAt}) > 21 AND EXTRACT(DAY FROM CURRENT_TIMESTAMP - ${leads.createdAt}) <= 28`);
    } else if (lifecycle === "EXPIRED") {
      conditions.push(sql`EXTRACT(DAY FROM CURRENT_TIMESTAMP - ${leads.createdAt}) > 28`);
    }
  }

  if (startDate) {
    conditions.push(gte(leads.updatedAt, new Date(`${startDate}T00:00:00.000Z`)));
  }
  if (endDate) {
    conditions.push(lte(leads.updatedAt, new Date(`${endDate}T23:59:59.999Z`)));
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  // Execute Count
  const countResult = await db.select({ count: sql<number>`cast(count(${leads.id}) as int)` })
    .from(leads)
    .leftJoin(assessments, eq(leads.id, assessments.leadId))
    .where(whereClause);
  
  const totalCount = countResult[0].count;

  // Execute Fetch
  const fetchedData = await db.select()
    .from(leads)
    .leftJoin(assessments, eq(leads.id, assessments.leadId))
    .where(whereClause)
    .orderBy(desc(leads.updatedAt))
    .limit(take)
    .offset(skip);

  // Re-map data to match the old Prisma nested structure { ...lead, assessment: { ... } }
  const leadsFormatted = fetchedData.map(row => ({
    ...row.Lead,
    assessment: row.Assessment
  }));

  const totalPages = Math.max(1, Math.ceil(totalCount / take));

  // Build Analytics Data (Scalable SQL Aggregations)
  const totalLeadsResult = await db.select({ count: sql<number>`cast(count(${leads.id}) as int)` }).from(leads);
  const totalAssessmentsResult = await db.select({ count: sql<number>`cast(count(${assessments.id}) as int)` })
    .from(assessments).where(eq(assessments.status, "COMPLETED"));
  const totalRevenueResult = await db.select({ sum: sql<number>`cast(sum(${razorpayPayments.amount}) as int)` })
    .from(razorpayPayments).where(eq(razorpayPayments.status, "captured"));
  
  const metrics = {
    totalLeads: totalLeadsResult[0]?.count || 0,
    completedAssessments: totalAssessmentsResult[0]?.count || 0,
    totalRevenue: totalRevenueResult[0]?.sum || 0
  };

  // Group leads by date directly in SQL
  // NOTE: Postgres date_trunc('day', ...) works perfectly for this
  const rawLeadsByDate = await db.execute(sql`
    SELECT date_trunc('day', "createdAt")::date as date, cast(count(id) as int) as count 
    FROM "Lead" 
    GROUP BY date_trunc('day', "createdAt") 
    ORDER BY date ASC
  `);

  const leadsByDate = rawLeadsByDate.rows.map(row => ({
    date: new Date(row.date as string).toISOString().split('T')[0],
    count: row.count as number
  }));

  // Group assessment statuses directly in SQL
  const rawStatuses = await db.execute(sql`
    SELECT status, cast(count(id) as int) as value 
    FROM "Assessment" 
    GROUP BY status
  `);

  const assessmentStatuses = rawStatuses.rows.map(row => ({
    name: String(row.status).replace("_", " "),
    value: row.value as number
  })).filter(s => s.value > 0);

  // Group payment statuses directly in SQL
  const rawPayments = await db.execute(sql`
    SELECT "hasPaid", cast(count(id) as int) as value 
    FROM "Lead" 
    GROUP BY "hasPaid"
  `);

  const paymentStatuses = rawPayments.rows.map(row => ({
    name: row.hasPaid ? "PAID" : "UNPAID",
    value: row.value as number
  }));

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Admin Dashboard</h1>
      
      {/* Tabs Navigation */}
      <div className="flex space-x-6 mb-8 border-b border-slate-200">
        <a href="?tab=overview" className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${tab === 'overview' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>
          Overview & Payments
        </a>
        <a href="?tab=lifecycle" className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${tab === 'lifecycle' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>
          Lifecycle Cohorts
        </a>
      </div>

      {tab === 'overview' && (
        <DataVisualization 
          metrics={metrics}
          leadsByDate={leadsByDate}
          assessmentStatuses={assessmentStatuses}
          paymentStatuses={paymentStatuses}
        />
      )}

      <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading Dashboard Data...</div>}>
        <ClientTable 
          leads={leadsFormatted} 
          totalPages={totalPages} 
          currentPage={page} 
          totalCount={totalCount} 
          activeTab={tab}
        />
      </Suspense>
    </div>
  );
}
