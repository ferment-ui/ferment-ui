import bs from './tokens/breakpoints.js';
import { convertDesignToken } from './utils.js';
import { normalizeBreakpoints } from 'ttls-helpers';

export const breakpoints = convertDesignToken(bs);
export const breakpointQueries = normalizeBreakpoints(breakpoints);