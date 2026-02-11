import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
  productName: string;
};

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">ภาพตัวอย่างที่สะท้อนความพรีเมียม</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {images.map((image, index) => (
            <figure key={image} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <Image
                src={image}
                alt={`${productName} ภาพที่ ${index + 1}`}
                width={720}
                height={480}
                className="h-44 w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}