const { readFile, writeFile } = require('fs/promises');
const postcss = require('postcss');
const { plugins } = require('./lib/plugins.js');
const { normalizeConfig } = require('./lib/normalize-config.js');

const config = module.require('./default.config.js');
const normalizedConfig = normalizeConfig(config);

const production = process.env.NODE_ENV === 'production';

const theme = './default.config.js';
const from = './src/index.css';
const to = `./dist/index.${production ? 'min.' : ''}css`;


(async () => {
  const entryFile = await readFile(from, {encoding: 'utf-8'});
  const result = await processCSS({
    plugins: plugins(normalizedConfig, production),
    entryFile,
    from,
    to,
  });

  await output({to, result});
})();

async function processCSS({plugins, entryFile, from, to}) {
  return await postcss(plugins).process(entryFile, {
    from,
    to,
  });
}

async function output({to, result}) {
  await writeFile(to, result.css, () => true);
  if (result.map) {
    await writeFile(`${to}.map`, result.map, () => true);
  }
}