import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
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
