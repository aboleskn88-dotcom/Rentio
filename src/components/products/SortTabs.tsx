import Link from "next/link";
import { SORTS, buildHref } from "@/lib/product-query";
import type { Filters } from "@/lib/product-query";

export default function SortTabs({ filters }: { filters: Filters }) {
  return (
    <nav aria-label="مرتب‌سازی" className="flex flex-wrap items-center gap-1 text-sm">
      <span className="ml-2 text-[#5B6778]">مرتب‌سازی:</span>
      {SORTS.map((s) => {
        const on = filters.sort === s.value;
        return (
          <Link
            key={s.value}
            href={buildHref(filters, { sort: s.value })}
            aria-current={on ? "true" : undefined}
            className={`rounded-lg px-3 py-1.5 transition-colors ${
              on ? "bg-brand/10 font-bold text-brand" : "text-[#5B6778] hover:bg-black/5"
            }`}
          >
            {s.label}
          </Link>
        );
      })}
    </nav>
  );
}