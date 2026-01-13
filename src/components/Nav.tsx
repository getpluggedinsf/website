// src/components/Nav.tsx
import Link from "next/link";
import { play } from "@/lib/fonts";

export default function Nav() {
  return (
    <header className="border-b border-black/10 bg-[#F5F5F5]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 hover:no-underline">
          {/* Optional logo mark can be inserted here later without structural changes.
              IMPORTANT: Do not add a placeholder or reserve empty space. */}
          <span className={`${play.className} text-xl font-bold text-[#191970]`}>
            PluggedIn Pros
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-slate-800 hover:text-black">
            Home
          </Link>
          <Link href="/how-we-help" className="text-slate-800 hover:text-black">
            How We Help
          </Link>
          <Link
            href="/request-help?source=contact&loc=nav"
            className="text-slate-800 hover:text-black"
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

