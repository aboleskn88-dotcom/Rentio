import React from "react";
import Link from "next/link";

const OwnerCta = () => {
  return (
    <section id="owners" className="mx-auto max-w-300 px-6 py-14">
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-[#0F1B2D] p-10 text-white">
        <div>
          <h2 className="mb-2 text-[26px] font-bold">وسیله‌ای داری که بیکار مانده؟</h2>
          <p className="text-[15px] leading-8 text-[#C5CEDA]">
            آن را اجاره بده و از آن درآمد داشته باش.
          </p>
        </div>

        <Link
          href="/products/new"
          className="rounded-xl bg-[#F5B83D] px-6 py-3 text-[15px] font-bold text-[#0F1B2D] transition-opacity hover:opacity-90"
        >
          ثبت محصول
        </Link>
      </div>
    </section>
  );
};

export default OwnerCta;