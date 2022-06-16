const withPlugins = require('next-compose-plugins')
const withProgressBar = require('next-progressbar')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withPlugins([
  withProgressBar,
  [
    withMDX,
    {
      pageExtensions: ['js', 'jsx', 'mdx'],
    },
  ],
  {
    images: {
      loader: 'custom',
    },
    experimental: {
      outputStandalone: true,
    },
  },
])
