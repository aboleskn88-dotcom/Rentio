"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "دسته‌بندی‌ها", href: "/#cats" },
  { label: "نحوه اجاره", href: "/#how" },
  { label: "اجاره دادن وسایل", href: "/#owners" },
  { label: "تماس با ما", href: "/contact" },
];

type SearchFormProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
};

function SearchForm({ id, value, onChange, onSubmit, className = "" }: SearchFormProps) {
  return (
    <form onSubmit={onSubmit} role="search" className={`relative ${className}`}>
      <label htmlFor={id} className="sr-only">
        جست‌وجوی محصولات
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جست‌وجو کنید..."
        className="w-full rounded-xl border border-[#E3E8E6] bg-[#F1F4F3] py-2.5 pl-4 pr-10 text-sm outline-none transition-colors placeholder:text-[#9AA3AE] focus:border-brand focus:bg-white"
      />
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
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#5B6778]"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
    </form>
  );
}

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  // وقتی منو باز است، اسکرول صفحه قفل شود
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // بستن با Escape و وقتی صفحه به اندازه‌ی دسکتاپ بزرگ شد
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const term = q.trim();
    if (!term) return;
    setOpen(false);
    router.push(`/products?q=${encodeURIComponent(term)}`);
  }

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[#E3E8E6] bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-300 items-center justify-between gap-4 px-4 sm:px-6">
          {/* لوگو */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="رنتیو، صفحه اصلی"
          className="shrink-0"
        >
          <Image src="/logo.png" alt="رنتیو" width={600} height={186} className="h-10 w-auto" />
        </Link>

          {/* لینک‌ها: فقط دسکتاپ */}
          <nav aria-label="منوی اصلی" className="hidden items-center gap-7 text-[15px] text-[#5B6778] lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-[#0F1B2D]">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* جست‌وجو: از تبلت به بالا */}
          <SearchForm
            id="search-header"
            value={q}
            onChange={setQ}
            onSubmit={handleSearch}
            className="hidden max-w-xs flex-1 md:block"
          />

          {/* دکمه‌ها */}
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-xl px-3.5 py-2 text-[15px] transition-colors hover:bg-black/5 sm:inline-block"
            >
              ورود
            </Link>
            <Link
              href="/register"
              className="hidden rounded-xl bg-brand px-4 py-2 text-[15px] font-bold text-white transition-opacity hover:opacity-90 sm:inline-block"
            >
              ثبت‌نام
            </Link>

            {/* دکمه‌ی منو: تا قبل از دسکتاپ */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "بستن منو" : "باز کردن منو"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E3E8E6] bg-white lg:hidden"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* منوی بازشو: بیرون از <header> گذاشته شده، چون backdrop-blur باعث می‌شود fixed داخل هدر خراب شود */}
      <div
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-16 z-20 lg:hidden ${open ? "" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-[#0F1B2D]/60 backdrop-blur-sm transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <nav
          id="mobile-menu"
          aria-label="منوی موبایل"
          className={`absolute inset-x-4 top-3 rounded-2xl border border-[#E3E8E6] bg-white p-5 shadow-2xl transition duration-200 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <SearchForm
            id="search-mobile"
            value={q}
            onChange={setQ}
            onSubmit={handleSearch}
            className="mb-3 md:hidden"
          />

          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-[#5B6778] transition-colors hover:bg-[#F1F4F3] hover:text-[#0F1B2D]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-col gap-2 border-t border-[#E3E8E6] pt-3 sm:hidden">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-[#D9DEE3] py-3 text-center text-sm font-medium"
            >
              ورود
            </Link>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-brand py-3 text-center text-sm font-bold text-white"
            >
              ثبت‌نام
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}