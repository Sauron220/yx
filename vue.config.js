'use strict'

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: process.env.port || 8088,
    open: true,
    disableHostCheck: true
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: { extract: false },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        packages: resolve('packages'),
        examples: resolve('examples')
      }
    },
    output: {
      libraryExport: 'default'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .end()

    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            preserveWhitespace: true
          }
        }
      })
      .end()
      .use('md-loader')
      .loader(resolve('./build/md-loader/index.js'))
  }
}
