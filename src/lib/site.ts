export const SITE = {
  name: "Umidjon Agency",
  short: "Umidjon",
  domain: "umidjon.agency",
  email: "umidjongafforov175@gmail.com",
  phone: "+998 93 655 89 59",
  phoneHref: "tel:+998936558959",
  // Telegram is resolved by phone number, which always reaches the account.
  // Set `telegramUsername` (without "@") once a public @username exists — that
  // is the only form Telegram accepts a prefilled `?text=` message on.
  telegram: "https://t.me/+998936558959",
  telegramHandle: "+998 93 655 89 59",
  telegramUsername: "" as string,
  github: "https://github.com/umidjon-devvloper",
  linkedin: "https://www.linkedin.com/in/umidjon-gafforov-8b151b325/",
} as const;

/**
 * Telegram deep link. A prefilled message only survives the username form of
 * the link, so with a phone-number link we return the bare URL rather than a
 * URL with a `?text=` that Telegram would silently drop.
 */
export function telegramLink(text?: string) {
  if (!SITE.telegramUsername) return SITE.telegram;
  const base = `https://t.me/${SITE.telegramUsername}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${SITE.phoneHref.replace("tel:+", "")}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export type ProjectFilter = "web" | "mobile" | "ecom";

export type Project = {
  n: string;
  title: string;
  cat: string;
  filter: ProjectFilter;
  desc: string;
  stack: string[];
  image: string;
  live: string;
  github: string;
  /** Mobile builds ship to the stores instead of a URL — either may be absent. */
  appStore?: string;
  playStore?: string;
  highlight: string;
  featured?: boolean;
  wip?: boolean;
  /** Paid client work on a live domain, as opposed to a personal/demo build. */
  client?: boolean;
  /** Slug of the matching entry in lib/case-studies.ts, when one exists. */
  caseStudy?: string;
};

export const PROJECTS: Project[] = [
  {
    n: "01",
    title: "Kichik Biznesga Ko'maklashish Markazi",
    cat: "Government · Featured",
    filter: "web",
    desc: "Official website for Uzbekistan's small business support center — government-grade performance & multilingual SEO (uz/ru/en).",
    stack: ["Vite", "React", "TypeScript", "Tailwind", "i18n"],
    image: "https://so3gvgph8j.ufs.sh/f/xumlocXZMUIuuFYMrcuiihWKq3pPEtbuSF4Ydz0jvM8HNoGI",
    live: "https://www.kbkm.uz/",
    github: "https://www.kbkm.uz/",
    highlight: "Davlat loyihasi · 3 til (uz/ru/en)",
    featured: true,
    client: true,
    caseStudy: "kbkm",
  },
  {
    n: "02",
    title: "ArtSuzani — Luxury E-Commerce",
    cat: "Full Stack · Featured",
    filter: "ecom",
    desc: "Premium cultural e-commerce store for Uzbek handicrafts — cart, wishlist, Stripe checkout, and CMS-driven catalog.",
    stack: ["Next.js 14", "TypeScript", "Stripe", "Sanity CMS", "Tailwind"],
    image: "https://9onczztehf.ufs.sh/f/lneKO3fyzBmDh65vxdm22nFCasfAVwB3vicE98dJYzL70xgQ",
    live: "https://artsuzani.com/",
    github: "https://github.com/umidjon11111/new-artsuzani",
    highlight: "Stripe to'lov · Sanity CMS · Next.js RSC",
    featured: true,
    client: true,
    caseStudy: "artsuzani",
  },
  {
    n: "03",
    title: "Bukhara Suzana — Artisan Brand",
    cat: "E-Commerce",
    filter: "ecom",
    desc: "Premium storefront for Bukhara Suzana artisan brand with product gallery, filter system, and inquiry form.",
    stack: ["React", "Tailwind", "Vite", "shadcn/ui"],
    image: "https://f0ld2x7t5g.ufs.sh/f/JID5A1v1KvIQSmOe7QPHNpM03SEyTdFC5gAxk6WDYvjmRe4f",
    live: "https://www.bukhara-suzana.uz/",
    github: "https://www.bukhara-suzana.uz/",
    highlight: "Dinamik filtr · WhatsApp so'rov oqimi",
    client: true,
    caseStudy: "bukhara-suzana",
  },
  {
    n: "04",
    title: "SARA SILVERS — Jewelry Brand",
    cat: "E-Commerce",
    filter: "ecom",
    desc: "Elegant luxury e-commerce experience for a jewelry brand — smooth page transitions, product zoom, and cart.",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    image: "https://1or2ln6vsi.ufs.sh/f/WvKcB7zm4E5nNokxVw8HaWg52t8OU41rFixISdsb09zGm6ER",
    live: "https://www.sarasilvers.uz/",
    github: "https://www.sarasilvers.uz/",
    highlight: "Mahsulot zoom · silliq sahifa o'tishlari",
    client: true,
    caseStudy: "sarasilvers",
  },
  {
    n: "05",
    title: "Telegram Clone — Real-Time Chat",
    cat: "Full Stack",
    filter: "web",
    desc: "Telegram clone with real-time messaging, online status, and group chats.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB", "Socket.IO"],
    image: "https://8npyms8qz2.ufs.sh/f/tLZsXxIXMCJ3V3uX0saHDndsQlN8tBf1m4ZRa9zAoPqUMSb0",
    live: "https://umidjon-telegram-clone.vercel.app/",
    github: "https://umidjon-telegram-clone.vercel.app/",
    highlight: "Real-time chat · Socket.IO · MongoDB Atlas",
  },
  {
    n: "06",
    title: "Developer Blog Platform",
    cat: "Full Stack",
    filter: "web",
    desc: "Full-stack blog platform with Next.js frontend and MongoDB backend.",
    stack: ["React", "TypeScript", "Recharts", "shadcn/ui", "Node.js", "PostgreSQL"],
    image: "https://8npyms8qz2.ufs.sh/f/tLZsXxIXMCJ3I77NHmaO97eTx5VliNWKpA2MdEPcvX3a6nmr",
    live: "https://www.umidjon-blog.site/en",
    github: "https://www.umidjon-blog.site/en",
    highlight: "Multi-language blog · CMS",
  },
  {
    n: "07",
    title: "Google Drive Clone — File Storage",
    cat: "Full Stack",
    filter: "web",
    desc: "Clone of Google Drive with file upload, download, and sharing capabilities.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
    image: "https://8npyms8qz2.ufs.sh/f/tLZsXxIXMCJ3mNF6Yl8bA7KitD4hROGkjT6wfM8craUXPWxJ",
    live: "https://google-drive.umidjon.dev/",
    github: "https://google-drive.umidjon.dev/",
    highlight: "File upload/download · REST API design",
  },
  {
    n: "08",
    title: "Bukhara Handcrafted Ceramics",
    cat: "Landing & Brand",
    filter: "web",
    desc: "Online showcase for Bukhara's traditional handcraft center — immersive scroll animations and product gallery.",
    stack: ["React", "Tailwind", "Vite", "shadcn/ui", "Framer Motion"],
    image: "https://1or2ln6vsi.ufs.sh/f/WvKcB7zm4E5n3hpeTljmlSRBk49t8PFzJeiCQ0OyDK6hNAvf",
    live: "https://gijduvan-crafts.vercel.app/",
    github: "https://gijduvan-crafts.vercel.app/",
    highlight: "Scroll animatsiyalar · mahsulot galereyasi",
    client: true,
    caseStudy: "gijduvan-crafts",
  },
  {
    n: "09",
    title: "Zarina Portfolio — Designer",
    cat: "Landing & Brand",
    filter: "web",
    desc: "Creative portfolio for designer Zarina — custom cursor, smooth page transitions, project case studies.",
    stack: ["React", "TypeScript", "Tailwind", "Vite", "Framer Motion"],
    image: "https://9onczztehf.ufs.sh/f/lneKO3fyzBmDyM1w52hRijYT6sSMXCNLO7bgUWv3KD4dVlzP",
    live: "https://zarina-portfolio-ruby.vercel.app/",
    github: "https://zarina-portfolio-ruby.vercel.app/",
    highlight: "Custom cursor · sahifa o'tishlari",
    client: true,
    caseStudy: "zarina-portfolio",
  },
  {
    n: "10",
    title: "Chinora Website - Landing Page",
    cat: "Landing & Brand",
    filter: "web",
    desc: "Landing page for Chinora — modern design with smooth animations and responsive layout.",
    stack: ["React ", "TypeScript"],
    image: "https://vjuubkjgs6.ufs.sh/f/ATnCuPXyY61ivvH79IQeAZnJsWz6ONDLFMUj9IbERfpViXgc",
    live: "https://www.chinar-school.uz",
    github: "https://www.chinar-school.uz",
    highlight: "Real-time map · push notifications",
    wip: true,
  },
  {
    n: "11",
    title: "Chinora school — React Native App",
    cat: "Landing & Brand",
    filter: "mobile",
    desc: "Mobile application for Chinora school — built with React Native and Expo, featuring real-time updates and push notifications.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase"],
    image: "https://vjuubkjgs6.ufs.sh/f/ATnCuPXyY61iR2QqMtDw2MCnmoShDAe4HPrufQ3Kql6kOvIT",
    // No web URL — the app itself is the deliverable, so the stores are the links.
    live: "#",
    github: "#",
    appStore: "https://apps.apple.com/uz/app/chinora-school/id6764380123",
    playStore: "https://play.google.com/store/apps/details?id=com.chinara.chinora",
    highlight: "Real-time  push notifications",
    caseStudy: "chinora-app",
  },
  {
    n: "12",
    title: "Sushi time  — React Native and Expo App",
    cat: "Landing & Brand",
    filter: "mobile",
    desc: "Mobile application for Sushi time — built with React Native and Expo, featuring real-time updates and push notifications.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "Tailwind", "Push Notifications"],
    image: "https://vjuubkjgs6.ufs.sh/f/ATnCuPXyY61iGtwWFzCgKshzbFy4nfRVW8wJLrAx6IimUM9e",
    // No web URL — the app itself is the deliverable, so the stores are the links.
    live: "#",
    github: "#",
    appStore: "https://apps.apple.com/us/app/sushi-time/id6783957410",
    playStore: "https://play.google.com/store/apps/details?id=com.sushitime.app",
    highlight: "Real-time  push notifications",
    caseStudy: "sushi-time",
  },
  {
    n: "13",
    title: "Zapchasty  — React Native and Expo App",
    cat: "Landing & Brand",
    filter: "mobile",
    desc: "Mobile application for Zapchasty — built with React Native and Expo, featuring real-time updates and push notifications.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "Tailwind", "Push Notifications"],
    image: "https://vjuubkjgs6.ufs.sh/f/ATnCuPXyY61itvP4Op7lcRD4YAzEN6SPXovQgifU1IG20bBt",
    // No web URL — the app itself is the deliverable, so the stores are the links.
    live: "#",
    github: "#",
    appStore: "https://apps.apple.com/us/app/zapchasty/id6789631906",
    playStore: "https://play.google.com/store/apps/details?id=com.zapchasty.zapchasty",
    highlight: "Real-time  push notifications",
    caseStudy: "zapchasty",
  },
];

/**
 * Every public number on the site is derived from PROJECTS above, so a claim
 * can always be checked against the portfolio grid — each entry links to a live
 * URL. Nothing here is a marketing figure: if a number cannot be verified by
 * clicking through, it does not belong in this object.
 *
 * `years` is the only hand-maintained value — bump it, don't inflate it.
 */
export const FACTS = {
  /** Shipped and reachable — excludes work in progress. */
  projects: PROJECTS.filter((p) => !p.wip).length,
  /** Paid client work, as opposed to personal builds and clones. */
  clients: PROJECTS.filter((p) => p.client).length,
  years: 3,
  responseHours: 24,
} as const;

export type FactKey = keyof typeof FACTS;

/** Client work with a live URL — the proof block links straight to these. */
export const CLIENT_SITES = PROJECTS.filter((p) => p.client && p.live !== "#");

export const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "React Native",
  "Flutter",
  "PostgreSQL",
  "Tailwind CSS",
  "Figma",
  "Docker",
  "GraphQL",
  "AWS",
] as const;
