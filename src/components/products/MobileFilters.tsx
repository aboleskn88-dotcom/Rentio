"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export default function MobileFilters({
  children,
  activeCount,
}: {
  children: ReactNode;
  activeCount: number;
}) {
  const [open, setOpen] = useState(false);

  // وقتی کشو باز است، اسکرول صفحه قفل شود
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="flex items-center gap-2 rounded-xl border border-[#E3E8E6] bg-white px-4 py-2.5 text-sm font-medium"
      >
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
        >
          <path d="M4 6h16M7 12h10M10 18h4" />
        </svg>
        فیلترها
        {activeCount > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-xs text-white">
            {activeCount.toLocaleString("fa-IR")}
          </span>
        )}
      </button>

      <div inert={!open} className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-[#0F1B2D]/60 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="فیلترها"
          // با کلیک روی هر لینک یا ارسال فرم، کشو بسته شود
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
          onSubmit={() => setOpen(false)}
          className={`absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-white transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#E3E8E6] px-4 py-3">
            <span className="font-bold">فیلترها</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="بستن فیلترها"
              className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-black/5"
            >
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
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4">{children}</div>
        </div>
      </div>
    </div>
  );
}