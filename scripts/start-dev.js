const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const clientConfig = require("../config/webpack.client.config");
const serverConfig = require("../config/webpack.server.config");

webpack(serverConfig).watch({}, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err || stats?.toJson("minimal"));
    return false;
  }
});

const clientCompiler = webpack(clientConfig);
const clientDevServer = new WebpackDevServer(clientCompiler, {
  port: 8888,
  hot: true,
  publicPath: "/client/",
  disableHostCheck: false,
  compress: true,
  before: require("../mock"),
});

clientDevServer.listen(8888, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Server is now listening at 8888");
  }
});
