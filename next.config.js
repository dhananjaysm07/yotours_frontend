/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  server: {
    host: "0.0.0.0",
    port: 3001,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  outDir: ".next",
  appDir: true,
};

module.exports = nextConfig;
