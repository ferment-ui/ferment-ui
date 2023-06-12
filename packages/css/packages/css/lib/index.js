const { readFileSync } = require("fs");

// TODO: check schema
function normalizeConfig(configPath = '../default.config.js') {
  const config = module.require(configPath);
  const normalizedConfig = flattenObject(config);
  // console.debug(config, normalizedConfig);
  return normalizedConfig;
}

function flattenObject(input) {
  const result = {};
  for (const key in input) {
    if (!input.hasOwnProperty(key)) {
      continue;
    }
    if (typeof input[key] === "object" && !Array.isArray(input[key])) {
      var subFlatObject = flattenObject(input[key]);
      for (const subkey in subFlatObject) {
        result[key + "_" + subkey] = subFlatObject[subkey];
      }
    } else {
      result[key] = input[key];
    }
  }
  return result;
}

module.exports = {
  normalizeConfig
};