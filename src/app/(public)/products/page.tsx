import { Suspense } from "react";
import ProductsContent from "../../../components/products/ProductsContent";
import type { RawParams } from "@/lib/product-query";

export const metadata = { title: "محصولات | رنتیو" };

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<RawParams>;
}) {
  return (
    <Suspense fallback={<p className="p-10 text-center text-[#5B6778]">در حال بارگذاری...</p>}>
      <ProductsContent searchParams={searchParams} />
    </Suspense>
  );
}