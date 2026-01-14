// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { roboto } from "@/lib/fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PluggedIn Pros — San Francisco Tech Support",
  description:
    "Practical, reliable tech support for San Francisco small businesses. Networking, Wi-Fi, POS-related systems, and troubleshooting.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen bg-[var(--pip-bg)] text-slate-900`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

