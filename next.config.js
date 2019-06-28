const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const isProd = process.env.NODE_ENV === 'production'
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}
module.exports = withLess(withSass(withCSS({
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }  
})));