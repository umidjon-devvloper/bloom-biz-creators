import connectDB from "./connect";
import BlogPost from "./models/BlogPost";

const posts = [
  {
    title: "Toshkentda web sayt narxi 2024–2025: qancha turadi va nimaga bog'liq?",
    slug: "web-sayt-narxi-toshkent",
    excerpt:
      "O'zbekistonda web sayt yaratish narxi $300 dan $5000+ gacha. Narx nimaga bog'liq, qayerda tejash mumkin va qayerda tejash yaramaydi — batafsil tahlil.",
    author: "Umidjon Agency",
    publishedAt: new Date("2025-01-15"),
    content: `<h2>Web sayt narxi nimaga bog'liq?</h2>
<p>O'zbekistonda web sayt yaratish narxi bir necha omillarga bog'liq: sayt turi, sahifalar soni, dizayn murakkabligi va qo'shimcha funksiyalar.</p>

<h3>Sayt turlari bo'yicha narxlar</h3>
<ul>
<li><strong>Landing page (bir sahifali sayt)</strong> — $300–$800. Bitta mahsulot yoki xizmatni tanishtirish uchun ideal.</li>
<li><strong>Korporativ sayt (5–15 sahifa)</strong> — $800–$2,000. Kompaniya haqida to'liq ma'lumot, xizmatlar, portfolio va aloqa.</li>
<li><strong>Onlayn do'kon (e-commerce)</strong> — $1,500–$5,000+. Mahsulot katalogi, savatcha, to'lov tizimi va admin panel.</li>
<li><strong>Mobil ilova</strong> — $2,000–$8,000+. iOS va Android uchun React Native yoki Flutter da.</li>
</ul>

<h3>Narxga ta'sir qiluvchi omillar</h3>
<p><strong>Dizayn</strong> — tayyor shablon arzon, lekin individual dizayn brendingizni ajratib turadi. <strong>Funksionallik</strong> — kalkulyator, chat, CRM integratsiya kabi qo'shimchalar narxni oshiradi. <strong>Tillar soni</strong> — ko'p tilli sayt qo'shimcha vaqt va resurs talab qiladi.</p>

<h3>Qayerda tejash mumkin?</h3>
<p>Tezkor va sifatli natija uchun React, Next.js, Tailwind CSS kabi zamonaviy texnologiyalar ishlatiladi. Bu tezkor ishlab chiqish va kam xarajatni ta'minlaydi. Lekin dizayn va UX da tejash yaramaydi — foydalanuvchi birinchi 3 soniyada qaror qiladi.</p>

<h3>Umidjon Agency narxlari</h3>
<p>Biz shaffof narx siyosatini tutamiz. Saytdagi kalkulyatorimizda 4 savolga javob berib taxminiy narxni darhol ko'rishingiz mumkin. 50% oldindan to'lov, 50% ishga tushirishda. To'liq kod bazasi GitHub orqali sizga topshiriladi.</p>

<p><strong>Bepul konsultatsiya</strong> uchun Telegram orqali yozing — 24 soat ichida javob beramiz.</p>`,
  },
  {
    title: "React Native vs Flutter 2025: mobil ilova uchun qaysi biri yaxshi?",
    slug: "react-native-vs-flutter",
    excerpt:
      "React Native va Flutter — ikki eng mashhur cross-platform framework. Qaysi birini tanlash kerak? Tezlik, narx, ekosistema va real loyihalar asosida taqqoslaymiz.",
    author: "Umidjon Agency",
    publishedAt: new Date("2025-02-20"),
    content: `<h2>React Native vs Flutter: to'liq taqqoslash</h2>
<p>Mobil ilova yaratmoqchi bo'lsangiz, eng katta savol — iOS va Android uchun alohida yozishmi yoki bitta kod bazasidan ikkalasini chiqarishmi? Cross-platform framework'lar ikkinchi yo'lni tanlash imkonini beradi.</p>

<h3>React Native — Meta (Facebook) tomonidan</h3>
<ul>
<li><strong>Til:</strong> JavaScript / TypeScript</li>
<li><strong>Afzalligi:</strong> Web dasturchilar tez o'rganadi, katta ekosistema, hot reload</li>
<li><strong>Ishlatadi:</strong> Instagram, Facebook, Shopify, Discord</li>
<li><strong>Qachon tanlash kerak:</strong> Jamoangizda React tajribasi bor, web va mobil bitta kod bazasidan kerak</li>
</ul>

<h3>Flutter — Google tomonidan</h3>
<ul>
<li><strong>Til:</strong> Dart</li>
<li><strong>Afzalligi:</strong> Yuqori unumdorlik, chiroyli animatsiyalar, bir xil ko'rinish barcha qurilmalarda</li>
<li><strong>Ishlatadi:</strong> Google Pay, BMW, Alibaba</li>
<li><strong>Qachon tanlash kerak:</strong> Murakkab UI/animatsiya kerak, native performance muhim</li>
</ul>

<h3>Taqqoslash jadvali</h3>
<table>
<tr><th>Mezon</th><th>React Native</th><th>Flutter</th></tr>
<tr><td>O'rganish osonligi</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
<tr><td>Performance</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>UI moslashuvchanligi</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>Ekosistema</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
<tr><td>Ishlab chiqish tezligi</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
</table>

<h3>Bizning tavsiyamiz</h3>
<p>Umidjon Agency da biz ikkala texnologiyadan ham foydalanamiz. Chinora School va Sushi Time ilovalari React Native + Expo da, murakkab UI loyihalar esa Flutter da qurilgan. Sizning loyihangiz uchun qaysi biri mos — bepul konsultatsiya orqali aniqlaymiz.</p>`,
  },
  {
    title: "O'zbekistonda e-commerce: onlayn do'kon ochish uchun to'liq qo'llanma",
    slug: "ecommerce-uzbekistan-qollanma",
    excerpt:
      "O'zbekistonda onlayn do'kon ochish jarayoni: texnologiya tanlash, to'lov tizimlari, yetkazib berish va marketing. Amaliy tajribamizdan maslahatlar.",
    author: "Umidjon Agency",
    publishedAt: new Date("2025-03-10"),
    content: `<h2>O'zbekistonda onlayn do'kon: bosqichma-bosqich</h2>
<p>O'zbekistonda e-commerce tez rivojlanmoqda. 2024 yilda onlayn savdo hajmi 30% ga oshdi. Onlayn do'kon ochish uchun nima kerak — texnik va biznes tomondan tushuntiramiz.</p>

<h3>1-bosqich: Platforma tanlash</h3>
<p><strong>Tayyor platformalar</strong> (Shopify, WooCommerce) — tez boshlash uchun, lekin cheklangan moslashuvchanlik. <strong>Custom ishlab chiqish</strong> (Next.js + Stripe/Payme) — to'liq nazorat va noyob funksionallik. ArtSuzani loyihamizda Next.js 14 + Sanity CMS + Stripe kombinatsiyasini ishlatdik — bu tezkor, SEO-optimallashtirilgan va boshqarish oson.</p>

<h3>2-bosqich: To'lov tizimlari</h3>
<ul>
<li><strong>Payme / Click</strong> — O'zbekiston ichki to'lovlari uchun</li>
<li><strong>Stripe</strong> — xalqaro to'lovlar uchun (USD, EUR)</li>
<li><strong>Naqd to'lov</strong> — yetkazib berishda to'lash (COD)</li>
</ul>

<h3>3-bosqich: Mahsulot boshqaruvi</h3>
<p>Admin panel orqali mahsulotlarni qo'shish, tahrirlash, narx belgilash va zaxirani kuzatish. CMS (Sanity, Strapi) yoki custom admin panel — loyiha hajmiga qarab tanlanadi.</p>

<h3>4-bosqich: SEO va marketing</h3>
<p>Onlayn do'kon faqat sayt emas — mijozlarni jalb qilish ham kerak. Meta teglar, tezkor yuklash, mobil moslashuvchanlik, Google Business Profile va ijtimoiy tarmoqlar — barchasi birga ishlaydi.</p>

<h3>Qancha turadi?</h3>
<p>Oddiy onlayn do'kon $1,500 dan boshlanadi. Premium e-commerce (Stripe, CMS, multilingual) — $3,000–$5,000. Aniq narxni saytdagi kalkulyatorda ko'ring yoki bepul konsultatsiya uchun yozing.</p>`,
  },
  {
    title: "Nima uchun biznesingizga web sayt kerak? 2025 yilgi 7 ta sabab",
    slug: "biznesga-web-sayt-kerak",
    excerpt:
      "Hali web saytingiz yo'qmi? 2025 yilda web sayt biznesning raqamli vizitkasi. Mijozlar ishonchi, SEO, 24/7 sotish va boshqa sabablarni ko'rib chiqamiz.",
    author: "Umidjon Agency",
    publishedAt: new Date("2025-04-05"),
    content: `<h2>Web sayt — raqamli vizitkangiz</h2>
<p>2025 yilda mijozlarning 87% i xizmat yoki mahsulot qidirishda birinchi navbatda internetga murojaat qiladi. Agar sizda web sayt bo'lmasa — siz mavjud emassiz.</p>

<h3>1. 24/7 ishlaydi</h3>
<p>Web sayt dam olish kuni, bayram yoki tunda ham ishlaydi. Mijozlar istalgan vaqtda ma'lumot olishi, buyurtma berishi yoki bog'lanishi mumkin.</p>

<h3>2. Ishonch yaratadi</h3>
<p>Professional web sayt — bu sifat kafolati. Mijozlar saytingizga qarab sizning jiddiyligingizni baholaydi. Portfolio, sharhlar va case study'lar ishonchni oshiradi.</p>

<h3>3. Google'da topilasiz</h3>
<p>SEO optimallashtirilgan sayt Google qidiruv natijalarida chiqadi. "Toshkentda web studio", "onlayn do'kon yaratish" kabi so'rovlarda sizni topishadi.</p>

<h3>4. Raqobatchilardan oldinda</h3>
<p>Raqobatchilaringizda sayt bor, sizda yo'q — demak siz orqadasiz. Zamonaviy, tezkor va mobil-optimallashtirilgan sayt sizni ajratib turadi.</p>

<h3>5. Marketing uchun asos</h3>
<p>Instagram reklama, Google Ads, Telegram kanal — barchasi saytga yo'naltiradi. Sayt bo'lmasa marketing byudjeti behuda ketadi.</p>

<h3>6. Analitika va ma'lumot</h3>
<p>Web sayt orqali mijozlaringiz haqida ma'lumot to'playsiz: qayerdan kelishdi, nimani ko'rishdi, nima sotib olishdi. Bu biznes qarorlar uchun muhim.</p>

<h3>7. Tejamkorlik</h3>
<p>Bir marta sarmoya qo'yib, yillar davomida foydalanasiz. Ofis ijarasi yoki qo'shimcha xodim yollashdan ko'ra web sayt arzonroq va samaraliroq.</p>

<h3>Qanday boshlash kerak?</h3>
<p>Saytdagi kalkulyatorda loyihangiz narxini ko'ring yoki Telegram orqali bepul konsultatsiya oling. Biz 7–10 kunda landing page, 2–3 haftada korporativ sayt yaratamiz.</p>`,
  },
  {
    title: "Web sayt tezligini oshirish: Core Web Vitals va Google ranking",
    slug: "web-sayt-tezligi-core-web-vitals",
    excerpt:
      "Sayt sekin yuklansa — Google past o'ringa qo'yadi, mijozlar ketadi. Core Web Vitals nima, qanday tekshirish va tezlikni oshirish yo'llari.",
    author: "Umidjon Agency",
    publishedAt: new Date("2025-05-18"),
    content: `<h2>Nima uchun sayt tezligi muhim?</h2>
<p>Google ma'lumotlariga ko'ra, sayt 3 soniyadan ko'proq yuklansa, foydalanuvchilarning 53% sahifani tark etadi. Tezlik faqat foydalanuvchi tajribasi emas — Google ranking omiliga ham ta'sir qiladi.</p>

<h3>Core Web Vitals nima?</h3>
<p>Google 2021 yildan beri uchta asosiy ko'rsatkichni kuzatadi:</p>
<ul>
<li><strong>LCP (Largest Contentful Paint)</strong> — eng katta element qancha tez yuklanadi. Maqsad: 2.5 soniyadan kam.</li>
<li><strong>INP (Interaction to Next Paint)</strong> — foydalanuvchi bosganida qancha tez javob beradi. Maqsad: 200ms dan kam.</li>
<li><strong>CLS (Cumulative Layout Shift)</strong> — sahifa elementlari qancha sakraydi. Maqsad: 0.1 dan kam.</li>
</ul>

<h3>Qanday tekshirish mumkin?</h3>
<p>Google PageSpeed Insights (pagespeed.web.dev) saytiga URL kiritib tekshiring. U har bir ko'rsatkich bo'yicha baho va tavsiyalar beradi.</p>

<h3>Tezlikni oshirish usullari</h3>
<ol>
<li><strong>Rasmlarni optimallashtirish</strong> — WebP formatidan foydalaning, lazy loading qo'shing</li>
<li><strong>CSS va JS fayllarni minify qiling</strong> — ortiqcha kodlarni olib tashlang</li>
<li><strong>CDN ishlating</strong> — fayllarni foydalanuvchiga yaqin serverdan yetkazing</li>
<li><strong>Server-Side Rendering (SSR)</strong> — sahifa serverda tayyorlanib keladi, brauzer tezroq ko'rsatadi</li>
<li><strong>Font optimizatsiya</strong> — font-display: swap va preconnect ishlating</li>
<li><strong>Keraksiz JavaScript'ni olib tashlang</strong> — faqat kerakli kutubxonalarni yuklang</li>
</ol>

<h3>Bizning yondashuvimiz</h3>
<p>Umidjon Agency da barcha loyihalar Vite + React (yoki Next.js) bilan quriladi — bu avtomatik code splitting, tree shaking va zamonaviy optimizatsiyalarni ta'minlaydi. KBKM loyihamizda mobil qurilmalarda LCP 1.8 soniyaga tushirildi.</p>

<p>Saytingiz tezligini bepul tekshirib beramiz — Telegram orqali yozing.</p>`,
  },
];

async function seed() {
  await connectDB();

  for (const post of posts) {
    const exists = await BlogPost.findOne({ slug: post.slug });
    if (exists) {
      console.log(`[skip] "${post.slug}" already exists`);
      continue;
    }
    await BlogPost.create(post);
    console.log(`[done] "${post.slug}" created`);
  }

  console.log("\\nBlog seeding complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
