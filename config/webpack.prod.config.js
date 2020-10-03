const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        // mini-css-extract-plugin：将把我们编译的所有SCSS编译成CSS并将它们放在一个新文件中，而不是内联它们。需要区别 extract-text-webpack-plugin
        // css-loader：将通过解析我们拥有的任何导入和URL来加载我们的 CSS
        // sass-loader：加载我们的sass或SCSS
        // node-sass：将我们的SCSS编译为CSS
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  }
});
