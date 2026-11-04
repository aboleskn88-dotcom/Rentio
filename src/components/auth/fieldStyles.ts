export function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-shadow placeholder:text-[#9AA3AE] focus:ring-2 ${
    hasError
      ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20"
      : "border-[#D9DEE3] focus:border-brand focus:ring-brand/20"
  }`;
}