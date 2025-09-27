import { breakpointQueries } from '../breakpoints.js';
import { config } from '../../templates/fui.config.js';
import { generateBreakpointSpacing } from '../utils.js';

// Factory function to create padding CSS with custom config
export function createPaddingCSS(customConfig = config) {
  const { spacing: { _sizes } } = customConfig;
  const keys = Object.keys(_sizes);
  return generateBreakpointSpacing(keys, 'p', 'padding', breakpointQueries);
}

// Default export for backward compatibility
const { spacing: { _sizes } } = config;
const keys = Object.keys(_sizes);
export default generateBreakpointSpacing(keys, 'p', 'padding', breakpointQueries);