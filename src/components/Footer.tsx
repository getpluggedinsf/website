// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A1A4F]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 grid gap-6 md:grid-cols-[1fr_auto] items-center">
        <div>
          <div className="font-[var(--font-play)] font-bold">PluggedIn Pros</div>
          <div className="text-sm text-[#D9DEE8]">
            Your connection to smarter <span className="font-semibold text-[#D84200]">tech</span>.
          </div>
        </div>

        <div className="grid gap-1 text-sm text-[#D9DEE8]">
          <div className="flex gap-4 justify-start md:justify-end">
            <Link href="/quote?src=footer" className="hover:text-white">Get a Quote</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <a href="mailto:hello@getpluggedinsf.com" className="hover:text-white">Email</a>
            <a href="tel:14155270047" className="hover:text-white">Call</a>
          </div>
          <div className="text-xs text-[#D9DEE8]/80 md:text-right">
            © {new Date().getFullYear()} PluggedIn Pros · San Francisco, CA
          </div>
        </div>
      </div>
    </footer>
  );
}

