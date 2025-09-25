import { breakpointQueries } from '../breakpoints.js';
import { spacing } from '../names.js';
import { generateBreakpointSpacing } from '../utils.js';

const keys = Object.keys(spacing);

export default generateBreakpointSpacing(keys, 'm', 'margin', breakpointQueries);