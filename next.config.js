/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  outDir: ".next",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
