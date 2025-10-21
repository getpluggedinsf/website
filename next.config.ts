import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const INDEXABLE = process.env.INDEXABLE === "true";
    const globalRobots = INDEXABLE ? "all" : "noindex, nofollow";

    return [
      // Global header rule — applies to every page & asset
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: globalRobots }],
      },

      // Always exclude the vCard API route from indexing
      {
        source: "/api/vcard",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;

