/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Prevents react-dom issues
  experimental: {
    appDir: true, // Ensures App Router compatibility
  },
};

module.exports = nextConfig;
