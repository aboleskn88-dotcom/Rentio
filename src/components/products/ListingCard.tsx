import Link from "next/link";
import type { Product } from "@/data/products";
import ProductIcon from "@/components/home/ProductIcon";

export default function ListingCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col overflow-hidden rounded-[18px] border border-[#E3E8E6] bg-white transition-shadow hover:shadow-[0_12px_28px_rgba(15,27,45,0.1)]"
    >
      <div className={`relative flex h-44 items-center justify-center ${product.tint}`}>
        <span
          className={`absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-medium ${
            product.available ? "text-brand" : "text-[#5B6778]"
          }`}
        >
          {product.available ? "موجود" : "ناموجود"}
        </span>

        {product.delivery && (
          <span className="absolute left-3 top-3 rounded-full bg-[#0F1B2D] px-2.5 py-1 text-xs text-white">
            تحویل درب منزل
          </span>
        )}

        <div className={product.available ? "" : "opacity-40"}>
          <ProductIcon name={product.icon} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 p-4">
        <h3 className="text-[17px] font-bold">{product.name}</h3>
        <p className="text-[13px] text-[#5B6778]">{product.city}</p>
        <p className="mt-1 text-[15px] font-bold text-brand">
          {product.pricePerDay.toLocaleString("fa-IR")} تومان
          <span className="mr-1 text-xs font-normal text-[#5B6778]">/ روز</span>
        </p>
      </div>
    </Link>
  );
}