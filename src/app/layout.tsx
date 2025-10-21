// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Play } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const play = Play({ weight: ["700"], subsets: ["latin"], variable: "--font-play" });

const INDEXABLE = process.env.INDEXABLE === "true";

export const metadata: Metadata = {
  title: "PluggedIn Pros",
  description: "Your connection to smarter tech.",
  robots: INDEXABLE
    ? { index: true, follow: true, googleBot: { index: true, follow: true } }
    : {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false, noimageindex: true, noarchive: true, nosnippet: true },
      },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${play.variable}`}>
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-[#0A1A4F] text-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

