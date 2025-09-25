import { base } from '../../html-utils.js';

export function field(attrs = {}, children, options) {
  const classes = attrs != null ?
    (Array.isArray(attrs.class) ? attrs.class : [attrs.class]) : [];
  classes.push('field');
  return base({ class: classes, ...attrs }, children, options);
}