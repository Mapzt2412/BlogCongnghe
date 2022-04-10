/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withImages = require('next-images')
module.exports = withImages()
module.exports = {
  Images: {
     domains: ['www.google.com','p16-sign-sg.tiktokcdn.com']
  }
  };
module.exports = nextConfig
