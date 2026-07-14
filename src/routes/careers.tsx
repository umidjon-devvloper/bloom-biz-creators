import { createFileRoute } from "@tanstack/react-router";
import { getCareers } from "../api/api";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  loader: async () => {
    return await getCareers();
  },
});

function CareersPage() {
  const careers = Route.useLoaderData();

  return (
    <div>
      <PageHeader
        title="Join Our Team"
        subtitle="Help us build world-class digital products. We're always looking for talented individuals."
      />
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex flex-col gap-6">
          {careers.length === 0 && (
            <div className="text-center text-muted-foreground py-10">No open positions currently. Check back later!</div>
          )}
          {careers.map((job: any) => (
            <div key={job._id} className="group rounded-2xl border border-border bg-card p-6 sm:p-8 transition-colors hover:border-primary">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="rounded-full bg-secondary px-3 py-1">{job.department}</span>
                    <span className="rounded-full bg-secondary px-3 py-1">{job.type}</span>
                    <span className="rounded-full bg-secondary px-3 py-1">{job.location}</span>
                  </div>
                </div>
                <button className="whitespace-nowrap rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  Apply Now
                </button>
              </div>
              <p className="mb-4 text-muted-foreground">{job.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-inside list-disc text-muted-foreground space-y-1">
                  {job.requirements.map((req: string, idx: number) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
