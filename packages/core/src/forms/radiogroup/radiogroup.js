import { html } from 'ttls-raw';
import { input } from '../input/input.js';
import { getUniqueId } from 'ttls-helpers';

export default (attrs, children, options) => {
  const { name, inputAttrs = { id: getUniqueId() }, labelAttrs = {}, radios, ...restOptions } = options;
  return html`<fieldset>${radios.map(({ id, children }) => 
    input(attrs, children, { type: 'radio', inputAttrs: { name, ...inputAttrs }, labelAttrs, ...restOptions })
  ).join('')}</fieldset>`;
}