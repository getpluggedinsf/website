// src/app/bcard/page.tsx
import { Inter, Play } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PluggedIn Pros — Business Card",
  description: "Quick actions: save contact, get a quote, email, call.",
  robots: { index: false, follow: false },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const play = Play({ weight: ["700"], subsets: ["latin"], variable: "--font-play" });

export default function BCardPage() {
  return (
    <main className={`${inter.variable} ${play.variable} min-h-screen grid place-items-center bg-[#0A1A4F] text-white p-6`}>
      <div className="w-full max-w-lg text-center">
        <h1 className="font-[var(--font-play)] text-2xl sm:text-3xl font-bold">PluggedIn Pros</h1>
        <p className="mt-2 text-sm sm:text-base opacity-90">
          Your connection to smarter <span className="font-semibold text-[#D84200]">tech</span>
        </p>

        <div className="mt-6">
	  <a href="/api/vcard" className="inline-block rounded-lg bg-[#D84200] px-4 py-2 text-sm sm:text-base font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D84200] focus:ring-offset-[#0A1A4F] transition" download >
            Save Contact (vCard)
          </a>
        </div>

        <div className="mt-5 grid gap-2 text-[#D9DEE8]">
          <Link href="/quote?src=bcard" className="underline underline-offset-2 hover:text-white">Get a Quote</Link>
          <a href="mailto:hello@getpluggedinsf.com" className="hover:text-white">hello@getpluggedinsf.com</a>
          <a href="tel:14155270047" className="hover:text-white">(415) 527-0047</a>
          <Link href="/?src=bcard" className="hover:text-white">getpluggedinsf.com</Link>
        </div>

        <p className="mt-6 text-xs text-[#D9DEE8]/80">SMB Tech Support • Wi-Fi • POS • Networking</p>
      </div>
    </main>
  );
}

