import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TechMarquee } from "@/components/site/TechMarquee";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <WhyUs />
      <Services showCta />
      <Process />
      <Portfolio limit={4} showCta />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
