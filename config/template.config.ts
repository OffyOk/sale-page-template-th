import { saleConfig as autoConfig } from "@/config/auto.config";
import { saleConfig as investConfig } from "@/config/invest.config";
import { saleConfig as momConfig } from "@/config/mom.config";
import { saleConfig } from "@/config/sale.config";

export type SaleTemplateConfig = {
  productPath: string;
  productName: string;
  headline: string;
  subHeadline: string;
  benefits: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
  images: string[];
  price: string;
  ctaText: string;
};

export const saleTemplates: SaleTemplateConfig[] = [
  saleConfig,
  investConfig,
  autoConfig,
  momConfig,
];

export const normalizePath = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "");

export const getTemplateBySlug = (slug: string) =>
  saleTemplates.find((template) => normalizePath(template.productPath) === slug);