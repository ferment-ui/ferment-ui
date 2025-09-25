import { fontProperties } from '../variables/typography.css.js';
import { _var } from '../utils.js';

export default /*css*/`
.copy {
${fontProperties.map(([name, property]) => `  ${property}: var(${_var(name, 'copy')});`).join('\n')}
}

.subheading {
${fontProperties.map(([name, property]) => `  ${property}: var(${_var(name, 'subheading')});`).join('\n')}
}`;
