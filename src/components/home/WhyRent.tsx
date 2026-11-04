import { Reasons } from "@/types/types";
import React from "react";

const icons = {
  wallet: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h13v4" />
      <path d="M3 7v11a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H5a2 2 0 0 1-2-2z" />
      <circle cx="16" cy="14" r="1.2" />
    </>
  ),
  box: (
    <>
      <path d="M3 7l9-4 9 4v10l-9 4-9-4z" />
      <path d="M3 7l9 4 9-4M12 11v10" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
};

const reasons :Reasons[] = [
  {
    icon: "wallet",
    tint: "bg-[#DDEFE9] text-brand",
    title: "هزینه‌ی کمتر",
    description: "برای کاری که چند بار در سال لازم داری، خرید گران‌تر از اجاره است.",
  },
  {
    icon: "box",
    tint: "bg-[#FBEFD2] text-slate-900",
    title: "بدون نگهداری و انبار",
    description: "بعد از استفاده برمی‌گردانی و نگران تعمیر یا جای نگهداری نیستی.",
  },
  {
    icon: "grid",
    tint: "bg-[#E2E8F5] text-slate-900",
    title: "انتخاب بیشتر",
    description: "هر بار مدل یا برند متفاوتی را امتحان کن، بدون تعهد به خرید.",
  },
] as const;

const WhyRent = () => {
  return (
    <section className="mx-auto max-w-300 px-6 pb-2 pt-14 text-gray-400">
      <h2 className="mb-2 text-center text-[26px] font-bold">چرا اجاره به‌جای خرید؟</h2>
      <p className="mx-auto mb-8 max-w-130 text-center text-[15px] leading-8 text-[#5B6778]">
        فقط برای مدتی که لازم داری هزینه کن و جای خانه‌ات را اشغال نکن.
      </p>

      <div className="grid gap-4.5 md:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="flex flex-col gap-2.5 rounded-[18px] border border-[#E3E8E6] bg-white p-6 transition-shadow hover:shadow-[0_12px_28px_rgba(15,27,45,0.1)]"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${reason.tint}`}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[reason.icon]}
              </svg>
            </div>
            <h3 className="text-[17px] font-bold">{reason.title}</h3>
            <p className="text-sm leading-7 text-[#5B6778]">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyRent;