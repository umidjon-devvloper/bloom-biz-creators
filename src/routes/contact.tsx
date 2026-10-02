import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { useI18n, langFromSearch, DEFAULT_LANG } from "@/i18n";
import { PAGE_META } from "@/i18n/translations";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: ({ match }) => {
    const lang = langFromSearch(match.search) ?? DEFAULT_LANG;
    const m = PAGE_META[lang].contact;
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

function ContactPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader
        eyebrow={t.contact.eyebrow}
        title={t.contact.titleA}
        highlight={t.contact.titleHl}
        description={t.contact.desc}
      />
      <Contact headless />
    </>
  );
}
