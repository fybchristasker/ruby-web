const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

config = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.module.rules.push(
      {
        test: /\.md$/,
        loader: path.resolve(__dirname, './lib/markdown-loader.js')
      }
    );

    return config
  }
}

module.exports = withSass(withCSS(config))
