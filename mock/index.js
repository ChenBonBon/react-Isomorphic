const Mock = require("mockjs");
const { pathToRegexp } = require("path-to-regexp");
const fs = require("fs");
const path = require("path");

const getJsonFile = (filePath) => {
  const file = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
  return JSON.parse(file);
};

module.exports = function (app) {
  const apiMap = getJsonFile("./mock.json");
  Object.keys(apiMap).forEach((path) => {
    app.all("/mock/*", function (req, res) {
      const devAPIMap = getJsonFile("./mock.json");
      const { method } = req;
      const finalPath =
        method +
        " /" +
        req.originalUrl.split("/").slice(2).join("/").split("?")[0];

      const matchRouteKey = Object.keys(devAPIMap).find((k) =>
        pathToRegexp(k).test(finalPath)
      );

      if (matchRouteKey && devAPIMap[matchRouteKey]) {
        let response =
          devAPIMap[matchRouteKey].response || devAPIMap[matchRouteKey];
        res.json(Mock.mock(response));
      } else {
        res.send("404");
      }
    });
  });
};
