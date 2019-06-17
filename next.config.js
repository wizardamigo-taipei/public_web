module.exports = () => {
  const withLess = require('@zeit/next-less');
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
  }
  
  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true
    }
  })
};