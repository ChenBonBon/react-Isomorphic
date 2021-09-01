import Koa from "koa";
import render from "./utils/render";
const path = require("path");
const Mock = require("mockjs");
const { pathToRegexp } = require("path-to-regexp");
const fs = require("fs");

const apiUrls = fs.readFileSync(
  path.resolve(__dirname, "../../public/js/apiUrl/apiUrl.js"),
  "utf-8"
);

eval(apiUrls);

const commons = fs.readFileSync(
  path.resolve(__dirname, "../../public/js/common.js"),
  "utf-8"
);

eval(commons);

const getJsonFile = (filePath) => {
  const file = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
  return JSON.parse(file);
};

const app = new Koa();

app.use(async (ctx) => {
  const { request } = ctx;
  const { url } = request;

  if (url.startsWith("/mock")) {
    const apiMap = getJsonFile("../../mock/mock.json");
    Object.keys(apiMap).forEach((path) => {
      const devAPIMap = getJsonFile("../../mock/mock.json");
      const { method } = request;
      const finalPath =
        method +
        " /" +
        request.originalUrl.split("/").slice(2).join("/").split("?")[0];

      const matchRouteKey = Object.keys(devAPIMap).find((k) =>
        pathToRegexp(k).test(finalPath)
      );

      if (matchRouteKey && devAPIMap[matchRouteKey]) {
        let response =
          devAPIMap[matchRouteKey].response || devAPIMap[matchRouteKey];
        ctx.body = Mock.mock(response);
      } else {
        ctx.status = 404;
        ctx.body = "404 Not Found";
      }
    });
  } else {
    try {
      const res = await render(ctx);
      const { error, html } = res;
      if (error) {
        if (error.url) {
          ctx.redirect(error.url);
        } else if (error.code) {
          ctx.status = error.code;
          ctx.body = "error code：" + error.code;
        }
      }
      ctx.body = html;
    } catch (error) {
      console.error(error);
      ctx.status = 500;
      ctx.body = "Internal server error";
    }
  }
});

app.listen(3000);
