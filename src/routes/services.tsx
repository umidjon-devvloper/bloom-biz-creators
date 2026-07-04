import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { PriceCalculator } from "@/components/site/PriceCalculator";
import { WhyUs } from "@/components/site/WhyUs";
import { CtaBand } from "@/components/site/CtaBand";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader
        eyebrow={t.services.eyebrow}
        title={t.services.titleA}
        highlight={t.services.titleHl}
        description={t.services.desc}
      />
      <Services headless />
      <PriceCalculator />
      <WhyUs />
      <CtaBand />
    </>
  );
}
