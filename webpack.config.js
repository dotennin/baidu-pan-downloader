const { resolve } = require('path')

module.exports = {
  // エントリーポイントの設定
  entry: './src/baiduPanDownloader/index.ts',
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
