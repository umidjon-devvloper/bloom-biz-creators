import { createFileRoute } from "@tanstack/react-router";
import { getClientProject } from "../api/api";

export const Route = createFileRoute("/portal")({
  component: ClientPortal,
  loader: async () => {
    // In a real app, we'd use the user's session token to fetch their specific project
    return await getClientProject({ data: "demo-id" });
  },
});

function ClientPortal() {
  const project = Route.useLoaderData();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in</h1>
          <p className="text-muted-foreground">You need to be authenticated to view the client portal.</p>
        </div>
      </div>
    );
  }

  const columns = ["todo", "in-progress", "review", "done"];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-10">
          <h1 className="text-4xl font-display font-bold mb-2">Client Portal</h1>
          <p className="text-muted-foreground">Welcome back, {project.clientName}. Project: <strong className="text-foreground">{project.projectName}</strong></p>
        </header>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-6">Kanban Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {columns.map((col) => (
                <div key={col} className="rounded-xl border border-border bg-card p-4 min-h-[400px]">
                  <h3 className="font-semibold mb-4 uppercase text-xs tracking-wider text-muted-foreground border-b border-border pb-2">{col}</h3>
                  <div className="space-y-3">
                    {project.tasks.filter((t: any) => t.status === col).map((task: any) => (
                      <div key={task.id} className="rounded-lg border border-border bg-background p-3 shadow-sm">
                        <div className="text-xs text-muted-foreground mb-1">{task.id}</div>
                        <div className="font-medium text-sm">{task.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">Documents</h2>
              <ul className="space-y-3">
                {project.documents.map((doc: any, i: number) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className="text-sm">{doc.name}</span>
                    <a href={doc.url} className="text-sm text-primary hover:underline">Download</a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold mb-4">Invoices</h2>
              <ul className="space-y-3">
                {project.invoices.map((inv: any, i: number) => (
                  <li key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                    <div>
                      <div className="font-medium">${inv.amount}</div>
                      <div className="text-xs text-muted-foreground">{new Date(inv.date).toLocaleDateString()}</div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${inv.status === 'paid' ? 'bg-success/20 text-success' : 'bg-primary/20 text-primary'}`}>
                      {inv.status}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
