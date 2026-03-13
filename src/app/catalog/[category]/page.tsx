import { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const FloatingButtons = dynamic(() => import("@/components/FloatingButtons").then((mod) => ({ default: mod.FloatingButtons })));
import {
  categories,
  getCategoryBySlug,
  getToolsByCategory,
  WHATSAPP_LINK,
} from "@/lib/data";
import { createWhatsAppLink } from "@/lib/utils";

interface PageProps {
  params: Promise<{ category: string }>;
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  const baseUrl = "https://instrumental.kz";

  if (!category) {
    return {
      title: "Категория не найдена | JSO Rent",
    };
  }

  const tools = getToolsByCategory(category.id);
  const minPrice = Math.min(...tools.map((t) => t.price));
  const maxPrice = Math.max(...tools.map((t) => t.price));

  const title = `${category.name} в аренду в Астане — от ${minPrice.toLocaleString()} ₸/день`;
  const description = `Аренда ${category.description.toLowerCase()} в Астане. ${tools.length} инструментов от ${minPrice.toLocaleString()} до ${maxPrice.toLocaleString()} ₸/день. Доставка по городу. Акция 3+1 — 4-й день бесплатно! JSO Rent.`;

  return {
    title,
    description,
    keywords: [
      `аренда ${category.name.toLowerCase()} Астана`,
      `прокат ${category.name.toLowerCase()}`,
      category.description.toLowerCase(),
      "аренда инструментов Астана",
      "прокат оборудования",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ru_KZ",
      url: `${baseUrl}/catalog/${category.id}`,
      siteName: "JSO Rent",
      images: [
        {
          url: category.image,
          width: 800,
          height: 600,
          alt: `${category.name} в аренду в Астане — JSO Rent`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [category.image],
    },
    alternates: {
      canonical: `${baseUrl}/catalog/${category.id}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  const baseUrl = "https://instrumental.kz";

  if (!category) {
    notFound();
  }

  const tools = getToolsByCategory(category.id);
  const Icon = category.icon;

  // Generate ItemList schema for tools
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} в аренду в Астане`,
    description: `Каталог ${category.description.toLowerCase()} для аренды в JSO Rent`,
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: tool.name,
        description: `${tool.name} в аренду в Астане${tool.brand ? ` (${tool.brand})` : ""}`,
        brand: tool.brand
          ? { "@type": "Brand", name: tool.brand }
          : undefined,
        offers: {
          "@type": "Offer",
          price: tool.price,
          priceCurrency: "KZT",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: tool.price,
            priceCurrency: "KZT",
            unitText: "день",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "DAY",
            },
          },
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "JSO Rent",
          },
        },
      },
    })),
  };

  return (
    <>
      {/* Product List Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen pt-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Каталог", href: "/#catalog" },
              { label: category.name },
            ]}
          />

          {/* Category Hero with Image */}
          <div className="mb-10 relative overflow-hidden rounded-2xl">
            <div className="relative h-48 sm:h-64">
              <Image
                src={category.image}
                alt={`${category.name} в аренду в Астане — прокат ${category.description.toLowerCase()} JSO Rent`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-6 sm:px-10">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-4xl font-bold text-white">
                        {category.name}
                      </h1>
                      <p className="text-white/80 mt-1">{category.description}</p>
                    </div>
                  </div>
                  <p className="text-white/70 mt-4">
                    Найдено инструментов:{" "}
                    <span className="text-cta font-semibold">{tools.length}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Table */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="text-left py-4 px-6 font-semibold text-foreground">
                      Инструмент
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-foreground hidden sm:table-cell">
                      Бренд
                    </th>
                    <th className="text-right py-4 px-6 font-semibold text-foreground">
                      Цена/день
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-foreground">
                      Заказ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tools.map((tool, index) => (
                    <tr
                      key={index}
                      className="border-b border-border last:border-0 hover:bg-card-hover transition-colors"
                    >
                      <td className="py-4 px-6">
                        <span className="font-medium text-foreground">
                          {tool.name}
                        </span>
                        {tool.brand && (
                          <span className="sm:hidden text-sm text-muted ml-2">
                            ({tool.brand})
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-muted hidden sm:table-cell">
                        {tool.brand || "—"}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="text-primary font-bold text-lg">
                          {tool.price.toLocaleString()} ₸
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <a
                          href={createWhatsAppLink(tool.name, tool.price)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-cta hover:bg-cta-hover text-black font-medium rounded-lg transition-all hover:scale-105"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span className="hidden sm:inline">Заказать</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="bg-gradient-to-r from-primary/10 to-cta/10 rounded-2xl p-6 mb-8 border border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Акция 3+1
                </h3>
                <p className="text-muted">
                  При аренде на 3 дня — 4-й день БЕСПЛАТНО!
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cta hover:bg-cta-hover text-black font-bold rounded-xl transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Узнать подробнее
              </a>
            </div>
          </div>

          {/* Back Link */}
          <Link
            href="/#catalog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад к каталогу
          </Link>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
