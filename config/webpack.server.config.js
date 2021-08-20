const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");
const WebpackBar = require("webpackbar");
const NodemonPlugin = require("nodemon-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const LoadablePlugin = require("@loadable/webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const resolve = (filepath) => path.resolve(__dirname, filepath);
const outputPath = resolve("../dist/server/");

const config = {
  entry: resolve("../src/server/index.js"),
  target: "node",
  output: {
    path: outputPath,
    filename: "[name].js",
  },
  externals: [
    nodeExternals({
      allowlist: [/\.less$/],
    }),
  ],
  devtool: isDev ? "inline-source-map" : "source-map",
  plugins: [
    isDev &&
      new NodemonPlugin({
        script: `${outputPath}/main.js`,
        watch: outputPath,
      }),
    isDev &&
      new WebpackBar({
        name: "server",
        color: "#F3CF60",
      }),
    new LoadablePlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "isomorphic-style-loader",
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
          "isomorphic-style-loader",
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
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: false,
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
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: false,
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
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};

module.exports = merge(baseConfig("server"), config);
