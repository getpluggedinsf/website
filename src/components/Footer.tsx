// src/components/Footer.tsx
// NOTE: Rendered globally via src/app/layout.tsx. Do not mount inside pages.

import Link from "next/link";
import PlugIcon from "@/components/icons/PlugIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--pip-border)] bg-[var(--pip-bg-warm)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2 no-underline">
              <PlugIcon className="h-6 w-6 shrink-0 text-[var(--pip-orange)]" />
              <span className="font-wordmark text-[26px] font-bold text-[var(--pip-wordmark)]">
                PluggedIn Pros
              </span>
            </Link>

            <p className="mt-1 text-[17px] leading-[1.75] text-slate-700">
              Wi-Fi and network infrastructure for San Francisco small businesses.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-[17px] text-[var(--pip-ink)] md:text-right">
            <Link href="/services" className="underline-offset-4 hover:underline">
              Services
            </Link>

            <Link href="/restaurants" className="underline-offset-4 hover:underline">
              Restaurants
            </Link>

            <Link href="/about" className="underline-offset-4 hover:underline">
              About
            </Link>

            <Link href="/contact" className="underline-offset-4 hover:underline">
              Contact
            </Link>

            <Link
              href="/contact?intent=schedule"
              className="mt-2 font-medium text-[var(--pip-orange)] underline-offset-4 hover:underline"
            >
              Schedule Assessment
            </Link>
          </div>

        </div>

        <div className="mt-10 border-t border-[var(--pip-border)] pt-6 text-sm text-slate-600">
          © 2026 PluggedIn Pros · San Francisco, CA
        </div>
      </div>
    </footer>
  );
}
