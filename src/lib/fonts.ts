// src/lib/fonts.ts
import { Roboto, Play } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

