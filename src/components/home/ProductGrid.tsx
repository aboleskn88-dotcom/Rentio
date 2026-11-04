import React from 'react'
import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from './ProductCard'

const ProductGrid = () => {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-14 mt-10">
      <div className="mb-5 flex items-baseline justify-between">
        <Link href="/products" className="text-sm font-medium text-brand hover:opacity-80">
          مشاهده همه
        </Link>
        <h2 className="text-[26px] font-bold">پیشنهادهای محبوب</h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid