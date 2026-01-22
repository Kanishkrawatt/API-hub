import type { MetadataRoute } from "next";
import { getAllApiSlugs, getAllCategories } from "@/lib/content/fs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const [apiSlugs, categories] = await Promise.all([getAllApiSlugs(), getAllCategories()]);

  const now = new Date();

  const fixed: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/api-hub`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
  ];

  const categoryUrls: MetadataRoute.Sitemap = categories.flatMap((c) => [
    {
      url: `${baseUrl}/api-hub/category/${c}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/api-hub/${c}/top-5-apis`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/api-hub/${c}/top-10-apis`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ]);

  const apiUrls: MetadataRoute.Sitemap = apiSlugs.map((slug) => ({
    url: `${baseUrl}/api-hub/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...fixed, ...categoryUrls, ...apiUrls];
}


