const withProgressBar = require('next-progressbar')
const withPlugins = require('next-compose-plugins')

const nextPlugins = [withProgressBar]
const nextConfig = {
  webpack: config => {
    return config
  },
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = withPlugins(nextPlugins, nextConfig)
