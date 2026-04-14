/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
