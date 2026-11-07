import Link from "next/link";
import Form from "next/form";
import { cities } from "@/data/products";
import { buildHref, countActive, toEntries } from "@/lib/product-query";
import type { Filters } from "@/lib/product-query";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details open className="group border-b border-[#E3E8E6] py-4 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between text-[15px] font-bold [&::-webkit-details-marker]:hidden">
        {title}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="text-[#5B6778] transition-transform group-open:rotate-180"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>
      <div className="mt-3">{children}</div>
    </details>
  );
}

function ToggleLink({ href, on, label }: { href: string; on: boolean; label: string }) {
  return (
    <Link href={href} className="flex items-center justify-between gap-3 py-1.5 text-sm">
      <span>{label}</span>
      <span
        aria-hidden="true"
        className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
          on ? "bg-brand" : "bg-[#D9DEE3]"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white ${
            on ? "left-0.5" : "right-0.5"
          }`}
        />
      </span>
      <span className="sr-only">{on ? "فعال" : "غیرفعال"}</span>
    </Link>
  );
}

const priceInput =
  "w-full min-w-0 rounded-lg border border-[#D9DEE3] bg-white px-3 py-2 text-sm outline-none placeholder:text-[#9AA3AE] focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function FilterPanel({
  filters,
  idPrefix,
}: {
  filters: Filters;
  idPrefix: string;
}) {
  return (
    <div>
      <Section title="وضعیت">
        <ToggleLink
          href={buildHref(filters, { available: !filters.available })}
          on={filters.available}
          label="فقط کالاهای موجود"
        />
        <ToggleLink
          href={buildHref(filters, { delivery: !filters.delivery })}
          on={filters.delivery}
          label="تحویل درب منزل"
        />
      </Section>

      <Section title="شهر">
        {["", ...cities].map((c) => {
          const on = filters.city === c;
          return (
            <Link
              key={c || "all"}
              href={buildHref(filters, { city: c })}
              aria-current={on ? "true" : undefined}
              className="flex items-center gap-2 py-1.5 text-sm"
            >
              <span
                aria-hidden="true"
                className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                  on ? "border-brand" : "border-[#C5CEDA]"
                }`}
              >
                {on && <span className="h-2 w-2 rounded-full bg-brand" />}
              </span>
              <span className={on ? "font-bold text-brand" : ""}>{c || "همه‌ی شهرها"}</span>
            </Link>
          );
        })}
      </Section>

      <Section title="قیمت (تومان، هر روز)">
        {/* key باعث می‌شود وقتی آدرس عوض شد، ورودی‌ها دوباره مقدار بگیرند */}
        <Form
          key={`${filters.minPrice}-${filters.maxPrice}`}
          action="/products"
          className="flex flex-col gap-2"
        >
          {toEntries(filters)
            .filter(([name]) => name !== "minPrice" && name !== "maxPrice")
            .map(([name, value]) => (
              <input key={name} type="hidden" name={name} value={value} />
            ))}

          <div className="flex items-center gap-2">
            <label htmlFor={`${idPrefix}-min`} className="sr-only">
              حداقل قیمت
            </label>
            <input
              id={`${idPrefix}-min`}
              name="minPrice"
              type="number"
              inputMode="numeric"
              min={0}
              step={1000}
              defaultValue={filters.minPrice ?? ""}
              placeholder="حداقل"
              className={priceInput}
            />
            <span className="text-[#5B6778]">–</span>
            <label htmlFor={`${idPrefix}-max`} className="sr-only">
              حداکثر قیمت
            </label>
            <input
              id={`${idPrefix}-max`}
              name="maxPrice"
              type="number"
              inputMode="numeric"
              min={0}
              step={1000}
              defaultValue={filters.maxPrice ?? ""}
              placeholder="حداکثر"
              className={priceInput}
            />
          </div>

          <button
            type="submit"
            className="rounded-lg border border-brand py-2 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            اعمال قیمت
          </button>
        </Form>
      </Section>

      {countActive(filters) > 0 && (
        <div className="py-4">
          <Link
            href={buildHref(
              { ...filters, category: "", city: "", minPrice: null, maxPrice: null, available: false, delivery: false },
              {},
            )}
            className="block rounded-lg bg-[#F1F4F3] py-2 text-center text-sm font-medium text-[#5B6778] transition-colors hover:bg-[#E6EBE9]"
          >
            پاک‌کردن فیلترها
          </Link>
        </div>
      )}
    </div>
  );
}