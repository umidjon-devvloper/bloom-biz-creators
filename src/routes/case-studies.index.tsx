import { createFileRoute, Link } from "@tanstack/react-router";
import { getCaseStudies } from "../api/api";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/case-studies/")({
  component: CaseStudies,
  loader: async () => {
    return await getCaseStudies();
  },
});

function CaseStudies() {
  const caseStudies = Route.useLoaderData();

  return (
    <div>
      <PageHeader
        title="Case Studies"
        subtitle="Real problems we've solved for real businesses. See how we deliver value through design and engineering."
      />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {caseStudies.map((study: any) => (
            <Link
              key={study._id}
              to="/case-studies/$slug"
              params={{ slug: study.slug }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-glow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                  {study.industry}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold">{study.title}</h3>
                <p className="mb-4 text-muted-foreground">{study.summary}</p>
                <div className="flex items-center text-sm font-semibold text-primary">
                  Read Case Study <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
