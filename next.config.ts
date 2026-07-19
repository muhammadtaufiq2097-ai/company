import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'assets.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'image.thum.io',
      },
    ],
  },
  async rewrites() {
    return [
      { source: '/home', destination: '/' },
      { source: '/about', destination: '/' },
      { source: '/solutions', destination: '/' },
      { source: '/technologies', destination: '/' },
      { source: '/machine-learning', destination: '/' },
      { source: '/portfolio', destination: '/' },
      { source: '/faq', destination: '/' },
    ]
  },
};

export default nextConfig;
