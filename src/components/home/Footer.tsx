import { FooterLink } from "@/types/types";
import Link from "next/link";

const links : FooterLink[] = [
  { label: "قوانین", href: "/terms" },
  { label: "حریم خصوصی", href: "/privacy" },
  { label: "پشتیبانی", href: "/support" },
];

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-300 flex-wrap items-center justify-between gap-3 px-6 pb-9 pt-2 text-sm text-[#5B6778]">
      <span>© اجاره‌گاه</span>

      <nav className="flex gap-5">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:opacity-80">
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;