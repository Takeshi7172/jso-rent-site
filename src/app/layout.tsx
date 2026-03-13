import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    default: "JSO Rent | Аренда инструментов в Астане — от 900 ₸/день",
    template: "%s | JSO Rent Астана",
  },
  description:
    "Аренда строительных инструментов в Астане от 900 ₸/день. Перфораторы, болгарки, генераторы, компрессоры, пылесосы Керхер. Доставка по городу. Акция 3+1 — 4-й день бесплатно! Работаем ежедневно 09:00-21:00.",
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
  authors: [{ name: "JSO Rent" }],
  creator: "JSO Rent",
  publisher: "JSO Rent",
  formatDetection: {
    telephone: true,
    email: false,
  },
  openGraph: {
    title: "JSO Rent | Аренда инструментов в Астане — от 900 ₸/день",
    description:
      "70+ инструментов в аренду: перфораторы, болгарки, генераторы, Керхер. Акция 3+1 — 4-й день бесплатно! Доставка по Астане.",
    type: "website",
    locale: "ru_KZ",
    url: baseUrl,
    siteName: "JSO Rent",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "JSO Rent - Аренда строительных инструментов в Астане",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSO Rent | Аренда инструментов в Астане",
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
    // Add when you have these
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
    name: "JSO Rent",
    alternateName: "ЖСО Рент",
    description:
      "Аренда строительных инструментов в Астане. Перфораторы, болгарки, генераторы, компрессоры, пылесосы Керхер. Более 70 единиц техники.",
    url: baseUrl,
    telephone: "+77066228061",
    email: "info@instrumental.kz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Аманжол Болекпаев, 14",
      addressLocality: "Астана",
      addressRegion: "Астана",
      postalCode: "010000",
      addressCountry: "KZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.12184,
      longitude: 71.500955,
    },
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
      closes: "21:00",
    },
    priceRange: "₸₸",
    currenciesAccepted: "KZT",
    paymentAccepted: "Cash, Card",
    areaServed: {
      "@type": "City",
      name: "Астана",
      "@id": "https://www.wikidata.org/wiki/Q1520",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "127",
      ratingCount: "127",
    },
    sameAs: [
      "https://2gis.kz/astana/geo/70000001102013683",
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
    name: "JSO Rent",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: "Сервис аренды строительных инструментов в Астане",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Аманжол Болекпаев, 14",
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
  };

  // WebSite Schema for Sitelinks Search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "JSO Rent",
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
          text: "Для аренды инструмента в JSO Rent нужно удостоверение личности (ИИН) и залог, который возвращается при сдаче инструмента в исправном состоянии.",
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
          text: "Аренда перфоратора в JSO Rent стоит от 900 ₸/день (3 Дж) до 3800 ₸/день (отбойник 50 Дж). Действует акция 3+1: при аренде на 3 дня — 4-й день бесплатно.",
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
        name: "Работает ли JSO Rent в выходные дни?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, JSO Rent работает ежедневно без выходных с 09:00 до 21:00, включая субботу и воскресенье.",
        },
      },
      {
        "@type": "Question",
        name: "Какие бренды инструментов есть в аренду?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "В JSO Rent представлены профессиональные бренды: Denzel, Alteco, Karcher (Керхер), Bosch, Starmix, Crown, Resanta. Всего более 70 единиц техники.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли арендовать генератор в Астане?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, в JSO Rent можно арендовать генераторы мощностью от 3.3 кВт (3000 ₸/день) до 8.5 кВт (8500 ₸/день). Все генераторы бренда Denzel, надёжные и проверенные.",
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
      </body>
    </html>
  );
}
