export const SITE = {
  name: "Umidjon Agency",
  short: "Umidjon",
  domain: "umidjon.agency",
  email: "hello@umidjon.agency",
  phone: "+998 90 000 00 00",
  phoneHref: "tel:+998900000000",
  telegram: "https://t.me/umidjon_agency",
  telegramHandle: "@umidjon_agency",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
} as const;

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
  highlight: string;
  featured?: boolean;
  wip?: boolean;
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
    highlight: "Government project · 3 languages · LCP < 1.8s",
    featured: true,
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
    highlight: "Stripe checkout · Sanity CMS · RSC architecture",
    featured: true,
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
    highlight: "Dynamic filters · WhatsApp inquiry flow",
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
    highlight: "Framer Motion transitions · luxury UX",
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
    highlight: "Scroll-triggered animations · parallax",
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
    highlight: "Custom cursor · animated case studies",
  },
  {
    n: "10",
    title: "QuickDeliver — React Native App",
    cat: "Mobile · WIP",
    filter: "mobile",
    desc: "Cross-platform delivery tracking app with real-time map, push notifications, courier dashboard, and order history.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "Google Maps"],
    image: "https://so3gvgph8j.ufs.sh/f/xumlocXZMUIuuFYMrcuiihWKq3pPEtbuSF4Ydz0jvM8HNoGI",
    live: "#",
    github: "https://github.com/umidjon11111",
    highlight: "Real-time map · push notifications",
    wip: true,
  },
];

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
