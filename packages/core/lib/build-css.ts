import { mkdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { EOL } from 'node:os';
import Debug from 'debug';

const debug = Debug('build-css');

type CssJsModule = Record<string, string>;

const srcDir = join(import.meta.dirname, '..', 'src');
const buildDir = join(import.meta.dirname, '..', 'dist');

const layers = ['variables', 'elements', 'forms', 'patterns', 'properties', 'utilities'];

export interface GenerateCssOptions {
  configPath?: string;
  template?: string;
  layers?: string[];
  outputDir?: string;
}

export async function generateCss(options: GenerateCssOptions = {}) {
  const { configPath, template, layers: customLayers, outputDir } = options;
  const targetLayers = customLayers || layers;
  const targetBuildDir = outputDir || buildDir;
  
  if (configPath || template) {
    // Use factory functions with custom/template config
    const configOptions: { configPath?: string; template?: string } = {};
    if (configPath) configOptions.configPath = configPath;
    if (template) configOptions.template = template;
    await generateCssWithConfig(configOptions, targetLayers, targetBuildDir);
  } else {
    // Use existing method for backward compatibility
    await generateCssDefault(targetLayers, targetBuildDir);
  }
}

async function generateCssWithConfig(configOptions: { configPath?: string; template?: string }, layers: string[], buildDir: string) {
  const { loadConfig } = await import('../src/config-loader.js');
  const { createCSS } = await import('../src/css-factory.js');
  
  const config = await loadConfig(configOptions);
  const cssModules = await createCSS(config, { layers });
  
  await Promise.all(layers.map(async (layer) => {
    const module = cssModules[layer];
    if (module) {
      await convertJsModuleToCss(module, join(buildDir, layer));
    }
  }));
  
  await writeFile(join(buildDir, 'index.css'), `@layer ${layers.join(', ')};

${layers.map(layer => `@import url("${layer}/index.css") layer(${layer});`).join(EOL)}`);
}

async function generateCssDefault(layers: string[], buildDir: string) {
  await Promise.all(layers.map(async (dir) => {
    await convertJsDirectoryToCss(`file://${join(srcDir, dir, 'index.js')}`, join(buildDir, dir));
  }));
  await writeFile(join(buildDir, 'index.css'), `@layer ${layers.join(', ')};

${layers.map(layer => `@import url("${layer}/index.css") layer(${layer});`).join(EOL)}`);
}

async function convertJsDirectoryToCss(modulePath: string, outDir: string) {
  debug(arguments);
  const module = (await import(modulePath)).default as CssJsModule;
  await convertJsModuleToCss(module, outDir);
}

async function convertJsModuleToCss(module: CssJsModule, outDir: string) {
  debug('convertJsModuleToCss', { outDir, keys: Object.keys(module) });
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

// Only run if this file is executed directly (not imported)
if (import.meta.url === `file://${process.argv[1]}`) {
  await generateCss();
}