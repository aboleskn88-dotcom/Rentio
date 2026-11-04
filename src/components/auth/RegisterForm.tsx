"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import TextField from "./TextField";
import PasswordField from "./PasswordField";

type Values = {
  name: string;
  email: string;
  password: string;
  confirm: string;
  terms: boolean;
};

type Errors = Partial<Record<keyof Values, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "نام و نام خانوادگی را وارد کنید.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "یک ایمیل معتبر وارد کنید.";
  if (v.password.length < 8) e.password = "رمز عبور باید حداقل ۸ کاراکتر باشد.";
  if (v.confirm !== v.password) e.confirm = "تکرار رمز عبور با رمز عبور یکسان نیست.";
  if (!v.terms) e.terms = "برای ادامه باید قوانین را بپذیرید.";
  return e;
}

export default function RegisterForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    password: "",
    confirm: "",
    terms: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  function setField<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setLoading(true);
    try {
      // TODO: اینجا به بک‌اند وصل کن، مثلاً:
      // const res = await fetch("http://localhost:5500/api/auth/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: values.name.trim(),
      //     email: values.email.trim(),
      //     password: values.password,
      //   }),
      // });
      // if (!res.ok) setServerError("ثبت‌نام انجام نشد. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-105 rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(15,27,45,0.12)]">
      <h1 className="mb-1 text-center text-[26px] font-bold text-[#0F1B2D]">
        ساخت حساب کاربری
      </h1>
      <p className="mb-6 text-center text-sm text-[#5B6778]">
        به رنتیو بپیوندید و اجاره را شروع کنید.
      </p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <TextField
          id="name"
          label="نام و نام خانوادگی"
          value={values.name}
          onChange={(v) => setField("name", v)}
          placeholder="نام خود را وارد کنید"
          autoComplete="name"
          error={errors.name}
        />

        <TextField
          id="email"
          label="ایمیل"
          type="email"
          value={values.email}
          onChange={(v) => setField("email", v)}
          placeholder="ایمیل خود را وارد کنید"
          autoComplete="email"
          error={errors.email}
        />

        <PasswordField
          id="password"
          label="رمز عبور"
          value={values.password}
          onChange={(v) => setField("password", v)}
          placeholder="رمز خود را وارد کنید"
          autoComplete="new-password"
          hint="حداقل ۸ کاراکتر"
          error={errors.password}
        />

        <PasswordField
          id="confirm"
          label="تکرار رمز عبور"
          value={values.confirm}
          onChange={(v) => setField("confirm", v)}
          placeholder="رمز را دوباره وارد کنید"
          autoComplete="new-password"
          error={errors.confirm}
        />

        <div className="flex flex-col gap-1.5">
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={values.terms}
              onChange={(e) => setField("terms", e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-brand"
            />
            <span>
              <Link href="/terms" className="text-brand hover:opacity-80">
                قوانین و مقررات
              </Link>{" "}
              و{" "}
              <Link href="/privacy" className="text-brand hover:opacity-80">
                حریم خصوصی
              </Link>{" "}
              را می‌پذیرم.
            </span>
          </label>
          {errors.terms && (
            <p role="alert" className="text-xs text-rose-600">
              {errors.terms}
            </p>
          )}
        </div>

        {serverError && (
          <p role="alert" className="text-sm text-rose-600">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-brand py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
        </button>

        <p className="text-sm text-[#0F1B2D]">
          قبلاً ثبت‌نام کرده‌اید؟{" "}
          <Link href="/login" className="text-brand hover:opacity-80">
            ورود
          </Link>
        </p>
      </form>
    </div>
  );
}