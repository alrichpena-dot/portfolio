"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="hd">
      <Link href="/" className="hd-logo">
        Your Name
      </Link>

      <nav className="hd-nav">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`hd-link ${pathname === l.href ? "active" : ""}`}
            aria-current={pathname === l.href ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}