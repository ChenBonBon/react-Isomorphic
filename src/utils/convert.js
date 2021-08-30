const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

let jsonObject;
try {
  jsonObject = yaml.load(
    fs.readFileSync(path.resolve(__dirname, "../locales/i18n.yml"), "utf8")
  );
} catch (e) {
  console.log(e);
}

let objectArray = {};

for (let key in jsonObject) {
  for (let lang in jsonObject[key]) {
    objectArray[lang] = objectArray[lang] || {};
    objectArray[lang][key] = jsonObject[key][lang];
  }
}

// 分别导出成多个不同语言国家的文件
for (let key in objectArray) {
  fs.writeFileSync(
    path.resolve(__dirname, "../locales/" + key + ".json"),
    JSON.stringify(objectArray[key])
  );
}
