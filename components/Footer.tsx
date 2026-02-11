type FooterProps = {
  productName: string;
};

export function Footer({ productName }: FooterProps) {
  return (
    <footer className="bg-slate-950 py-8 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>{productName}</p>
        <p>สงวนลิขสิทธิ์ {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}