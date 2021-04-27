const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: { path: path.join(__dirname, "/dist"), filename: "bundle.js" },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    clientLogLevel: "silent",
    port: 9000,
  },
};
