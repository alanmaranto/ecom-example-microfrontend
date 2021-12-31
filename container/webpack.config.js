const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederatedWebpackPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederatedWebpackPlugin({
      name: "container",
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js'
      }
    }),
      new HTMLWebpackPlugin({
          template: "./public/index.html"
      })
  ]
};
