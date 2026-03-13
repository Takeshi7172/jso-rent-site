import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "alteco.kz",
      },
      {
        protocol: "https",
        hostname: "static.insales-cdn.com",
      },
      {
        protocol: "https",
        hostname: "s1.kaercher-media.com",
      },
      {
        protocol: "https",
        hostname: "resanta.kz",
      },
      {
        protocol: "https",
        hostname: "e-catalog.com",
      },
      {
        protocol: "https",
        hostname: "www.boschtools.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;
