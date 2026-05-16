import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Useful for static export if needed, or simple Vercel deploys
  },
};

export default nextConfig;
