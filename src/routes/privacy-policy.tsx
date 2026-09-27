import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE } from "@/lib/site";

/**
 * Privacy policy + security practices. Uzbek only for now — it is the default
 * language of the site. Every claim here must match what the code actually does
 * (lead form fields in db/models/Lead.ts, Telegram notify in api/telegram.ts,
 * Google Ads tag in __root.tsx); update this page when those change.
 */

const UPDATED = "27-sentyabr, 2026";

type Section = { id: string; title: string; body: string[]; list?: string[] };

const SECTIONS: Section[] = [
  {
    id: "kirish",
    title: "1. Umumiy qoidalar",
    body: [
      `Ushbu Maxfiylik siyosati ${SITE.name} (keyingi o'rinlarda — «Agentlik», «biz») ${SITE.domain} sayti orqali qanday ma'lumotlarni to'plashi, ulardan qanday foydalanishi va ularni qanday himoya qilishini tushuntiradi.`,
      "Saytdan foydalanish yoki shakl orqali so'rov yuborish bilan siz ushbu siyosat shartlariga rozilik bildirasiz. Shartlarga rozi bo'lmasangiz, iltimos, shakllarni to'ldirmang.",
    ],
  },
  {
    id: "malumotlar",
    title: "2. Qanday ma'lumotlarni to'playmiz",
    body: ["Biz faqat siz o'zingiz ixtiyoriy ravishda yuborgan ma'lumotlarni saqlaymiz:"],
    list: [
      "Ismingiz;",
      "Aloqa uchun telefon raqami yoki Telegram manzili (ixtiyoriy ravishda — elektron pochta);",
      "Loyiha haqidagi izohingiz;",
      "Narx kalkulyatorida tanlagan variantlaringiz va taxminiy narx oralig'i;",
      "Sayt tili va so'rov qaysi shakldan yuborilgani.",
    ],
  },
  {
    id: "maqsad",
    title: "3. Ma'lumotlardan qanday foydalanamiz",
    body: ["To'plangan ma'lumotlar faqat quyidagi maqsadlarda ishlatiladi:"],
    list: [
      "So'rovingizga javob berish va loyihangizni muhokama qilish;",
      "Taklif (narx, muddat) tayyorlash;",
      "Loyiha davomida siz bilan aloqada bo'lish.",
    ],
  },
  {
    id: "uchinchi",
    title: "4. Uchinchi tomonlar",
    body: [
      "Biz ma'lumotlaringizni sotmaymiz, ijaraga bermaymiz va reklama tarqatuvchilarga uzatmaymiz. Sayt ishlashi uchun quyidagi xizmatlardan foydalanamiz:",
    ],
    list: [
      "MongoDB Atlas — so'rovlarni shifrlangan bulutli ma'lumotlar bazasida saqlash;",
      "Vercel — saytni joylashtirish (hosting);",
      "Telegram — yangi so'rov haqida jamoaga tezkor bildirishnoma yuborish;",
      "Google Ads — reklama samaradorligini o'lchash (quyidagi 5-bo'limga qarang).",
    ],
  },
  {
    id: "cookie",
    title: "5. Cookie fayllar",
    body: [
      "Saytda Google Ads teglari (gtag.js) ishlatiladi. Ular reklama orqali kelgan tashriflar va yuborilgan so'rovlar sonini o'lchash uchun cookie fayllarni o'rnatishi mumkin. Bu ma'lumotlar Google siyosatiga muvofiq qayta ishlanadi.",
      "Shuningdek, brauzeringizda tanlangan til va mavzu (yorug'/qorong'i) saqlanadi — bu faqat qulaylik uchun va serverga yuborilmaydi.",
      "Cookie fayllarni brauzer sozlamalari orqali istalgan vaqtda o'chirib qo'yishingiz mumkin.",
    ],
  },
  {
    id: "saqlash",
    title: "6. Saqlash muddati",
    body: [
      "So'rovlar loyiha muhokamasi va hamkorlik davomida saqlanadi. Hamkorlik boshlanmagan so'rovlarni 12 oydan so'ng o'chiramiz. Istalgan vaqtda ma'lumotlaringizni avvalroq o'chirishni so'rashingiz mumkin.",
    ],
  },
  {
    id: "huquqlar",
    title: "7. Sizning huquqlaringiz",
    body: [
      "O'zbekiston Respublikasining «Shaxsga doir ma'lumotlar to'g'risida»gi Qonuniga muvofiq, siz quyidagi huquqlarga egasiz:",
    ],
    list: [
      "Biz saqlagan ma'lumotlaringiz haqida so'rash;",
      "Noto'g'ri ma'lumotlarni tuzatishni talab qilish;",
      "Ma'lumotlaringizni to'liq o'chirishni talab qilish;",
      "Rozilikni istalgan vaqtda qaytarib olish.",
    ],
  },
];

/** What the agency does to keep client projects and data safe. */
const SECURITY = [
  {
    title: "HTTPS va SSL",
    text: "Biz ishlab chiqqan barcha saytlar faqat shifrlangan HTTPS ulanish orqali ishlaydi. SSL sertifikatlari avtomatik yangilanadi.",
  },
  {
    title: "Maxfiy kalitlar alohida",
    text: "Parollar, API kalitlar va bot tokenlari kod ichida saqlanmaydi — ular faqat server muhit o'zgaruvchilarida (environment variables) turadi.",
  },
  {
    title: "Parollarni xeshlash",
    text: "Foydalanuvchi parollari ochiq holda saqlanmaydi — bcrypt/argon2 kabi zamonaviy algoritmlar bilan xeshlanadi.",
  },
  {
    title: "Kiritilgan ma'lumotlarni tekshirish",
    text: "Shakl va API orqali kelgan har bir ma'lumot serverda tekshiriladi. Bu SQL/NoSQL injection, XSS va shunga o'xshash hujumlardan himoya qiladi.",
  },
  {
    title: "Kirish huquqlarini cheklash",
    text: "Admin panellar va ma'lumotlar bazasiga faqat kerakli odamlar kiradi. Har bir xodim faqat o'z vazifasi uchun zarur huquqqa ega.",
  },
  {
    title: "To'lov xavfsizligi",
    text: "Onlayn to'lovlar Stripe, Payme, Click kabi sertifikatlangan provayderlar orqali o'tadi. Karta ma'lumotlari bizning serverlarimizda saqlanmaydi.",
  },
  {
    title: "Zaxira nusxalar",
    text: "Mijoz loyihalarining ma'lumotlar bazalari muntazam zaxiralanadi, shunda nosozlik yuz berganda ma'lumotlarni tiklash mumkin.",
  },
  {
    title: "Yangilanishlar va monitoring",
    text: "Kutubxona va paketlardagi ma'lum zaifliklar muntazam tekshiriladi va yangilanadi. Texnik yordam tarifida sayt ishlashi kuzatib boriladi.",
  },
  {
    title: "Kod va ma'lumotlar mijozga tegishli",
    text: "Loyiha topshirilgandan so'ng manba kodi, domen va hosting kirish ma'lumotlari to'liq mijozga beriladi. Kerak bo'lsa, maxfiylik kelishuvi (NDA) imzolaymiz.",
  },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Maxfiylik siyosati — ${SITE.name}` },
      {
        name: "description",
        content: `${SITE.name} qanday ma'lumotlarni to'playdi, ulardan qanday foydalanadi va mijoz loyihalari xavfsizligi uchun nima qiladi.`,
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Maxfiylik siyosati"
        title="Ma'lumotlaringiz"
        highlight="himoyada"
        description={`Oxirgi yangilanish: ${UPDATED}`}
      />

      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-12">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.list && (
                  <ul className="list-disc space-y-2 pl-5">
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section id="xavfsizlik" className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-4">8. Xavfsizlik: biz nima qilamiz</h2>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Bu qoidalarga o'z saytimizda ham, mijozlar uchun ishlab chiqadigan har bir loyihada ham
              amal qilamiz.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {SECURITY.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="aloqa" className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-4">9. Bog'lanish</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ushbu siyosat yoki ma'lumotlaringiz bo'yicha savollar, shuningdek ularni o'chirish
                so'rovlari uchun biz bilan bog'laning:
              </p>
              <ul className="space-y-2">
                <li>
                  Email:{" "}
                  <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  Telefon / Telegram:{" "}
                  <a href={SITE.phoneHref} className="text-primary hover:underline">
                    {SITE.phone}
                  </a>
                </li>
                <li>Manzil: Toshkent, O'zbekiston</li>
              </ul>
              <p>
                So'rovlarga 30 kun ichida javob beramiz. Siyosatga o'zgartirish kiritilsa, yangi
                versiya shu sahifada e'lon qilinadi. Yoki{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  aloqa sahifasi
                </Link>{" "}
                orqali yozing.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
