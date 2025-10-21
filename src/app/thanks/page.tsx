// src/app/thanks/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks — PluggedIn Pros",
  description: "We received your request and will follow up shortly.",
  robots: { index: false, follow: false },
};

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ src?: string }>;
}) {
  const sp = await searchParams;
  const src = sp?.src || "direct";

  return (
    <main className="min-h-screen bg-[#0A1A4F] text-white grid place-items-center p-6">
      <div className="w-full max-w-lg text-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D84200] mb-4">
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="white" strokeWidth="2">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold">Thanks! We’ve got your request.</h1>
        <p className="mt-2 text-[#D9DEE8]">Our team will follow up within one business day.</p>

        <div className="mt-3 inline-block text-xs px-2 py-1 rounded-full bg-white/10 text-[#D9DEE8]">
          Source: <span className="font-medium text-white ml-1">{src}</span>
        </div>

        <div className="mt-6 grid gap-3">
          <Link href="/" className="inline-block rounded-lg bg-white text-[#0A1A4F] px-4 py-2 font-medium hover:opacity-90">
            Return to Home
          </Link>
          <Link href="/quote?src=thanks" className="inline-block rounded-lg border border-white/30 px-4 py-2 text-white hover:bg-white/10">
            Submit another request
          </Link>
        </div>

        <p className="mt-6 text-xs text-[#D9DEE8]/80">SMB Tech Support • Wi-Fi • POS • Networking</p>
      </div>
    </main>
  );
}

