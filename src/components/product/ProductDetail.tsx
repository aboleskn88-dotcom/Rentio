import { notFound } from "next/navigation";
import { categories } from "@/data/products";
import { getProductById, getSimilarProducts } from "@/lib/products";
import Breadcrumb from "./Breadcrumb";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import SpecsTable from "./SpecsTable";
import BookingBox from "./BookingBox";
import SimilarProducts from "./SimilarProducts";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const similar = await getSimilarProducts(product);
  const category = categories.find((c) => c.slug === product.category);

  return (
    <div className="mx-auto max-w-300 px-4 pb-14 pt-4 sm:px-6">
      <Breadcrumb
        items={[
          { label: "خانه", href: "/" },
          { label: "محصولات", href: "/products" },
          ...(category
            ? [{ label: category.label, href: `/products?category=${category.slug}` }]
            : []),
          { label: product.name },
        ]}
      />

      <div className="flex flex-wrap items-start gap-6">
        <div className="flex min-w-0 flex-1 basis-140 flex-col gap-5">
          <ProductGallery product={product} />
          <ProductInfo product={product} categoryLabel={category?.label} />
          <SpecsTable specs={product.specs} minDays={product.minDays} />
        </div>

        <div className="w-90 max-w-full shrink-0 self-start lg:sticky lg:top-20">
          <BookingBox
            pricePerDay={product.pricePerDay}
            minDays={product.minDays}
            available={product.available}
          />
        </div>
      </div>

      <SimilarProducts products={similar} />
    </div>
  );
}