import { buttonVariants } from "@/components/ui/button";

type PricingProps = {
  price: string;
  ctaText: string;
};

export function Pricing({ price, ctaText }: PricingProps) {
  return (
    <section className="bg-slate-950 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm text-slate-300">ราคาโปรโมชันสำหรับรอบนี้</p>
          <p className="mt-3 text-3xl font-bold sm:text-4xl">{price}</p>
          <p className="mt-3 text-slate-300">ล็อกราคาพิเศษวันนี้ เพื่อเริ่มแคมเปญขายได้ทันที</p>
          <div className="mt-6">
            <a href="#lead-form" className={buttonVariants({ size: "lg", className: "h-12 rounded-xl px-8 text-base font-semibold" })}>
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}