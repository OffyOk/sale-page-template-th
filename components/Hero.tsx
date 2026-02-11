import { buttonVariants } from "@/components/ui/button";

type HeroProps = {
  productName: string;
  headline: string;
  subHeadline: string;
  ctaText: string;
};

export function Hero({ productName, headline, subHeadline, ctaText }: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="mb-4 inline-flex rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1 text-sm font-medium">
          {productName}
        </p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{headline}</h1>
        <p className="mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">{subHeadline}</p>
        <div className="mt-8">
          <a href="#lead-form" className={buttonVariants({ size: "lg", className: "h-12 rounded-xl px-8 text-base font-semibold" })}>
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}