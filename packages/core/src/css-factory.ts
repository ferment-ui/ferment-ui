
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
    let modulePath;
    switch(layer) {
      case 'variables':
        modulePath = './variables/index.js';
        break;
      case 'elements':
        modulePath = './elements/index.js';
        break;
      case 'forms':
        modulePath = './forms/index.js';
        break;
      case 'patterns':
        modulePath = './patterns/index.js';
        break;
      case 'utilities':
        modulePath = './utilities/index.js';
        break;
      case 'properties':
        modulePath = './properties/index.js';
        break;
      default:
        console.warn(`Unknown layer: ${layer}`);
        continue;
    }

    const createCssModule = (await import(modulePath));
    cssModules[layer] = typeof createCssModule === 'function' 
      ? createCssModule(config) 
      : createCssModule.default;
  }
  
  return cssModules;
}