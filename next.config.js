/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.REPO_PREFIX,
    assetPrefix: process.env.REPO_PREFIX,
  images: {
    loader: "custom"
  }
}

module.exports = nextConfig
