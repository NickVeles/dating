const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = withMDX({
  images: {
    domains: ['i.scdn.co', 'i1.sndcdn.com', 'images.unsplash.com'],
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],
})

module.exports = nextConfig
