"use client";

import { useState } from "react";

export default function FavoriteButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      aria-label="افزودن به علاقه‌مندی‌ها"
      aria-pressed={active}
      onClick={() => setActive((v) => !v)}
      className="absolute cursor-pointer left-3 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={active ? "#E11D48" : "none"}
        stroke={active ? "#E11D48" : "#0F1B2D"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
      </svg>
    </button>
  );
}