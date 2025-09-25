import { base } from '../../html-utils.js';

export default (attrs, children, options) => base(attrs, children, { tag: 'span', class: 'badge', ...options })