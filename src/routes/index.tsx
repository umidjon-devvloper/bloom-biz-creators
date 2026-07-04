import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TechMarquee } from "@/components/site/TechMarquee";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { PortfolioStack } from "@/components/site/PortfolioStack";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services showCta />
      <Process />
      <PortfolioStack />
      <Testimonials />
      <CtaBand />
    </>
  );
}
