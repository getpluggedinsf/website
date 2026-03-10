"use client";

import { useState } from "react";
import Link from "next/link";
import PlugIcon from "@/components/icons/PlugIcon";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "/services/reliability-review", label: "Reliability Review" },
    { href: "/services", label: "Services" },
    { href: "/restaurants", label: "Restaurants" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--pip-border)] bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          {/* Desktop / tablet logo */}
          <Link
            href="/"
            className="hidden shrink-0 items-center gap-2 no-underline md:flex"
            onClick={closeMenu}
          >
            <PlugIcon className="h-[34px] w-[34px] shrink-0 text-[var(--pip-orange)]" />
            <span className="font-wordmark text-[30px] font-bold text-[var(--pip-wordmark)]">
              PluggedIn Pros
            </span>
          </Link>

          {/* Mobile logo: icon only */}
          <Link
            href="/"
            className="flex shrink-0 items-center no-underline md:hidden"
            onClick={closeMenu}
            aria-label="PluggedIn Pros home"
          >
            <PlugIcon className="h-8 w-8 shrink-0 text-[var(--pip-orange)]" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-6 text-sm text-[var(--pip-ink)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact?intent=schedule"
              className="inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-[var(--pip-orange)] px-4 py-2 text-sm font-medium text-white no-underline transition hover:opacity-90"
            >
              Schedule Assessment
            </Link>
          </div>

          {/* Mobile menu button only */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-md border border-[var(--pip-border)] bg-white text-[var(--pip-ink)]"
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-[var(--pip-border)] bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-md px-2 py-3 text-[15px] text-[var(--pip-ink)] no-underline hover:bg-[var(--pip-bg-light)]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact?intent=schedule"
                onClick={closeMenu}
                className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--pip-orange)] px-4 py-3 text-sm font-medium text-white no-underline transition hover:opacity-90"
              >
                Schedule Assessment
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
