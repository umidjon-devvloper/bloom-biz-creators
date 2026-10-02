import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicesTimeline } from "@/components/site/ServicesTimeline";
import { PriceCalculator } from "@/components/site/PriceCalculator";
import { WhyUs } from "@/components/site/WhyUs";
import { CtaBand } from "@/components/site/CtaBand";
import { useI18n, langFromSearch, DEFAULT_LANG } from "@/i18n";
import { PAGE_META } from "@/i18n/translations";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: ({ match }) => {
    const lang = langFromSearch(match.search) ?? DEFAULT_LANG;
    const m = PAGE_META[lang].services;
    return {
      meta: [
        { title: m.title },
        { name: "description", content: m.description },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.description },
      ],
    };
  },
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
      <ServicesTimeline />
      <PriceCalculator />
      <WhyUs />
      <CtaBand />
    </>
  );
}
