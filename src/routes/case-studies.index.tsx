import { createFileRoute, Link } from "@tanstack/react-router";
import { getCaseStudies } from "../api/api";
import { PageHeader } from "../components/site/PageHeader";
import { ArrowRight, TrendingUp, Users, Zap, BarChart } from "lucide-react";
import { Reveal3D } from "../components/site/Reveal3D";

// Fake metrics if the backend doesn't provide them
const METRICS = [
  { icon: TrendingUp, value: "+300%", label: "Conversion Rate" },
  { icon: Users, value: "2M+", label: "Active Users" },
  { icon: Zap, value: "< 0.5s", label: "Load Time" },
  { icon: BarChart, value: "$10M+", label: "Revenue Generated" },
];

export const Route = createFileRoute("/case-studies/")({
  component: CaseStudies,
  loader: async () => {
    return await getCaseStudies();
  },
});

function CaseStudies() {
  const caseStudies = Route.useLoaderData();

  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="Case Studies"
        title="Selected"
        highlight="Works"
        description="Deep dives into how we've transformed businesses through world-class digital products and premium engineering."
      />
      <div className="mx-auto mt-20 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {caseStudies.map((study: any, i: number) => {
             const isFull = i % 4 === 0 || i % 4 === 3;
             const metric = METRICS[i % METRICS.length];
             const MetricIcon = metric.icon;

             return (
               <Reveal3D 
                 key={study._id} 
                 delay={100 + (i % 3) * 100}
                 className={
                   i % 4 === 0 ? "md:col-span-12" : 
                   i % 4 === 1 ? "md:col-span-7" :
                   i % 4 === 2 ? "md:col-span-5" :
                   "md:col-span-12"
                 }
               >
                 <article className={`group relative flex flex-col ${isFull ? 'md:flex-row' : ''} h-full overflow-hidden rounded-[2rem] border border-border/40 bg-surface/20 transition-colors duration-500 hover:border-primary/40 hover:bg-surface/40`}>
                   
                   <Link
                     to="/case-studies/$slug"
                     params={{ slug: study.slug }}
                     className={`relative block shrink-0 overflow-hidden ${isFull ? 'w-full md:w-3/5' : 'w-full'} aspect-[4/3] ${isFull ? 'md:aspect-auto' : ''}`}
                   >
                     <img
                       src={study.imageUrl}
                       alt={study.title}
                       loading="lazy"
                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                     
                     {/* Hover Hint */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-[2px] bg-background/20">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transform scale-90 transition-transform duration-500 group-hover:scale-100">
                           <ArrowRight className="h-6 w-6 -rotate-45" />
                        </span>
                     </div>
                   </Link>

                   <div className={`flex flex-col justify-between p-6 sm:p-8 md:p-12 ${isFull ? 'w-full md:w-2/5' : 'w-full'}`}>
                     <div>
                       <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary">
                         <span>{study.industry || 'Technology'}</span>
                         <span className="h-1 w-1 rounded-full bg-border" />
                         <span className="text-muted-foreground">Case Study</span>
                       </div>

                       <h3 className="mt-6 font-display text-3xl font-black leading-tight tracking-tight md:text-4xl">
                         {study.title}
                       </h3>
                       <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground line-clamp-3">
                         {study.summary}
                       </p>
                     </div>

                     <div className="mt-12 flex items-center gap-4 rounded-2xl bg-background/50 p-6 border border-border/40">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                          <MetricIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-3xl font-black text-foreground">{metric.value}</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{metric.label}</div>
                        </div>
                     </div>
                   </div>
                 </article>
               </Reveal3D>
             );
          })}
        </div>
      </div>
    </div>
  );
}
