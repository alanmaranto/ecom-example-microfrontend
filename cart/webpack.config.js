const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederatedWebpackPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederatedWebpackPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/index",
      },
      shared: ['faker']
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
