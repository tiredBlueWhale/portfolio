/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '' : 'portfolio',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : 'portfolio',
  images: {
    loader: "custom"
  }
}

module.exports = nextConfig
