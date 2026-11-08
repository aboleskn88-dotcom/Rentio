import type { Product } from "@/data/products";
import ListingCard from "@/components/products/ListingCard";

export default function SimilarProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="pt-10">
      <h2 className="mb-4.5 text-2xl font-bold">محصولات مشابه</h2>
      <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ListingCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}