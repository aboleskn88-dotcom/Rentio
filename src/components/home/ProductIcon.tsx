import type { ProductIcon as IconName } from "@/data/products";

const paths: Record<IconName, React.ReactNode> = {
  camera: (
    <>
      <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="13" r="4" />
    </>
  ),
  drill: (
    <>
      <path d="M3 9h12a3 3 0 0 1 3 3v2H7l-1 5H3z" />
      <path d="M18 11h3M18 13h3" />
    </>
  ),
  tent: (
    <>
      <path d="M3 20L12 4l9 16z" />
      <path d="M12 4v16M9 20l3-6 3 6" />
    </>
  ),
  projector: (
    <>
      <rect x="3" y="8" width="18" height="9" rx="2" />
      <circle cx="15" cy="12.5" r="2.5" />
      <path d="M7 17v2M17 17v2M6 12h3" />
    </>
  ),
};

export default function ProductIcon({ name }: { name: IconName }) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-slate-900"
    >
      {paths[name]}
    </svg>
  );
}