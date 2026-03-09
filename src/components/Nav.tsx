// src/components/Nav.tsx
// NOTE: Rendered globally via src/app/layout.tsx. Do not mount inside pages.

import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F5F5F5]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 hover:no-underline">
          <Image
            src="/plug-icon.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="block h-5 w-5"
          />
          <span
            className={`font-wordmark text-xl font-bold tracking-tight text-[#191970] sm:text-2xl`}
          >
            PluggedIn Pros
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/services"
            className="text-slate-800 hover:text-black hover:no-underline"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="text-slate-800 hover:text-black hover:no-underline"
          >
            About
          </Link>

          <Link
            href="/request-help?source=contact&loc=nav"
            className="text-slate-800 hover:text-black hover:no-underline"
          >
            Contact
          </Link>

          <Link
            href="/request-help?source=request_help&loc=nav"
            className="btn-tap bg-[#FF4F00] text-white hover:opacity-90 no-underline hover:no-underline"
          >
            Request Help
          </Link>
        </nav>
      </div>
    </header>
  );
}
