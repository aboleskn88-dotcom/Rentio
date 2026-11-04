import { Steps } from "@/types/types";
import React from "react";

const steps : Steps[] = [
  {
    number: "۱",
    title: "پیدا کن",
    description: "محصول و بازه‌ی زمانی دلخواهت را جست‌وجو و انتخاب کن.",
  },
  {
    number: "۲",
    title: "رزرو کن",
    description: "تاریخ تحویل و بازگشت را مشخص کن و درخواستت را ثبت کن.",
  },
  {
    number: "۳",
    title: "استفاده و بازگشت",
    description: "وسیله را تحویل بگیر، استفاده کن و در موعد مقرر برگردان.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="border-y border-[#E3E8E6] bg-white text-gray-400">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <h2 className="mb-8 text-center text-[26px] font-bold">اجاره در سه قدم</h2>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step : Steps) => (
            <div key={step.number} className="flex flex-col items-center gap-2.5 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="max-w-[280px] text-sm leading-7 text-[#5B6778]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;