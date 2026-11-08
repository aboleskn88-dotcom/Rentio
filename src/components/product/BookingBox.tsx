"use client";

import { useState } from "react";
import { calcRental } from "../../lib/rental";

type Props = {
  pricePerDay: number;
  minDays: number;
  available: boolean;
};

const fa = (n: number) => n.toLocaleString("fa-IR");
// تاریخ محلی با فرمت YYYY-MM-DD (نه UTC)
const todayLocal = () => new Date().toLocaleDateString("en-CA");

const inputClass =
  "w-full min-w-0 rounded-[10px] border border-[#D9DEE3] bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

export default function BookingBox({ pricePerDay, minDays, available }: Props) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [past, setPast] = useState(false);

  const result = start && end ? calcRental(start, end, pricePerDay, minDays) : null;
  const summary = result && !("error" in result) ? result : null;
  const error = past
    ? "تاریخ شروع نمی‌تواند در گذشته باشد."
    : result && "error" in result
      ? result.error
      : "";
  const canSubmit = available && summary !== null && !past;

  function handleStart(value: string) {
    setStart(value);
    setPast(value !== "" && value < todayLocal());
  }

  function handleSubmit() {
    if (!canSubmit || !summary) return;
    // TODO: بعد از ساخت بک‌اند به POST /api/bookings وصل می‌شود
    console.log({ start, end, days: summary.days, total: summary.total });
  }

  return (
    <aside className="flex flex-col gap-4 rounded-[18px] border border-[#E3E8E6] bg-white p-5.5">
      <div>
        <span className="text-[28px] font-bold text-brand">{fa(pricePerDay)}</span>
        <span className="text-sm text-[#5B6778]"> تومان / روز</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="booking-start" className="text-xs text-[#5B6778]">
            تاریخ شروع
          </label>
          <input
            id="booking-start"
            type="date"
            value={start}
            onChange={(e) => handleStart(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="booking-end" className="text-xs text-[#5B6778]">
            تاریخ پایان
          </label>
          <input
            id="booking-end"
            type="date"
            min={start || undefined}
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <p className="text-xs text-[#5B6778]">حداقل مدت اجاره: {fa(minDays)} روز</p>

      {error && (
        <p role="alert" className="text-sm text-rose-600">
          {error}
        </p>
      )}

      {summary && (
        <div
          aria-live="polite"
          className="flex flex-col gap-2.5 rounded-xl bg-[#F5F7F6] p-3.5 text-sm"
        >
          <div className="flex justify-between">
            <span className="text-[#5B6778]">
              {fa(summary.days)} روز × {fa(pricePerDay)}
            </span>
            <span>{fa(summary.total)}</span>
          </div>
          <div className="flex justify-between border-t border-[#E3E8E6] pt-2.5 font-bold">
            <span>جمع کل</span>
            <span className="text-brand">{fa(summary.total)} تومان</span>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!canSubmit}
        className="rounded-xl bg-brand py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {available ? "ثبت درخواست اجاره" : "این محصول ناموجود است"}
      </button>

      <p className="text-center text-xs leading-6 text-[#5B6778]">[شرایط لغو و ضمانت]</p>
    </aside>
  );
}