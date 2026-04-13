import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://instrumental.kz";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ПрокатПрокат | Аренда инструментов в Астане — от 900 ₸/день",
    template: "%s | ПрокатПрокат Астана",
  },
  description:
    "Аренда строительных инструментов в Астане от 900 ₸/день. Перфораторы, болгарки, генераторы, компрессоры, пылесосы Керхер. Доставка по городу. Акция 3+1 — 4-й день бесплатно! Работаем ежедневно 09:00-20:00.",
  keywords: [
    // Primary keywords
    "аренда инструментов Астана",
    "прокат инструментов Астана",
    "аренда строительного инструмента",
    // Tool-specific
    "аренда перфоратора Астана",
    "прокат болгарки Астана",
    "аренда генератора Астана",
    "прокат компрессора",
    "аренда Керхер Астана",
    "прокат пылесоса Керхер",
    // Brand keywords
    "Denzel аренда",
    "Alteco прокат",
    "Karcher аренда Астана",
    // Long-tail
    "где взять перфоратор в аренду Астана",
    "прокат электроинструмента недорого",
    "аренда инструментов с доставкой Астана",
    // Service keywords
    "прокат оборудования Астана",
    "аренда техники для ремонта",
    "инструменты напрокат",
  ],
  authors: [{ name: "ПрокатПрокат" }],
  creator: "ПрокатПрокат",
  publisher: "ПрокатПрокат",
  formatDetection: {
    telephone: true,
    email: false,
  },
  openGraph: {
    title: "ПрокатПрокат | Аренда инструментов в Астане — от 900 ₸/день",
    description:
      "70+ инструментов в аренду: перфораторы, болгарки, генераторы, Керхер. Акция 3+1 — 4-й день бесплатно! Доставка по Астане.",
    type: "website",
    locale: "ru_KZ",
    url: baseUrl,
    siteName: "ПрокатПрокат",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "ПрокатПрокат - Аренда строительных инструментов в Астане",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ПрокатПрокат | Аренда инструментов в Астане",
    description:
      "70+ инструментов в аренду от 900 ₸/день. Акция 3+1. Доставка по Астане.",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=630&fit=crop&q=80",
    ],
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YW_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#business`,
    name: "ПрокатПрокат",
    alternateName: "ПрокатПрокат",
    description:
      "Аренда строительных инструментов в Астане. Перфораторы, болгарки, генераторы, компрессоры, пылесосы Керхер. Более 70 единиц техники.",
    url: baseUrl,
    telephone: "+77066228061",
    email: "info@instrumental.kz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Е-15 улица, 11/1",
      addressLocality: "Астана",
      addressRegion: "Астана",
      postalCode: "Z05X3T3",
      addressCountry: "KZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.126713,
      longitude: 71.373613,
    },
    openingHours: "Mo-Su 09:00-20:00",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    priceRange: "₸₸",
    currenciesAccepted: "KZT",
    paymentAccepted: "Cash, Card",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 51.126713,
        longitude: 71.373613,
      },
      geoRadius: "15000",
    },
    image: `${baseUrl}/og-image.jpg`,
    hasMap: "https://go.2gis.com/bx6Gf",
    sameAs: [
      "https://go.2gis.com/bx6Gf",
      "https://2gis.kz/astana/firm/70000001113171197",
      "https://wa.me/77066228061",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Каталог инструментов в аренду",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Перфораторы и дрели",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Перфоратор 3 Дж Denzel",
              },
              price: "900",
              priceCurrency: "KZT",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "900",
                priceCurrency: "KZT",
                unitText: "день",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Генераторы",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Генератор 3.3 кВт Denzel",
              },
              price: "3000",
              priceCurrency: "KZT",
            },
          ],
        },
      ],
    },
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "ПрокатПрокат",
    legalName: "ПрокатПрокат",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: "Сервис аренды строительных инструментов в Астане",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Е-15 улица, 11/1",
      addressLocality: "Астана",
      addressCountry: "KZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+77066228061",
      contactType: "customer service",
      availableLanguage: ["Russian", "Kazakh"],
      areaServed: "KZ",
    },
    sameAs: [
      "https://go.2gis.com/bx6Gf",
      "https://2gis.kz/astana/firm/70000001113171197",
      "https://wa.me/77066228061",
    ],
  };

  // WebSite Schema for Sitelinks Search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "ПрокатПрокат",
    url: baseUrl,
    description: "Аренда инструментов в Астане",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "ru",
  };

  // FAQ Schema - Common questions for AI search
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Какие документы нужны для аренды инструмента?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для аренды инструмента в ПрокатПрокат нужно удостоверение личности (ИИН) и залог, который возвращается при сдаче инструмента в исправном состоянии.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли доставка инструментов по Астане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, мы доставляем инструменты по всей Астане. При заказе от 10 000 ₸ доставка бесплатная. Доставка осуществляется в день заказа.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит аренда перфоратора в Астане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Аренда перфоратора в ПрокатПрокат стоит от 900 ₸/день (3 Дж) до 3800 ₸/день (отбойник 50 Дж). Действует акция 3+1: при аренде на 3 дня — 4-й день бесплатно.",
        },
      },
      {
        "@type": "Question",
        name: "Какой минимальный срок аренды инструмента?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Минимальный срок аренды — 1 сутки. При аренде на 3 дня действует акция 3+1, где 4-й день предоставляется бесплатно.",
        },
      },
      {
        "@type": "Question",
        name: "Работает ли ПрокатПрокат в выходные дни?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, ПрокатПрокат работает ежедневно без выходных с 09:00 до 20:00, включая субботу и воскресенье.",
        },
      },
      {
        "@type": "Question",
        name: "Какие бренды инструментов есть в аренду?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В ПрокатПрокат представлены профессиональные бренды: Denzel, Alteco, Karcher (Керхер), Bosch, Starmix, Crown, Resanta. Всего более 70 единиц техники.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли арендовать генератор в Астане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, в ПрокатПрокат можно арендовать генераторы мощностью от 3.3 кВт (3000 ₸/день) до 8.5 кВт (8500 ₸/день). Все генераторы бренда Denzel, надёжные и проверенные.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли в аренду пылесосы Керхер?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, у нас большой выбор техники Karcher: строительные пылесосы (3000-5000 ₸/день), моющие пылесосы Puzzi (4500-6500 ₸/день), парогенераторы и мойки высокого давления.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит аренда перфоратора в Астане на день?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Аренда перфоратора в Астане стоит от 900 тенге в день. Лёгкие перфораторы до 800 Вт — 900-1500₸/день, средние — 1500-2500₸/день, отбойные молотки от 3000₸/день. При аренде от 3 дней действует акция 3+1 (4-й день бесплатно). ПрокатПрокат, instrumental.kz.",
        },
      },
      {
        "@type": "Question",
        name: "Аренда или покупка инструмента — что выгоднее?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Аренда выгоднее при разовых работах. Профессиональный перфоратор стоит 80 000-120 000₸. Аренда на 3 дня — около 2700₸. Если инструмент нужен реже 10 раз в год — аренда экономит 90%+ бюджета. Плюс исправный инструмент без затрат на обслуживание.",
        },
      },
      {
        "@type": "Question",
        name: "Какой генератор нужен для частного дома?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для частного дома подойдёт генератор мощностью 3-5 кВт — хватит на освещение, холодильник, насос и зарядку устройств. Для дома с электрическим отоплением нужен от 7 кВт. Аренда генератора в Астане от 3000₸/день в ПрокатПрокат.",
        },
      },
      {
        "@type": "Question",
        name: "Какие инструменты нужны для ремонта квартиры?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Базовый набор для ремонта квартиры: перфоратор (штробы, крепёж) от 900₸/день, болгарка (резка плитки, труб) от 900₸/день, строительный пылесос от 3000₸/день, лазерный уровень от 1500₸/день. Полный набор на неделю — 15 000-25 000₸, в 10 раз дешевле покупки.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит аренда болгарки в Астане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Аренда болгарки (УШМ) в Астане в ПрокатПрокат: 115-125 мм — от 900₸/день, 150 мм — от 1500₸/день, 230 мм — от 1800₸/день. Аккумуляторная болгарка — от 3000₸/день. Диски в комплект не входят.",
        },
      },
      {
        "@type": "Question",
        name: "Как оплатить аренду инструмента?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Принимаем оплату наличными, переводом Kaspi Gold, Kaspi QR. Для юридических лиц (ИП, ТОО) — безналичная оплата по счёту с договором и актом. Залог возвращается при сдаче инструмента в исправном состоянии.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит аренда сварочного аппарата в Астане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Аренда инверторного сварочного аппарата в ПрокатПрокат — от 2300₸/день. Штроборез — от 2500₸/день. Маска и кабели включены в комплект. При аренде от 3 дней действует акция 3+1.",
        },
      },
      {
        "@type": "Question",
        name: "Где арендовать инструменты в Астане недорого?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ПрокатПрокат (instrumental.kz) — прокат строительных инструментов в Астане от 900₸/день. 70+ единиц: перфораторы, болгарки, генераторы, компрессоры, Керхер, тепловые пушки, садовая техника. Акция 3+1. Доставка по Астане. Ежедневно 09:00-20:00.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли арендовать инструмент на час?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Минимальный срок аренды — 1 сутки (24 часа). Почасовая аренда не предусмотрена. При суточном тарифе от 900₸ это выгоднее покупки даже для 2-3 часов работы.",
        },
      },
      {
        "@type": "Question",
        name: "Что делать если арендованный инструмент сломался?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "При поломке — сразу свяжитесь с нами по WhatsApp или телефону +7 706 622-80-61. Если поломка не по вашей вине (заводской дефект, износ) — заменим бесплатно. Все условия фиксируются в договоре аренды.",
        },
      },
    ],
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#service`,
    serviceType: "Tool Rental",
    name: "Аренда строительных инструментов",
    description:
      "Прокат профессионального строительного инструмента и оборудования в Астане с доставкой",
    provider: {
      "@id": `${baseUrl}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: "Астана",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Инструменты в аренду",
      numberOfItems: 70,
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "900",
      highPrice: "8500",
      priceCurrency: "KZT",
      offerCount: 70,
    },
  };

  // Combine all schemas
  const allSchemas = [
    localBusinessSchema,
    organizationSchema,
    websiteSchema,
    faqSchema,
    serviceSchema,
  ];

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {allSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
      window.dataLayer=window.dataLayer||[];
      function gtag(){dataLayer.push(arguments);}
      gtag('js',new Date());
      gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}');
    `,
              }}
            />
          </>
        )}
        {process.env.NEXT_PUBLIC_YM_ID && (
          <Script
            id="ym-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
    ym(${process.env.NEXT_PUBLIC_YM_ID},"init",{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
  `,
            }}
          />
        )}
        {process.env.NEXT_PUBLIC_GADS_ID && (
          <>
            {/* Google Ads gtag.js */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GADS_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-ads-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
    window.dataLayer=window.dataLayer||[];
    function gtag(){dataLayer.push(arguments);}
    gtag('js',new Date());
    gtag('config','${process.env.NEXT_PUBLIC_GADS_ID}');
  `,
              }}
            />
            <Script
              id="google-ads-conversion"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
    gtag('event', 'conversion', {
      'send_to': '${process.env.NEXT_PUBLIC_GADS_CONVERSION}',
      'value': 1.0,
      'currency': 'KZT'
    });
  `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
