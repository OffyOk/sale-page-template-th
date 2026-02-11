import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { normalizePath, saleTemplates } from "@/config/template.config";
import { cn } from "@/lib/utils";

type TemplateSwitcherProps = {
  currentSlug: string;
};

export function TemplateSwitcher({ currentSlug }: TemplateSwitcherProps) {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-slate-900">เลือกเทมเพลตที่ต้องการดู</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {saleTemplates.map((template) => {
            const slug = normalizePath(template.productPath);
            const isActive = slug === currentSlug;

            return (
              <Link
                key={template.productPath}
                href={`/sale/${encodeURIComponent(slug)}`}
                className={cn(
                  buttonVariants({ variant: isActive ? "default" : "outline" }),
                  "rounded-xl"
                )}
              >
                {template.productName}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
