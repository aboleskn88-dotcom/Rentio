import Link from "next/link";
import { categories } from "@/data/products";
import { buildHref } from "@/lib/product-query";
import type { Filters } from "@/lib/product-query";

type Chip = { label: string; href: string };

const fmt = (n: number) => n.toLocaleString("fa-IR");

export default function ActiveFilters({ filters }: { filters: Filters }) {
  const chips: Chip[] = [];

  if (filters.q) {
    chips.push({ label: `جست‌وجو: ${filters.q}`, href: buildHref(filters, { q: "" }) });
  }
  if (filters.category) {
    const c = categories.find((x) => x.slug === filters.category);
    chips.push({ label: c?.label ?? filters.category, href: buildHref(filters, { category: "" }) });
  }
  if (filters.city) {
    chips.push({ label: filters.city, href: buildHref(filters, { city: "" }) });
  }
  if (filters.minPrice !== null || filters.maxPrice !== null) {
    const from = filters.minPrice !== null ? `از ${fmt(filters.minPrice)} ` : "";
    const to = filters.maxPrice !== null ? `تا ${fmt(filters.maxPrice)} ` : "";
    chips.push({
      label: `${from}${to}تومان`,
      href: buildHref(filters, { minPrice: null, maxPrice: null }),
    });
  }
  if (filters.available) {
    chips.push({ label: "فقط موجود", href: buildHref(filters, { available: false }) });
  }
  if (filters.delivery) {
    chips.push({ label: "تحویل درب منزل", href: buildHref(filters, { delivery: false }) });
  }

  if (chips.length === 0) return null;

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      {chips.map((chip) => (
        <Link
          key={chip.label}
          href={chip.href}
          aria-label={`حذف فیلتر ${chip.label}`}
          className="flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1.5 text-sm text-brand transition-opacity hover:opacity-80"
        >
          {chip.label}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </Link>
      ))}
      <Link href="/products" className="px-1 text-sm text-[#5B6778] hover:text-[#0F1B2D]">
        حذف همه
      </Link>
    </div>
  );
}