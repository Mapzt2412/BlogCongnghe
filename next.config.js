/** @type {import('next').NextConfig} */
const withImages = require('next-images')
module.exports = withImages()
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['p16-sign-va.tiktokcdn.com','miro.medium.com','photo2.tinhte.vn','www.seekpng.com', "rr7---sn-42u-nbosk.googlevideo.com", "znews-photo.zingcdn.me", "encrypted-tbn0.gstatic.com", 'p16-sign-va.tiktokcdn.com','www.google.com','haycafe.vn','photo2.tinhte.vn','www.seekpng.com', "rr7---sn-42u-nbosk.googlevideo.com"],
    formats: ['image/avif', 'image/webp'],
  },
  serverRuntimeConfig: {
    secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api' // development api
        : 'http://localhost:3000/api' // production api
  }

}
module.exports = nextConfig
