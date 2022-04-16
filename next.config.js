/** @type {import('next').NextConfig} */
const withImages = require('next-images')
module.exports = withImages()
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['p16-sign-va.tiktokcdn.com','miro.medium.com','photo2.tinhte.vn','www.seekpng.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
module.exports = nextConfig
