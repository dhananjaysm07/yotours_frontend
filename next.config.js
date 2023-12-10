/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  server: {
    host: "0.0.0.0",
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
