// src/app/robots.ts
import type { MetadataRoute } from "next";
const INDEXABLE = process.env.INDEXABLE === "true";

export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://getpluggedinsf.com/sitemap.xml",
  };
}

