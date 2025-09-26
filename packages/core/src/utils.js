import { blockRule } from "ttls-helpers";

/** Groups of elements/patterns */
// TODO: this should be in the config file
export const groupMappings = {
  tag: ['badge'],
  control: ['button'],
  panel: ['card', 'modal', 'sheet', 'toast'],
  area: ['alert', 'dialog', 'form', 'list', 'menu', 'navbar', 'pagination', 'table', 'tabs'],
}

/** The default set of properties that each element/pattern in a group can have */
// TODO: this should be in the config file
export const groupProperties = {
  'padding-block': 'pb',
  'padding-inline': 'pi',
  'margin-block': 'mb',
  'margin-inline': 'mi',
  border: 'bb',
}

/**
 * Get the group name for a given component.
 * @param {string} component - The component name.
 * @returns {string|null} The group name or null if not found.
 */
export function getGroupName(component) {
  for (const [group, components] of Object.entries(groupMappings)) {
    if (components.includes(component)) {
      return group;
    }
  }
  return null;
}

/**
 * Generate a CSS variable name.
 * @param {string} name - The name of the variable.
 * @param {string} [prefix] - An optional prefix for the variable.
 * @returns {string} The generated CSS variable name.
 */
export function _var(name, spacePrefix = '') {
  name = Array.isArray(name) ? name.join('-') : name;
  return `${spacePrefix ? `--${spacePrefix}-` : '--'}${kebabCase(name)}`;
}

/**
 * Generate a CSS variable reference, (e.g. var(--name)).
 * @param {string} name 
 * @param {string} [prefix]
 * @returns {string}
 */
export function _ref(name, fallbacks, spacePrefix = '') {
  return `var(${_var(name, spacePrefix)}${fallbacks ? `, ${fallbacks}` : ''})`;
}

/**
 * Convert a string to kebab-case.
 * @param {string} str
 * @returns {string}
 */
export function kebabCase(str) {
  try {str
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .replace(/[\s_.]+/g, '-')
      .toLowerCase();
  } catch {
    throw new Error('Error converting to kebab-case:', str);
  }
}

/**
 * Generate the set of CSS variable declarations for a given component.
 * @param {string} component 
 * @param {string} prefix 
 * @param {object} declarations 
 * @returns {string}
 */
export function groupVars(component, spacePrefix = '', declarations = groupProperties) {
  return Object.values(declarations)
    .map((value) => `${spacePrefix}${_var([component, value])}: ${_ref(value)};`)
    .join('\n');
}

/**
 * Generate the set of common pattern declarations for a given component.
 * @param {string} component - The component name.
 * @returns {string} The CSS declarations.
 */
export function groupDeclarations(component, prefix = '  ', declarations = groupProperties) {
  const group = getGroupName(component);
  return Object.entries(declarations)
    .map(([prop, value]) => `${prefix}${prop}: ${_ref([component, value], group ? _ref([group, value]) : '')};`)
    .join('\n');
}

/**
 * Generate the set of CSS block rules for spacing related rules for all breakpoint/size combinations.
 */
export function generateBreakpointSpacing(keys, prefix, property, breakpointQueries, offset = '', minified = false) {
  const breakpoints = Object.entries(breakpointQueries);
  const spaceVarPrefix = 'spacing';

  function generateSpacingRules(suffix, index, offset = '') {
    // TODO: decouple breakpoints from spacing keys for this one... right now they have to match
    return `${blockRule(`.${prefix}`, {
  [_var(`${prefix}i`)]: `var(${_var([spaceVarPrefix, 'inline', keys[index]])})`,
  [_var(`${prefix}b`)]: `var(${_var([spaceVarPrefix, keys[index]])})`
})}
    
    ${keys.map(key => blockRule(`.${prefix}-${key}${suffix}`, {
  [_var(`${prefix}i`)]: `var(${_var([spaceVarPrefix, 'inline', key])})`,
  [_var(`${prefix}b`)]: `var(${_var([spaceVarPrefix, key])})`
}, offset, minified)).join('\n\n')}

${keys.map(key => blockRule(`.${prefix}i-${key}${suffix}`, {
  [_var(`${prefix}i`)]: `var(${_var([spaceVarPrefix, 'inline', key])})`,
}, offset, minified)).join('\n\n')}

${keys.map(key => blockRule(`.${prefix}b-${key}${suffix}`, {
  [_var(`${prefix}b`)]: `var(${_var([spaceVarPrefix, key])})`,
}, offset, minified)).join('\n\n')}

${keys.map(key => blockRule(`.${prefix}is-${key}${suffix}`, {
  [_var(`${prefix}is`)]: `var(${_var([spaceVarPrefix, 'inline', key])})`,
}, offset, minified)).join('\n\n')}

${keys.map(key => blockRule(`.${prefix}ie-${key}${suffix}`, {
  [_var(`${prefix}ie`)]: `var(${_var([spaceVarPrefix, 'inline', key])})`,
}, offset, minified)).join('\n\n')}

${keys.map(key => blockRule(`.${prefix}bs-${key}${suffix}`, {
  [_var(`${prefix}bs`)]: `var(${_var([spaceVarPrefix, key])})`,
}, offset, minified)).join('\n\n')}

${keys.map(key => blockRule(`.${prefix}be-${key}${suffix}`, {
  [_var(`${prefix}be`)]: `var(${_var([spaceVarPrefix, key])})`,
}, offset, minified)).join('\n\n')}
`;}

  const css = /*css*/`
${generateSpacingRules('', 0)}
${breakpoints.map(([breakpoint, { query }], index) => blockRule(`@container viewport ${query}`, /*css*/`

${generateSpacingRules(`-${breakpoint}`, index + 1, offset + '  ')}`)).join('\n\n')}

${blockRule(`.${prefix}-fluid`, { [_var(`${prefix}i`)]: `var(${_var('spacing-inline-fluid')})`, [_var(`${prefix}b`)]: `var(${_var('spacing-fluid')})` }, offset, minified)}

${blockRule(`.${prefix}i-fluid`, { [_var(`${prefix}i`)]: `var(${_var('spacing-inline-fluid')})` }, offset, minified)}

${blockRule(`.${prefix}b-fluid`, { [_var(`${prefix}b`)]: `var(${_var('spacing-fluid')})` }, offset, minified)}

${blockRule(`.${prefix}is-fluid`, { [_var(`${prefix}is`)]: `var(${_var('spacing-inline-fluid')})` }, offset, minified)}

${blockRule(`.${prefix}ie-fluid`, { [_var(`${prefix}ie`)]: `var(${_var('spacing-inline-fluid')})` }, offset, minified)}

${blockRule(`.${prefix}bs-fluid`, { [_var(`${prefix}bs`)]: `var(${_var('spacing-fluid')})` }, offset, minified)}

${blockRule(`.${prefix}be-fluid`, { [_var(`${prefix}be`)]: `var(${_var('spacing-fluid')})` }, offset, minified)}

[class="${prefix}"],
[class^="${prefix} "], [class*=" ${prefix} "],
[class^="${prefix}-"], [class*=" ${prefix}-"],
[class^="${prefix}i-"], [class*=" ${prefix}i-"],
[class^="${prefix}is-"], [class*=" ${prefix}is-"],
[class^="${prefix}ie-"], [class*=" ${prefix}ie-"],
[class^="${prefix}b-"], [class*=" ${prefix}b-"],
[class^="${prefix}bs-"], [class*=" ${prefix}bs-"],
[class^="${prefix}be-"], [class*=" ${prefix}be-"] {
  ${property}-inline-start: var(--${prefix}is, var(--${prefix}i));
  ${property}-inline-end: var(--${prefix}ie, var(--${prefix}i));
  ${property}-block-start: var(--${prefix}bs, var(--${prefix}b));
  ${property}-block-end: var(--${prefix}be, var(--${prefix}b));
}
`;

return css;
}

/**
 * Compute the cartesian product of multiple arrays.
 * @param  {...unknown} a - arrays to compute the cartesian product of
 * @returns {Array} - the cartesian product of the input arrays
 */
export const cartesian =
  (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));

export function designTokenToCssValue({ value, unit }) {
  return `${value}${unit}`;
}

export function convertDesignToken(tokens) {
  return Object.entries(tokens).reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
      acc[key] = designTokenToCssValue(value)
    }

    return acc;
  }, {});
}