const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  future: { webpack5: true },
  images: {
    domains: ['assets.vercel.com', 'images.unsplash.com', 'firebasestorage.googleapis.com']
  },
  swcMinify: true
});

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {}

module.exports = nextConfig;