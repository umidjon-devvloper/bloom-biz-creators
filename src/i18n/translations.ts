export type Lang = "uz" | "ru" | "en";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "uz", label: "O'zbekcha", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

type Dict = {
  nav: { home: string; services: string; portfolio: string; team: string; about: string; contact: string };
  common: { order: string; viewWork: string; learnMore: string; from: string; getStarted: string; back: string };
  hero: {
    badge: string;
    titleA: string;
    titleHl: string;
    titleB: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    trust: string[];
    metrics: { label: string; value: string }[];
    codeCaption: string;
    stack: string;
  };
  home: {
    servicesTitleA: string;
    servicesTitleHl: string;
    servicesDesc: string;
    processEyebrow: string;
    processTitleA: string;
    processTitleHl: string;
    processDesc: string;
    process: { title: string; desc: string }[];
    stackEyebrow: string;
    stackTitle: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    seeAll: string;
    featuredEyebrow: string;
    featuredTitleA: string;
    featuredTitleHl: string;
  };
  services: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    items: { title: string; desc: string; from: string }[];
    calcEyebrow: string;
    calcTitleA: string;
    calcTitleHl: string;
    calcDesc: string;
    pagesLabel: string;
    addonsLabel: string;
    designLabel: string;
    total: string;
    oneTime: string;
    selected: string;
    orderAtPrice: string;
    replyNote: string;
    pages: { label: string; desc: string }[];
    addons: { label: string; desc: string }[];
    design: { label: string; desc: string }[];
    free: string;
  };
  portfolio: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    filters: string[];
    view: string;
    items: { title: string; desc: string }[];
  };
  team: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    members: { name: string; role: string; level: string }[];
    joinTitle: string;
    joinDesc: string;
    joinBtn: string;
  };
  about: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    body: string;
    points: string[];
    stats: { value: number; suffix: string; label: string }[];
    whyEyebrow: string;
    whyTitleA: string;
    whyTitleHl: string;
    whyDesc: string;
    reasons: { title: string; desc: string }[];
    faqEyebrow: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
    testiEyebrow: string;
    testiTitleA: string;
    testiTitleHl: string;
    reviews: { name: string; role: string; text: string }[];
  };
  contact: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    name: string;
    namePh: string;
    phone: string;
    email: string;
    projectType: string;
    choose: string;
    budget: string;
    budgetPh: string;
    note: string;
    notePh: string;
    submit: string;
    sending: string;
    sent: string;
    successMsg: string;
    types: string[];
    replyTitle: string;
    replyHours: string;
    phoneLabel: string;
    emailLabel: string;
    telegramLabel: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    companyTitle: string;
    services: string[];
    company: string[];
    rights: string;
    location: string;
  };
  floating: string;
  notFound: { title: string; desc: string; home: string };
};

const uz: Dict = {
  nav: { home: "Bosh sahifa", services: "Xizmatlar", portfolio: "Portfolio", team: "Jamoa", about: "Biz haqimizda", contact: "Aloqa" },
  common: { order: "Buyurtma berish", viewWork: "Ishlarni ko'rish", learnMore: "Batafsil", from: "dan boshlab", getStarted: "Loyihani boshlash", back: "Orqaga" },
  hero: {
    badge: "Yangi loyihalar uchun bandmiz — 2026",
    titleA: "Biznesingiz uchun",
    titleHl: "professional websayt",
    titleB: "va ilovalar",
    subtitle:
      "Tez, sifatli va shaffof narxda. Narx kalkulyatori orqali loyihangiz qiymatini bir daqiqada hisoblang — bo'sh so'zsiz, aniq raqam bilan.",
    cta1: "Buyurtma berish",
    cta2: "Portfolio ko'rish",
    trust: ["50+ tugallangan loyiha", "3+ yil tajriba", "24 soat ichida javob", "100% shaffof narx"],
    metrics: [
      { label: "Konversiya", value: "+184%" },
      { label: "Sahifa tezligi", value: "1.2s" },
      { label: "SEO ball", value: "98/100" },
    ],
    codeCaption: "umidjon.agency — mijoz loyihasi",
    stack: "Biz ishlaydigan texnologiyalar",
  },
  home: {
    servicesTitleA: "Bir joydan —",
    servicesTitleHl: "to'liq mahsulot",
    servicesDesc: "Dizayndan tortib serverni ishga tushirishgacha. Bir jamoa, bitta manzil.",
    processEyebrow: "Ish jarayoni",
    processTitleA: "G'oyadan",
    processTitleHl: "ishga tushirishgacha",
    processDesc: "Har bir bosqichda siz jarayonda ishtirok etasiz — hech qanday kutilmagan holat yo'q.",
    process: [
      { title: "Brief va tahlil", desc: "Biznesingizni, maqsad va raqobatchilarni o'rganamiz." },
      { title: "Dizayn va prototip", desc: "UI/UX prototip — kod yozishdan oldin ko'rasiz va tasdiqlaysiz." },
      { title: "Ishlab chiqish", desc: "Toza kod, haftalik demo va real-time progress." },
      { title: "Ishga tushirish", desc: "Test, deploy va 3 oy bepul texnik yordam." },
    ],
    stackEyebrow: "Texnologiyalar",
    stackTitle: "Zamonaviy va ishonchli stack",
    ctaTitle: "G'oyangiz bormi? Keling, birga quramiz.",
    ctaDesc: "Bir necha daqiqada narxni hisoblang yoki to'g'ridan-to'g'ri bog'laning. Javob 24 soat ichida.",
    ctaBtn: "Bepul konsultatsiya",
    seeAll: "Barchasini ko'rish",
    featuredEyebrow: "Tanlangan ishlar",
    featuredTitleA: "So'nggi",
    featuredTitleHl: "loyihalarimiz",
  },
  services: {
    eyebrow: "Xizmatlarimiz",
    titleA: "Bir joydan —",
    titleHl: "to'liq mahsulot",
    desc: "Dizayndan tortib serverni ishga tushirishgacha. Bir jamoa, bitta manzil.",
    items: [
      { title: "Landing page", desc: "Konversiya uchun optimallashtirilgan, tez yuklanadigan bir sahifali sayt.", from: "$300" },
      { title: "Korporativ sayt", desc: "Kompaniyangiz uchun ko'p sahifali, CMS bilan boshqariladigan yechim.", from: "$800" },
      { title: "Onlayn do'kon", desc: "To'lov, savat, admin panel — sotuvni to'liq boshqariladigan e-commerce.", from: "$1 500" },
      { title: "Mobil ilova", desc: "iOS va Android uchun native tuyg'udagi cross-platform ilovalar.", from: "$2 500" },
      { title: "Backend / API", desc: "Xavfsiz, kengayadigan server infratuzilma va REST/GraphQL API.", from: "$600" },
      { title: "UI/UX dizayn", desc: "Brend darajasidagi, foydalanuvchini o'ylab yaratilgan mahsulot dizayni.", from: "$400" },
    ],
    calcEyebrow: "Shaffof narx",
    calcTitleA: "Loyihangiz narxini",
    calcTitleHl: "o'zingiz hisoblang",
    calcDesc: "Hech qanday yashirin to'lov yo'q. Nima tanlasangiz — shu narx.",
    pagesLabel: "Sahifalar soni",
    addonsLabel: "Qo'shimcha imkoniyatlar",
    designLabel: "Dizayn darajasi",
    total: "Umumiy narx",
    oneTime: "bir martalik to'lov · KDS'siz",
    selected: "Tanlangan konfiguratsiya:",
    orderAtPrice: "Shu narxda buyurtma berish",
    replyNote: "24 soat ichida aniq taklif yuboramiz",
    pages: [
      { label: "1 sahifa", desc: "Landing / bir sahifali" },
      { label: "3–5 sahifa", desc: "Kichik biznes sayti" },
      { label: "5+ sahifa", desc: "Korporativ / katalog" },
    ],
    addons: [
      { label: "To'lov tizimi integratsiyasi", desc: "Click, Payme, Stripe" },
      { label: "SEO optimizatsiya", desc: "Meta, sitemap, Core Web Vitals" },
      { label: "Admin panel", desc: "Kontentni o'zingiz boshqarasiz" },
      { label: "Mobil ilova qo'shish", desc: "iOS + Android versiya" },
    ],
    design: [
      { label: "Standart", desc: "Toza, professional shablon" },
      { label: "Premium", desc: "Awwwards darajasidagi custom dizayn" },
    ],
    free: "Bepul",
  },
  portfolio: {
    eyebrow: "Bajarilgan ishlar",
    titleA: "Loyihalarimiz —",
    titleHl: "natijalar tili bilan",
    desc: "Ba'zi mijozlar oshkora ko'rsatishga ruxsat bermagan — to'liq portfolio uchun bog'laning.",
    filters: ["Barchasi", "Websaytlar", "Mobil ilovalar", "E-commerce"],
    view: "Ko'rish",
    items: [
      { title: "Finora Bank", desc: "Onlayn bank uchun mijoz kabineti" },
      { title: "Osiyo Market", desc: "Ko'p sotuvchili marketplace" },
      { title: "FitPulse", desc: "Sog'liq va sport uchun mobil ilova" },
      { title: "Toshkent Delivery", desc: "Restoran va yetkazib berish platformasi" },
      { title: "SilkRoad Store", desc: "Hunarmandchilik onlayn do'koni" },
      { title: "EduKids", desc: "Bolalar uchun ta'lim ilovasi" },
    ],
  },
  team: {
    eyebrow: "Jamoa",
    titleA: "Kod yozadigan",
    titleHl: "haqiqiy odamlar",
    desc: "Har bir mutaxassisning darajasi va texnologiyalari ochiq ko'rsatilgan.",
    members: [
      { name: "Umidjon Gafforov", role: "Asoschi & Lead Developer", level: "Founder" },
      { name: "Diyorbek Hikmatulayev", role: "Full-Stack Developer", level: "Senior" },
      { name: "Usmonjon Abduroziqov", role: "Frontend Developer", level: "Senior" },
    ],
    joinTitle: "Jamoaga qo'shilmoqchimisiz?",
    joinDesc: "Biz doim iqtidorli dasturchi va dizaynerlarni izlaymiz. Rezyumeingizni yuboring.",
    joinBtn: "Vakansiyalar",
  },
  about: {
    eyebrow: "Biz haqimizda",
    titleA: "Raqamli kelajakni",
    titleHl: "bugun quramiz",
    desc: "Premium raqamli agentlik. Har bir loyihaga mahsulot egasidek qaraymiz — chunki natija sizniki, obro' bizniki.",
    body:
      "Umidjon Agency — bu startaplar, korxonalar va ilg'or g'oyalar uchun zamonaviy SaaS platformalar, sun'iy intellekt yechimlari va raqamli mahsulotlar yaratuvchi xalqaro agentlik. Bizning maqsadimiz: premium darajadagi dizayn va mustahkam kod orqali biznesingizga haqiqiy qiymat qo'shish.",
    points: [
      "Har bir loyihaga bitta shaxsiy menejer biriktiriladi",
      "Haftalik hisobot va real-time progress",
      "Kod sizniki — GitHub'da sizga topshiriladi",
      "Ishga tushirgandan keyin 3 oy bepul texnik yordam",
    ],
    stats: [
      { value: 50, suffix: "+", label: "Tugallangan loyiha" },
      { value: 3, suffix: "+", label: "Yillik tajriba" },
      { value: 100, suffix: "%", label: "Mijoz mamnunligi" },
      { value: 24, suffix: "s", label: "O'rtacha javob vaqti" },
    ],
    whyEyebrow: "Nega bizni tanlash kerak",
    whyTitleA: "Boshqa dasturchiga emas,",
    whyTitleHl: "bizga yozing",
    whyDesc: "Chunki biz siz uchun oddiy 'buyurtma' emas, uzoq muddatli hamkorsiz.",
    reasons: [
      { title: "Shaffof narx", desc: "Kalkulyator orqali yakuniy narxni oldindan bilasiz. Yashirin qo'shimchalar yo'q." },
      { title: "Tez yetkazib berish", desc: "Landing 7 kunda, korporativ sayt 2–3 haftada. Deadlinelarga qattiq amal qilamiz." },
      { title: "Jamoaviy ish", desc: "Bitta frilanser emas — dizayner, dev va menejerdan iborat jamoa." },
      { title: "Doimiy yordam", desc: "3 oy bepul bug-fix va konsultatsiya. Keyin arzon oylik obuna." },
      { title: "Kod sizniki", desc: "GitHub repozitoriya sizga topshiriladi. Hech qanday qulflash yo'q." },
      { title: "Natijaga yo'naltirilgan", desc: "Konversiya, tezlik, SEO — dizayn go'zal, lekin biznes ham o'sadi." },
    ],
    faqEyebrow: "Savol-javob",
    faqTitle: "Ko'p beriladigan savollar",
    faq: [
      { q: "Loyiha qancha vaqtda tayyor bo'ladi?", a: "Landing page — 7 kun, korporativ sayt — 2–3 hafta, e-commerce va ilovalar — 4–8 hafta. Aniq muddat brief bosqichida belgilanadi." },
      { q: "To'lov qanday amalga oshiriladi?", a: "Odatda 50% oldindan, 50% ishga tushirishda. Katta loyihalar bosqichli to'lov bilan ham mumkin." },
      { q: "Kod menga topshiriladimi?", a: "Ha, to'liq kod bazasi GitHub orqali sizga topshiriladi. Hech qanday qulflash yoki bog'liqlik yo'q." },
      { q: "Ishga tushgandan keyin yordam beriladimi?", a: "Ha, 3 oy bepul texnik yordam va bug-fix. Undan keyin arzon oylik qo'llab-quvvatlash paketi mavjud." },
    ],
    testiEyebrow: "Mijozlar fikri",
    testiTitleA: "Bizni",
    testiTitleHl: "mijozlarimiz gapiradi",
    reviews: [
      { name: "Aziz Rasulov", role: "Asoschisi, Osiyo Market", text: "Narx kalkulyatori orqali qanchaga tushishini bilib, xotirjam buyurtma berdik. 3 hafta ichida sayt ishga tushdi va konversiyamiz 2 barobar oshdi." },
      { name: "Malika Yusupova", role: "Marketing direktori, Finora", text: "Dizayn darajasi kutilganidan yuqori chiqdi. Jamoa har hafta demo qildi, hech qanday kutilmagan holat bo'lmadi." },
      { name: "Rustam Karimov", role: "CEO, SilkRoad", text: "Ilgari bir necha frilanser bilan ishlagandim, deadline muammosi doim bor edi. Bularda hamma narsa aniq — o'z vaqtida topshirildi." },
    ],
  },
  contact: {
    eyebrow: "Buyurtma / Aloqa",
    titleA: "Loyihangizni",
    titleHl: "bugun boshlaymiz",
    desc: "Formani to'ldiring — 24 soat ichida siz bilan bog'lanamiz va aniq taklif yuboramiz.",
    name: "Ism *",
    namePh: "Ismingiz",
    phone: "Telefon *",
    email: "Email *",
    projectType: "Loyiha turi",
    choose: "Tanlang…",
    budget: "Byudjet",
    budgetPh: "$0 (kalkulyatordan avtomatik)",
    note: "Qo'shimcha izoh",
    notePh: "Loyihangiz haqida qisqacha yozing…",
    submit: "Buyurtmani yuborish",
    sending: "Yuborilmoqda…",
    sent: "Yuborildi!",
    successMsg: "Rahmat! Arizangiz qabul qilindi — 24 soat ichida javob beramiz.",
    types: ["Landing page", "Korporativ sayt", "Onlayn do'kon", "Mobil ilova", "Backend / API", "Boshqa"],
    replyTitle: "24 soat ichida javob",
    replyHours: "Ish kunlari 09:00–20:00",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    telegramLabel: "Telegram",
  },
  footer: {
    tagline: "Biznesingiz uchun professional websayt va ilovalar. Shaffof narx, tez yetkazib berish, jamoaviy ish.",
    servicesTitle: "Xizmatlar",
    companyTitle: "Kompaniya",
    services: ["Landing page", "Korporativ sayt", "E-commerce", "Mobil ilova", "Backend / API"],
    company: ["Biz haqimizda", "Jamoa", "Portfolio", "Xizmatlar", "Aloqa"],
    rights: "Barcha huquqlar himoyalangan.",
    location: "Toshkent, O'zbekiston",
  },
  floating: "Telegram'da yozing",
  notFound: { title: "Sahifa topilmadi", desc: "Siz izlayotgan sahifa mavjud emas yoki ko'chirilgan.", home: "Bosh sahifaga" },
};

const ru: Dict = {
  nav: { home: "Главная", services: "Услуги", portfolio: "Портфолио", team: "Команда", about: "О нас", contact: "Контакты" },
  common: { order: "Оставить заявку", viewWork: "Смотреть работы", learnMore: "Подробнее", from: "от", getStarted: "Начать проект", back: "Назад" },
  hero: {
    badge: "Открыт набор новых проектов — 2026",
    titleA: "Профессиональные",
    titleHl: "сайты и приложения",
    titleB: "для вашего бизнеса",
    subtitle:
      "Быстро, качественно и по прозрачной цене. Рассчитайте стоимость проекта за минуту с помощью калькулятора — без пустых слов, с точной цифрой.",
    cta1: "Оставить заявку",
    cta2: "Смотреть портфолио",
    trust: ["50+ завершённых проектов", "3+ года опыта", "Ответ за 24 часа", "100% прозрачная цена"],
    metrics: [
      { label: "Конверсия", value: "+184%" },
      { label: "Скорость", value: "1.2с" },
      { label: "SEO балл", value: "98/100" },
    ],
    codeCaption: "umidjon.agency — проект клиента",
    stack: "Технологии, с которыми мы работаем",
  },
  home: {
    servicesTitleA: "Всё в одном месте —",
    servicesTitleHl: "готовый продукт",
    servicesDesc: "От дизайна до запуска сервера. Одна команда, один адрес.",
    processEyebrow: "Процесс работы",
    processTitleA: "От идеи",
    processTitleHl: "до запуска",
    processDesc: "На каждом этапе вы участвуете в процессе — никаких неожиданностей.",
    process: [
      { title: "Бриф и анализ", desc: "Изучаем ваш бизнес, цели и конкурентов." },
      { title: "Дизайн и прототип", desc: "UI/UX прототип — вы видите и утверждаете до написания кода." },
      { title: "Разработка", desc: "Чистый код, еженедельные демо и прогресс в реальном времени." },
      { title: "Запуск", desc: "Тестирование, деплой и 3 месяца бесплатной поддержки." },
    ],
    stackEyebrow: "Технологии",
    stackTitle: "Современный и надёжный стек",
    ctaTitle: "Есть идея? Давайте построим вместе.",
    ctaDesc: "Рассчитайте цену за пару минут или свяжитесь напрямую. Ответ в течение 24 часов.",
    ctaBtn: "Бесплатная консультация",
    seeAll: "Смотреть все",
    featuredEyebrow: "Избранные работы",
    featuredTitleA: "Наши последние",
    featuredTitleHl: "проекты",
  },
  services: {
    eyebrow: "Наши услуги",
    titleA: "Всё в одном месте —",
    titleHl: "готовый продукт",
    desc: "От дизайна до запуска сервера. Одна команда, один адрес.",
    items: [
      { title: "Landing page", desc: "Оптимизированный под конверсию, быстро загружаемый одностраничный сайт.", from: "$300" },
      { title: "Корпоративный сайт", desc: "Многостраничное решение с CMS для вашей компании.", from: "$800" },
      { title: "Интернет-магазин", desc: "Оплата, корзина, админ-панель — полноценный e-commerce.", from: "$1 500" },
      { title: "Мобильное приложение", desc: "Кроссплатформенные приложения с нативным ощущением для iOS и Android.", from: "$2 500" },
      { title: "Backend / API", desc: "Безопасная, масштабируемая серверная инфраструктура и REST/GraphQL API.", from: "$600" },
      { title: "UI/UX дизайн", desc: "Дизайн продукта уровня бренда, продуманный до мелочей.", from: "$400" },
    ],
    calcEyebrow: "Прозрачная цена",
    calcTitleA: "Рассчитайте стоимость",
    calcTitleHl: "проекта сами",
    calcDesc: "Никаких скрытых платежей. Что выбрали — то и цена.",
    pagesLabel: "Количество страниц",
    addonsLabel: "Дополнительные опции",
    designLabel: "Уровень дизайна",
    total: "Итоговая цена",
    oneTime: "разовый платёж · без НДС",
    selected: "Выбранная конфигурация:",
    orderAtPrice: "Заказать по этой цене",
    replyNote: "Точное предложение в течение 24 часов",
    pages: [
      { label: "1 страница", desc: "Landing / одностраничный" },
      { label: "3–5 страниц", desc: "Сайт малого бизнеса" },
      { label: "5+ страниц", desc: "Корпоративный / каталог" },
    ],
    addons: [
      { label: "Интеграция платёжных систем", desc: "Click, Payme, Stripe" },
      { label: "SEO оптимизация", desc: "Meta, sitemap, Core Web Vitals" },
      { label: "Админ-панель", desc: "Управляйте контентом сами" },
      { label: "Добавить моб. приложение", desc: "Версия для iOS + Android" },
    ],
    design: [
      { label: "Стандарт", desc: "Чистый профессиональный шаблон" },
      { label: "Премиум", desc: "Кастомный дизайн уровня Awwwards" },
    ],
    free: "Бесплатно",
  },
  portfolio: {
    eyebrow: "Выполненные работы",
    titleA: "Наши проекты —",
    titleHl: "языком результатов",
    desc: "Некоторые клиенты не разрешили публиковать — свяжитесь для полного портфолио.",
    filters: ["Все", "Сайты", "Приложения", "E-commerce"],
    view: "Смотреть",
    items: [
      { title: "Finora Bank", desc: "Личный кабинет для онлайн-банка" },
      { title: "Osiyo Market", desc: "Маркетплейс с несколькими продавцами" },
      { title: "FitPulse", desc: "Мобильное приложение для здоровья и спорта" },
      { title: "Toshkent Delivery", desc: "Платформа ресторанов и доставки" },
      { title: "SilkRoad Store", desc: "Интернет-магазин ремесленных изделий" },
      { title: "EduKids", desc: "Образовательное приложение для детей" },
    ],
  },
  team: {
    eyebrow: "Команда",
    titleA: "Настоящие люди,",
    titleHl: "которые пишут код",
    desc: "Уровень и технологии каждого специалиста показаны открыто.",
    members: [
      { name: "Умиджон Юсупов", role: "Основатель & Lead Developer", level: "Founder" },
      { name: "Жасур Каримов", role: "Full-Stack разработчик", level: "Senior" },
      { name: "Нозима Рахманова", role: "UI/UX дизайнер", level: "Senior" },
      { name: "Сардор Юсупов", role: "Мобильный разработчик", level: "Middle+" },
      { name: "Дилноза Турсунова", role: "Backend инженер", level: "Middle" },
      { name: "Азиз Саттаров", role: "QA & DevOps", level: "Middle" },
    ],
    joinTitle: "Хотите в команду?",
    joinDesc: "Мы всегда ищем талантливых разработчиков и дизайнеров. Присылайте резюме.",
    joinBtn: "Вакансии",
  },
  about: {
    eyebrow: "О нас",
    titleA: "Создаем цифровое",
    titleHl: "будущее сегодня",
    desc: "Премиальное диджитал агентство. К каждому проекту относимся как владельцы продукта — ведь результат ваш, а репутация наша.",
    body:
      "Umidjon Agency — международное агентство цифровых продуктов, создающее современные SaaS-платформы, ИИ-решения и корпоративное ПО. Наша цель — приносить реальную пользу вашему бизнесу через дизайн мирового уровня и надежную инженерию.",
    points: [
      "К каждому проекту прикрепляется персональный менеджер",
      "Еженедельные отчёты и прогресс в реальном времени",
      "Код ваш — передаётся вам через GitHub",
      "3 месяца бесплатной техподдержки после запуска",
    ],
    stats: [
      { value: 50, suffix: "+", label: "Завершённых проектов" },
      { value: 3, suffix: "+", label: "Года опыта" },
      { value: 100, suffix: "%", label: "Довольных клиентов" },
      { value: 24, suffix: "ч", label: "Среднее время ответа" },
    ],
    whyEyebrow: "Почему выбирают нас",
    whyTitleA: "Пишите не другому разработчику,",
    whyTitleHl: "а нам",
    whyDesc: "Потому что для нас вы не просто «заказ», а долгосрочный партнёр.",
    reasons: [
      { title: "Прозрачная цена", desc: "Финальную цену узнаёте заранее через калькулятор. Никаких скрытых доплат." },
      { title: "Быстрая сдача", desc: "Landing за 7 дней, корпоративный сайт за 2–3 недели. Строго соблюдаем дедлайны." },
      { title: "Командная работа", desc: "Не один фрилансер — команда из дизайнера, разработчика и менеджера." },
      { title: "Постоянная поддержка", desc: "3 месяца бесплатных исправлений и консультаций. Далее — недорогая подписка." },
      { title: "Код ваш", desc: "GitHub-репозиторий передаётся вам. Никакой привязки." },
      { title: "Ориентация на результат", desc: "Конверсия, скорость, SEO — дизайн красив, но и бизнес растёт." },
    ],
    faqEyebrow: "Вопросы и ответы",
    faqTitle: "Частые вопросы",
    faq: [
      { q: "За сколько будет готов проект?", a: "Landing page — 7 дней, корпоративный сайт — 2–3 недели, e-commerce и приложения — 4–8 недель. Точный срок определяется на этапе брифа." },
      { q: "Как происходит оплата?", a: "Обычно 50% предоплата, 50% при запуске. Крупные проекты — поэтапная оплата." },
      { q: "Передаётся ли мне код?", a: "Да, вся кодовая база передаётся вам через GitHub. Никакой блокировки или привязки." },
      { q: "Есть ли поддержка после запуска?", a: "Да, 3 месяца бесплатной техподдержки и исправлений. Далее доступен недорогой пакет сопровождения." },
    ],
    testiEyebrow: "Отзывы клиентов",
    testiTitleA: "О нас говорят",
    testiTitleHl: "наши клиенты",
    reviews: [
      { name: "Азиз Расулов", role: "Основатель, Osiyo Market", text: "Зная точную стоимость через калькулятор, мы спокойно оформили заказ. Сайт запустили за 3 недели, конверсия выросла вдвое." },
      { name: "Малика Юсупова", role: "Директор по маркетингу, Finora", text: "Уровень дизайна превзошёл ожидания. Команда каждую неделю показывала демо, никаких неожиданностей." },
      { name: "Рустам Каримов", role: "CEO, SilkRoad", text: "Раньше работал с фрилансерами — вечные проблемы с дедлайнами. Здесь всё чётко — сдали вовремя." },
    ],
  },
  contact: {
    eyebrow: "Заявка / Контакты",
    titleA: "Начнём ваш проект",
    titleHl: "сегодня",
    desc: "Заполните форму — свяжемся в течение 24 часов и пришлём точное предложение.",
    name: "Имя *",
    namePh: "Ваше имя",
    phone: "Телефон *",
    email: "Email *",
    projectType: "Тип проекта",
    choose: "Выберите…",
    budget: "Бюджет",
    budgetPh: "$0 (автоматически из калькулятора)",
    note: "Комментарий",
    notePh: "Кратко опишите ваш проект…",
    submit: "Отправить заявку",
    sending: "Отправка…",
    sent: "Отправлено!",
    successMsg: "Спасибо! Заявка принята — ответим в течение 24 часов.",
    types: ["Landing page", "Корпоративный сайт", "Интернет-магазин", "Мобильное приложение", "Backend / API", "Другое"],
    replyTitle: "Ответ за 24 часа",
    replyHours: "Будни 09:00–20:00",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    telegramLabel: "Telegram",
  },
  footer: {
    tagline: "Профессиональные сайты и приложения для вашего бизнеса. Прозрачная цена, быстрая сдача, командная работа.",
    servicesTitle: "Услуги",
    companyTitle: "Компания",
    services: ["Landing page", "Корпоративный сайт", "E-commerce", "Мобильное приложение", "Backend / API"],
    company: ["О нас", "Команда", "Портфолио", "Услуги", "Контакты"],
    rights: "Все права защищены.",
    location: "Ташкент, Узбекистан",
  },
  floating: "Написать в Telegram",
  notFound: { title: "Страница не найдена", desc: "Страница, которую вы ищете, не существует или была перемещена.", home: "На главную" },
};

const en: Dict = {
  nav: { home: "Home", services: "Services", portfolio: "Portfolio", team: "Team", about: "About", contact: "Contact" },
  common: { order: "Get a quote", viewWork: "View work", learnMore: "Learn more", from: "from", getStarted: "Start a project", back: "Back" },
  hero: {
    badge: "Open for new projects — 2026",
    titleA: "Professional",
    titleHl: "websites & apps",
    titleB: "for your business",
    subtitle:
      "Fast, high-quality and transparently priced. Calculate your project's cost in a minute with our calculator — no vague words, just an exact number.",
    cta1: "Get a quote",
    cta2: "View portfolio",
    trust: ["50+ completed projects", "3+ years of experience", "Reply within 24h", "100% transparent pricing"],
    metrics: [
      { label: "Conversion", value: "+184%" },
      { label: "Page speed", value: "1.2s" },
      { label: "SEO score", value: "98/100" },
    ],
    codeCaption: "umidjon.agency — client project",
    stack: "Technologies we work with",
  },
  home: {
    servicesTitleA: "Everything in one place —",
    servicesTitleHl: "a finished product",
    servicesDesc: "From design to server launch. One team, one address.",
    processEyebrow: "How we work",
    processTitleA: "From idea",
    processTitleHl: "to launch",
    processDesc: "You're involved at every stage — no surprises along the way.",
    process: [
      { title: "Brief & analysis", desc: "We study your business, goals and competitors." },
      { title: "Design & prototype", desc: "UI/UX prototype — you see and approve it before any code." },
      { title: "Development", desc: "Clean code, weekly demos and real-time progress." },
      { title: "Launch", desc: "Testing, deploy and 3 months of free technical support." },
    ],
    stackEyebrow: "Technologies",
    stackTitle: "A modern, reliable stack",
    ctaTitle: "Got an idea? Let's build it together.",
    ctaDesc: "Calculate the price in a couple of minutes or reach out directly. We reply within 24 hours.",
    ctaBtn: "Free consultation",
    seeAll: "See all",
    featuredEyebrow: "Featured work",
    featuredTitleA: "Our latest",
    featuredTitleHl: "projects",
  },
  services: {
    eyebrow: "Our services",
    titleA: "Everything in one place —",
    titleHl: "a finished product",
    desc: "From design to server launch. One team, one address.",
    items: [
      { title: "Landing page", desc: "A fast-loading, conversion-optimized single-page site.", from: "$300" },
      { title: "Corporate website", desc: "A multi-page, CMS-driven solution for your company.", from: "$800" },
      { title: "Online store", desc: "Payments, cart, admin panel — fully managed e-commerce.", from: "$1,500" },
      { title: "Mobile app", desc: "Cross-platform apps with a native feel for iOS and Android.", from: "$2,500" },
      { title: "Backend / API", desc: "Secure, scalable server infrastructure and REST/GraphQL APIs.", from: "$600" },
      { title: "UI/UX design", desc: "Brand-level product design, crafted around the user.", from: "$400" },
    ],
    calcEyebrow: "Transparent pricing",
    calcTitleA: "Calculate your project's",
    calcTitleHl: "price yourself",
    calcDesc: "No hidden fees. What you pick is what you pay.",
    pagesLabel: "Number of pages",
    addonsLabel: "Additional features",
    designLabel: "Design level",
    total: "Total price",
    oneTime: "one-time payment · no VAT",
    selected: "Selected configuration:",
    orderAtPrice: "Order at this price",
    replyNote: "We'll send an exact proposal within 24h",
    pages: [
      { label: "1 page", desc: "Landing / single page" },
      { label: "3–5 pages", desc: "Small business site" },
      { label: "5+ pages", desc: "Corporate / catalog" },
    ],
    addons: [
      { label: "Payment integration", desc: "Click, Payme, Stripe" },
      { label: "SEO optimization", desc: "Meta, sitemap, Core Web Vitals" },
      { label: "Admin panel", desc: "Manage content yourself" },
      { label: "Add mobile app", desc: "iOS + Android version" },
    ],
    design: [
      { label: "Standard", desc: "Clean, professional template" },
      { label: "Premium", desc: "Awwwards-level custom design" },
    ],
    free: "Free",
  },
  portfolio: {
    eyebrow: "Selected work",
    titleA: "Our projects —",
    titleHl: "in the language of results",
    desc: "Some clients didn't allow public display — reach out for the full portfolio.",
    filters: ["All", "Websites", "Mobile apps", "E-commerce"],
    view: "View",
    items: [
      { title: "Finora Bank", desc: "Customer dashboard for an online bank" },
      { title: "Osiyo Market", desc: "Multi-vendor marketplace" },
      { title: "FitPulse", desc: "Health & fitness mobile app" },
      { title: "Toshkent Delivery", desc: "Restaurant & delivery platform" },
      { title: "SilkRoad Store", desc: "Handicrafts online store" },
      { title: "EduKids", desc: "Educational app for children" },
    ],
  },
  team: {
    eyebrow: "Team",
    titleA: "Real people",
    titleHl: "who write the code",
    desc: "Each specialist's level and technologies are shown openly.",
    members: [
      { name: "Umidjon Gafforov", role: "Founder & Lead Developer", level: "Founder" },
      { name: "Diyorbek Hikmatulayev", role: "Full-Stack Developer", level: "Senior" },
      { name: "Usmonjon Abduroziqov", role: "Frontend Developer", level: "Senior" },
    ],
    joinTitle: "Want to join the team?",
    joinDesc: "We're always looking for talented developers and designers. Send us your resume.",
    joinBtn: "Open roles",
  },
  about: {
    eyebrow: "About us",
    titleA: "Building the digital",
    titleHl: "future, today.",
    desc: "A premium digital agency. We treat every project like product owners — because the result is yours, and the reputation is ours.",
    body:
      "Umidjon Agency is an international digital product agency building modern SaaS platforms, AI solutions, and Enterprise Software. Our goal is simple: to create products that add real value to your business through world-class design and robust engineering.",
    points: [
      "A dedicated personal manager for every project",
      "Weekly reports and real-time progress",
      "The code is yours — handed over via GitHub",
      "3 months of free technical support after launch",
    ],
    stats: [
      { value: 50, suffix: "+", label: "Completed projects" },
      { value: 3, suffix: "+", label: "Years of experience" },
      { value: 100, suffix: "%", label: "Client satisfaction" },
      { value: 24, suffix: "h", label: "Average response time" },
    ],
    whyEyebrow: "Why choose us",
    whyTitleA: "Don't write to another dev —",
    whyTitleHl: "write to us",
    whyDesc: "Because to us you're not just an 'order', but a long-term partner.",
    reasons: [
      { title: "Transparent pricing", desc: "Know the final price upfront via the calculator. No hidden add-ons." },
      { title: "Fast delivery", desc: "Landing in 7 days, corporate site in 2–3 weeks. We stick to deadlines." },
      { title: "Team work", desc: "Not a single freelancer — a team of designer, dev and manager." },
      { title: "Ongoing support", desc: "3 months of free bug-fixes and consulting. Then an affordable monthly plan." },
      { title: "The code is yours", desc: "The GitHub repository is handed over to you. No lock-in." },
      { title: "Result-focused", desc: "Conversion, speed, SEO — the design is beautiful, and the business grows too." },
    ],
    faqEyebrow: "Q&A",
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "How long until the project is ready?", a: "Landing page — 7 days, corporate site — 2–3 weeks, e-commerce and apps — 4–8 weeks. The exact timeline is set at the brief stage." },
      { q: "How does payment work?", a: "Usually 50% upfront, 50% at launch. Large projects can be paid in stages too." },
      { q: "Do I get the code?", a: "Yes, the full codebase is handed to you via GitHub. No lock-in or dependency." },
      { q: "Is there support after launch?", a: "Yes, 3 months of free technical support and bug-fixes. After that an affordable maintenance package is available." },
    ],
    testiEyebrow: "Client reviews",
    testiTitleA: "Our clients",
    testiTitleHl: "speak for us",
    reviews: [
      { name: "Aziz Rasulov", role: "Founder, Osiyo Market", text: "Knowing the exact cost via the calculator, we ordered with confidence. The site launched in 3 weeks and our conversion doubled." },
      { name: "Malika Yusupova", role: "Marketing Director, Finora", text: "The design quality exceeded expectations. The team demoed every week — no surprises at all." },
      { name: "Rustam Karimov", role: "CEO, SilkRoad", text: "I used to work with several freelancers and deadlines were always a problem. Here everything was clear — delivered on time." },
    ],
  },
  contact: {
    eyebrow: "Order / Contact",
    titleA: "Let's start your project",
    titleHl: "today",
    desc: "Fill out the form — we'll get in touch within 24 hours with an exact proposal.",
    name: "Name *",
    namePh: "Your name",
    phone: "Phone *",
    email: "Email *",
    projectType: "Project type",
    choose: "Choose…",
    budget: "Budget",
    budgetPh: "$0 (auto from calculator)",
    note: "Additional note",
    notePh: "Briefly describe your project…",
    submit: "Send request",
    sending: "Sending…",
    sent: "Sent!",
    successMsg: "Thank you! Your request has been received — we'll reply within 24 hours.",
    types: ["Landing page", "Corporate website", "Online store", "Mobile app", "Backend / API", "Other"],
    replyTitle: "Reply within 24h",
    replyHours: "Weekdays 09:00–20:00",
    phoneLabel: "Phone",
    emailLabel: "Email",
    telegramLabel: "Telegram",
  },
  footer: {
    tagline: "Professional websites and apps for your business. Transparent pricing, fast delivery, team work.",
    servicesTitle: "Services",
    companyTitle: "Company",
    services: ["Landing page", "Corporate website", "E-commerce", "Mobile app", "Backend / API"],
    company: ["About", "Team", "Portfolio", "Services", "Contact"],
    rights: "All rights reserved.",
    location: "Tashkent, Uzbekistan",
  },
  floating: "Message on Telegram",
  notFound: { title: "Page not found", desc: "The page you're looking for doesn't exist or has been moved.", home: "Go home" },
};

export const translations: Record<Lang, Dict> = { uz, ru, en };
export type { Dict };
