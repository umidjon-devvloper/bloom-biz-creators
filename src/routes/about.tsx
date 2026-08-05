import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { FAQ } from "@/components/site/FAQ";
import { ClientProof } from "@/components/site/ClientProof";
import { CtaBand } from "@/components/site/CtaBand";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader
        eyebrow={t.about.eyebrow}
        title={t.about.titleA}
        highlight={t.about.titleHl}
        description={t.about.desc}
      />
      <About headless />
      <WhyUs />
      <FAQ />
      <ClientProof />
      <CtaBand />
    </>
  );
}
