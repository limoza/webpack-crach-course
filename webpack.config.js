// pathモジュールを読み込む
const path = require("path");

// resolveメソッドで絶対パスを取得
const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  // エントリーポイント
  // バンドルの対象
  entry: "./src/index.js",
  // 出力先
  output: {
    // 絶対パスじゃないとダメ
    path: outputPath,
    // 出力するファイル名を指定
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "url-loader",
        options: {
          limit: 2048,
          name: "./images/[name].[ext]",
        },
      },
    ],
  },
  devServer: {
    // ルートディレクトリを指定
    // ここで指定したディレクトリがサーバーのルートディレクトリになる
    // 例えば、index.htmlを指定した場合、http://localhost:8080/index.htmlでアクセスできる
    contentBase: outputPath,
  },
};
