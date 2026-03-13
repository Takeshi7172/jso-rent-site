import { MetadataRoute } from 'next';
import { categories } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jso-rent.kz';

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/catalog/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...categoryUrls,
  ];
}
