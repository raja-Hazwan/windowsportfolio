/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  turbopack: {},
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
    ],
  },
};
