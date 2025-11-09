/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // CORREÇÃO 1: Atualizar para remotePatterns (o formato moderno)
  // em vez do "domains" obsoleto.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

module.exports = nextConfig;