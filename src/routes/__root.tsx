import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { DEFAULT_LANG, I18nProvider, langFromSearch, useI18nOptional } from "../i18n";
import { META } from "../i18n/translations";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { FloatingContact } from "../components/site/FloatingContact";
import { SeoHead } from "../components/site/SeoHead";

function NotFoundComponent() {
  const { t } = useI18nOptional();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.notFound.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.notFound.desc}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.notFound.home}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  // `?lang=` pins the document language server-side. Everything else in search is
  // passed through untouched — gclid, utm_*, and whatever else an ad click adds.
  validateSearch: (search: Record<string, unknown>) => search,
  head: ({ match }) => {
    // Uzbek is the default language of the document, so the default meta is
    // Uzbek too — mixing an English description into a uz page splits the
    // search intent and reads as a template nobody finished. A pinned ?lang=
    // swaps the whole set, title and locale included.
    const lang = langFromSearch(match.search) ?? DEFAULT_LANG;
    const m = META[lang];
    const alternates = (["uz_UZ", "ru_RU", "en_US"] as const).filter((l) => l !== m.locale);

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "google-site-verification", content: "n26_sw4br0lpfQ41UJHaqLMRcYhVs1Mnz3-hXlpm5Wc" },
        { title: m.title },
        { name: "description", content: m.description },
        { name: "author", content: "Umidjon Agency" },
        { property: "og:title", content: m.title },
        { property: "og:description", content: m.ogDescription },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: m.locale },
        ...alternates.map((l) => ({ property: "og:locale:alternate", content: l })),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: m.title },
        { name: "twitter:description", content: m.ogDescription },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/logo.png", type: "image/png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        // Image CDN (resizes + WebP for portfolio screenshots)
        { rel: "preconnect", href: "https://wsrv.nl", crossOrigin: "anonymous" },
        { rel: "dns-prefetch", href: "https://wsrv.nl" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap",
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/**
 * Marks the document as JS-capable, then takes the mark back if hydration never
 * lands. styles.css keys every reveal animation off `html.js`, so a blocked or
 * half-loaded bundle degrades to plain visible content instead of a page of
 * `opacity: 0` sections. RootComponent cancels the timer once it mounts.
 */
const HYDRATION_FAILSAFE = `(function(){var d=document.documentElement;d.classList.add('js');
window.__uaHydration=setTimeout(function(){d.classList.remove('js')},4000)})()`;

/**
 * Applies a stored light-theme preference before the first paint. Running this
 * from a component would mean a full dark render flashing to light on hydration,
 * which is worse on the eyes than either theme on its own.
 *
 * Only "light" is acted on: the server already renders the dark class, so the
 * default and every failure path need no work. Mirrors lib/theme.ts — the key
 * and class names have to stay in step.
 */
const THEME_INIT = `(function(){try{if(localStorage.getItem('ua-theme')==='light'){
var d=document.documentElement;d.classList.remove('dark');d.classList.add('light')}}catch(e){}})()`;

/** Google Ads (gtag.js) bootstrap. Pairs with the async loader tag in RootShell. */
const GTAG_INIT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18019926528');`;

/**
 * Google Ads conversion event. Sits in the shell, so it fires once per page
 * load on every route — see the note in RootShell about moving it to the real
 * conversion action instead.
 */
const GTAG_CONVERSION = `gtag('event', 'conversion', {'send_to': 'AW-18019926528/O1XPCOOqs9wcEICEyZBD'});`;

function RootShell({ children }: { children: ReactNode }) {
  // Kept in step with the language the body renders in — a `?lang=ru` landing
  // that still declares lang="uz" is exactly the mismatch ad review flags.
  const pinned = useRouterState({ select: (s) => langFromSearch(s.location.search) });

  return (
    <html lang={pinned ?? DEFAULT_LANG} className="dark" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18019926528" />
        <script dangerouslySetInnerHTML={{ __html: GTAG_INIT }} />
        {/* Must stay after GTAG_INIT — that block is what defines `gtag`. */}
        <script dangerouslySetInnerHTML={{ __html: GTAG_CONVERSION }} />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <script dangerouslySetInnerHTML={{ __html: HYDRATION_FAILSAFE }} />
        <SeoHead />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const pinnedLang = useRouterState({ select: (s) => langFromSearch(s.location.search) });
  const isAdminPath = pathname.startsWith("/admin");

  // Hydration made it — keep the reveal animations enabled.
  useEffect(() => {
    const w = window as unknown as { __uaHydration?: number };
    if (w.__uaHydration) window.clearTimeout(w.__uaHydration);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider initialLang={pinnedLang}>
        <div className="relative min-h-screen bg-background text-foreground">
          {!isAdminPath && <Navbar />}
          <main>
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          {!isAdminPath && (
            <>
              <Footer />
              <FloatingContact />
            </>
          )}
        </div>
      </I18nProvider>
    </QueryClientProvider>
  );
}
