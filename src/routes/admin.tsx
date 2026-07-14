import { createFileRoute, Outlet, redirect, useRouter } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { LayoutDashboard, FileText, Briefcase, Users, LogOut, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/admin")({
  beforeLoad: () => {
    const auth = typeof localStorage !== "undefined" ? localStorage.getItem("ua_admin_auth") : null;
    if (auth !== "true" && window.location.pathname !== "/admin/login") {
      throw redirect({ to: "/admin/login" });
    }
  },
  component: AdminLayout,
});

function AdminLayout() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("ua_admin_auth");
    router.navigate({ to: "/admin/login" });
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2 mb-6 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="w-4 h-4" /> Back to site
          </Link>
          <h2 className="text-xl font-bold font-display">Umidjon Agency</h2>
          <p className="text-xs text-muted-foreground">Admin Panel</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <Link to="/admin" activeOptions={{ exact: true }} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary [&.active]:bg-primary/10 [&.active]:text-primary">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <Link to="/admin/blog" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary [&.active]:bg-primary/10 [&.active]:text-primary">
            <FileText className="w-4 h-4" /> Blog
          </Link>
          <Link to="/admin/case-studies" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary [&.active]:bg-primary/10 [&.active]:text-primary">
            <Briefcase className="w-4 h-4" /> Case Studies
          </Link>
          <Link to="/admin/leads" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary [&.active]:bg-primary/10 [&.active]:text-primary">
            <Users className="w-4 h-4" /> Leads
          </Link>
        </nav>
        
        <div className="p-4 border-t border-border">
          <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-secondary/20 p-8">
        <Outlet />
      </main>
    </div>
  );
}
