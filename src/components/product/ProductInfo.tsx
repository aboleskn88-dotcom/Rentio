import type { Product } from "@/data/products";

export default function ProductInfo({
  product,
  categoryLabel,
}: {
  product: Product;
  categoryLabel?: string;
}) {
  return (
    <section className="rounded-[18px] border border-[#E3E8E6] bg-white p-6">
      <h1 className="mb-2.5 text-[28px] font-bold">{product.name}</h1>

      <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-[#5B6778]">
        <span className="inline-flex items-center gap-1.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          {product.city}
        </span>
        {categoryLabel && <span>دسته: {categoryLabel}</span>}
      </div>

      <p className="mb-5 text-[15px] leading-8 text-[#5B6778]">{product.description}</p>

      <h2 className="mb-3 text-lg font-bold">ویژگی‌ها</h2>
      <ul className="flex flex-col gap-2.5 text-[15px]">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0 text-brand"
            >
              <path d="M5 12l5 5 9-10" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}