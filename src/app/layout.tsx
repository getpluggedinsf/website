// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { spectral, inter, play } from "@/lib/fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://getpluggedinsf.com"),

  title: {
    default: "Wi-Fi & Network Infrastructure for San Francisco Businesses",
    template: "%s | PluggedIn Pros",
  },

  description:
    "Wi-Fi and network infrastructure for San Francisco small businesses, including restaurants, retail shops, and offices.",

  openGraph: {
    title: "Wi-Fi & Network Infrastructure for San Francisco Businesses",
    description:
      "Reliable Wi-Fi, network troubleshooting, and infrastructure upgrades for San Francisco restaurants, retail shops, and offices.",
    url: "/",
    siteName: "PluggedIn Pros",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og/pluggedin-pros-og.jpg",
        width: 1200,
        height: 630,
        alt: "PluggedIn Pros Wi-Fi and network infrastructure for San Francisco small businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wi-Fi & Network Infrastructure for San Francisco Businesses",
    description:
      "Reliable Wi-Fi, network troubleshooting, and infrastructure upgrades for San Francisco restaurants, retail shops, and offices.",
    images: ["/images/og/pluggedin-pros-og.jpg"],
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
