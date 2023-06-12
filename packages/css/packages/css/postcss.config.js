const { normalizeConfig } = require('./lib/index.js');

const normalizedConfig = normalizeConfig();

console.log(normalizedConfig);

const config = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-for'),
    require('postcss-replace', {
      data: normalizedConfig
    }),
    require('postcss-preset-env'),
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(require('cssnano', {
    preset: 'default'
  }))
}

module.exports = config;