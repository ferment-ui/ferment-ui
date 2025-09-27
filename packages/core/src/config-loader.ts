import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { access } from 'node:fs/promises';

export interface ConfigLoaderOptions {
  configPath?: string;
  template?: string;
  validate?: boolean;
}

/**
 * Loads configuration from a file path, template, or returns default config
 * Supports template + override pattern: loadConfig({ template: 'bootstrap', configPath: './overrides.ts' })
 */
export async function loadConfig(options: ConfigLoaderOptions = {}) {
  const { configPath, template, validate = true } = options;
  
  let baseConfig;
  let overrideConfig;
  
  // Load base config (template or default)
  if (template) {
    baseConfig = await loadTemplateConfig(template);
  } else {
    baseConfig = await loadDefaultConfig();
  }
  
  // Load override config if provided
  if (configPath) {
    try {
      const resolvedPath = resolve(configPath);
      
      // Check if file exists
      await access(resolvedPath);
      
      // Convert to file URL for dynamic import
      const fileUrl = pathToFileURL(resolvedPath).href;
      const configModule = await import(fileUrl);
      
      overrideConfig = configModule.default || configModule.config;
      
      if (!overrideConfig) {
        throw new Error(`Config file at ${configPath} must export a default export or named export 'config'`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to load config from ${configPath}: ${errorMessage}`);
    }
  }
  
  // Merge configs if override is provided
  const config = overrideConfig ? mergeConfigs(baseConfig, overrideConfig) : baseConfig;
  
  if (validate) {
    validateConfig(config);
  }
  
  return config;
}

/**
 * Loads the default fui.config.ts template
 */
async function loadDefaultConfig() {
  const defaultConfigModule = await import('../templates/fui.config.js');
  return defaultConfigModule.config;
}

/**
 * Loads a specific template config (bootstrap, material, etc.)
 */
async function loadTemplateConfig(templateName: string) {
  const availableTemplates = ['fui', 'bootstrap', 'material'];
  
  if (!availableTemplates.includes(templateName)) {
    throw new Error(`Unknown template: ${templateName}. Available templates: ${availableTemplates.join(', ')}`);
  }
  
  try {
    const templateModule = await import(`../templates/${templateName}.config.js`);
    return templateModule.config || templateModule.default;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to load template '${templateName}': ${errorMessage}`);
  }
}

/**
 * Basic validation to ensure required config properties exist
 */
function validateConfig(config: any) {
  const requiredPaths = [
    'spacing._sizes',
    'breakpoint',
    'swatch',
    'color',
    'border',
    'shadow'
  ];
  
  for (const path of requiredPaths) {
    if (!getNestedProperty(config, path)) {
      throw new Error(`Config missing required property: ${path}`);
    }
  }
}

/**
 * Helper to get nested properties from object using dot notation
 */
function getNestedProperty(obj: any, path: string) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

/**
 * Merges user config with default config (deep merge)
 */
export function mergeConfigs(defaultConfig: any, userConfig: any): any {
  if (typeof defaultConfig !== 'object' || typeof userConfig !== 'object') {
    return userConfig;
  }
  
  const merged = { ...defaultConfig };
  
  for (const key in userConfig) {
    if (userConfig[key] && typeof userConfig[key] === 'object' && !Array.isArray(userConfig[key])) {
      merged[key] = mergeConfigs(defaultConfig[key] || {}, userConfig[key]);
    } else {
      merged[key] = userConfig[key];
    }
  }
  
  return merged;
}