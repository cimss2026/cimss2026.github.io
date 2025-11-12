/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/CIMSS' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CIMSS/' : '',
}

module.exports = nextConfig
