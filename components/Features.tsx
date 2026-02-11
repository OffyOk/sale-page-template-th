type FeaturesProps = {
  features: string[];
};

export function Features({ features }: FeaturesProps) {
  return (
    <section className="bg-slate-100 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">สิ่งที่คุณจะได้แบบครบจบในหน้าเดียว</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature} className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700">
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}