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

const baseUrl = "https://jso-rent.kz";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "JSO Rent | Аренда инструментов в Астане",
  description:
    "Аренда строительных инструментов в Астане. Перфораторы, болгарки, генераторы, компрессоры, пылесосы Керхер. Доставка. Акция 3+1.",
  keywords: [
    "аренда инструментов",
    "прокат инструментов",
    "Астана",
    "перфоратор",
    "болгарка",
    "генератор",
    "компрессор",
    "Керхер",
  ],
  openGraph: {
    title: "JSO Rent | Аренда инструментов в Астане",
    description:
      "Аренда строительных инструментов в Астане. Акция 3+1 — 4-й день бесплатно!",
    type: "website",
    locale: "ru_KZ",
    url: baseUrl,
    siteName: "JSO Rent",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "JSO Rent - Аренда инструментов в Астане",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSO Rent | Аренда инструментов в Астане",
    description:
      "Аренда строительных инструментов в Астане. Акция 3+1 — 4-й день бесплатно!",
    images: ["https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&h=630&fit=crop&q=80"],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "JSO Rent",
    description:
      "Аренда строительных инструментов в Астане. Перфораторы, болгарки, генераторы, компрессоры, пылесосы Керхер.",
    url: baseUrl,
    telephone: "+77066228061",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Аманжол Болекпаев, 14",
      addressLocality: "Астана",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
