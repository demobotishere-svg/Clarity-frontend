import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <AdminSidebar />
      <main className="mt-16 p-4 sm:p-8 md:mt-0 md:ml-64 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
