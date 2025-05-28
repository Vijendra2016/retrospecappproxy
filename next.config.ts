/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ✅ Must be enabled for App Router
  },
};

export default nextConfig;
