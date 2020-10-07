const { merge } = require("webpack-merge");
const common = require("./webpack.common.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");

// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        // 加快构建速度
        cache: true,
        // parallel: true, // 多线程，默认就是true， 可以配数字
        terserOptions: {
          compress: {
            //删除掉一些没有用的代码
            unused: true,
            drop_debugger: true,
            drop_console: true,
            dead_code: true
          }
        }
      })
    ]
  },
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
  },
  plugins: [
    // new UglifyJSPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled", // 不自动生成,需要的话手动注释掉这句
      analyzerPort: "8090"
    })
  ]
});
