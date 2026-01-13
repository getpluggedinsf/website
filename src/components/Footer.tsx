// src/components/Footer.tsx
import Link from "next/link";
import { play } from "@/lib/fonts";


export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#F5F5F5]">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <div className={`${play.className} text-lg font-bold text-[#191970]`}>
              PluggedIn Pros
            </div>
            <p className="max-w-md text-sm text-slate-700">
              Your connection to practical, reliable tech support.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="text-slate-800 hover:text-black">
              Home
            </Link>
            <Link href="/how-we-help" className="text-slate-800 hover:text-black">
              How We Help
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

