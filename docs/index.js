const basicInfo = require("./basicInfo");
const comments = require("./comments");
const components = require("./components");

module.exports = {
  ...basicInfo,
  ...components,
  ...comments,
};
