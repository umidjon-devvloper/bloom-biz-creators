import { createFileRoute } from "@tanstack/react-router";
import { getBlogPosts, getCaseStudies, getLeads } from "../api/api";
import { FileText, Briefcase, Users, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
  loader: async () => {
    const [blogs, cases, leads] = await Promise.all([
      getBlogPosts(),
      getCaseStudies(),
      getLeads(),
    ]);
    return { blogs, cases, leads };
  },
});

function AdminDashboard() {
  const { blogs, cases, leads } = Route.useLoaderData();

  const stats = [
    { name: "Total Blog Posts", value: blogs.length, icon: FileText },
    { name: "Case Studies", value: cases.length, icon: Briefcase },
    { name: "Total Leads", value: leads.length, icon: Users },
    { name: "Site Visits", value: "1,204", icon: TrendingUp },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Umumiy statistika va so'nggi ma'lumotlar.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-semibold text-lg mb-4">So'nggi kelib tushgan lidlar</h3>
          <div className="space-y-4">
            {leads.slice(0, 5).map((lead: any) => (
              <div key={lead._id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-sm">{lead.name}</p>
                  <p className="text-xs text-muted-foreground">{lead.email}</p>
                </div>
                <span className="text-xs bg-secondary px-2 py-1 rounded-full">{new Date(lead.createdAt).toLocaleDateString()}</span>
              </div>
            ))}
            {leads.length === 0 && <p className="text-sm text-muted-foreground">Hozircha lidlar yo'q.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
