import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TechMarquee } from "@/components/site/TechMarquee";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { PriceCalculator } from "@/components/site/PriceCalculator";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { ClientProof } from "@/components/site/ClientProof";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { FAQPageJsonLd } from "@/components/site/JsonLd";

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
      {/* The hero promises an estimate in four questions — it has to be on the
          page the hero is on, not one click away. */}
      <PriceCalculator />
      <Process />
      <Portfolio limit={4} showCta />
      <About />
      <ClientProof />
      <FAQ />
      <FAQPageJsonLd />
      <Contact />
    </>
  );
}
