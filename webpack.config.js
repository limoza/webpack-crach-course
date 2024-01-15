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
};
