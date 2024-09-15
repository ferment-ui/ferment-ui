import { unsafeCSS } from 'lit';
import { range } from 'lit/directives/range.js';
import { states } from '../mixins/states.css.js';

function shadow(index) {
  return unsafeCSS(`.bs-${index} {
  box-shadow: var(--fui-box-shadow-${index});
}`);
}

export default unsafeCSS(`
/* @section Shadow */
:root {
  --fui-box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0);
}
  
.bs {
  box-shadow: var(--fui-box-shadow);
}

.bs-0 {
  box-shadow: none;
}
${Array.from(range(1, 7)).map((index) => unsafeCSS(`
${shadow(index)}

${states(`bs-${index}`, `  box-shadow: var(--fui-box-shadow-${index});`)}`)).join('')}
/* @endsection */
`);