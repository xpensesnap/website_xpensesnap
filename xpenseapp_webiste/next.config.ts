import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['0321-103-42-91-224.ngrok-free.app'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '0321-103-42-91-224.ngrok-free.app',
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['0321-103-42-91-224.ngrok-free.app'],
    },
  },
};

export default nextConfig;
