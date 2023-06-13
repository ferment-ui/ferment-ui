

function plugins(data, production) {
  const plugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require('postcss-for'),
    require("postcss-replace")({
      data,
    }),
    require("postcss-preset-env")({
      stage: 1,
    }),
  ];

  if (production) {
    plugins.push(
      require("cssnano")({
        preset: "default",
        reduceIdents: false,
        discardUnused: false,
      })
    );
  }

  return plugins;
}

module.exports = {
  plugins
};