// src/lib/fonts.ts
import { Play, Spectral, Inter } from "next/font/google";

export const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400","600","700"],
  variable: "--font-spectral",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
