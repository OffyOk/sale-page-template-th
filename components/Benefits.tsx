type BenefitsProps = {
  benefits: string[];
};

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">เหตุผลที่ลูกค้าตัดสินใจเร็วขึ้น</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}