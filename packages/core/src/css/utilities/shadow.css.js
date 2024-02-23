import { unsafeCSS } from 'lit';
import { range } from 'lit/directives/range.js';
import { states } from '../mixins/states.css.js';

function shadow(index) {
  return unsafeCSS(`.bs-${index} {
  box-shadow: var(--fui-box-shadow-${index});
}`);
}

export default unsafeCSS(`.bs-0 {
  box-shadow: none;
}
${Array.from(range(1, 7)).map((index) => unsafeCSS(`
${shadow(index)}

${states(`bs-${index}`, `  box-shadow: var(--fui-box-shadow-${index});`)}`)).join('')}
`);