const path = require('path')

module.exports = {
  webpack: function (config, options) {
    config.experiments = {};
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ["images.pexels.com"],
  },
}