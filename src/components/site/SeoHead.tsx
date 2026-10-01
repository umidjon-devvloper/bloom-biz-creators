import { useRouterState } from "@tanstack/react-router";
import { langFromSearch, DEFAULT_LANG, type Lang } from "@/i18n";
import { SITE } from "@/lib/site";
import { OrganizationJsonLd, WebSiteJsonLd } from "./JsonLd";

const ORIGIN = `https://www.${SITE.domain}`;

const OG_IMAGE = `${ORIGIN}/logo.png`;

const LANG_CODES: readonly Lang[] = ["uz", "ru", "en"];

function langHref(pathname: string, lang: Lang): string {
  return lang === DEFAULT_LANG
    ? `${ORIGIN}${pathname}`
    : `${ORIGIN}${pathname}${pathname.includes("?") ? "&" : "?"}lang=${lang}`;
}

export function SeoHead() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = useRouterState({ select: (s) => langFromSearch(s.location.search) }) ?? DEFAULT_LANG;

  const canonical = langHref(pathname, lang);

  return (
    <>
      <link rel="canonical" href={canonical} />
      {LANG_CODES.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={langHref(pathname, l)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${ORIGIN}${pathname}`} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta name="twitter:image" content={OG_IMAGE} />
      <OrganizationJsonLd />
      <WebSiteJsonLd />
    </>
  );
}
