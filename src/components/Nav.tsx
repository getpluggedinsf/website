// src/components/Nav.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    pathname === href ? "text-white" : "text-[#D9DEE8] hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,26,79,0.7)] backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-grid place-items-center w-7 h-7 rounded-md bg-white text-[#0A1A4F] font-bold">⚡</span>
          <span className="font-[var(--font-play)] font-bold tracking-tight">PluggedIn Pros</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm ${isActive(l.href)} transition`}>
              {l.label}
            </Link>
          ))}
          <Link href="/quote?src=nav" className="rounded-lg bg-[#D84200] px-3 py-2 text-sm font-medium text-white hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
            Get a Quote
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[rgba(10,26,79,0.95)]">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 ${isActive(l.href)} hover:bg-white/5`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/quote?src=nav-mobile"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-[#D84200] px-3 py-2 text-white font-medium hover:opacity-95"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

