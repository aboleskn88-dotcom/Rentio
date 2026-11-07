import type { Product } from "@/data/products";

export const PAGE_SIZE = 9;

export const SORTS = [
  { value: "newest", label: "جدیدترین" },
  { value: "price-asc", label: "ارزان‌ترین" },
  { value: "price-desc", label: "گران‌ترین" },
] as const;

export type SortValue = (typeof SORTS)[number]["value"];

function isSort(value: string): value is SortValue {
  return SORTS.some((s) => s.value === value);
}

export type Filters = {
  q: string;
  category: string; // "" یعنی همه
  city: string; // "" یعنی همه
  minPrice: number | null;
  maxPrice: number | null;
  available: boolean;
  delivery: boolean;
  sort: SortValue;
  page: number;
};

export type RawParams = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined): string {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
}

function toPrice(value: string): number | null {
  if (value === "") return null;
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

// آدرس ← فیلترها (هر مقدار نامعتبر به پیش‌فرض تبدیل می‌شود)
export function parseFilters(raw: RawParams): Filters {
  const sort = first(raw.sort);
  const page = Number(first(raw.page));

  return {
    q: first(raw.q).trim(),
    category: first(raw.category),
    city: first(raw.city),
    minPrice: toPrice(first(raw.minPrice)),
    maxPrice: toPrice(first(raw.maxPrice)),
    available: first(raw.available) === "1",
    delivery: first(raw.delivery) === "1",
    sort: isSort(sort) ? sort : "newest",
    page: Number.isInteger(page) && page > 0 ? page : 1,
  };
}

// فیلترها ← جفت‌های نام و مقدار (بدون page). برای آدرس و فیلدهای hidden فرم‌ها
export function toEntries(f: Filters): [string, string][] {
  const e: [string, string][] = [];
  if (f.q) e.push(["q", f.q]);
  if (f.category) e.push(["category", f.category]);
  if (f.city) e.push(["city", f.city]);
  if (f.minPrice !== null) e.push(["minPrice", String(f.minPrice)]);
  if (f.maxPrice !== null) e.push(["maxPrice", String(f.maxPrice)]);
  if (f.available) e.push(["available", "1"]);
  if (f.delivery) e.push(["delivery", "1"]);
  if (f.sort !== "newest") e.push(["sort", f.sort]);
  return e;
}

// آدرس جدید با تغییر چند فیلتر. هر تغییری (به‌جز خود page) صفحه را به ۱ برمی‌گرداند
export function buildHref(filters: Filters, patch: Partial<Filters> = {}): string {
  const f = { ...filters, ...patch };
  const params = new URLSearchParams(toEntries(f));
  const page = "page" in patch ? f.page : 1;
  if (page > 1) params.set("page", String(page));
  const s = params.toString();
  return s ? `/products?${s}` : "/products";
}

export function countActive(f: Filters): number {
  return [
    f.category !== "",
    f.city !== "",
    f.minPrice !== null || f.maxPrice !== null,
    f.available,
    f.delivery,
  ].filter(Boolean).length;
}

const sorters: Record<SortValue, (a: Product, b: Product) => number> = {
  newest: (a, b) => b.addedAt - a.addedAt,
  "price-asc": (a, b) => a.pricePerDay - b.pricePerDay,
  "price-desc": (a, b) => b.pricePerDay - a.pricePerDay,
};

export function applyFilters(all: Product[], f: Filters) {
  const q = f.q.toLowerCase();

  const filtered = all
    .filter(
      (p) =>
        (!q || p.name.toLowerCase().includes(q)) &&
        (!f.category || p.category === f.category) &&
        (!f.city || p.city === f.city) &&
        (f.minPrice === null || p.pricePerDay >= f.minPrice) &&
        (f.maxPrice === null || p.pricePerDay <= f.maxPrice) &&
        (!f.available || p.available) &&
        (!f.delivery || p.delivery),
    )
    .sort(sorters[f.sort]);

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(f.page, pages);
  const items = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return { items, total, page, pages };
}