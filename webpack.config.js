var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const SriPlugin = require("webpack-subresource-integrity");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    app: ["./src/calligraphy.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "index.js",
    crossOriginLoading: "anonymous"
  },
  devServer: {
    contentBase: path.join(__dirname, "assets"),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new ExtractTextPlugin("calligraphy.css"),
    new StyleLintPlugin({
      configFile: ".stylelintrc",
      context: "src",
      files: "**/*.scss",
      failOnError: false,
      quiet: false
    })
  ],
  node: {
    fs: "empty"
  }
};
