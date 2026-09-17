import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050506] text-white">
      <Sidebar />

      <div className="ml-64">
        <Topbar />

        <main className="pt-16.25">
          {children}
        </main>
      </div>
    </div>
  );
}