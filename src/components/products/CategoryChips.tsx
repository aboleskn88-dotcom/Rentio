import Link from "next/link";
import { categories } from "@/data/products";
import { buildHref } from "@/lib/product-query";
import type { Filters } from "@/lib/product-query";

function chip(on: boolean) {
  return `shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
    on
      ? "border-brand bg-brand font-bold text-white"
      : "border-[#E3E8E6] bg-white hover:border-brand"
  }`;
}

export default function CategoryChips({ filters }: { filters: Filters }) {
  return (
    <nav
      aria-label="دسته‌بندی‌ها"
      className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
    >
      <Link
        href={buildHref(filters, { category: "" })}
        aria-current={filters.category === "" ? "true" : undefined}
        className={chip(filters.category === "")}
      >
        همه
      </Link>

      {categories.map((c) => {
        const on = filters.category === c.slug;
        return (
          <Link
            key={c.slug}
            href={buildHref(filters, { category: c.slug })}
            aria-current={on ? "true" : undefined}
            className={chip(on)}
          >
            {c.label}
          </Link>
        );
      })}
    </nav>
  );
}