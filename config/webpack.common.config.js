const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/bundle.js"
  },
  resolve: {
    // 依次查找
    extensions: [".js", ".ts", ".tsx", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@Views": path.resolve(__dirname, "../src/views"),
      "@Components": path.resolve(__dirname, "../src/components"),
      "@Constants": path.resolve(__dirname, "../src/constants"),
      "@Router": path.resolve(__dirname, "../src/router"),
      "@Assets": path.resolve(__dirname, "../src/assets"),
      "@CSS": path.resolve(__dirname, "../src/styles"),
      "@CommonFunc": path.resolve(__dirname, "../src/utils/common.ts"),
      "@Types": path.resolve(__dirname, "../src/types"),
      "@Store": path.resolve(__dirname, "../src/store"),
      "@Regular": path.resolve(__dirname, "../src/utils/regExps.ts"),
      "@Request": path.resolve(__dirname, "../src/utils/request/apis.ts")
    }
  },
  module: {
    // use的解析是从后往前的
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  },
  plugins: [
    // 关联html文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};
