import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/api-hub",
  assetPrefix: "/api-hub",

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
      {
        source: "/:category/top-:x-apis",
        destination: "/category/:category/top/:x",
      },
    ];
  },
};

export default nextConfig;
