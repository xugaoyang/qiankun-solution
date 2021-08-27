const { name } = require('./package.json')

const publicPath =
  (process.env.VUE_APP_MODULE_PATH && `/${process.env.VUE_APP_MODULE_PATH}/`) || '//localhost:7100'
console.log('vue-a-publicpath', publicPath)
module.exports = {
  publicPath: publicPath,
  devServer: {
    port: 7100,
    headers: {
      'Access-control-Allow-Origin': '*',
      'Access-control-Allow-Methods': '*',
      'Access-control-Allow-Headers': '*',
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:8].[ext]',
            publicPath,
          },
        },
      })
      .end()
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]',
            publicPath,
          },
        },
      })
      .end()
  },
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
}
