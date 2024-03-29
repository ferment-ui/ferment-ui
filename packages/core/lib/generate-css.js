import { readFile, writeFile, stat, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { transform } from 'lightningcss';
import { utilityStyles } from '../src/css/utilities/index.css.js';

const cssDir = join(process.cwd(), 'src', 'css');
const componentsDir = join(process.cwd(), 'src', 'components');
const distDir = join(process.cwd(), 'dist');
const publicDir = join(process.cwd(), 'public');

if (stat(distDir).catch(() => false)) {
  await mkdir(distDir, { recursive: true });
}

const variables = await readFile(join(cssDir, 'variables.css'), {encoding: 'utf-8'});
const utilities = utilityStyles.map(style => style.cssText).join('\n');
const components = (await Promise.all(
  ['button'].map(async component => {
    const file = join(componentsDir, component, `${component}.css.js`);
    try {
      return (await import(file)).default.cssText;
    } catch (error) {
      console.error(`Error reading ${file}: ${error.message}`);
    }
  })
)).join('\n');

const css = [variables, utilities, components].join('\n');

await writeFile(join(distDir, 'fui.css'), css);
await writeFile(join(publicDir, 'fui.css'), css);

if (process.env.NODE_ENV === 'production') {
  const { code, map } = transform({
    filename: 'fui.css',
    code: Buffer.from(css, 'utf-8'),
    minify: true,
    sourceMap: true
  });
  await writeFile(join(publicDir, 'fui.min.css'), code);
  await writeFile(join(publicDir, 'fui.min.css.map'), map);
}
