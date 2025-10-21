// src/app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — PluggedIn Pros",
  description:
    "SMB Tech Support in San Francisco & the Bay Area. Get in touch for Wi-Fi, POS, and networking help.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A1A4F] text-white">
      <section className="px-6 py-12 sm:py-16 grid place-items-center">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact PluggedIn Pros</h1>
          <p className="mt-2 text-[#D9DEE8]">
            Your connection to smarter <span className="font-semibold text-[#D84200]">tech</span>.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-[#D9DEE8]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            Typical response: <strong className="ml-1 text-white">within 1 business day</strong>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-xl font-semibold">Talk to a human</h2>
            <p className="mt-1 text-sm text-[#D9DEE8]">Bay Area SMB Tech Support — Wi-Fi, POS, Networking</p>
            <div className="mt-4 grid gap-2">
              <a href="tel:14155270047" className="inline-flex items-center gap-2 rounded-lg bg-[#D84200] px-4 py-2 font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D84200] focus:ring-offset-[#0A1A4F] transition">
                (415) 527-0047
              </a>
              <a href="mailto:hello@getpluggedinsf.com" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10">
                hello@getpluggedinsf.com
              </a>
              <Link href="/quote?src=contact" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10">
                Get a quote
              </Link>
            </div>
            <p className="mt-4 text-xs text-[#D9DEE8]/80">Hours: Mon–Fri 9am–6pm PT • Emergency support by appointment</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
            <h2 className="text-xl font-semibold">Service area</h2>
            <p className="mt-1 text-sm text-[#D9DEE8]">Serving San Francisco and the Bay Area</p>
            <div className="mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0E1B54] grid place-items-center">
              <span className="text-sm text-[#D9DEE8]/80">Map placeholder</span>
            </div>
            <div className="mt-4 text-sm text-[#D9DEE8]">
              <p>San Francisco, CA</p>
              <p className="mt-1">Remote & on-site support available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white text-[#0A1A4F] p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold">Need help now?</h3>
          <p className="mt-1 text-sm sm:text-base">Tell us what you’re facing — we’ll get you connected.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link href="/quote?src=contact-cta" className="rounded-lg bg-[#D84200] px-4 py-2 text-white font-medium hover:opacity-95">
              Get a quote
            </Link>
            <a href="tel:14155270047" className="rounded-lg border border-[#0A1A4F]/20 px-4 py-2 font-medium hover:bg-[#0A1A4F]/5">
              Call (415) 527-0047
            </a>
            <a href="mailto:hello@getpluggedinsf.com" className="rounded-lg border border-[#0A1A4F]/20 px-4 py-2 font-medium hover:bg-[#0A1A4F]/5">
              Email us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

