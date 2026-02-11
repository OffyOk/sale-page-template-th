type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQItem[];
};

export function FAQ({ faqs }: FAQProps) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">คำถามที่พบบ่อยก่อนเริ่มใช้งาน</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">{faq.question}</summary>
              <p className="mt-3 text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}