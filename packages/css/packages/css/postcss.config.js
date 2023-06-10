const config = {
  plugins: [
    require('postcss-import'),
    require('postcss-replace'),
    require('postcss-for'),
    require('postcss-mixins'),
    require('postcss-preset-env'),
  ]
}

module.exports = config