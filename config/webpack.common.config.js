const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/bundle.js"
  },
  resolve: {
    // 依次查找
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        // mini-css-extract-plugin：将把我们编译的所有SCSS编译成CSS并将它们放在一个新文件中，而不是内联它们。需要区别 extract-text-webpack-plugin
        // css-loader：将通过解析我们拥有的任何导入和URL来加载我们的 CSS
        // sass-loader：加载我们的sass或SCSS
        // node-sass：将我们的SCSS编译为CSS
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
