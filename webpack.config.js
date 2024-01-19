// pathモジュールを読み込む
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        test: /\.jsx?$/,
        // node_modulesは除外する
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "url-loader",
        options: {
          limit: 2048,
          name: "./images/[name].[ext]",
        },
      },
      {
        test: /.html$/,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    // ルートディレクトリを指定
    // ここで指定したディレクトリがサーバーのルートディレクトリになる
    // 例えば、index.htmlを指定した場合、http://localhost:8080/index.htmlでアクセスできる
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
  ],
};
