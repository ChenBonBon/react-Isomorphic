const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const isDev = process.env.NODE_ENV === "development";
const resolve = (filePath) => path.resolve(__dirname, filePath);

module.exports = (target) => {
  const isClient = target === "client";
  const config = {
    mode: isDev ? "development" : "production",
    plugins: [new CleanWebpackPlugin()].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            plugins: [
              isClient && isDev && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      alias: {
        "@server": resolve("../src/server"),
        "@client": resolve("../src/client"),
      },
      extensions: [".js", ".jsx"],
    },
  };

  return config;
};
