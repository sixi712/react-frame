const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/bundle.js",
    publicPath: '/'
  },
  resolve: {
    // 依次查找
    extensions: [".js", ".ts", ".tsx", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@Pages": path.resolve(__dirname, "../src/pages"),
      "@Components": path.resolve(__dirname, "../src/components"),
      "@Root": path.resolve(__dirname, "../src/components/root"),
      "@API": path.resolve(__dirname, "../src/constants/apis"),
      "@BaseConfig": path.resolve(__dirname, "../src/constants/baseConfig"),
      "@Assets": path.resolve(__dirname, "../src/assets"),
      "@CSS": path.resolve(__dirname, "../src/styles"),
      "@Common": path.resolve(__dirname, "../src/utils/common.ts"),
      "@Types": path.resolve(__dirname, "../src/types"),
      "@Store": path.resolve(__dirname, "../src/components/root/StoreProvider"),
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
