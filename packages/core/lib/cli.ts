#!/usr/bin/env node

import { parseArgs } from "node:util";
import { join } from "node:path";
import { z } from 'zod/mini';
import pick from 'lodash-es/pick.js';
import Debug from 'debug';
import pkgJson from '../package.json' with { type: 'json' };

const debug = Debug('fui');

const LAYERS = ['variables', 'elements', 'forms', 'patterns', 'properties', 'utilities'];
const TEMPLATES = ['fui', 'bootstrap', 'material'];
const DEFAULT_OUTPUT = 'dist/fui';
const DEFAULT_TEMPLATE = 'fui';

const options = {
  config: {
    type: 'string',
    short: 'c',
    description: 'Path to a custom configuration file.'
  },
  template: {
    type: 'string',
    short: 't',
    description: `Use a template configuration (${TEMPLATES.join(', ')}).`,
    default: DEFAULT_TEMPLATE
  },
  output: {
    type: 'string',
    short: 'o', 
    description: 'Output directory for generated CSS files.',
    default: DEFAULT_OUTPUT
  },
  layers: {
    type: 'string',
    short: 'l',
    description: `Comma-separated list of layers to generate (${LAYERS.join(', ')}).`
  },
  help: {
    type: 'boolean',
    short: 'h',
    description: 'Show help information.'
  },
  version: {
    type: 'boolean',
    short: 'v',
    description: 'Show version information.'
  }
} as const;

const argsSchema = z.object({
  config: z.optional(z.string()),
  template: z._default(z.enum(TEMPLATES), DEFAULT_TEMPLATE),
  output: z._default(z.string(), DEFAULT_OUTPUT),
  layers: z._default(z.pipe(z.string(), z.transform((str, ctx) => str.split(',').map(layer => {
    layer.trim();
    if (!LAYERS.includes(layer)) {
      ctx.issues.push({
        code: "custom",
        message: `Invalid layer: ${layer}. Valid layers are ${LAYERS.join(', ')}.`,
        input: layer
      });
    }
    return layer;
  }))), []),
  help: z.optional(z.boolean()),
  version: z.optional(z.boolean()),
});

const { positionals: _, values } = parseArgs({
  options,
  allowPositionals: true,
});

const result = argsSchema.safeParse(values);

if (!result.success) {
  console.error('Error parsing arguments:', result.error.issues.map(i => i.message).join('; '));
  process.exit(1);
}

const args = result.data;

if (args.help) {
  console.log(help(options));
  process.exit(0);
}

if (args.version) {
  console.log(`Ferment UI version ${pkgJson.version}`);
  process.exit(0);
}

main().catch(console.error);

async function main() {
  try {
    await buildCommand(args);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error:', errorMessage);
    process.exit(1);
  }
}

async function buildCommand(options: typeof args) {
  const { generateCss } = await import(join(import.meta.dirname, 'build-css.js'));
  
  const buildOptions = pick(options, ['template', 'layers', 'config', 'output']);
  
  debug(`Using template: ${buildOptions.template}`);
  debug(`Using config override: ${buildOptions.config}`);
  debug(`Output directory: ${buildOptions.output}`);
  debug(`Generating layers: ${buildOptions.layers}`);
  
  console.log('Generating CSS...');
  await generateCss(buildOptions);
  console.log('CSS generation complete!');
}

function help(opts: typeof options) {
  return `
Ferment UI - A modern CSS framework

Usage:
  ferment-ui [options]

Description:
  Generates CSS files based on configuration. If no config is provided, uses default configuration.

Options:
${Object.entries(opts).map(([key, opt]: [string, Record<string, string>]) => {
    const short = opt.short ? `-${opt.short}, ` : '    ';
    const type = opt.type === 'boolean' ? '' : ` <${opt.type}>`;
    return `  ${short}--${key}${type}\t${opt.description}`;
  }).join('\n')}

Examples:
  ferment-ui                                   # Generate CSS with default fui template
  ferment-ui --template bootstrap              # Use Bootstrap-like template
  ferment-ui --template material               # Use Material Design template
  ferment-ui --config ./my-config.js           # Use custom configuration
  ferment-ui -t bootstrap -c ./overrides.ts    # Use bootstrap template + custom overrides
  ferment-ui -c ./config.ts -o ./dist/css      # Custom config and output directory
  ferment-ui --layers elements,utilities       # Generate only specific layers
  ferment-ui --help                            # Show help
  ferment-ui --version                         # Show version
`;
}
