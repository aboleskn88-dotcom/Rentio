import { Faqs } from "@/types/types";
import React from "react";

const faqs : Faqs[] = [
  {
    question: "اجاره چطور انجام می‌شود؟",
    answer:
      "محصول را پیدا می‌کنی، تاریخ تحویل و بازگشت را انتخاب می‌کنی و درخواستت را ثبت می‌کنی. بعد از تأیید، وسیله را تحویل می‌گیری.",
  },
  {
    question: "اگر وسیله آسیب ببیند چه می‌شود؟",
    answer: "[شرح سیاست خسارت و ضمانت سایت]",
  },
  {
    question: "آیا می‌توانم رزرو را لغو کنم؟",
    answer: "[شرح شرایط لغو رزرو]",
  },
  {
    question: "چطور وسیله‌ی خودم را اجاره بدهم؟",
    answer:
      "روی «ثبت محصول» بزن، عکس و توضیح و قیمت روزانه را وارد کن و منتظر درخواست‌ها باش.",
  },
];

const Faq = () => {
  return (
    <section className="mx-auto max-w-205 px-6 pb-14 text-gray-400">
      <h2 className="mb-5 text-center text-[26px] font-bold">سؤالات متداول</h2>

      <div className="flex flex-col gap-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-[18px] border border-[#E3E8E6] bg-white px-5.5 py-4.5 transition-shadow hover:shadow-[0_12px_28px_rgba(15,27,45,0.1)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold [&::-webkit-details-marker]:hidden">
              {item.question}
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
                className="shrink-0 text-[#5B6778] transition-transform group-open:rotate-180"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <p className="mt-3 text-sm leading-8 text-[#5B6778]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;