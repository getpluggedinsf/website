// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { spectral, inter, play } from "@/lib/fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://getpluggedinsf.com"),

  title: {
    default: "PluggedIn Pros",
    template: "%s | PluggedIn Pros",
  },

  description:
    "Wi-Fi and network infrastructure services for small businesses in San Francisco. Reliable networks for POS systems, staff devices, and guest Wi-Fi.",

  openGraph: {
    title: "PluggedIn Pros",
    description:
      "Wi-Fi and network infrastructure services for San Francisco small businesses.",
    url: "https://getpluggedinsf.com",
    siteName: "PluggedIn Pros",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spectral.variable} ${play.variable} min-h-screen bg-[var(--pip-bg-warm)] text-slate-900`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
