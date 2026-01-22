import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.logo.dev",
      },
    ],
  },
  async rewrites() {
    return [
      // Keep clean SEO URLs while implementing the handler under /top/[x]
      {
        source: "/api-hub/:category/top-:x-apis",
        destination: "/api-hub/category/:category/top/:x",
      },
    ];
  },
};

export default nextConfig;
