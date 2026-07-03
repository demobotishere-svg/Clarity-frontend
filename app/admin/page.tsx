import ClientTable from "./ClientTable";
import DataVisualization from "./DataVisualization";
import { Suspense } from "react";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  
  const page = typeof resolvedParams.page === "string" ? resolvedParams.page : "1";
  const search = typeof resolvedParams.search === "string" ? resolvedParams.search : "";
  const status = typeof resolvedParams.status === "string" ? resolvedParams.status : "ALL";
  const priority = typeof resolvedParams.priority === "string" ? resolvedParams.priority : "ALL";
  const payment = typeof resolvedParams.payment === "string" ? resolvedParams.payment : "ALL";
  const lifecycle = typeof resolvedParams.lifecycle === "string" ? resolvedParams.lifecycle : "ALL";
  const startDate = typeof resolvedParams.startDate === "string" ? resolvedParams.startDate : "";
  const endDate = typeof resolvedParams.endDate === "string" ? resolvedParams.endDate : "";
  const tab = typeof resolvedParams.tab === "string" ? resolvedParams.tab : "overview";

  const qs = new URLSearchParams({
    page, search, status, priority, payment, lifecycle, startDate, endDate, tab
  }).toString();

  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
  
  const res = await fetch(`${backendUrl}/api/leads/dashboard?${qs}`, {
    headers: {
      Cookie: token ? `admin_token=${token}` : ""
    },
    cache: "no-store"
  });

  if (!res.ok) {
    return (
      <div className="p-8 text-center text-red-500">
        Failed to fetch dashboard data. Make sure the backend is running.
        <br />Error: {await res.text()}
      </div>
    );
  }

  const {
    leadsFormatted,
    totalCount,
    totalPages,
    metrics,
    leadsByDate,
    assessmentStatuses,
    paymentStatuses
  } = await res.json();

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Admin Dashboard</h1>
      
      {/* Tabs Navigation */}
      <div className="flex space-x-6 mb-8 border-b border-slate-200 overflow-x-auto">
        <a href="?tab=overview" className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${tab === 'overview' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>
          Overview & Payments
        </a>
        <a href="?tab=lifecycle" className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${tab === 'lifecycle' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>
          Lifecycle Cohorts
        </a>
        <a href="?tab=payment_abandoned" className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${tab === 'payment_abandoned' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>
          Payment Abandoned
        </a>
        <a href="?tab=assessment_abandoned" className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${tab === 'assessment_abandoned' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}>
          Assessment Abandoned
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
          currentPage={parseInt(page, 10)} 
          totalCount={totalCount} 
          activeTab={tab}
        />
      </Suspense>
    </div>
  );
}
