import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['flagcdn.com', 'restcountries.com', 'upload.wikimedia.org'], // Adicione o domínio correto
  },
};

export default nextConfig;
