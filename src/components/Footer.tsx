// src/components/Footer.tsx
// NOTE: Rendered globally via src/app/layout.tsx. Do not mount inside pages.

import Image from "next/image";
import Link from "next/link";
import { play } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#F5F5F5]">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <Link
              href="/"
              className={`${play.className} inline-flex items-center gap-2 text-lg font-bold leading-tight text-[#191970] hover:no-underline`}
            >
              <Image
                src="/plug-icon.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                className="block h-5 w-5"
              />
              PluggedIn Pros
            </Link>

            <p className="max-w-md text-sm text-slate-700 sm:pl-7">
              Your connection to practical, reliable tech support.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/services" className="text-slate-800 hover:text-black">
              Services
            </Link>
            <Link href="/about" className="text-slate-800 hover:text-black">
              About
            </Link>
            <Link
              href="/request-help?source=contact&loc=footer"
              className="text-slate-800 hover:text-black"
            >
              Contact
            </Link>
            <Link
              href="/request-help?source=request_help&loc=footer"
              className="text-slate-800 hover:text-black"
            >
              Request Help
            </Link>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-600">
          © 2026 PluggedIn Pros · San Francisco, CA
        </div>
      </div>
    </footer>
  );
}
