import { Fragment } from "react";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="مسیر صفحه"
      className="mb-4 flex flex-wrap items-center gap-2 text-[13px] text-[#5B6778]"
    >
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-[#0F1B2D]">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-[#0F1B2D]">
              {item.label}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}