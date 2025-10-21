// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PluggedIn Pros — SMB Tech Support in the Bay Area",
  description:
    "Your connection to smarter tech. SMB Tech Support for Networking, Wi-Fi, and POS in San Francisco & the Bay Area.",
};

export default function Home() {
  return (
    <main className="bg-[#0A1A4F] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#D84200]/10 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">
                Your connection to smarter{" "}
                <span className="whitespace-nowrap text-[#D84200]">tech</span>
              </h1>
              <p className="mt-4 max-w-xl text-[#D9DEE8]">
                Reliable SMB Tech Support for the Bay Area — on-site and remote help
                for <strong>Networking</strong>, <strong>Wi-Fi</strong>, and <strong>POS</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/quote?src=home-hero" className="rounded-lg bg-[#D84200] px-5 py-2.5 font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D84200] focus:ring-offset-[#0A1A4F] transition">
                  Get a Quote
                </Link>
                <Link href="/contact?src=home-hero" className="rounded-lg border border-white/20 px-5 py-2.5 font-medium hover:bg-white/10 transition">
                  Contact
                </Link>
              </div>
              <p className="mt-4 text-sm text-[#D9DEE8]">
                Typical response: <span className="text-white font-medium">within 1 business day</span>
              </p>
            </div>

            <div className="md:justify-self-end">
              <div className="aspect-[4/3] w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm grid place-items-center">
                <span className="text-sm text-[#D9DEE8]">Brand visual / plug icon here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-lg sm:text-xl font-semibold">What we help with</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Networking", d: "Secure, reliable LAN/WAN for your office" },
              { t: "Wi-Fi", d: "Strong coverage, proper planning & tuning" },
              { t: "POS", d: "POS setup, cabling, network & support" },
            ].map((item) => (
              <div key={item.t} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-base font-semibold">{item.t}</div>
                <div className="mt-1 text-sm text-[#D9DEE8]">{item.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-[#D9DEE8]">
            Serving San Francisco & the Bay Area • On-site & remote support
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold">Ready to get plugged in?</h3>
          <p className="mt-2 text-[#D9DEE8]">Tell us what you need — we’ll tailor support for your business.</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link href="/quote?src=home-cta" className="rounded-lg bg-[#D84200] px-5 py-2.5 font-medium hover:opacity-95">
              Get a Quote
            </Link>
            <a href="tel:14155276200" className="rounded-lg border border-white/20 px-5 py-2.5 font-medium hover:bg-white/10">
              Call (415) 527-6200
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

