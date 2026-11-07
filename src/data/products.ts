export type ProductIcon =
  | "camera"
  | "drill"
  | "tent"
  | "projector"
  | "gamepad"
  | "bike"
  | "party";

export type Category = {
  slug: string;
  label: string;
  icon: ProductIcon;
};

export const categories: Category[] = [
  { slug: "camera", label: "دوربین و فیلمبرداری", icon: "camera" },
  { slug: "tools", label: "ابزار و تجهیزات", icon: "drill" },
  { slug: "camping", label: "کمپینگ و سفر", icon: "tent" },
  { slug: "party", label: "لوازم مهمانی", icon: "party" },
  { slug: "gaming", label: "کنسول و بازی", icon: "gamepad" },
  { slug: "mobility", label: "دوچرخه و اسکوتر", icon: "bike" },
];

export const cities = ["تهران", "اصفهان", "شیراز", "مشهد", "تبریز"];

export type Product = {
  id: string;
  name: string;
  category: string; // slug یکی از categories
  city: string;
  pricePerDay: number; // تومان
  delivery: boolean;
  available: boolean;
  addedAt: number; // عدد بزرگ‌تر یعنی جدیدتر
  icon: ProductIcon;
  tint: string;
};

export const products: Product[] = [
  { id: "1", name: "دوربین بدون‌آینه", category: "camera", city: "تهران", pricePerDay: 450000, delivery: true, available: true, addedAt: 15, icon: "camera", tint: "bg-[#DDEFE9]" },
  { id: "2", name: "دریل شارژی", category: "tools", city: "تهران", pricePerDay: 150000, delivery: true, available: true, addedAt: 14, icon: "drill", tint: "bg-[#FBEFD2]" },
  { id: "3", name: "چادر چهار نفره", category: "camping", city: "اصفهان", pricePerDay: 200000, delivery: true, available: true, addedAt: 13, icon: "tent", tint: "bg-[#E2E8F5]" },
  { id: "4", name: "ویدیو پروژکتور", category: "party", city: "تهران", pricePerDay: 350000, delivery: true, available: true, addedAt: 12, icon: "projector", tint: "bg-[#F3E3E3]" },
  { id: "5", name: "لنز پرتره", category: "camera", city: "اصفهان", pricePerDay: 220000, delivery: false, available: true, addedAt: 11, icon: "camera", tint: "bg-[#DDEFE9]" },
  { id: "6", name: "گیمبال موبایل", category: "camera", city: "شیراز", pricePerDay: 120000, delivery: true, available: true, addedAt: 10, icon: "camera", tint: "bg-[#DDEFE9]" },
  { id: "7", name: "اره عمودبر", category: "tools", city: "مشهد", pricePerDay: 180000, delivery: false, available: false, addedAt: 9, icon: "drill", tint: "bg-[#FBEFD2]" },
  { id: "8", name: "کمپرسور باد", category: "tools", city: "تبریز", pricePerDay: 130000, delivery: true, available: true, addedAt: 8, icon: "drill", tint: "bg-[#FBEFD2]" },
  { id: "9", name: "کیسه خواب", category: "camping", city: "تهران", pricePerDay: 80000, delivery: false, available: true, addedAt: 7, icon: "tent", tint: "bg-[#E2E8F5]" },
  { id: "10", name: "اجاق گاز سفری", category: "camping", city: "مشهد", pricePerDay: 70000, delivery: true, available: false, addedAt: 6, icon: "tent", tint: "bg-[#E2E8F5]" },
  { id: "11", name: "دستگاه مه‌ساز", category: "party", city: "شیراز", pricePerDay: 250000, delivery: true, available: true, addedAt: 5, icon: "party", tint: "bg-[#F3E3E3]" },
  { id: "12", name: "کنسول بازی", category: "gaming", city: "تهران", pricePerDay: 400000, delivery: true, available: true, addedAt: 4, icon: "gamepad", tint: "bg-[#E8E3F5]" },
  { id: "13", name: "دسته‌ی بازی اضافه", category: "gaming", city: "اصفهان", pricePerDay: 90000, delivery: false, available: true, addedAt: 3, icon: "gamepad", tint: "bg-[#E8E3F5]" },
  { id: "14", name: "دوچرخه کوهستان", category: "mobility", city: "تبریز", pricePerDay: 170000, delivery: false, available: true, addedAt: 2, icon: "bike", tint: "bg-[#E3F1F5]" },
  { id: "15", name: "اسکوتر برقی", category: "mobility", city: "تهران", pricePerDay: 300000, delivery: true, available: true, addedAt: 1, icon: "bike", tint: "bg-[#E3F1F5]" },
];