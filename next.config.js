/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
}

module.exports = nextConfig
