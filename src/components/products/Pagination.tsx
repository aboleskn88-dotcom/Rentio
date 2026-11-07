import { Fragment } from "react";
import Link from "next/link";
import { buildHref } from "@/lib/product-query";
import type { Filters } from "@/lib/product-query";

const item =
  "flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm transition-colors";

export default function Pagination({
  filters,
  page,
  pages,
}: {
  filters: Filters;
  page: number;
  pages: number;
}) {
  if (pages <= 1) return null;

  // فقط اول، آخر و اطراف صفحه‌ی فعلی
  const nums = Array.from({ length: pages }, (_, i) => i + 1).filter(
    (n) => n === 1 || n === pages || Math.abs(n - page) <= 1,
  );

  return (
    <nav aria-label="صفحه‌بندی" className="mt-8 flex flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <Link
          href={buildHref(filters, { page: page - 1 })}
          className={`${item} border-[#E3E8E6] bg-white hover:border-brand`}
        >
          قبلی
        </Link>
      )}

      {nums.map((n, i) => (
        <Fragment key={n}>
          {i > 0 && n - nums[i - 1] > 1 && <span className="px-1 text-[#5B6778]">…</span>}
          <Link
            href={buildHref(filters, { page: n })}
            aria-current={n === page ? "page" : undefined}
            className={`${item} ${
              n === page
                ? "border-brand bg-brand font-bold text-white"
                : "border-[#E3E8E6] bg-white hover:border-brand"
            }`}
          >
            {n.toLocaleString("fa-IR")}
          </Link>
        </Fragment>
      ))}

      {page < pages && (
        <Link
          href={buildHref(filters, { page: page + 1 })}
          className={`${item} border-[#E3E8E6] bg-white hover:border-brand`}
        >
          بعدی
        </Link>
      )}
    </nav>
  );
}