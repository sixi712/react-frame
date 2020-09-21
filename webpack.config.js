module.exports = () =>
  process.env.NODE_ENV === "development"
    ? require("./config/webpack.dev.config")
    : require("./config/webpack.prod.config");
