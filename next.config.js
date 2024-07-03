/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'www.thecocktaildb.com'],
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https'
      },
      {
        hostname: 'media.graphassets.com',
        protocol: 'https'
      },

    ]
  }
}

module.exports = nextConfig
