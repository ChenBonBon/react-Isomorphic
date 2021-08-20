import App from "@client/App";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter as Router } from "react-router-dom";
import routes from "../../routes";
import { createStore } from "../../store";

const { matchRoutes } = require("react-router-config");

const path = require("path");
const statsFile = path.resolve(
  __dirname,
  "../../dist/server/loadable-stats.json"
);
const host = "http://localhost:8888";

const extractor = new ChunkExtractor({ statsFile });

const render = (request) => {
  const store = createStore();
  return new Promise((resolve, reject) => {
    let promises;
    // 匹配路由
    const matches = matchRoutes(routes, request.path);
    promises = matches.map(({ route, match }) => {
      const asyncData = route.asyncData;
      // match.params获取匹配的路由参数
      return asyncData
        ? asyncData(store, Object.assign(match.params, request.query))
        : Promise.resolve(null);
    });

    const generateHtml = (request) => {
      const preloadedState = store.getState();
      const html = renderToString(
        <ChunkExtractorManager extractor={extractor}>
          <Provider store={store}>
            <Router location={request.url}>
              <App preloadedState={preloadedState} />
            </Router>
          </Provider>
        </ChunkExtractorManager>
      );

      resolve({
        error: undefined,
        html: `<html lang="zh-CN">
<head>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="${host}/client/public/favicon.ico">
  <link rel="stylesheet" type="text/css" href="${host}/client/main.css">
  <title>XDP</title>
</head>
<body>
  <div id="app">${html}</div>
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
  </script>
  <script src="${host}/client/main.js"></script>
</body>
</html>`,
      });
    };

    // resolve所有asyncData
    Promise.all(promises)
      .then(() => {
        const { route } = matches[0];
        if (route.ssr === false) {
          resolve({
            error: undefined,
            html: `<html lang="zh-CN">
            <head>
              <meta charSet="UTF-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="shortcut icon" href="${host}/client/public/favicon.ico">
              <link rel="stylesheet" type="text/css" href="${host}/client/main.css">
              <title>XDP</title>
            </head>
            <body>
              <div id="app"></div>
              <script src="${host}/client/main.js"></script>
            </body>
            </html>`,
          });
        } else {
          generateHtml(request);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default render;
