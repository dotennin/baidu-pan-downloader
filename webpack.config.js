const webpack = require('webpack')
const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const UserScript = require('./user-script')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.user.js',
    path: resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: UserScript,
      raw: true,
      entryOnly: true,
    }),
  ],
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: {
          condition: /eslint-disable/i,
          banner: () => {
            return UserScript
          },
        },
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
