import Link from "next/link";

export default function ProductNotFound() {
  return (
    <section className="mx-auto flex max-w-300 flex-col items-center px-6 py-20 text-center">
      <p className="text-5xl font-bold text-brand">۴۰۴</p>
      <h1 className="mt-4 text-2xl font-bold text-[#0F1B2D]">محصول پیدا نشد</h1>
      <p className="mt-2 text-[15px] leading-8 text-[#5B6778]">
        این محصول وجود ندارد یا از سایت حذف شده است.
      </p>
      <Link
        href="/products"
        className="mt-6 rounded-xl bg-brand px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
      >
        بازگشت به محصولات
      </Link>
    </section>
  );
}