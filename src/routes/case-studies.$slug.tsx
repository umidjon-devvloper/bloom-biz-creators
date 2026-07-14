import { createFileRoute } from "@tanstack/react-router";
import { getCaseStudyBySlug } from "../api/api";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/$slug")({
  component: CaseStudyDetail,
  loader: async ({ params }) => {
    return await getCaseStudyBySlug({ data: params.slug });
  },
});

function CaseStudyDetail() {
  const study = Route.useLoaderData();

  if (!study) {
    return <div className="py-32 text-center text-2xl">Case study not found</div>;
  }

  return (
    <article className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <Link to="/case-studies" className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
        </Link>
        
        <div className="mb-8 flex items-center gap-4">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {study.industry}
          </span>
          <span className="text-sm text-muted-foreground">Client: {study.client}</span>
        </div>
        
        <h1 className="mb-6 font-display text-4xl font-bold md:text-5xl lg:text-6xl">{study.title}</h1>
        <p className="mb-12 text-xl text-muted-foreground leading-relaxed">{study.summary}</p>
      </div>

      <div className="w-full">
        <img src={study.imageUrl} alt={study.title} className="max-h-[600px] w-full object-cover" />
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-6">
        <div className="grid gap-12">
          <section>
            <h2 className="mb-4 font-display text-3xl font-bold">The Challenge</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{study.challenge}</p>
          </section>
          
          <section>
            <h2 className="mb-4 font-display text-3xl font-bold">Our Solution</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{study.solution}</p>
          </section>

          <section>
            <h2 className="mb-6 font-display text-3xl font-bold">Results</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {study.results?.map((res: any, idx: number) => (
                <div key={idx} className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-2 text-4xl font-black text-gradient-primary">{res.value}</div>
                  <div className="font-medium text-muted-foreground">{res.metric}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
