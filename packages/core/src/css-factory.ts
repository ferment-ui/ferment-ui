import { createPropertiesCSS } from './properties/index.js';

export interface CSSFactoryOptions {
  layers?: string[];
}

/**
 * Creates CSS modules with the provided config
 */
export async function createCSS(config: any, options: CSSFactoryOptions = {}) {
  const { layers = ['variables', 'elements', 'forms', 'patterns', 'properties', 'utilities'] } = options;
  
  const cssModules: Record<string, any> = {};
  
  for (const layer of layers) {
    switch (layer) {
      case 'properties':
        cssModules[layer] = createPropertiesCSS(config);
        break;
      case 'variables':
        cssModules[layer] = await createVariablesCSS(config);
        break;
      case 'elements':
        cssModules[layer] = await createElementsCSS(config);
        break;
      case 'forms':
        cssModules[layer] = await createFormsCSS(config);
        break;
      case 'patterns':
        cssModules[layer] = await createPatternsCSS(config);
        break;
      case 'utilities':
        cssModules[layer] = await createUtilitiesCSS(config);
        break;
      default:
        console.warn(`Unknown layer: ${layer}`);
    }
  }
  
  return cssModules;
}

async function createVariablesCSS(_config: any) {
  // Import the variables module dynamically
  const variablesModule = await import('./variables/index.js');
  
  // For now, use the default export, but this could be enhanced to use config
  return variablesModule.default;
}

async function createElementsCSS(config: any) {
  const elementsModule = await import('./elements/index.js');
  
  // Check if the module has a factory function, otherwise use default
  if (typeof elementsModule.createElementsCSS === 'function') {
    return elementsModule.createElementsCSS(config);
  }
  
  return elementsModule.default;
}

async function createFormsCSS(config: any) {
  const formsModule = await import('./forms/index.js');
  
  if (typeof formsModule.createFormsCSS === 'function') {
    return formsModule.createFormsCSS(config);
  }
  
  return formsModule.default;
}

async function createPatternsCSS(config: any) {
  const patternsModule = await import('./patterns/index.js');
  
  if (typeof patternsModule.createPatternsCSS === 'function') {
    return patternsModule.createPatternsCSS(config);
  }
  
  return patternsModule.default;
}

async function createUtilitiesCSS(config: any) {
  const utilitiesModule = await import('./utilities/index.js');
  
  if (typeof utilitiesModule.createUtilitiesCSS === 'function') {
    return utilitiesModule.createUtilitiesCSS(config);
  }
  
  return utilitiesModule.default;
}