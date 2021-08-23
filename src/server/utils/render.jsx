import App from "@client/App";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter as Router } from "react-router-dom";
import routes from "../../routes";
import { createStore } from "../../store";

const { matchRoutes } = require("react-router-config");

const path = require("path");
const isDev = process.env.NODE_ENV === "development";

const resolve = (filepath) => path.resolve(__dirname, filepath);
const statsFile = resolve("../../dist/server/loadable-stats.json");

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

    const generateHtml = (html) => {
      const preloadedState = store.getState();

      return `<!DOCTYPE html>
<html lang="cn">
  <head>
    <title></title>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <link rel="icon" href="${
      isDev ? "/public" : ""
    }/icons/blank.png" type="image/x-icon" />
    <link href="${isDev ? "/public" : ""}/css/iconfont.css" rel="stylesheet" />
    <link href="${isDev ? "/public" : ""}/css/theme.css" rel="stylesheet" />
    <script src="${isDev ? "/public" : ""}/js/common.js"></script>
    <script src="${isDev ? "/public" : ""}/js/apiUrl/apiUrl.js"></script>
    <script>
      const img = document.createElement("img");
      img.onload = function () {
        document.querySelector('link[rel="icon"]').href = window.favicon;
      };
      img.src = window.favicon;

      document.title = window.documentTitle || "XDP 翼数坊";
  </script>
  </head>
  <body>
    <div id="app">${html ? html : ""}</div>
    ${
      html
        ? `<script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
    </script>`
        : ""
    }
    ${
      isDev
        ? '<script src="/client/main.js"></script>'
        : '<script src="/main.js"></script>'
    }
  </body>
</html>`;
    };

    const generateSSR = (request) => {
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
        html: generateHtml(html),
      });
    };

    // resolve所有asyncData
    Promise.all(promises)
      .then(() => {
        if (matches.length > 0) {
          const { route } = matches[0];
          if (route.ssr === false) {
            resolve({
              error: undefined,
              html: generateHtml(),
            });
          } else {
            generateSSR(request);
          }
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default render;
