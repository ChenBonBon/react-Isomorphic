const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { merge } = require("webpack-merge");
const WebpackBar = require("webpackbar");
const baseConfig = require("./webpack.base.config.js");
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const resolve = (filepath) => path.resolve(__dirname, filepath);

const config = {
  entry: resolve("../src/client/index.jsx"),
  target: "web",
  output: {
    path: resolve("../dist/client/"),
    filename: "[name].js",
  },
  devtool: isDev ? "inline-source-map" : "source-map",
  plugins: [
    isDev &&
      new WebpackBar({
        name: "client",
        color: "#4587EF",
      }),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshPlugin(),
    new MiniCssExtractPlugin(),
    new WebpackManifestPlugin({
      writeToFileEmit: true,
      fileName: `manifest.json`,
    }),
    new CopyPlugin({
      patterns: [
        { from: resolve("../public"), to: resolve("../dist/client/public") },
      ],
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: false,
                },
              },
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: {
                localIdentName: "[name]_[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: false,
                },
              },
          {
            loader: "css-loader",
            options: {
              esModule: false,
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
              },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]_[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
              },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: false,
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

module.exports = merge(baseConfig("client"), config);
