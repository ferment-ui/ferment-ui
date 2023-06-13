function normalizeConfig(config) {
  if (config == null) return;
  for ([key, value] of Object.entries(config)) {
    const type = typeof value;
    if (type === 'string') {
      if (value.length === 0) {
        config[key] = "unset";
      }
    }
    else if (type === 'number') {
      config[key] = value.toString();
    }
    else if (type === 'object' && !Array.isArray(value)) {
      normalizeConfig(config[key]);
    }
  }
  return config;
}

module.exports = {
  normalizeConfig
};