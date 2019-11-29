const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

config = {
  webpack: config => {
    return config
  }
}

module.exports = withSass(withCSS(config))
