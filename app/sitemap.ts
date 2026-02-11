import type { MetadataRoute } from "next";

import { normalizePath, saleTemplates } from "@/config/template.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL as string);

  return saleTemplates.map((template) => {
    const slug = normalizePath(template.productPath);
    const saleUrl = new URL(`/sale/${encodeURIComponent(slug)}`, baseUrl).toString();

    return {
      url: saleUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    };
  });
}