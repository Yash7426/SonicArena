import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    serverActions: {},
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
