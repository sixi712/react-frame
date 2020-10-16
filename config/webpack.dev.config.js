const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");
module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0",
    port: 8088,
    historyApiFallback: true
  },
  module: {
    rules: [
      // enforce: "pre" --> 把该 Loader 的执行顺序放到最前面
      // enforce: "post" --> 把该 Loader 的执行顺序放到最后
      // 这个插件主要是格式化devtool里面的代码， 使其可读
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  }
});
