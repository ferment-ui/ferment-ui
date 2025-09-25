import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { EOL } from 'node:os';
import Debug from 'debug';

const debug = Debug('build-css');

type CssJsModule = Record<string, string>;

const srcDir = join(import.meta.dirname, '..', 'src');
const buildDir = join(import.meta.dirname, '..', 'dist');

const layers = ['variables', 'elements', 'forms', 'patterns', 'properties', 'utilities'];

export async function generateCss() {
  await Promise.all(layers.map(async (dir) => {
    await convertJsDirectoryToCss(`file://${join(srcDir, dir, 'index.js')}`, join(buildDir, dir));
  }));
  await writeFile(join(buildDir, 'index.css'), `@layer ${layers.join(', ')};

${layers.map(layer => `@import url("${layer}/index.css") layer(${layer});`).join(EOL)}`);
}

async function convertJsDirectoryToCss(modulePath: string, outDir: string) {
  debug(arguments);
  const module = (await import(modulePath)).default as CssJsModule;
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, 'index.css'), generateCssIndex(Object.keys(module)));
  await Promise.all(Object.entries(module).map(async ([key, value]) => {
    const outputPath = join(outDir, key);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, value);
  }));
}

function generateCssIndex(urls: string[]): string {
    return urls.map((url) => `@import url("${url}");`).join(EOL);
}

await generateCss();