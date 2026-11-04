export type ProductIcon = "camera" | "drill" | "tent" | "projector";

export type Product = {
  id: string;
  name: string;
  city: string;
  pricePerDay: number | null; // null یعنی هنوز قیمت نداریم
  icon: ProductIcon;
  tint: string; // رنگ پس‌زمینه‌ی تصویر
};

export const products: Product[] = [
  { id: "1", name: "دوربین بدون‌آینه", city: "[شهر]", pricePerDay: null, icon: "camera", tint: "bg-[#DDEFE9]" },
  { id: "2", name: "دریل شارژی", city: "[شهر]", pricePerDay: null, icon: "drill", tint: "bg-[#FBEFD2]" },
  { id: "3", name: "چادر چهار نفره", city: "[شهر]", pricePerDay: null, icon: "tent", tint: "bg-[#E2E8F5]" },
  { id: "4", name: "ویدیو پروژکتور", city: "[شهر]", pricePerDay: null, icon: "projector", tint: "bg-[#F3E3E3]" },
];