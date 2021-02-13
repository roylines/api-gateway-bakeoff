const slsw = require("serverless-webpack");
module.exports = {
  target: "node",
  entry: slsw.lib.entries,
  mode: "production",
  node: false,
  optimization: {
    minimize: true,
  },
  devtool: "inline-cheap-module-source-map",
};
