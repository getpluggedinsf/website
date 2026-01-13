// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { roboto } from "@/lib/fonts";

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
      <body className={`${roboto.className} bg-[#F5F5F5] text-slate-900`}>
        {children}
      </body>
    </html>
  );
}

