import type { MetadataRoute } from "next";

import { saleConfig } from "@/config/sale.config";

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL as string);
  const slug = toSlug(saleConfig.productPath);
  const saleUrl = new URL(`/sale/${encodeURIComponent(slug)}`, baseUrl).toString();

  return [
    {
      url: saleUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}