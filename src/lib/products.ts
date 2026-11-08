import { products } from "@/data/products";
import type { Product } from "@/data/products";

export async function getProductById(id: string): Promise<Product | undefined> {
    const product  = products.find(item => item.id === id)
    return product
}

export async function getSimilarProducts(
  product: Product,
  limit = 4,
): Promise<Product[]> {
  return products.filter(item => item.category === product.category && item.id === product.id)
  .sort((a,b)=> b.addedAt - a.addedAt).slice(0 , limit)
}