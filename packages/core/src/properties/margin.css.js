import { breakpointQueries } from '../breakpoints.js';
import { config } from '../../config.ts';
import { generateBreakpointSpacing } from '../utils.js';

const { spacing: { _sizes } } = config;

const keys = Object.keys(_sizes);

export default generateBreakpointSpacing(keys, 'm', 'margin', breakpointQueries);