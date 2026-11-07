import Link from "next/link";
import Form from "next/form";
import { products } from "@/data/products";
import { applyFilters, countActive, parseFilters, toEntries } from "@/lib/product-query";
import type { RawParams } from "@/lib/product-query";

import CategoryChips from "./CategoryChips";
import FilterPanel from "./FilterPanel";
import MobileFilters from "./MobileFilters";
import SortTabs from "./SortTabs";
import ActiveFilters from "./ActiveFilters";
import ListingCard from "./ListingCard";
import Pagination from "./Pagination";

export default async function ProductsContent({
  searchParams,
}: {
  searchParams: Promise<RawParams>;
}) {
  const filters = parseFilters(await searchParams);
  const { items, total, page, pages } = applyFilters(products, filters);

  return (
    <div className="mx-auto max-w-300 px-4 py-8 sm:px-6">
      {/* عنوان و جست‌وجو */}
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">محصولات قابل اجاره</h1>
          <p className="mt-1 text-sm text-[#5B6778]">
            {total.toLocaleString("fa-IR")} محصول پیدا شد
          </p>
        </div>

        <Form action="/products" role="search" className="relative w-full sm:max-w-sm">
          {/* فیلترهای فعلی حفظ می‌شوند، فقط q عوض می‌شود */}
          {toEntries(filters)
            .filter(([name]) => name !== "q")
            .map(([name, value]) => (
              <input key={name} type="hidden" name={name} value={value} />
            ))}
          <label htmlFor="product-q" className="sr-only">
            جست‌وجو در محصولات
          </label>
          <input
            id="product-q"
            key={filters.q}
            name="q"
            type="search"
            defaultValue={filters.q}
            placeholder="جست‌وجو در محصولات..."
            className="w-full rounded-xl border border-[#E3E8E6] bg-white py-2.5 pl-4 pr-10 text-sm outline-none placeholder:text-[#9AA3AE] focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6778]"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        </Form>
      </div>

      <CategoryChips filters={filters} />

      <div className="mt-6 grid gap-6 lg:grid-cols-[17rem_1fr]">
        {/* فیلترها: دسکتاپ */}
        <aside className="hidden self-start rounded-2xl border border-[#E3E8E6] bg-white px-4 lg:sticky lg:top-20 lg:block">
          <FilterPanel filters={filters} idPrefix="d" />
        </aside>

        <section>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            {/* فیلترها: موبایل و تبلت */}
            <MobileFilters activeCount={countActive(filters)}>
              <FilterPanel filters={filters} idPrefix="m" />
            </MobileFilters>
            <SortTabs filters={filters} />
          </div>

          <ActiveFilters filters={filters} />

          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[#D9DEE3] bg-white px-6 py-14 text-center">
              <p className="font-bold">محصولی با این فیلترها پیدا نشد.</p>
              <Link
                href="/products"
                className="mt-4 inline-block rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                حذف همه‌ی فیلترها
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((product) => (
                <ListingCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <Pagination filters={filters} page={page} pages={pages} />
        </section>
      </div>
    </div>
  );
}