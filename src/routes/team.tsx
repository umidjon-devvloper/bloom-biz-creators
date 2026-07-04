import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Team } from "@/components/site/Team";
import { CtaBand } from "@/components/site/CtaBand";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/team")({
  component: TeamPage,
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
