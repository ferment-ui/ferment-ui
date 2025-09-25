import { _var } from '../utils.js';

/**
 * @example
 * ```html
 * <a>Example</a>
 * <a href='https://example.com'>Example</a>
 * <a href='https://example.com' target='_blank'>Example</a>
 * ```
 */

export default /*css*/`
:root {
  ${_var('a-external-icon')}: '↗';
  ${_var('a-new-tab-icon')}: '⧉';
}

:where(a), [role='link'] {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  text-underline-position: under;

  /* &:not([href])::after {
    color: red;
    content: 'ERROR: Missing href attribute';
  } */

  &[href^='http']::after {
    display: inline-block;
    padding-inline-start: 0.2em;
    content: var(${_var('a-external-icon')});
  }
}`;