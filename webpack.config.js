const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const UserScript = require('./user-script')

module.exports = {
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/index.ts',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: {
          condition: 'all',
          banner: () => {
            return UserScript
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.ts$/,
        // 利用するローダー
        use: 'babel-loader',
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
      },
    ],
  },
}
