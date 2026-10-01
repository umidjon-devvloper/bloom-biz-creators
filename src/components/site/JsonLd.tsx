import { SITE, FACTS, TECH_STACK } from "@/lib/site";
import { useI18n } from "@/i18n";

const ORIGIN = `https://www.${SITE.domain}`;

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${ORIGIN}/#organization`,
          name: SITE.name,
          url: ORIGIN,
          logo: `${ORIGIN}/logo.png`,
          image: `${ORIGIN}/logo.png`,
          description:
            "Web development agency in Tashkent, Uzbekistan. We build websites, e-commerce stores, and mobile apps using React, Next.js, TypeScript, and React Native.",
          foundingDate: "2023",
          numberOfEmployees: { "@type": "QuantitativeValue", minValue: 2, maxValue: 10 },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tashkent",
            addressCountry: "UZ",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 41.2995,
            longitude: 69.2401,
          },
          telephone: SITE.phone,
          email: SITE.email,
          sameAs: [SITE.github, SITE.linkedin, SITE.telegram],
          knowsAbout: [...TECH_STACK],
          areaServed: [
            { "@type": "Country", name: "Uzbekistan" },
            { "@type": "Place", name: "Central Asia" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Web Development Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Development" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
            ],
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            bestRating: "5",
            ratingCount: String(FACTS.clients),
          },
        }),
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${ORIGIN}/#website`,
          url: ORIGIN,
          name: SITE.name,
          inLanguage: ["uz", "ru", "en"],
          publisher: { "@id": `${ORIGIN}/#organization` },
        }),
      }}
    />
  );
}

export function FAQPageJsonLd() {
  const { t } = useI18n();

  const faqItems = t.about.faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems,
        }),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      }}
    />
  );
}
