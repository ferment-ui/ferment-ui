import { blockRule } from 'ttls-helpers';
import { _var } from '../utils.js';
import { fontProperties } from '../variables/typography.css.js';

export default Array.from({ length: 6 }).map(
  (_, index) => blockRule(`h${index + 1}, .h${index + 1}`, fontProperties.map(([name, property]) => `  ${property}: var(${_var(`h${index + 1}-${name}`)}, var(${_var(`heading-${name}`)}));`).join('\n'))
).join('\n');