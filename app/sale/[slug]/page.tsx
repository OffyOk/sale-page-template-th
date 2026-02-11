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
import { saleConfig } from "@/config/sale.config";

type Params = {
  slug: string;
};

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "");

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = toSlug(saleConfig.productPath);

  if (slug !== canonicalSlug) {
    return {
      title: "ไม่พบหน้าที่ต้องการ",
      description: "ไม่พบข้อมูลที่คุณกำลังค้นหา",
    };
  }

  const title = `${saleConfig.headline} | ${saleConfig.productName}`;
  const description = saleConfig.subHeadline;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL as string;
  const url = `${baseUrl}/sale/${encodeURIComponent(canonicalSlug)}`;

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
      siteName: saleConfig.productName,
      type: "website",
      locale: "th_TH",
      images: [
        {
          url: saleConfig.images[0],
          alt: saleConfig.productName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [saleConfig.images[0]],
    },
  };
}

export function generateStaticParams(): Params[] {
  return [{ slug: toSlug(saleConfig.productPath) }];
}

export default async function SalePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const canonicalSlug = toSlug(saleConfig.productPath);

  if (slug !== canonicalSlug) {
    notFound();
  }

  return (
    <main>
      <Hero
        productName={saleConfig.productName}
        headline={saleConfig.headline}
        subHeadline={saleConfig.subHeadline}
        ctaText={saleConfig.ctaText}
      />
      <Benefits benefits={[...saleConfig.benefits]} />
      <Features features={[...saleConfig.features]} />
      <ImageGallery
        images={[...saleConfig.images]}
        productName={saleConfig.productName}
      />
      <Pricing price={saleConfig.price} ctaText={saleConfig.ctaText} />
      <FAQ faqs={[...saleConfig.faqs]} />
      <LeadForm
        productName={saleConfig.productName}
        ctaText={saleConfig.ctaText}
        slug={slug}
      />
      <Footer productName={saleConfig.productName} />
    </main>
  );
}
