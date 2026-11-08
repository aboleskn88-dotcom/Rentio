// src/lib/rental.ts
export type RentalResult = { days: number; total: number } | { error: string };

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const DAY_MS = 86_400_000; // میلی‌ثانیه‌ی یک روز

// "YYYY-MM-DD" ← میلی‌ثانیه (UTC)، یا null اگر تاریخ واقعی نباشد
function parseDate(value: string): number | null {
  if (!ISO_DATE.test(value)) return null;

  const [y, m, d] = value.split("-").map(Number);
  const ms = Date.UTC(y, m - 1, d); // ماه از ۰ شروع می‌شود

  // Date.UTC تاریخ‌هایی مثل 02-30 را گرد می‌کند؛ با برگرداندن و مقایسه می‌گیریمشان
  const check = new Date(ms);
  if (
    check.getUTCFullYear() !== y ||
    check.getUTCMonth() + 1 !== m ||
    check.getUTCDate() !== d
  ) {
    return null;
  }

  return ms;
}

export function calcRental(
  start: string,
  end: string,
  pricePerDay: number,
  minDays: number,
): RentalResult {
  const startMs = parseDate(start);
  const endMs = parseDate(end);

  if (startMs === null || endMs === null) {
    return { error: "تاریخ واقعی نیست یا فرمت اشتباه است." };
  }

  const days = Math.round((endMs - startMs) / DAY_MS);

  if (days <= 0) {
    return { error: "تاریخ پایان باید بعد از تاریخ شروع باشد." };
  }
  if (days < minDays) {
    return { error: `حداقل مدت اجاره ${minDays.toLocaleString("fa-IR")} روز است.` };
  }

  return { days, total: days * pricePerDay };
}