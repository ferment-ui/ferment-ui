import { getUniqueId, spread } from 'ttls-helpers';
import { field } from '../field/field.js';

export function input(attrs, children, options) {
  const { type, inputAttrs = { id: getUniqueId() }, labelAttrs = {}, ...restOptions } = options;
  return field(attrs, /*html*/`<label for="${inputAttrs.id}"${spread(labelAttrs)}>${children}</label><input type="${type}"${spread(inputAttrs)} />`, restOptions);
};