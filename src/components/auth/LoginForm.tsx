"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import TextField from "./TextField";
import PasswordField from "./PasswordField";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      // TODO: اتصال به بک‌اند
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-105 rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(15,27,45,0.12)]">
      <h1 className="mb-6 text-center text-[26px] font-bold text-[#0F1B2D]">
        به رنتیو خوش آمدید
      </h1>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <TextField
          id="email"
          label="ایمیل"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="ایمیل خود را وارد کنید"
          autoComplete="email"
        />

        <PasswordField
          id="password"
          label="رمز عبور"
          value={password}
          onChange={setPassword}
          placeholder="رمز خود را وارد کنید"
          autoComplete="current-password"
        />

        {/* جای reCAPTCHA: بعداً با کلید گوگل جایگزین می‌شود */}
        <div className="mx-auto flex h-18.5 w-65 items-center justify-center rounded border border-dashed border-[#D9DEE3] text-xs text-[#9AA3AE]">
          [reCAPTCHA]
        </div>

        {error && (
          <p role="alert" className="text-sm text-rose-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-brand py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "در حال ورود..." : "ورود"}
        </button>

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