import { base } from '../../html-utils.js';

export default (attrs, children, options) => base(attrs, children, { class: 'accordion', ...options })