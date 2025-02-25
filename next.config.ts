import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // images: {
  //   domains: [''],
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   formats: ['image/webp'],
  // },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  env: {
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
  },
};

export default nextConfig;
