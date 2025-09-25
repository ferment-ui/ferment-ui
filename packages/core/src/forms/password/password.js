import { input } from '../input/input.js';

export default (attrs, children, options) => input(attrs, children, { type: 'password', ...options });