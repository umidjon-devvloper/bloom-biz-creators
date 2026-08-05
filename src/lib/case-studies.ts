import type { Lang } from "@/i18n/translations";
import { PROJECTS } from "./site";

/**
 * Case-study narratives, written from what this repo can actually back up: the
 * project's scope, its stack, and the live URL you can click. Deliberately
 * absent are business metrics ("+300% conversion", "2M users") — those belong to
 * the client, not to us, and an unverifiable number on a case study page is the
 * fastest way to lose a lead who checks.
 *
 * `metrics` and `quote` are optional and currently unset. Fill them in ONLY with
 * figures a client has confirmed in writing, and a quote from a named person at
 * a named company. The detail page renders those sections only when present, so
 * leaving them empty costs nothing and claims nothing.
 */

export type CaseMetric = { value: string; label: string };

export type CaseQuote = { text: string; author: string; role: string };

export type CaseStudyCopy = {
  /** Page <h1> — written as an outcome, not a product name. */
  title: string;
  /** Meta description + card summary. Keep under ~160 chars. */
  summary: string;
  /** What the client was stuck with before the project. */
  problem: string;
  /** The approach and the reasoning behind the technical choices. */
  solution: string;
  /** Concretely shipped, verifiable by opening the live site. */
  delivered: string[];
};

export type CaseStudy = {
  slug: string;
  /** Index into PROJECTS — keeps image, stack and live URL in one place. */
  project: string;
  client: string;
  industry: Record<Lang, string>;
  /** Real client-confirmed figures only. Left out until they exist. */
  metrics?: CaseMetric[];
  /** Real, attributable quote only. Left out until one exists. */
  quote?: Record<Lang, CaseQuote>;
  copy: Record<Lang, CaseStudyCopy>;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "kbkm",
    project: "Kichik Biznesga Ko'maklashish Markazi",
    client: "Kichik Biznesga Ko'maklashish Markazi",
    industry: { uz: "Davlat sektori", ru: "Госсектор", en: "Public sector" },
    copy: {
      uz: {
        title: "Davlat markazi sayti — uch tilda, sekin internetga chidamli",
        summary:
          "Kichik biznesga ko'maklashish markazining rasmiy sayti: o'zbek, rus va ingliz tillari, har biri alohida indekslanadi.",
        problem:
          "Markaz tadbirkorlarga xizmat ko'rsatadi, lekin sayt davlat tashkiloti talablariga javob berishi kerak edi: uchta til majburiy, ustiga foydalanuvchilarning katta qismi viloyatlardan, sekin mobil internet orqali kiradi. Bir tilli yoki og'ir yuklanadigan sayt bu auditoriyani yo'qotardi.",
        solution:
          "Vite + React + TypeScript ustida qurdik va tilni interfeysga emas, marshrutga bog'ladik: har bir til o'z URL va o'z meta teglariga ega, shuning uchun Google uchta versiyani alohida indekslaydi — bu bir sahifada til almashtirishdan farqli natija beradi. Yuklanish tomonida kod bo'laklab uzatiladi va rasmlar WebP'ga o'tkaziladi, chunki bu yerda hal qiluvchi omil — dizayn emas, 3G'da birinchi ekran qancha vaqtda chiqishi.",
        delivered: [
          "Uchta to'liq til (uz / ru / en) — har birida alohida URL va meta teglar",
          "Ko'p tilli SEO strukturasi: til bo'yicha ajratilgan sarlavha va tavsiflar",
          "Mobil-first layout — 360px ekrandan boshlab to'liq moslashgan",
          "Code-splitting va WebP rasmlar — sekin mobil ulanish uchun",
          "TypeScript bilan tipizatsiya qilingan kod bazasi, keyingi kengaytirish uchun",
        ],
      },
      ru: {
        title: "Сайт государственного центра — три языка, устойчив к медленному интернету",
        summary:
          "Официальный сайт центра поддержки малого бизнеса: узбекский, русский и английский, каждый индексируется отдельно.",
        problem:
          "Центр работает с предпринимателями, но сайт должен был соответствовать требованиям госорганизации: три языка обязательны, при этом значительная часть посетителей заходит из регионов через медленный мобильный интернет. Одноязычный или тяжёлый сайт терял бы эту аудиторию.",
        solution:
          "Собрали на Vite + React + TypeScript и привязали язык не к интерфейсу, а к маршруту: у каждого языка свой URL и свои meta-теги, поэтому Google индексирует три версии отдельно — результат заметно отличается от переключения языка на одной странице. На стороне загрузки код разбит на части, изображения отдаются в WebP: здесь решает не дизайн, а то, за сколько на 3G появится первый экран.",
        delivered: [
          "Три полных языка (uz / ru / en) — у каждого свой URL и meta-теги",
          "Многоязычная SEO-структура: раздельные заголовки и описания по языкам",
          "Mobile-first вёрстка — полная адаптация начиная с 360px",
          "Code-splitting и WebP-изображения — под медленное мобильное соединение",
          "Типизированная на TypeScript кодовая база под дальнейшее расширение",
        ],
      },
      en: {
        title: "A government centre's site — three languages, built for slow connections",
        summary:
          "The official site for Uzbekistan's small-business support centre: Uzbek, Russian and English, each indexed separately.",
        problem:
          "The centre serves entrepreneurs, but the site had to meet public-sector requirements: three languages were mandatory, and a large share of visitors arrive from the regions over slow mobile connections. A single-language or heavy site would have lost that audience.",
        solution:
          "We built it on Vite + React + TypeScript and tied language to the route rather than the interface: each language has its own URL and its own meta tags, so Google indexes three versions separately — a materially different outcome from swapping language on one page. On the loading side the bundle is code-split and images are served as WebP, because what decides things here isn't the design, it's how fast the first screen appears on 3G.",
        delivered: [
          "Three complete languages (uz / ru / en) — each with its own URL and meta tags",
          "Multilingual SEO structure: per-language titles and descriptions",
          "Mobile-first layout — fully adapted from 360px up",
          "Code-splitting and WebP images — for slow mobile connections",
          "A TypeScript-typed codebase, ready to extend",
        ],
      },
    },
  },
  {
    slug: "artsuzani",
    project: "ArtSuzani — Luxury E-Commerce",
    client: "ArtSuzani",
    industry: {
      uz: "E-commerce · Hunarmandchilik",
      ru: "E-commerce · Ремёсла",
      en: "E-commerce · Handicrafts",
    },
    copy: {
      uz: {
        title: "O'zbek hunarmandchiligi uchun xalqaro onlayn do'kon",
        summary:
          "Stripe to'lovi, Sanity CMS va Next.js RSC ustida qurilgan premium e-commerce — katalogni mijoz o'zi boshqaradi.",
        problem:
          "Mahsulotlar xalqaro xaridorga mo'ljallangan edi, ya'ni to'lov chet el kartalari bilan o'tishi kerak. Ikkinchi muammo tashkiliy: har bir yangi mahsulot uchun dasturchiga murojaat qilish sotuvni sekinlashtiradi — katalogni egasi o'zi to'ldirishi shart edi.",
        solution:
          "Next.js 14 App Router va React Server Components tanladik: mahsulot sahifalari serverda render bo'ladi, demak katalog qidiruv tizimlariga to'liq ochiq. Katalogni Sanity CMS'ga chiqardik — mijoz mahsulot, rasm va matnni admin paneldan o'zi qo'shadi, deploy kutmaydi. To'lov uchun Stripe Checkout ulandi, shu bilan karta ma'lumotlari hech qachon saytga tushmaydi va PCI yuklamasi Stripe tomonida qoladi.",
        delivered: [
          "Sanity CMS — mahsulot, kategoriya va matnlarni mijoz o'zi boshqaradi",
          "Stripe Checkout — xalqaro kartalar, karta ma'lumoti saytda saqlanmaydi",
          "Savat va wishlist — sessiya bo'ylab saqlanadi",
          "Next.js RSC bilan server-side rendering — katalog SEO uchun ochiq",
          "TypeScript kod bazasi + Tailwind dizayn tizimi",
        ],
      },
      ru: {
        title: "Международный интернет-магазин узбекских ремёсел",
        summary:
          "Премиальный e-commerce на Stripe, Sanity CMS и Next.js RSC — каталогом управляет сам клиент.",
        problem:
          "Товары рассчитаны на зарубежного покупателя, значит оплата должна проходить иностранными картами. Вторая проблема организационная: обращаться к разработчику из-за каждого нового товара замедляет продажи — владелец должен наполнять каталог сам.",
        solution:
          "Выбрали Next.js 14 App Router и React Server Components: страницы товаров рендерятся на сервере, то есть каталог полностью открыт поисковикам. Каталог вынесли в Sanity CMS — клиент добавляет товары, изображения и тексты из админки, не дожидаясь деплоя. Для оплаты подключили Stripe Checkout: данные карты никогда не попадают на сайт, а PCI-нагрузка остаётся на стороне Stripe.",
        delivered: [
          "Sanity CMS — товарами, категориями и текстами управляет клиент",
          "Stripe Checkout — зарубежные карты, данные карты на сайте не хранятся",
          "Корзина и wishlist — сохраняются в рамках сессии",
          "Server-side rendering на Next.js RSC — каталог открыт для SEO",
          "Кодовая база на TypeScript + дизайн-система на Tailwind",
        ],
      },
      en: {
        title: "An international storefront for Uzbek handicrafts",
        summary:
          "Premium e-commerce on Stripe, Sanity CMS and Next.js RSC — the client runs the catalog themselves.",
        problem:
          "The products target international buyers, which means payment has to clear on foreign cards. The second problem was operational: going through a developer for every new product slows selling down — the owner needed to fill the catalog themselves.",
        solution:
          "We chose Next.js 14 App Router with React Server Components: product pages render on the server, so the catalog is fully open to search engines. The catalog moved into Sanity CMS — the client adds products, images and copy from an admin panel without waiting on a deploy. For payments we wired up Stripe Checkout, so card details never touch the site and the PCI burden stays on Stripe's side.",
        delivered: [
          "Sanity CMS — the client manages products, categories and copy",
          "Stripe Checkout — international cards, no card data stored on the site",
          "Cart and wishlist — persisted across the session",
          "Server-side rendering via Next.js RSC — catalog open to SEO",
          "TypeScript codebase + Tailwind design system",
        ],
      },
    },
  },
  {
    slug: "bukhara-suzana",
    project: "Bukhara Suzana — Artisan Brand",
    client: "Bukhara Suzana",
    industry: { uz: "E-commerce · Brend", ru: "E-commerce · Бренд", en: "E-commerce · Brand" },
    copy: {
      uz: {
        title: "Suzana brendi uchun vitrina — so'rov to'g'ridan-to'g'ri WhatsApp'ga",
        summary:
          "Mahsulot galereyasi va filtri, har bir mahsulotdan tayyor matn bilan WhatsApp'ga o'tish oqimi.",
        problem:
          "Brendning mahsulotlari bor edi, lekin onlayn vitrinasi yo'q — xaridor nima borligini ko'rmaydi. Shu bilan birga to'liq e-commerce (to'lov, savat, ombor) bu bosqichda ortiqcha edi: xaridorlar odatda yozib, narx va yetkazib berishni suhbatda kelishadi.",
        solution:
          "To'lov tizimini qo'shish o'rniga mavjud xatti-harakatni tezlashtirdik. Sayt — mahsulot galereyasi va filtr, har bir mahsulot yonida WhatsApp tugmasi: bosilganda chat mahsulot nomi bilan oldindan to'ldirilgan holda ochiladi. Xaridor hech narsa yozmaydi, sotuvchi kim nima haqida so'rayotganini darhol biladi. Stack ataylab yengil — React + Vite + Tailwind, statik hosting, oylik server xarajati yo'q.",
        delivered: [
          "Mahsulot galereyasi — kategoriya bo'yicha dinamik filtr",
          "Har bir mahsulotdan WhatsApp'ga tayyor matn bilan o'tish",
          "Statik hosting — server xarajati yo'q, ishlash barqaror",
          "Mobil-first: trafikning asosiy qismi telefondan",
          "shadcn/ui asosidagi izchil komponent tizimi",
        ],
      },
      ru: {
        title: "Витрина для бренда сюзане — заявка сразу в WhatsApp",
        summary:
          "Галерея товаров с фильтром и переход в WhatsApp с уже подготовленным текстом по каждому товару.",
        problem:
          "У бренда были товары, но не было онлайн-витрины — покупатель просто не видит ассортимент. При этом полноценный e-commerce (оплата, корзина, склад) на этом этапе был лишним: покупатели обычно пишут и договариваются о цене и доставке в переписке.",
        solution:
          "Вместо подключения платежей мы ускорили уже существующее поведение. Сайт — это галерея с фильтром, где у каждого товара есть кнопка WhatsApp: по клику чат открывается с заранее заполненным названием товара. Покупателю не нужно ничего печатать, продавец сразу видит, о чём спрашивают. Стек намеренно лёгкий — React + Vite + Tailwind, статический хостинг, без ежемесячных расходов на сервер.",
        delivered: [
          "Галерея товаров — динамический фильтр по категориям",
          "Переход в WhatsApp с готовым текстом по каждому товару",
          "Статический хостинг — без затрат на сервер, стабильная работа",
          "Mobile-first: основная часть трафика с телефона",
          "Согласованная система компонентов на shadcn/ui",
        ],
      },
      en: {
        title: "A storefront for a suzani brand — enquiries straight into WhatsApp",
        summary: "A filterable product gallery, with a prefilled WhatsApp handoff on every item.",
        problem:
          "The brand had products but no online storefront — buyers simply couldn't see the range. At the same time, full e-commerce (payments, cart, inventory) was overkill at this stage: buyers typically message and settle price and delivery in conversation.",
        solution:
          "Rather than bolting on payments, we made the behaviour that already existed faster. The site is a filterable gallery where every product carries a WhatsApp button: one tap opens the chat prefilled with the product name. The buyer types nothing, and the seller immediately knows what's being asked about. The stack is deliberately light — React + Vite + Tailwind on static hosting, with no monthly server cost.",
        delivered: [
          "Product gallery — dynamic filtering by category",
          "Prefilled WhatsApp handoff from every product",
          "Static hosting — no server cost, stable under load",
          "Mobile-first: the bulk of traffic arrives on phones",
          "A consistent component system built on shadcn/ui",
        ],
      },
    },
  },
  {
    slug: "sarasilvers",
    project: "SARA SILVERS — Jewelry Brand",
    client: "SARA SILVERS",
    industry: {
      uz: "E-commerce · Zargarlik",
      ru: "E-commerce · Ювелирика",
      en: "E-commerce · Jewelry",
    },
    copy: {
      uz: {
        title: "Zargarlik brendi uchun mahsulotni yaqindan ko'rsatadigan do'kon",
        summary:
          "Mahsulot zoom, silliq sahifa o'tishlari va savat — zargarlik detallari ekranda ko'rinadigan e-commerce.",
        problem:
          "Zargarlikda xarid qarori detaldan boshlanadi: naqsh, tosh o'tirishi, sirt ishlovi. Kichik katalog rasmida bu ko'rinmaydi, natijada xaridor ishonch hosil qilmaydi va yozib so'rashga ham ulgurmaydi.",
        solution:
          "Interfeysni bitta vazifa atrofida qurdik — mahsulotni yaqindan ko'rsatish. Rasm zoom bilan ochiladi, sahifalar orasidagi o'tish Framer Motion bilan uzluksiz qilingan, shuning uchun katalogdan mahsulotga o'tishda kontekst yo'qolmaydi. Animatsiyalar dizayn uchun emas, xaridorni mahsulot ustida ushlab turish uchun: har bir o'tish uzilib qolsa, foydalanuvchi ortga qaytadi.",
        delivered: [
          "Mahsulot rasmini zoom bilan yaqindan ko'rish",
          "Framer Motion bilan uzluksiz sahifa o'tishlari",
          "Savat — mobil ekranda ham to'liq ishlaydi",
          "TypeScript + Tailwind bilan tipizatsiya qilingan kod bazasi",
        ],
      },
      ru: {
        title: "Магазин для ювелирного бренда, где изделие видно вблизи",
        summary:
          "Зум товара, плавные переходы между страницами и корзина — e-commerce, в котором видны детали изделия.",
        problem:
          "В ювелирке решение о покупке начинается с детали: узор, посадка камня, обработка поверхности. На маленькой карточке этого не видно, покупатель не набирает уверенности и часто даже не доходит до вопроса в переписке.",
        solution:
          "Интерфейс построили вокруг одной задачи — показать изделие вблизи. Изображение открывается с зумом, переходы между страницами сделаны непрерывными на Framer Motion, поэтому при переходе из каталога в товар не теряется контекст. Анимации здесь не для красоты, а чтобы удержать покупателя на товаре: любой разрыв в переходе возвращает пользователя назад.",
        delivered: [
          "Просмотр изделия вблизи с зумом изображения",
          "Непрерывные переходы между страницами на Framer Motion",
          "Корзина — полностью работает и на мобильном экране",
          "Типизированная кодовая база на TypeScript + Tailwind",
        ],
      },
      en: {
        title: "A jewelry store where the piece is visible up close",
        summary:
          "Product zoom, seamless page transitions and a cart — e-commerce where the craftsmanship actually shows.",
        problem:
          "In jewelry the buying decision starts with detail: the pattern, how a stone is set, the finish. A small catalog thumbnail hides all of that, so the buyer never builds confidence and often doesn't even get as far as asking.",
        solution:
          "We built the interface around one job — showing the piece up close. Images open with zoom, and page transitions were made continuous with Framer Motion so context isn't lost moving from catalog to product. The animation isn't decoration; it's there to keep the buyer on the product, because every broken transition sends a user back.",
        delivered: [
          "Close-up product viewing with image zoom",
          "Seamless page transitions via Framer Motion",
          "A cart that works fully on mobile screens",
          "A typed codebase on TypeScript + Tailwind",
        ],
      },
    },
  },
  {
    slug: "gijduvan-crafts",
    project: "Bukhara Handcrafted Ceramics",
    client: "Gijduvan Crafts",
    industry: {
      uz: "Landing · Hunarmandchilik",
      ru: "Landing · Ремёсла",
      en: "Landing · Handicrafts",
    },
    copy: {
      uz: {
        title: "Sopol markazi uchun landing — mahsulot va usta hikoyasi bir sahifada",
        summary:
          "Buxoro sopol hunarmandchiligi markazining onlayn vitrinasi: galereya va scroll animatsiyalar.",
        problem:
          "Markazning qiymati mahsulotning o'zida emas, uning qanday yasalganida — bu hikoyani quruq katalog yetkazmaydi.",
        solution:
          "Bir sahifali struktura tanladik va scroll bo'ylab hikoyani bosqichma-bosqich ochdik: mahsulot, jarayon, usta. Animatsiyalar scroll pozitsiyasiga bog'langan, shuning uchun foydalanuvchi o'qish tezligini o'zi belgilaydi.",
        delivered: [
          "Bir sahifali hikoya strukturasi — mahsulot, jarayon, usta",
          "Scroll pozitsiyasiga bog'langan animatsiyalar va parallax",
          "Mahsulot galereyasi",
          "React + Vite + Tailwind, statik hosting",
        ],
      },
      ru: {
        title: "Лендинг для центра керамики — изделие и история мастера на одной странице",
        summary: "Онлайн-витрина бухарского центра керамики: галерея и анимации по скроллу.",
        problem:
          "Ценность центра не в самом изделии, а в том, как оно сделано — сухой каталог эту историю не передаёт.",
        solution:
          "Выбрали одностраничную структуру и раскрыли историю поэтапно по мере скролла: изделие, процесс, мастер. Анимации привязаны к позиции скролла, поэтому скорость чтения задаёт сам пользователь.",
        delivered: [
          "Одностраничная структура истории — изделие, процесс, мастер",
          "Анимации и параллакс, привязанные к позиции скролла",
          "Галерея изделий",
          "React + Vite + Tailwind, статический хостинг",
        ],
      },
      en: {
        title: "A landing page for a ceramics centre — the piece and the maker on one page",
        summary:
          "An online showcase for Bukhara's ceramics centre: gallery and scroll-driven animation.",
        problem:
          "The centre's value isn't the object itself but how it's made — and a dry catalog doesn't carry that story.",
        solution:
          "We chose a single-page structure and unfolded the story in stages down the scroll: the piece, the process, the maker. The animations are tied to scroll position, so the reader sets their own pace.",
        delivered: [
          "Single-page story structure — piece, process, maker",
          "Scroll-position-driven animation and parallax",
          "Product gallery",
          "React + Vite + Tailwind on static hosting",
        ],
      },
    },
  },
  {
    slug: "zarina-portfolio",
    project: "Zarina Portfolio — Designer",
    client: "Zarina",
    industry: { uz: "Portfolio · Dizayn", ru: "Портфолио · Дизайн", en: "Portfolio · Design" },
    copy: {
      uz: {
        title: "Dizayner portfoliosi — ishning o'zi interfeysdan ustun turadi",
        summary:
          "Custom cursor, silliq sahifa o'tishlari va loyiha case'lari bilan kreativ portfolio.",
        problem:
          "Dizayner portfoliosida asosiy xato — interfeys ishdan ko'proq e'tibor tortishi. Shu bilan birga portfolio o'zi ham dizayn namunasi bo'lishi kerak.",
        solution:
          "Interfeysni minimal qoldirdik, e'tiborni esa detalga yo'naltirdik: custom cursor va sahifa o'tishlari sezilarli, lekin ishning ustiga chiqmaydi. Har bir loyiha alohida case sahifasi sifatida ochiladi.",
        delivered: [
          "Custom cursor va sahifa o'tishlari",
          "Har bir loyiha uchun alohida case sahifasi",
          "React + TypeScript + Framer Motion",
        ],
      },
      ru: {
        title: "Портфолио дизайнера — работа важнее интерфейса",
        summary:
          "Креативное портфолио с кастомным курсором, плавными переходами и кейсами проектов.",
        problem:
          "Главная ошибка в портфолио дизайнера — интерфейс притягивает больше внимания, чем работы. При этом само портфолио тоже должно быть примером дизайна.",
        solution:
          "Интерфейс оставили минимальным, а внимание направили в детали: кастомный курсор и переходы заметны, но не перекрывают работы. Каждый проект открывается отдельной страницей-кейсом.",
        delivered: [
          "Кастомный курсор и переходы между страницами",
          "Отдельная страница-кейс для каждого проекта",
          "React + TypeScript + Framer Motion",
        ],
      },
      en: {
        title: "A designer's portfolio — the work outranks the interface",
        summary:
          "A creative portfolio with a custom cursor, smooth transitions and per-project cases.",
        problem:
          "The classic mistake in a designer's portfolio is an interface that pulls more attention than the work. And yet the portfolio itself still has to be a piece of design.",
        solution:
          "We kept the interface minimal and pushed the attention into details: the custom cursor and page transitions are noticeable but never sit on top of the work. Each project opens as its own case page.",
        delivered: [
          "Custom cursor and page transitions",
          "A dedicated case page per project",
          "React + TypeScript + Framer Motion",
        ],
      },
    },
  },
];

/** Case study joined with its PROJECTS entry (image, stack, live URL). */
export function getCaseStudy(slug: string) {
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) return null;
  const project = PROJECTS.find((p) => p.title === study.project);
  return project ? { study, project } : null;
}

export function listCaseStudies() {
  return CASE_STUDIES.map((study) => ({
    study,
    project: PROJECTS.find((p) => p.title === study.project),
  })).filter((c): c is { study: CaseStudy; project: NonNullable<typeof c.project> } =>
    Boolean(c.project),
  );
}
