const fs = require("fs");
const path = require("path");

export const getJsonFile = (filePath) => {
  const file = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
  return JSON.parse(file);
};
