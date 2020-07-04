const webpack = require('webpack')
const UserScript = require('./user-script')

module.exports = function override(config, env) {
  // prevent chunking for all files
  Object.assign(config.optimization, {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
      },
    },
  })

  // prevent hashes for the JS files
  Object.assign(config.output, { filename: 'static/js/[name].js', globalObject: 'self' })

  // prevent hashes for the CSS files
  // search for the "MiniCssExtractPlugin" so we can remove the hashing in the filename
  for (const plugin of config.plugins) {
    if (!plugin || !plugin.constructor) {
      // do nothing if the plugin is null
      continue
    }
    if (plugin.constructor.name === 'MiniCssExtractPlugin') {
      Object.assign(plugin.options, {
        filename: 'static/css/[name].css',
      })
      delete plugin.options.chunkFilename
    }
  }

  // minimize only the .min.js files
  for (const plugin of config.optimization.minimizer) {
    if (!plugin || !plugin.constructor) {
      // do nothing if the plugin is null
      continue
    }
    if (plugin.constructor.name === 'TerserPlugin') {
      Object.assign(plugin.options, { include: /\.min\.js$/ })
    }
    if (plugin.constructor.name === 'OptimizeCssAssetsWebpackPlugin') {
      Object.assign(plugin.options, { assetNameRegExp: /\.min\.css$/ })
    }
  }

  // add user-script banner for Tampermonkey
  config.plugins.push(
    new webpack.BannerPlugin({
      banner: UserScript,
      raw: true,
      entryOnly: true,
    })
  )
  config.devServer = { contentBase: './dist', hot: false }

  // // disable hot module reloading because Greasemonkey cannot handle it
  // // Delete any entries to the "HotDev" client
  if (env === 'production') {
    config.entry = config.entry.filter((x) => !x.toLowerCase().includes('hotdev'))
    config.plugins = config.plugins.filter((x) => !x || x.constructor.name !== 'HotModuleReplacementPlugin')
  }

  // Even in production mode, we want the CSS inlined instead of put in a different file
  // Remove the CSS extract plugin because we want CSS injected directly in
  // the greasemonkey script
  config.plugins = config.plugins.filter((x) => !x || x.constructor.name !== 'MiniCssExtractPlugin')
  ;(config.module.rules.find((x) => !!x.oneOf).oneOf || []).forEach((x) => {
    if (x.test && x.test.constructor === RegExp && 'test.css'.match(x.test)) {
      try {
        x.use = x.use.filter((y) => !y.loader.includes('css-extract'))
        x.use.unshift(require.resolve('style-loader'))
      } catch (e) {
        // If we fail to replace a `css-extract` move on silently
        // This will happen if, for example, it has already been replaced
      }
    }
  })

  return config
}
module.exports
