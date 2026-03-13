import { MetadataRoute } from "next";
import { categories, tools } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://instrumental.kz";
  const currentDate = new Date();

  // Homepage
  const homePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  // Category pages with images
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/catalog/${category.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
    // Note: Next.js sitemap doesn't support images directly,
    // but the URL structure helps search engines discover content
  }));

  // Section anchors as virtual pages (improves internal linking signals)
  const sectionPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/#catalog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#prices`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#promotions`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contacts`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [...homePages, ...categoryPages, ...sectionPages];
}
