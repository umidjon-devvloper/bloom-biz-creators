import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Team } from "@/components/site/Team";
import { CtaBand } from "@/components/site/CtaBand";
import { useI18n, langFromSearch, DEFAULT_LANG } from "@/i18n";
import { PAGE_META } from "@/i18n/translations";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: ({ match }) => {
    const lang = langFromSearch(match.search) ?? DEFAULT_LANG;
    const m = PAGE_META[lang].team;
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

function TeamPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader
        eyebrow={t.team.eyebrow}
        title={t.team.titleA}
        highlight={t.team.titleHl}
        description={t.team.desc}
      />
      <Team headless showJoin />
      <CtaBand />
    </>
  );
}
