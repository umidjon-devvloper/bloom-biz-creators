import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { FAQ } from "@/components/site/FAQ";
import { ClientProof } from "@/components/site/ClientProof";
import { CtaBand } from "@/components/site/CtaBand";
import { useI18n, langFromSearch, DEFAULT_LANG } from "@/i18n";
import { PAGE_META } from "@/i18n/translations";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: ({ match }) => {
    const lang = langFromSearch(match.search) ?? DEFAULT_LANG;
    const m = PAGE_META[lang].about;
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
