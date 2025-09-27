#!/usr/bin/env node

import { parseArgs } from "node:util";
import { z } from 'zod/mini';
import pkgJson from '../package.json' with { type: 'json' };

const options = {
  config: {
    type: 'string',
    short: 'c',
    description: 'Path to a custom configuration file.'
  },
  template: {
    type: 'string',
    short: 't',
    description: 'Use a template configuration (fui, bootstrap, material).'
  },
  output: {
    type: 'string',
    short: 'o', 
    description: 'Output directory for generated CSS files.'
  },
  layers: {
    type: 'string',
    short: 'l',
    description: 'Comma-separated list of layers to generate (variables,elements,forms,patterns,properties,utilities).'
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
  template: z.optional(z.string()),
  output: z.optional(z.string()),
  layers: z.optional(z.string()),
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

// Main build functionality
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
  const { generateCss } = await import('./build-css.js');
  
  const buildOptions: { configPath?: string; template?: string; outputDir?: string; layers?: string[] } = {};
  
  if (options.template) {
    buildOptions.template = options.template;
    console.log(`Using template: ${buildOptions.template}`);
  }
  
  if (options.config) {
    buildOptions.configPath = options.config;
    console.log(`Using config override: ${buildOptions.configPath}`);
  }
  
  if (options.output) {
    buildOptions.outputDir = options.output;
    console.log(`Output directory: ${buildOptions.outputDir}`);
  }
  
  if (options.layers) {
    buildOptions.layers = options.layers.split(',').map(layer => layer.trim());
    console.log(`Generating layers: ${buildOptions.layers.join(', ')}`);
  }
  
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
