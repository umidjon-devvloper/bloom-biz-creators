import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Portfolio } from "@/components/site/Portfolio";
import { CtaBand } from "@/components/site/CtaBand";
import { useI18n, langFromSearch, DEFAULT_LANG } from "@/i18n";
import { PAGE_META } from "@/i18n/translations";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: ({ match }) => {
    const lang = langFromSearch(match.search) ?? DEFAULT_LANG;
    const m = PAGE_META[lang].portfolio;
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
