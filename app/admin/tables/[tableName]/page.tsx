import { notFound } from "next/navigation";
import ExportButton from "../../ExportButton";
import ClientTableViewer from "./ClientTableViewer";
import { cookies } from "next/headers";

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

  const page = typeof resolvedSearchParams.page === "string" ? resolvedSearchParams.page : "1";

  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
  
  const res = await fetch(`${backendUrl}/api/admin/tables/${tableName}?page=${page}`, {
    headers: {
      Cookie: token ? `admin_token=${token}` : ""
    },
    cache: "no-store"
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    return (
      <div className="p-8 text-center text-red-500">
        Failed to fetch table data. Make sure the backend is running.
        <br />Error: {await res.text()}
      </div>
    );
  }

  const { data, totalCount, totalPages } = await res.json();
  const columns = data.length > 0 ? Object.keys(data[0]) : [];
  
  let title = tableName.charAt(0).toUpperCase() + tableName.slice(1) + " Table";

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
        page={parseInt(page, 10)}
        totalPages={totalPages}
      />
    </div>
  );
}
