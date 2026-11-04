import Link from "next/link";
import type { Product } from "@/data/products";
import FavoriteButton from "./FavoriteButton";
import ProductIcon from "./ProductIcon";

export default function ProductCard({ product }: { product: Product }) {
  const price =
    product.pricePerDay === null
      ? "[قیمت]"
      : product.pricePerDay.toLocaleString("fa-IR");

  return (
    <div className="overflow-hidden rounded-[18px] border border-[#E3E8E6] bg-white transition-shadow hover:shadow-[0_12px_28px_rgba(15,27,45,0.1)]">
      <div className={`relative flex h-44 items-center justify-center ${product.tint}`}>
        <span className="absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-brand">
          موجود
        </span>
        <FavoriteButton />
        <ProductIcon name={product.icon} />
      </div>

      <div className="flex flex-col gap-1.5 p-4">
        <h3 className="text-[17px] font-bold text-gray-500">{product.name}</h3>
        <p className="text-[13px] text-[#3c4044]">{product.city} · آماده تحویل</p>
        <p className="text-[15px] font-bold text-brand">{price} تومان / روز</p>
        <Link
          href={`/products/${product.id}`}
          className="mt-2 block rounded-xl bg-[#0F1B2D] py-3 text-center text-sm font-bold text-white"
        >
          اجاره
        </Link>
      </div>
    </div>
  );
}