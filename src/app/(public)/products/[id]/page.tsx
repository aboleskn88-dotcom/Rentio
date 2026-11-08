// src/app/(public)/products/[id]/page.tsx

import { Suspense } from "react";
import ProductDetail from "../../../../components/product/ProductDetail";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<p className="p-10 text-center">در حال بارگذاری...</p>}>
      <ProductDetail params={params} />
    </Suspense>
  );
}