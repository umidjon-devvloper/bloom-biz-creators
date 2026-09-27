export type Lang = "uz" | "ru" | "en";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "uz", label: "O'zbekcha", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

/**
 * Keys into lib/site.ts FACTS. Stat blocks reference a fact by key instead of
 * carrying their own number, so a figure can never drift out of sync between
 * languages — or drift away from the portfolio it is supposed to describe.
 */
type StatKey = "projects" | "clients" | "years" | "responseHours";

type Stat = { key: StatKey; suffix: string; label: string };

type Dict = {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    cases: string;
    team: string;
    about: string;
    contact: string;
  };
  common: {
    order: string;
    viewWork: string;
    learnMore: string;
    from: string;
    startingFrom: string;
    getStarted: string;
    back: string;
    openSite: string;
    writeTelegram: string;
    callNow: string;
    calcPrice: string;
  };
  hero: {
    badge: string;
    titleA: string;
    titleHl: string;
    titleB: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    stats: Stat[];
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
  proof: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    liveNote: string;
    openSite: string;
    readCase: string;
    noReviewsTitle: string;
    noReviewsBody: string;
  };
  services: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    items: { title: string; desc: string; from: string }[];
  };
  calc: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    step: string;
    of: string;
    next: string;
    prev: string;
    restart: string;
    skip: string;
    steps: {
      type: { label: string; hint: string; options: { label: string; desc: string }[] };
      pages: { label: string; hint: string; options: { label: string; desc: string }[] };
      addons: { label: string; hint: string; options: { label: string; desc: string }[] };
      design: { label: string; hint: string; options: { label: string; desc: string }[] };
    };
    resultEyebrow: string;
    resultTitle: string;
    rangeNote: string;
    selected: string;
    disclaimer: string;
    telegramCta: string;
    formTitle: string;
    formDesc: string;
    formName: string;
    formNamePh: string;
    formContact: string;
    formContactPh: string;
    formSubmit: string;
    formSending: string;
    formSent: string;
    formSentDesc: string;
    formErrorRequired: string;
    formErrorNetwork: string;
    privacy: string;
    telegramMessage: string;
  };
  portfolio: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    filters: string[];
    view: string;
    readCase: string;
    viewAll: string;
    wip: string;
  };
  cases: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    clientLabel: string;
    problem: string;
    solution: string;
    delivered: string;
    metrics: string;
    stack: string;
    liveSite: string;
    back: string;
    others: string;
    notFound: string;
    cta: string;
    ctaDesc: string;
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
    stats: Stat[];
    statsNote: string;
    whyEyebrow: string;
    whyTitleA: string;
    whyTitleHl: string;
    whyDesc: string;
    whyLeadA: string;
    whyLeadB: string;
    whyLeadBody: string;
    reasons: { title: string; desc: string }[];
    faqEyebrow: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    titleA: string;
    titleHl: string;
    desc: string;
    formTitle: string;
    name: string;
    namePh: string;
    contact: string;
    contactPh: string;
    note: string;
    notePh: string;
    submit: string;
    sending: string;
    sent: string;
    successMsg: string;
    errorRequired: string;
    errorNetwork: string;
    privacy: string;
    orDivider: string;
    replyTitle: string;
    replyHours: string;
    phoneLabel: string;
    emailLabel: string;
    telegramLabel: string;
    telegramMessage: string;
  };
  footer: {
    ctaTitleA: string;
    ctaTitleB: string;
    tagline: string;
    servicesTitle: string;
    companyTitle: string;
    platformTitle: string;
    services: string[];
    company: string[];
    platform: string[];
    rights: string;
    location: string;
  };
  /** Secondary pages reachable from the footer. */
  pages: {
    blog: { eyebrow: string; title: string; highlight: string; desc: string; empty: string };
    careers: { eyebrow: string; title: string; highlight: string; desc: string; empty: string };
    maintenance: { eyebrow: string; title: string; highlight: string; desc: string };
  };
  /** Labels describe the action, not the current state. */
  theme: { toLight: string; toDark: string };
  floating: { telegram: string; call: string; aria: string };
  notFound: { title: string; desc: string; home: string };
};

const uz: Dict = {
  nav: {
    home: "Bosh sahifa",
    services: "Xizmatlar",
    portfolio: "Portfolio",
    cases: "Case study",
    team: "Jamoa",
    about: "Biz haqimizda",
    contact: "Aloqa",
  },
  common: {
    order: "Buyurtma berish",
    viewWork: "Ishlarni ko'rish",
    learnMore: "Batafsil",
    from: "dan boshlab",
    startingFrom: "Boshlang'ich narx",
    getStarted: "Loyihani boshlash",
    back: "Orqaga",
    openSite: "Saytni ochish",
    writeTelegram: "Telegramda yozish",
    callNow: "Qo'ng'iroq qilish",
    calcPrice: "Narxni hisoblash",
  },
  hero: {
    badge: "Yangi loyihalar uchun ochiqmiz — 2026",
    titleA: "Biznesingiz uchun",
    titleHl: "professional websayt",
    titleB: "va ilovalar",
    subtitle:
      "Tez, sifatli va shaffof narxda. To'rtta savolga javob bering — loyihangizning taxminiy narxini darhol ko'rasiz, keyin bog'lanamiz.",
    cta1: "Narxni hisoblash",
    cta2: "Ishlarni ko'rish",
    stats: [
      { key: "projects", suffix: "", label: "Tugallangan loyiha" },
      { key: "clients", suffix: "", label: "Mijoz loyihasi" },
      { key: "years", suffix: "+", label: "Yil tajriba" },
    ],
    stack: "Biz ishlaydigan texnologiyalar",
  },
  home: {
    servicesTitleA: "Bir joydan —",
    servicesTitleHl: "to'liq mahsulot",
    servicesDesc: "Dizayndan tortib serverni ishga tushirishgacha. Bir jamoa, bitta manzil.",
    processEyebrow: "Ish jarayoni",
    processTitleA: "G'oyadan",
    processTitleHl: "ishga tushirishgacha",
    processDesc:
      "Har bir bosqichda siz jarayonda ishtirok etasiz — hech qanday kutilmagan holat yo'q.",
    process: [
      { title: "Brief va tahlil", desc: "Biznesingizni, maqsad va raqobatchilarni o'rganamiz." },
      {
        title: "Dizayn va prototip",
        desc: "UI/UX prototip — kod yozishdan oldin ko'rasiz va tasdiqlaysiz.",
      },
      { title: "Ishlab chiqish", desc: "Toza kod, haftalik demo va real-time progress." },
      { title: "Ishga tushirish", desc: "Test, deploy va 1 oy bepul texnik yordam." },
    ],
    stackEyebrow: "Texnologiyalar",
    stackTitle: "Zamonaviy va ishonchli stack",
    ctaTitle: "G'oyangiz bormi? Keling, birga quramiz.",
    ctaDesc:
      "Bir necha daqiqada narxni hisoblang yoki to'g'ridan-to'g'ri Telegramda yozing. Javob 24 soat ichida.",
    ctaBtn: "Bepul konsultatsiya",
    seeAll: "Barchasini ko'rish",
    featuredEyebrow: "Tanlangan ishlar",
    featuredTitleA: "So'nggi",
    featuredTitleHl: "loyihalarimiz",
  },
  proof: {
    eyebrow: "Ishlayotgan saytlar",
    titleA: "Gapga emas —",
    titleHl: "havolaga qarang",
    desc: "Quyidagi saytlarning har biri hozir internetda ishlayapti. Bosing va o'zingiz tekshiring.",
    liveNote: "Onlayn",
    openSite: "Saytni ochish",
    readCase: "Case study'ni o'qish",
    noReviewsTitle: "Yozma sharhlar hozircha yo'q",
    noReviewsBody:
      "Mijozlarimizdan hali rasmiy yozma sharh olmaganmiz, shuning uchun bu yerda hech narsa o'ylab chiqarilmagan. O'rniga tekshirishingiz mumkin bo'lgan narsani qo'ydik — ishlayotgan saytlar va ular kim uchun qilingani.",
  },
  services: {
    eyebrow: "Xizmatlarimiz",
    titleA: "Bir joydan —",
    titleHl: "to'liq mahsulot",
    desc: "Dizayndan tortib serverni ishga tushirishgacha. Bir jamoa, bitta manzil.",
    items: [
      {
        title: "Landing page",
        desc: "Konversiya uchun optimallashtirilgan, tez yuklanadigan bir sahifali sayt.",
        from: "$300",
      },
      {
        title: "Korporativ sayt",
        desc: "Kompaniyangiz uchun ko'p sahifali, CMS bilan boshqariladigan yechim.",
        from: "$800",
      },
      {
        title: "Onlayn do'kon",
        desc: "To'lov, savat, admin panel — sotuvni to'liq boshqariladigan e-commerce.",
        from: "$1 500",
      },
      {
        title: "Mobil ilova",
        desc: "iOS va Android uchun native tuyg'udagi cross-platform ilovalar.",
        from: "$2 500",
      },
      {
        title: "Backend / API",
        desc: "Xavfsiz, kengayadigan server infratuzilma va REST/GraphQL API.",
        from: "$600",
      },
      {
        title: "UI/UX dizayn",
        desc: "Brend darajasidagi, foydalanuvchini o'ylab yaratilgan mahsulot dizayni.",
        from: "$400",
      },
    ],
  },
  calc: {
    eyebrow: "Shaffof narx",
    titleA: "To'rtta savol —",
    titleHl: "taxminiy narx",
    desc: "Kontakt so'ramaymiz. Avval narxni ko'rasiz, keyin o'zingiz qaror qilasiz.",
    step: "Savol",
    of: "dan",
    next: "Keyingi",
    prev: "Orqaga",
    restart: "Boshidan hisoblash",
    skip: "O'tkazib yuborish",
    steps: {
      type: {
        label: "Sizga qanday mahsulot kerak?",
        hint: "Eng yaqin variantni tanlang — keyin aniqlashtiramiz.",
        options: [
          { label: "Landing page", desc: "Bir sahifali sayt, bitta maqsad uchun" },
          { label: "Korporativ sayt", desc: "Kompaniya sayti, bir necha bo'lim" },
          { label: "Onlayn do'kon", desc: "Katalog, savat, to'lov" },
          { label: "Mobil ilova", desc: "iOS + Android" },
        ],
      },
      pages: {
        label: "Taxminan qancha sahifa/ekran bo'ladi?",
        hint: "Aniq bilmasangiz, o'rtachasini tanlang.",
        options: [
          { label: "1 sahifa", desc: "Bitta uzun sahifa" },
          { label: "3–5 sahifa", desc: "Kichik biznes uchun" },
          { label: "6–10 sahifa", desc: "Bo'limlari ko'p sayt" },
          { label: "10+ sahifa", desc: "Katalog yoki katta portal" },
        ],
      },
      addons: {
        label: "Nima qo'shilishi kerak?",
        hint: "Bir nechtasini tanlash mumkin. Kerak bo'lmasa — bo'sh qoldiring.",
        options: [
          { label: "Onlayn to'lov", desc: "Click, Payme yoki Stripe" },
          { label: "Admin panel", desc: "Kontentni o'zingiz boshqarasiz" },
          { label: "Ko'p tillilik", desc: "uz / ru / en" },
          { label: "SEO sozlash", desc: "Meta, sitemap, tezlik" },
        ],
      },
      design: {
        label: "Dizayn darajasi?",
        hint: "Standart ham professional ko'rinadi — premium noldan chiziladi.",
        options: [
          { label: "Standart", desc: "Toza, ishonchli, tayyor struktura asosida" },
          { label: "Premium", desc: "Noldan chizilgan individual dizayn" },
        ],
      },
    },
    resultEyebrow: "Taxminiy hisob",
    resultTitle: "Loyihangiz taxminan shuncha turadi",
    rangeNote: "Aniq narx brief'dan keyin belgilanadi va bu oraliqdan chiqmaydi.",
    selected: "Tanlanganlar:",
    disclaimer:
      "Bu — kalkulyator hisobi, shartnoma emas. Talablar aniqlashgach yakuniy narxni yozma tasdiqlaymiz.",
    telegramCta: "Telegramda muhokama qilish",
    formTitle: "Yoki raqamingizni qoldiring",
    formDesc: "Ikki maydon — qolganini suhbatda so'raymiz.",
    formName: "Ism",
    formNamePh: "Ismingiz",
    formContact: "Telefon yoki Telegram",
    formContactPh: "+998 __ ___ __ __",
    formSubmit: "Aloqaga chiqing",
    formSending: "Yuborilmoqda…",
    formSent: "Qabul qilindi",
    formSentDesc: "Rahmat! Hisobingiz bilan birga qabul qildik — 24 soat ichida bog'lanamiz.",
    formErrorRequired: "Ism va telefon/Telegram to'ldirilishi kerak.",
    formErrorNetwork: "Yuborilmadi. Telegramda yozsangiz, tezroq bo'ladi.",
    privacy: "Raqamingiz faqat shu loyiha uchun ishlatiladi. Reklama yubormaymiz.",
    telegramMessage: "Salom! Saytdagi kalkulyator natijasi:",
  },
  portfolio: {
    eyebrow: "Bajarilgan ishlar",
    titleA: "Loyihalarimiz —",
    titleHl: "havola bilan",
    desc: "Har bir loyiha ishlayotgan saytga olib boradi. Ba'zilari mijoz ishi, ba'zilari o'z loyihamiz — ajratib ko'rsatganmiz.",
    filters: ["Barchasi", "Websaytlar", "Mobil ilovalar", "E-commerce"],
    view: "Ko'rish",
    readCase: "Case study",
    viewAll: "Barcha ishlarni ko'rish",
    wip: "Ishlanmoqda",
  },
  cases: {
    eyebrow: "Case study",
    titleA: "Qanday qilganimiz —",
    titleHl: "bosqichma-bosqich",
    desc: "Har bir loyiha uchun: mijozda qanday muammo bor edi, biz nima qildik va nima topshirildi.",
    clientLabel: "Mijoz",
    problem: "Muammo",
    solution: "Yechim",
    delivered: "Nima topshirildi",
    metrics: "O'lchangan natija",
    stack: "Texnologiyalar",
    liveSite: "Ishlayotgan saytni ochish",
    back: "Barcha case study'lar",
    others: "Boshqa loyihalar",
    notFound: "Bunday case study topilmadi.",
    cta: "Shunga o'xshash loyiha kerakmi?",
    ctaDesc: "Narxni kalkulyatordan ko'ring yoki to'g'ridan-to'g'ri Telegramda yozing.",
  },
  team: {
    eyebrow: "Jamoa",
    titleA: "Kod yozadigan",
    titleHl: "haqiqiy odamlar",
    desc: "Uchta dasturchi. Har birining profili ochiq — bosib tekshirishingiz mumkin.",
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
    titleA: "Toshkentda ishlaydigan",
    titleHl: "kichik jamoa",
    desc: "Katta agentlik emasmiz va bunday ko'rinishga harakat ham qilmaymiz. Uch kishi, ochiq narx, topshirilgan ishlar.",
    body: "Umidjon Agency — Toshkentda joylashgan kichik ishlab chiqish jamoasi. Biz websayt, onlayn do'kon va mobil ilovalar qilamiz. Mijozlarimiz orasida biznesga ko'maklashish markazi ham, hunarmandchilik brendlari ham bor — barchasining sayti hozir ishlayapti va portfoliodan bosib ko'rishingiz mumkin.",
    points: [
      "Har bir loyihada aloqa to'g'ridan-to'g'ri dasturchi bilan — menejer orqali emas",
      "Haftalik demo: taraqqiyotni gap bilan emas, ishlayotgan versiyada ko'rasiz",
      "Kod sizniki — GitHub repozitoriya to'liq topshiriladi",
      "Ishga tushirgandan keyin 1 oy bepul bug-fix",
    ],
    stats: [
      { key: "projects", suffix: "", label: "Tugallangan loyiha" },
      { key: "clients", suffix: "", label: "Mijoz loyihasi" },
      { key: "years", suffix: "+", label: "Yil tajriba" },
      { key: "responseHours", suffix: "s", label: "Ichida javob beramiz" },
    ],
    statsNote:
      "Bu raqamlar portfoliodan olingan — har bir loyiha ishlayotgan saytga havola qiladi, ya'ni sanab tekshirish mumkin.",
    whyEyebrow: "Nega bizni tanlash kerak",
    whyTitleA: "Boshqa dasturchiga emas,",
    whyTitleHl: "bizga yozing",
    whyDesc: "Chunki biz siz uchun oddiy 'buyurtma' emas, uzoq muddatli hamkorsiz.",
    whyLeadA: "Biz kichik jamoamiz.",
    whyLeadB: "Aynan shuning uchun ishlaydi.",
    whyLeadBody:
      "Katta agentlikda sizning loyihangiz navbatda turadi va menejer orqali uzatiladi. Bu yerda siz kod yozadigan odam bilan to'g'ridan-to'g'ri gaplashasiz — savolga javob bir kunda emas, bir soatda keladi va aytilgan narsa yo'lda o'zgarib ketmaydi.",
    reasons: [
      {
        title: "Shaffof narx",
        desc: "Kalkulyator orqali taxminiy narxni oldin bilasiz. Yashirin qo'shimchalar yo'q.",
      },
      {
        title: "Aytilgan muddat",
        desc: "Landing 7–10 kun, korporativ sayt 2–3 hafta. Muddat brief'da yozma belgilanadi.",
      },
      {
        title: "To'g'ridan-to'g'ri aloqa",
        desc: "Menejer orqali emas — loyihani qiladigan dasturchi bilan yozishasiz.",
      },
      {
        title: "Yordam davom etadi",
        desc: "1 oy bepul bug-fix va konsultatsiya. Keyin arzon oylik paket.",
      },
      {
        title: "Kod sizniki",
        desc: "GitHub repozitoriya sizga topshiriladi. Hech qanday qulflash yo'q.",
      },
      {
        title: "Tezlik va SEO",
        desc: "Sayt sekin internetda ham ochilishi kerak — buni ish qabul qilish shartiga qo'shamiz.",
      },
    ],
    faqEyebrow: "Savol-javob",
    faqTitle: "Ko'p beriladigan savollar",
    faq: [
      {
        q: "Loyiha qancha vaqtda tayyor bo'ladi?",
        a: "Landing page — 7–10 kun, korporativ sayt — 2–3 hafta, e-commerce va ilovalar — 4–8 hafta. Aniq muddat brief bosqichida yozma belgilanadi.",
      },
      {
        q: "To'lov qanday amalga oshiriladi?",
        a: "Odatda 50% oldindan, 50% ishga tushirishda. Katta loyihalar bosqichli to'lov bilan ham mumkin.",
      },
      {
        q: "Kalkulyatordagi narx yakuniymi?",
        a: "Yo'q, u taxminiy oraliq. Talablar aniqlashgach yakuniy narxni yozma tasdiqlaymiz va u ko'rsatilgan oraliqdan chiqmaydi.",
      },
      {
        q: "Kod menga topshiriladimi?",
        a: "Ha, to'liq kod bazasi GitHub orqali sizga topshiriladi. Hech qanday qulflash yoki bog'liqlik yo'q.",
      },
      {
        q: "Ishga tushgandan keyin yordam beriladimi?",
        a: "Ha, 1 oy bepul texnik yordam va bug-fix. Undan keyin arzon narxda oylik qo'llab-quvvatlash paketi mavjud.",
      },
    ],
  },
  contact: {
    eyebrow: "Aloqa",
    titleA: "Ikki maydon —",
    titleHl: "qolganini gaplashamiz",
    desc: "Uzun forma to'ldirish shart emas. Ism va raqam yetadi, batafsilini suhbatda so'raymiz.",
    formTitle: "Ariza qoldirish",
    name: "Ism",
    namePh: "Ismingiz",
    contact: "Telefon yoki Telegram",
    contactPh: "+998 __ ___ __ __",
    note: "Loyiha haqida (majburiy emas)",
    notePh: "Nima qilish kerakligini qisqacha yozing…",
    submit: "Yuborish",
    sending: "Yuborilmoqda…",
    sent: "Qabul qilindi",
    successMsg: "Rahmat! Arizangiz qabul qilindi — 24 soat ichida bog'lanamiz.",
    errorRequired: "Ism va telefon/Telegram to'ldirilishi kerak.",
    errorNetwork: "Yuborilmadi. Telegramda yozsangiz, tezroq bo'ladi.",
    privacy: "Raqamingiz faqat shu loyiha uchun ishlatiladi. Reklama yubormaymiz.",
    orDivider: "yoki darhol yozing",
    replyTitle: "24 soat ichida javob",
    replyHours: "Ish kunlari 09:00–20:00",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    telegramLabel: "Telegram",
    telegramMessage: "Salom! Saytdan yozyapman — loyiha bo'yicha maslahat kerak.",
  },
  footer: {
    ctaTitleA: "Keling,",
    ctaTitleB: "boshlaymiz.",
    tagline:
      "Toshkentdagi kichik ishlab chiqish jamoasi. Websayt, onlayn do'kon va mobil ilovalar.",
    servicesTitle: "Xizmatlar",
    companyTitle: "Kompaniya",
    platformTitle: "Boshqa",
    services: ["Landing page", "Korporativ sayt", "E-commerce", "Mobil ilova", "Backend / API"],
    company: ["Biz haqimizda", "Jamoa", "Portfolio", "Xizmatlar", "Aloqa"],
    platform: ["Vakansiyalar", "Mijoz kabineti", "Texnik yordam", "Maxfiylik siyosati"],
    rights: "Barcha huquqlar himoyalangan.",
    location: "Toshkent, O'zbekiston",
  },
  pages: {
    blog: {
      eyebrow: "Blog",
      title: "Web va biznes —",
      highlight: "amaliy maqolalar",
      desc: "Zamonaviy web-ishlab chiqish va raqamli transformatsiya bo'yicha tajribamizdan yozamiz.",
      empty: "Hozircha maqola yo'q. Tez orada qo'shamiz.",
    },
    careers: {
      eyebrow: "Vakansiyalar",
      title: "Jamoaga",
      highlight: "qo'shiling",
      desc: "Biz doim iqtidorli dasturchi va dizaynerlarni izlaymiz.",
      empty: "Hozircha ochiq vakansiya yo'q. Keyinroq qarab turing.",
    },
    maintenance: {
      eyebrow: "Texnik yordam",
      title: "Sayt ishlab tursin —",
      highlight: "biz qaraymiz",
      desc: "Ishga tushgandan keyin ham xavfsizlik, tezlik va yangilanishlarni biz zimmamizga olamiz.",
    },
  },
  theme: { toLight: "Oq fonga o'tish", toDark: "Qora fonga o'tish" },
  floating: {
    telegram: "Telegramda yozish",
    call: "Qo'ng'iroq",
    aria: "Telegram orqali bog'lanish",
  },
  notFound: {
    title: "Sahifa topilmadi",
    desc: "Siz izlayotgan sahifa mavjud emas yoki ko'chirilgan.",
    home: "Bosh sahifaga",
  },
};

const ru: Dict = {
  nav: {
    home: "Главная",
    services: "Услуги",
    portfolio: "Портфолио",
    cases: "Кейсы",
    team: "Команда",
    about: "О нас",
    contact: "Контакты",
  },
  common: {
    order: "Оставить заявку",
    viewWork: "Смотреть работы",
    learnMore: "Подробнее",
    from: "от",
    startingFrom: "Цена от",
    getStarted: "Начать проект",
    back: "Назад",
    openSite: "Открыть сайт",
    writeTelegram: "Написать в Telegram",
    callNow: "Позвонить",
    calcPrice: "Рассчитать цену",
  },
  hero: {
    badge: "Открыты для новых проектов — 2026",
    titleA: "Профессиональные",
    titleHl: "сайты и приложения",
    titleB: "для вашего бизнеса",
    subtitle:
      "Быстро, качественно и по прозрачной цене. Ответьте на четыре вопроса — сразу увидите примерную стоимость проекта, а связываемся уже после.",
    cta1: "Рассчитать цену",
    cta2: "Смотреть работы",
    stats: [
      { key: "projects", suffix: "", label: "Завершённых проектов" },
      { key: "clients", suffix: "", label: "Клиентских проектов" },
      { key: "years", suffix: "+", label: "Года опыта" },
    ],
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
      {
        title: "Дизайн и прототип",
        desc: "UI/UX прототип — вы видите и утверждаете до написания кода.",
      },
      { title: "Разработка", desc: "Чистый код, еженедельные демо и прогресс в реальном времени." },
      { title: "Запуск", desc: "Тестирование, деплой и 1 месяц бесплатной поддержки." },
    ],
    stackEyebrow: "Технологии",
    stackTitle: "Современный и надёжный стек",
    ctaTitle: "Есть идея? Давайте построим вместе.",
    ctaDesc:
      "Рассчитайте цену за пару минут или напишите напрямую в Telegram. Ответ в течение 24 часов.",
    ctaBtn: "Бесплатная консультация",
    seeAll: "Смотреть все",
    featuredEyebrow: "Избранные работы",
    featuredTitleA: "Наши последние",
    featuredTitleHl: "проекты",
  },
  proof: {
    eyebrow: "Работающие сайты",
    titleA: "Не на слова —",
    titleHl: "смотрите на ссылки",
    desc: "Каждый сайт ниже сейчас работает в интернете. Нажмите и проверьте сами.",
    liveNote: "Онлайн",
    openSite: "Открыть сайт",
    readCase: "Читать кейс",
    noReviewsTitle: "Письменных отзывов пока нет",
    noReviewsBody:
      "Мы ещё не получили от клиентов официальных письменных отзывов, поэтому здесь ничего не придумано. Вместо этого — то, что можно проверить: работающие сайты и для кого они сделаны.",
  },
  services: {
    eyebrow: "Наши услуги",
    titleA: "Всё в одном месте —",
    titleHl: "готовый продукт",
    desc: "От дизайна до запуска сервера. Одна команда, один адрес.",
    items: [
      {
        title: "Landing page",
        desc: "Оптимизированный под конверсию, быстро загружаемый одностраничный сайт.",
        from: "$300",
      },
      {
        title: "Корпоративный сайт",
        desc: "Многостраничное решение с CMS для вашей компании.",
        from: "$800",
      },
      {
        title: "Интернет-магазин",
        desc: "Оплата, корзина, админ-панель — полноценный e-commerce.",
        from: "$1 500",
      },
      {
        title: "Мобильное приложение",
        desc: "Кроссплатформенные приложения с нативным ощущением для iOS и Android.",
        from: "$2 500",
      },
      {
        title: "Backend / API",
        desc: "Безопасная, масштабируемая серверная инфраструктура и REST/GraphQL API.",
        from: "$600",
      },
      {
        title: "UI/UX дизайн",
        desc: "Дизайн продукта уровня бренда, продуманный до мелочей.",
        from: "$400",
      },
    ],
  },
  calc: {
    eyebrow: "Прозрачная цена",
    titleA: "Четыре вопроса —",
    titleHl: "примерная цена",
    desc: "Контакты не спрашиваем. Сначала видите цену, потом решаете сами.",
    step: "Вопрос",
    of: "из",
    next: "Далее",
    prev: "Назад",
    restart: "Считать заново",
    skip: "Пропустить",
    steps: {
      type: {
        label: "Какой продукт вам нужен?",
        hint: "Выберите ближайший вариант — детали уточним потом.",
        options: [
          { label: "Landing page", desc: "Одна страница под одну цель" },
          { label: "Корпоративный сайт", desc: "Сайт компании, несколько разделов" },
          { label: "Интернет-магазин", desc: "Каталог, корзина, оплата" },
          { label: "Мобильное приложение", desc: "iOS + Android" },
        ],
      },
      pages: {
        label: "Примерно сколько страниц/экранов?",
        hint: "Если точно не знаете — выберите среднее.",
        options: [
          { label: "1 страница", desc: "Одна длинная страница" },
          { label: "3–5 страниц", desc: "Для малого бизнеса" },
          { label: "6–10 страниц", desc: "Сайт с многими разделами" },
          { label: "10+ страниц", desc: "Каталог или крупный портал" },
        ],
      },
      addons: {
        label: "Что нужно добавить?",
        hint: "Можно выбрать несколько. Если не нужно — оставьте пустым.",
        options: [
          { label: "Онлайн-оплата", desc: "Click, Payme или Stripe" },
          { label: "Админ-панель", desc: "Управляете контентом сами" },
          { label: "Многоязычность", desc: "uz / ru / en" },
          { label: "SEO-настройка", desc: "Meta, sitemap, скорость" },
        ],
      },
      design: {
        label: "Уровень дизайна?",
        hint: "Стандарт тоже выглядит профессионально — премиум рисуется с нуля.",
        options: [
          { label: "Стандарт", desc: "Чисто, надёжно, на готовой структуре" },
          { label: "Премиум", desc: "Индивидуальный дизайн с нуля" },
        ],
      },
    },
    resultEyebrow: "Примерный расчёт",
    resultTitle: "Ваш проект обойдётся примерно так",
    rangeNote: "Точная цена определяется после брифа и не выходит за этот диапазон.",
    selected: "Выбрано:",
    disclaimer:
      "Это расчёт калькулятора, а не договор. После уточнения требований подтвердим финальную цену письменно.",
    telegramCta: "Обсудить в Telegram",
    formTitle: "Или оставьте номер",
    formDesc: "Два поля — остальное спросим в разговоре.",
    formName: "Имя",
    formNamePh: "Ваше имя",
    formContact: "Телефон или Telegram",
    formContactPh: "+998 __ ___ __ __",
    formSubmit: "Свяжитесь со мной",
    formSending: "Отправка…",
    formSent: "Принято",
    formSentDesc: "Спасибо! Приняли вместе с вашим расчётом — свяжемся в течение 24 часов.",
    formErrorRequired: "Имя и телефон/Telegram обязательны.",
    formErrorNetwork: "Не отправилось. Через Telegram будет быстрее.",
    privacy: "Номер используем только для этого проекта. Рассылок не делаем.",
    telegramMessage: "Здравствуйте! Результат калькулятора на сайте:",
  },
  portfolio: {
    eyebrow: "Выполненные работы",
    titleA: "Наши проекты —",
    titleHl: "со ссылками",
    desc: "Каждый проект ведёт на работающий сайт. Часть — клиентская работа, часть — наши собственные проекты, мы это разделяем.",
    filters: ["Все", "Сайты", "Приложения", "E-commerce"],
    view: "Смотреть",
    readCase: "Кейс",
    viewAll: "Смотреть все работы",
    wip: "В работе",
  },
  cases: {
    eyebrow: "Кейсы",
    titleA: "Как мы это сделали —",
    titleHl: "по шагам",
    desc: "По каждому проекту: какая была проблема у клиента, что мы сделали и что сдали.",
    clientLabel: "Клиент",
    problem: "Проблема",
    solution: "Решение",
    delivered: "Что сдано",
    metrics: "Измеренный результат",
    stack: "Технологии",
    liveSite: "Открыть работающий сайт",
    back: "Все кейсы",
    others: "Другие проекты",
    notFound: "Такой кейс не найден.",
    cta: "Нужен похожий проект?",
    ctaDesc: "Посмотрите цену в калькуляторе или напишите напрямую в Telegram.",
  },
  team: {
    eyebrow: "Команда",
    titleA: "Настоящие люди,",
    titleHl: "которые пишут код",
    desc: "Три разработчика. Профиль каждого открыт — можно перейти и проверить.",
    members: [
      { name: "Умиджон Гаффоров", role: "Основатель & Lead Developer", level: "Founder" },
      { name: "Диёрбек Хикматулаев", role: "Full-Stack разработчик", level: "Senior" },
      { name: "Усмонжон Абдурозиков", role: "Frontend разработчик", level: "Senior" },
    ],
    joinTitle: "Хотите в команду?",
    joinDesc: "Мы всегда ищем талантливых разработчиков и дизайнеров. Присылайте резюме.",
    joinBtn: "Вакансии",
  },
  about: {
    eyebrow: "О нас",
    titleA: "Небольшая команда",
    titleHl: "из Ташкента",
    desc: "Мы не большое агентство и не пытаемся им выглядеть. Три человека, открытая цена, сданные проекты.",
    body: "Umidjon Agency — небольшая команда разработки из Ташкента. Мы делаем сайты, интернет-магазины и мобильные приложения. Среди клиентов есть и центр поддержки бизнеса, и ремесленные бренды — все их сайты сейчас работают, и по ним можно перейти прямо из портфолио.",
    points: [
      "Общение напрямую с разработчиком — без менеджера-посредника",
      "Еженедельное демо: прогресс видно в работающей версии, а не на словах",
      "Код ваш — GitHub-репозиторий передаётся полностью",
      "1 месяц бесплатных исправлений после запуска",
    ],
    stats: [
      { key: "projects", suffix: "", label: "Завершённых проектов" },
      { key: "clients", suffix: "", label: "Клиентских проектов" },
      { key: "years", suffix: "+", label: "Года опыта" },
      { key: "responseHours", suffix: "ч", label: "В течение — отвечаем" },
    ],
    statsNote:
      "Эти цифры взяты из портфолио — каждый проект ведёт на работающий сайт, то есть их можно пересчитать.",
    whyEyebrow: "Почему выбирают нас",
    whyTitleA: "Пишите не другому разработчику,",
    whyTitleHl: "а нам",
    whyDesc: "Потому что для нас вы не просто «заказ», а долгосрочный партнёр.",
    whyLeadA: "Мы небольшая команда.",
    whyLeadB: "Именно поэтому это работает.",
    whyLeadBody:
      "В большом агентстве ваш проект стоит в очереди и передаётся через менеджера. Здесь вы говорите напрямую с тем, кто пишет код — ответ приходит за час, а не за день, и договорённость не меняется по дороге.",
    reasons: [
      {
        title: "Прозрачная цена",
        desc: "Примерную цену узнаёте заранее через калькулятор. Никаких скрытых доплат.",
      },
      {
        title: "Обещанный срок",
        desc: "Landing 7–10 дней, корпоративный сайт 2–3 недели. Срок фиксируется в брифе письменно.",
      },
      {
        title: "Прямая связь",
        desc: "Без менеджера — переписываетесь с разработчиком, который делает проект.",
      },
      {
        title: "Поддержка продолжается",
        desc: "1 месяц бесплатных исправлений и консультаций. Далее — недорогой пакет.",
      },
      { title: "Код ваш", desc: "GitHub-репозиторий передаётся вам. Никакой привязки." },
      {
        title: "Скорость и SEO",
        desc: "Сайт должен открываться и на медленном интернете — это условие приёмки работы.",
      },
    ],
    faqEyebrow: "Вопросы и ответы",
    faqTitle: "Частые вопросы",
    faq: [
      {
        q: "За сколько будет готов проект?",
        a: "Landing page — 7–10 дней, корпоративный сайт — 2–3 недели, e-commerce и приложения — 4–8 недель. Точный срок фиксируется письменно на этапе брифа.",
      },
      {
        q: "Как происходит оплата?",
        a: "Обычно 50% предоплата, 50% при запуске. Крупные проекты — поэтапная оплата.",
      },
      {
        q: "Цена в калькуляторе финальная?",
        a: "Нет, это примерный диапазон. После уточнения требований подтверждаем финальную цену письменно, и она не выходит за указанный диапазон.",
      },
      {
        q: "Передаётся ли мне код?",
        a: "Да, вся кодовая база передаётся вам через GitHub. Никакой блокировки или привязки.",
      },
      {
        q: "Есть ли поддержка после запуска?",
        a: "Да, 1 месяц бесплатной техподдержки и исправлений. Далее доступен недорогой пакет сопровождения.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакты",
    titleA: "Два поля —",
    titleHl: "остальное обсудим",
    desc: "Длинную форму заполнять не нужно. Достаточно имени и номера, детали спросим в разговоре.",
    formTitle: "Оставить заявку",
    name: "Имя",
    namePh: "Ваше имя",
    contact: "Телефон или Telegram",
    contactPh: "+998 __ ___ __ __",
    note: "О проекте (необязательно)",
    notePh: "Кратко опишите, что нужно сделать…",
    submit: "Отправить",
    sending: "Отправка…",
    sent: "Принято",
    successMsg: "Спасибо! Заявка принята — свяжемся в течение 24 часов.",
    errorRequired: "Имя и телефон/Telegram обязательны.",
    errorNetwork: "Не отправилось. Через Telegram будет быстрее.",
    privacy: "Номер используем только для этого проекта. Рассылок не делаем.",
    orDivider: "или напишите сразу",
    replyTitle: "Ответ за 24 часа",
    replyHours: "Будни 09:00–20:00",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    telegramLabel: "Telegram",
    telegramMessage: "Здравствуйте! Пишу с сайта — нужна консультация по проекту.",
  },
  footer: {
    ctaTitleA: "Давайте",
    ctaTitleB: "начнём.",
    tagline:
      "Небольшая команда разработки из Ташкента. Сайты, интернет-магазины и мобильные приложения.",
    servicesTitle: "Услуги",
    companyTitle: "Компания",
    platformTitle: "Прочее",
    services: [
      "Landing page",
      "Корпоративный сайт",
      "E-commerce",
      "Мобильное приложение",
      "Backend / API",
    ],
    company: ["О нас", "Команда", "Портфолио", "Услуги", "Контакты"],
    platform: ["Вакансии", "Кабинет клиента", "Техподдержка", "Политика конфиденциальности"],
    rights: "Все права защищены.",
    location: "Ташкент, Узбекистан",
  },
  pages: {
    blog: {
      eyebrow: "Блог",
      title: "Веб и бизнес —",
      highlight: "практические статьи",
      desc: "Пишем из своего опыта о современной веб-разработке и цифровой трансформации.",
      empty: "Пока статей нет. Скоро добавим.",
    },
    careers: {
      eyebrow: "Вакансии",
      title: "Присоединяйтесь",
      highlight: "к команде",
      desc: "Мы всегда ищем талантливых разработчиков и дизайнеров.",
      empty: "Открытых вакансий пока нет. Загляните позже.",
    },
    maintenance: {
      eyebrow: "Техподдержка",
      title: "Сайт должен работать —",
      highlight: "мы следим",
      desc: "После запуска берём на себя безопасность, скорость и обновления.",
    },
  },
  theme: { toLight: "Светлая тема", toDark: "Тёмная тема" },
  floating: {
    telegram: "Написать в Telegram",
    call: "Позвонить",
    aria: "Связаться через Telegram",
  },
  notFound: {
    title: "Страница не найдена",
    desc: "Страница, которую вы ищете, не существует или была перемещена.",
    home: "На главную",
  },
};

const en: Dict = {
  nav: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    cases: "Case studies",
    team: "Team",
    about: "About",
    contact: "Contact",
  },
  common: {
    order: "Get in touch",
    viewWork: "View work",
    learnMore: "Learn more",
    from: "from",
    startingFrom: "Starting from",
    getStarted: "Start a project",
    back: "Back",
    openSite: "Open site",
    writeTelegram: "Message on Telegram",
    callNow: "Call now",
    calcPrice: "Estimate the price",
  },
  hero: {
    badge: "Open for new projects — 2026",
    titleA: "Professional",
    titleHl: "websites & apps",
    titleB: "for your business",
    subtitle:
      "Fast, high-quality and transparently priced. Answer four questions and see an estimate straight away — we only ask for your details afterwards.",
    cta1: "Estimate the price",
    cta2: "View work",
    stats: [
      { key: "projects", suffix: "", label: "Projects shipped" },
      { key: "clients", suffix: "", label: "Client projects" },
      { key: "years", suffix: "+", label: "Years of experience" },
    ],
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
      {
        title: "Design & prototype",
        desc: "UI/UX prototype — you see and approve it before any code.",
      },
      { title: "Development", desc: "Clean code, weekly demos and real-time progress." },
      { title: "Launch", desc: "Testing, deploy and 1 month of free technical support." },
    ],
    stackEyebrow: "Technologies",
    stackTitle: "A modern, reliable stack",
    ctaTitle: "Got an idea? Let's build it together.",
    ctaDesc:
      "Estimate the price in a couple of minutes, or message us directly on Telegram. We reply within 24 hours.",
    ctaBtn: "Free consultation",
    seeAll: "See all",
    featuredEyebrow: "Featured work",
    featuredTitleA: "Our latest",
    featuredTitleHl: "projects",
  },
  proof: {
    eyebrow: "Live sites",
    titleA: "Don't take our word —",
    titleHl: "follow the links",
    desc: "Every site below is live right now. Click through and check for yourself.",
    liveNote: "Live",
    openSite: "Open site",
    readCase: "Read the case study",
    noReviewsTitle: "No written reviews yet",
    noReviewsBody:
      "We haven't collected formal written reviews from clients yet, so nothing here is invented. Instead we've put up what you can verify: live sites and who they were built for.",
  },
  services: {
    eyebrow: "Our services",
    titleA: "Everything in one place —",
    titleHl: "a finished product",
    desc: "From design to server launch. One team, one address.",
    items: [
      {
        title: "Landing page",
        desc: "A fast-loading, conversion-optimized single-page site.",
        from: "$300",
      },
      {
        title: "Corporate website",
        desc: "A multi-page, CMS-driven solution for your company.",
        from: "$800",
      },
      {
        title: "Online store",
        desc: "Payments, cart, admin panel — fully managed e-commerce.",
        from: "$1,500",
      },
      {
        title: "Mobile app",
        desc: "Cross-platform apps with a native feel for iOS and Android.",
        from: "$2,500",
      },
      {
        title: "Backend / API",
        desc: "Secure, scalable server infrastructure and REST/GraphQL APIs.",
        from: "$600",
      },
      {
        title: "UI/UX design",
        desc: "Brand-level product design, crafted around the user.",
        from: "$400",
      },
    ],
  },
  calc: {
    eyebrow: "Transparent pricing",
    titleA: "Four questions —",
    titleHl: "an estimate",
    desc: "We don't ask for your details first. You see the price, then you decide.",
    step: "Question",
    of: "of",
    next: "Next",
    prev: "Back",
    restart: "Start over",
    skip: "Skip",
    steps: {
      type: {
        label: "What do you need built?",
        hint: "Pick the closest option — we'll refine it later.",
        options: [
          { label: "Landing page", desc: "One page, one goal" },
          { label: "Corporate website", desc: "Company site, several sections" },
          { label: "Online store", desc: "Catalog, cart, payments" },
          { label: "Mobile app", desc: "iOS + Android" },
        ],
      },
      pages: {
        label: "Roughly how many pages or screens?",
        hint: "If you're not sure, pick the middle option.",
        options: [
          { label: "1 page", desc: "A single long page" },
          { label: "3–5 pages", desc: "Small business site" },
          { label: "6–10 pages", desc: "A site with many sections" },
          { label: "10+ pages", desc: "Catalog or large portal" },
        ],
      },
      addons: {
        label: "What needs to be included?",
        hint: "Pick as many as apply, or leave it empty.",
        options: [
          { label: "Online payments", desc: "Click, Payme or Stripe" },
          { label: "Admin panel", desc: "Manage the content yourself" },
          { label: "Multiple languages", desc: "uz / ru / en" },
          { label: "SEO setup", desc: "Meta, sitemap, speed" },
        ],
      },
      design: {
        label: "What level of design?",
        hint: "Standard already looks professional — premium is drawn from scratch.",
        options: [
          { label: "Standard", desc: "Clean and solid, on a proven structure" },
          { label: "Premium", desc: "A custom design drawn from scratch" },
        ],
      },
    },
    resultEyebrow: "Estimate",
    resultTitle: "Your project should land around here",
    rangeNote: "The exact price is set after the brief and stays inside this range.",
    selected: "Selected:",
    disclaimer:
      "This is a calculator estimate, not a contract. Once the requirements are clear we confirm the final price in writing.",
    telegramCta: "Discuss on Telegram",
    formTitle: "Or leave your number",
    formDesc: "Two fields — we'll ask the rest in conversation.",
    formName: "Name",
    formNamePh: "Your name",
    formContact: "Phone or Telegram",
    formContactPh: "+998 __ ___ __ __",
    formSubmit: "Get in touch with me",
    formSending: "Sending…",
    formSent: "Received",
    formSentDesc:
      "Thank you! We've got it along with your estimate — we'll be in touch within 24 hours.",
    formErrorRequired: "Name and phone/Telegram are required.",
    formErrorNetwork: "That didn't send. Telegram will be faster.",
    privacy: "We use your number for this project only. No marketing messages.",
    telegramMessage: "Hi! Here's my estimate from your site calculator:",
  },
  portfolio: {
    eyebrow: "Selected work",
    titleA: "Our projects —",
    titleHl: "with links",
    desc: "Every project links to a live site. Some are client work, some are our own builds — we mark which is which.",
    filters: ["All", "Websites", "Mobile apps", "E-commerce"],
    view: "View",
    readCase: "Case study",
    viewAll: "View all work",
    wip: "In progress",
  },
  cases: {
    eyebrow: "Case studies",
    titleA: "How we did it —",
    titleHl: "step by step",
    desc: "For each project: what the client was stuck with, what we did, and what shipped.",
    clientLabel: "Client",
    problem: "The problem",
    solution: "The approach",
    delivered: "What shipped",
    metrics: "Measured results",
    stack: "Technologies",
    liveSite: "Open the live site",
    back: "All case studies",
    others: "Other projects",
    notFound: "That case study wasn't found.",
    cta: "Need something similar?",
    ctaDesc: "Check the price in the calculator, or message us directly on Telegram.",
  },
  team: {
    eyebrow: "Team",
    titleA: "Real people",
    titleHl: "who write the code",
    desc: "Three developers. Each profile is public — click through and check.",
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
    titleA: "A small team",
    titleHl: "based in Tashkent",
    desc: "We're not a large agency and we don't try to look like one. Three people, open pricing, delivered work.",
    body: "Umidjon Agency is a small development team based in Tashkent. We build websites, online stores and mobile apps. Our clients include a business support centre and several artisan brands — every one of those sites is live, and you can click straight through from the portfolio.",
    points: [
      "You talk to the developer directly — no account manager in between",
      "Weekly demos: progress you can see in a running build, not in a status update",
      "The code is yours — the GitHub repository is handed over in full",
      "1 month of free bug-fixes after launch",
    ],
    stats: [
      { key: "projects", suffix: "", label: "Projects shipped" },
      { key: "clients", suffix: "", label: "Client projects" },
      { key: "years", suffix: "+", label: "Years of experience" },
      { key: "responseHours", suffix: "h", label: "We reply within" },
    ],
    statsNote:
      "These numbers come straight from the portfolio — every project links to a live site, so you can count them yourself.",
    whyEyebrow: "Why choose us",
    whyTitleA: "Don't write to another dev —",
    whyTitleHl: "write to us",
    whyDesc: "Because to us you're not just an 'order', but a long-term partner.",
    whyLeadA: "We're a small team.",
    whyLeadB: "That's exactly why it works.",
    whyLeadBody:
      "At a large agency your project sits in a queue and reaches the developer through a manager. Here you talk directly to the person writing the code — answers come in an hour rather than a day, and what was agreed doesn't change along the way.",
    reasons: [
      {
        title: "Transparent pricing",
        desc: "You get an estimate upfront from the calculator. No hidden add-ons.",
      },
      {
        title: "The date we promised",
        desc: "Landing in 7–10 days, corporate site in 2–3 weeks. The deadline is fixed in writing at the brief.",
      },
      {
        title: "Direct contact",
        desc: "No manager in between — you message the developer building your project.",
      },
      {
        title: "Support continues",
        desc: "1 month of free bug-fixes and consulting. Then an affordable monthly plan.",
      },
      {
        title: "The code is yours",
        desc: "The GitHub repository is handed over to you. No lock-in.",
      },
      {
        title: "Speed and SEO",
        desc: "The site has to open on a slow connection too — we make that a condition of sign-off.",
      },
    ],
    faqEyebrow: "Q&A",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "How long until the project is ready?",
        a: "Landing page — 7–10 days, corporate site — 2–3 weeks, e-commerce and apps — 4–8 weeks. The exact timeline is fixed in writing at the brief stage.",
      },
      {
        q: "How does payment work?",
        a: "Usually 50% upfront, 50% at launch. Large projects can be paid in stages too.",
      },
      {
        q: "Is the calculator price final?",
        a: "No, it's an estimated range. Once requirements are clear we confirm the final price in writing, and it stays within the range shown.",
      },
      {
        q: "Do I get the code?",
        a: "Yes, the full codebase is handed to you via GitHub. No lock-in or dependency.",
      },
      {
        q: "Is there support after launch?",
        a: "Yes, 1 month of free technical support and bug-fixes. After that an affordable maintenance package is available.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    titleA: "Two fields —",
    titleHl: "we'll talk about the rest",
    desc: "No long form to fill in. A name and a number is enough; we'll ask for details in conversation.",
    formTitle: "Send a request",
    name: "Name",
    namePh: "Your name",
    contact: "Phone or Telegram",
    contactPh: "+998 __ ___ __ __",
    note: "About the project (optional)",
    notePh: "Briefly, what needs building…",
    submit: "Send",
    sending: "Sending…",
    sent: "Received",
    successMsg: "Thank you! Your request has been received — we'll be in touch within 24 hours.",
    errorRequired: "Name and phone/Telegram are required.",
    errorNetwork: "That didn't send. Telegram will be faster.",
    privacy: "We use your number for this project only. No marketing messages.",
    orDivider: "or message us right away",
    replyTitle: "Reply within 24h",
    replyHours: "Weekdays 09:00–20:00",
    phoneLabel: "Phone",
    emailLabel: "Email",
    telegramLabel: "Telegram",
    telegramMessage: "Hi! I'm writing from your site — I'd like advice on a project.",
  },
  footer: {
    ctaTitleA: "Let's",
    ctaTitleB: "get started.",
    tagline: "A small development team in Tashkent. Websites, online stores and mobile apps.",
    servicesTitle: "Services",
    companyTitle: "Company",
    platformTitle: "More",
    services: ["Landing page", "Corporate website", "E-commerce", "Mobile app", "Backend / API"],
    company: ["About", "Team", "Portfolio", "Services", "Contact"],
    platform: ["Careers", "Client portal", "Maintenance", "Privacy policy"],
    rights: "All rights reserved.",
    location: "Tashkent, Uzbekistan",
  },
  pages: {
    blog: {
      eyebrow: "Blog",
      title: "Web and business —",
      highlight: "practical writing",
      desc: "Notes from our own work on modern web development and digital transformation.",
      empty: "No posts yet. We'll add some shortly.",
    },
    careers: {
      eyebrow: "Careers",
      title: "Join",
      highlight: "the team",
      desc: "We're always looking for talented developers and designers.",
      empty: "No open positions right now. Check back later.",
    },
    maintenance: {
      eyebrow: "Maintenance",
      title: "Your site should stay up —",
      highlight: "we watch it",
      desc: "After launch we take on security, speed and updates.",
    },
  },
  theme: { toLight: "Switch to light", toDark: "Switch to dark" },
  floating: {
    telegram: "Message on Telegram",
    call: "Call",
    aria: "Contact us on Telegram",
  },
  notFound: {
    title: "Page not found",
    desc: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
};

export const translations: Record<Lang, Dict> = { uz, ru, en };

/**
 * Document-level copy for <head>. Kept out of Dict because it is consumed by the
 * root route's head() — which runs outside React and so cannot read the i18n
 * context — and keyed by the same Lang the page body renders in, so a `?lang=ru`
 * landing never ships Russian content under an Uzbek title.
 */
export const META: Record<
  Lang,
  { title: string; description: string; ogDescription: string; locale: string }
> = {
  uz: {
    title: "Umidjon Agency — websayt, onlayn do'kon va mobil ilova (Toshkent)",
    description:
      "Toshkentdagi ishlab chiqish jamoasi: websayt, onlayn do'kon va mobil ilova. Kalkulyatorda 4 savolga javob berib taxminiy narxni darhol ko'ring.",
    ogDescription:
      "Shaffof narx: kalkulyatorda 4 savol — taxminiy narx darhol. Toshkent, javob 24 soat ichida.",
    locale: "uz_UZ",
  },
  ru: {
    title: "Umidjon Agency — разработка сайтов, интернет-магазинов и мобильных приложений",
    description:
      "Команда разработки из Ташкента: сайты, интернет-магазины и мобильные приложения. Ответьте на 4 вопроса в калькуляторе и сразу увидите примерную стоимость.",
    ogDescription:
      "Прозрачная цена: 4 вопроса в калькуляторе — примерная стоимость сразу. Ташкент, ответ в течение 24 часов.",
    locale: "ru_RU",
  },
  en: {
    title: "Umidjon Agency — websites, online stores and mobile apps (Tashkent)",
    description:
      "A development team in Tashkent building websites, online stores and mobile apps. Answer four questions in the calculator and see an estimate straight away.",
    ogDescription:
      "Transparent pricing: four questions in the calculator, an estimate straight away. Tashkent, reply within 24 hours.",
    locale: "en_US",
  },
};

export type { Dict, Stat, StatKey };
