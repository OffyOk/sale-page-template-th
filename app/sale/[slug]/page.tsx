import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImageGallery } from "@/components/ImageGallery";
import { LeadForm } from "@/components/LeadForm";
import { Pricing } from "@/components/Pricing";
import { TemplateSwitcher } from "@/components/TemplateSwitcher";
import {
  getTemplateBySlug,
  normalizePath,
  saleTemplates,
} from "@/config/template.config";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return {
      title: "ไม่พบหน้าที่ต้องการ",
      description: "ไม่พบข้อมูลที่คุณกำลังค้นหา",
    };
  }

  const title = `${template.headline} | ${template.productName}`;
  const description = template.subHeadline;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL as string;
  const url = `${baseUrl}/sale/${encodeURIComponent(slug)}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: template.productName,
      type: "website",
      locale: "th_TH",
      images: [
        {
          url: template.images[0],
          alt: template.productName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [template.images[0]],
    },
  };
}

export function generateStaticParams(): Params[] {
  return saleTemplates.map((template) => ({
    slug: normalizePath(template.productPath),
  }));
}

export default async function SalePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  return (
    <main>
      <Hero
        productName={template.productName}
        headline={template.headline}
        subHeadline={template.subHeadline}
        ctaText={template.ctaText}
      />
      <TemplateSwitcher currentSlug={slug} />
      <Benefits benefits={[...template.benefits]} />
      <Features features={[...template.features]} />
      <ImageGallery images={[...template.images]} productName={template.productName} />
      <Pricing price={template.price} ctaText={template.ctaText} />
      <FAQ faqs={[...template.faqs]} />
      <LeadForm
        productName={template.productName}
        ctaText={template.ctaText}
        slug={slug}
      />
      <Footer productName={template.productName} />
    </main>
  );
}