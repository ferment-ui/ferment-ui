import { bundle } from 'lightningcss';
import { mkdir, writeFile } from 'node:fs/promises';

const isProduction = process.env.NODE_ENV === 'production';

await mkdir('./cdn', { recursive: true });

let { code, map } = bundle({
  filename: './dist/index.css',
  drafts: {
    customMedia: true
  },
  minify: isProduction,
  sourceMap: isProduction
});

await writeFile(`./cdn/styles${isProduction ? '.min' : ''}.css`, code);

if (map) {
  await writeFile(`./cdn/styles.css.map`, map);
}