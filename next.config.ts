/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/en_US/bike_general/what\'s-the-difference-between-a-step-over-and-step-through-bike-frame',
        destination: 'https://help.retrospec.com/en-US/articles/your-article-slug',
        permanent: true,
      },
      {
        // fallback for encoded curly apostrophe (%E2%80%99)
        source: '/en_US/bike_general/what’s-the-difference-between-a-step-over-and-step-through-bike-frame',
        destination: 'https://help.retrospec.com/en-US/articles/your-article-slug',
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
