import type { Product } from "@/data/products";
import ProductIcon from "@/components/home/ProductIcon";

export default function ProductGallery({ product }: { product: Product }) {
  return (
    <section className="rounded-[18px] border border-[#E3E8E6] bg-white p-4">
      <div className={`relative flex h-90 items-center justify-center rounded-[14px] ${product.tint}`}>
        <span
          className={`absolute right-3.5 top-3.5 rounded-full bg-white px-3 py-1 text-[13px] font-medium ${
            product.available ? "text-brand" : "text-[#5B6778]"
          }`}
        >
          {product.available ? "موجود" : "ناموجود"}
        </span>

        {product.delivery && (
          <span className="absolute left-3.5 top-3.5 rounded-full bg-[#0F1B2D] px-3 py-1 text-[13px] text-white">
            تحویل درب منزل
          </span>
        )}

        <div className={product.available ? "" : "opacity-40"}>
          <ProductIcon name={product.icon} size={150} />
        </div>
      </div>

      <div className="mt-3 flex gap-2.5">
        <div
          className={`flex h-16 w-21 items-center justify-center rounded-[10px] border-2 border-brand ${product.tint}`}
        >
          <ProductIcon name={product.icon} size={28} />
        </div>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-16 w-21 rounded-[10px] border-2 border-transparent opacity-60 ${product.tint}`}
          />
        ))}
      </div>
    </section>
  );
}