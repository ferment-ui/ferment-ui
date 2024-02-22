import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import postcss from 'postcss';
import { plugins} from '../postcss.config.cjs';
import cssnano from 'cssnano';

const cssDir = join(process.cwd(), 'src', 'css');

// we need to generate three versions, since variables work everywhere,
// we want to be able to use utilities and globals in web components,
// 1. lightDOM only (variables, globals, utilities, and components)
// 2. shadomDOM only (globals and utilities are added to the base element
//    and components use their own CSS)
const variables = await readFile(join(cssDir, 'variables.css'), {encoding: 'utf-8'});
const globals = await readFile(join(cssDir, 'global.css'), {encoding: 'utf-8'});
const utilitiesPath = join(cssDir, 'utilities', 'index.css');
const utilities = (await postcss(plugins).process(await readFile(utilitiesPath, {encoding: 'utf-8'}), {from: utilitiesPath})).css;

const text = [variables, globals, utilities].join('\n\n');
const result = await postcss(plugins).process(text, {from: utilitiesPath});

const distDir = join(process.cwd(), 'public');
await writeFile(join(distDir, 'fui.css'), result.css);

if (process.env.NODE_ENV === 'production') {
  const minified = await postcss([cssnano()]).process(result.css, {from: join(distDir, 'fui.css')});
  await writeFile(join(distDir, 'fui.min.css'), minified.css);
}