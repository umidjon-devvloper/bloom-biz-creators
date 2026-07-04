import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Portfolio } from "@/components/site/Portfolio";
import { CtaBand } from "@/components/site/CtaBand";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

function PortfolioPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader
        eyebrow={t.portfolio.eyebrow}
        title={t.portfolio.titleA}
        highlight={t.portfolio.titleHl}
        description={t.portfolio.desc}
      />
      <Portfolio headless />
      <CtaBand />
    </>
  );
}
