"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("ایمیل و رمز عبور را وارد کنید.");
      return;
    }

    setLoading(true);
    try {
        //backebd
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[#D9DEE3] bg-white px-4 py-3 text-sm outline-none transition-shadow placeholder:text-[#9AA3AE] focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <div className="mx-auto w-full max-w-105 rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(15,27,45,0.12)]">
      <h1 className="mb-6 text-center text-[26px] font-bold text-[#0F1B2D]">
        به اجاره‌گاه خوش آمدید
      </h1>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* ایمیل */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            ایمیل
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ایمیل خود را وارد کنید"
            className={inputClass}
          />
        </div>

        {/* رمز عبور */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium">
            رمز عبور
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز خود را وارد کنید"
              className={`${inputClass} pl-11`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B6778] hover:text-[#0F1B2D]"
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
                {showPassword ? (
                  <>
                    <path d="M3 3l18 18" />
                    <path d="M10.6 6.1A9.8 9.8 0 0 1 12 6c5 0 8.5 4 9.5 6a12.6 12.6 0 0 1-2.6 3.4M6.6 7.6A12.7 12.7 0 0 0 2.5 12c1 2 4.5 6 9.5 6 1.4 0 2.6-.3 3.7-.8" />
                    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
                  </>
                ) : (
                  <>
                    <path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* جای reCAPTCHA: بعداً با کلید گوگل جایگزین می‌شود */}
        <div className="mx-auto flex h-18.5 w-65 items-center justify-center rounded border border-dashed border-[#D9DEE3] text-xs text-[#9AA3AE]">
          [reCAPTCHA]
        </div>

        {/* پیام خطا */}
        {error && (
          <p role="alert" className="text-sm text-rose-600">
            {error}
          </p>
        )}

        {/* دکمه ورود */}
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-brand py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "در حال ورود..." : "ورود"}
        </button>

        {/* لینک‌ها */}
        <div className="flex flex-col gap-3 text-sm">
          <Link href="/forgot-password" className="text-brand hover:opacity-80">
            فراموشی رمز عبور
          </Link>
          <p className="text-[#0F1B2D]">
            حساب کاربری ندارید؟{" "}
            <Link href="/register" className="text-brand hover:opacity-80">
              ثبت نام
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}