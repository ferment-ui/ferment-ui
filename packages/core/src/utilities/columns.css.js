import { breakpointQueries } from '../breakpoints.js';

export default /*css*/`
[class^="col-"], [class*=" col-"] {
  grid-column: 12;
}
${Array.from({ length: 12 }, (_, i) => /*css*/`
.col-${i + 1} {
  grid-column: span ${i + 1};
}`).join('\n')}
${Object.entries(breakpointQueries).map(([alias, { query }]) => /*css*/`
@container ${query} {${Array.from({ length: 12 }, (_, i) => /*css*/`
  .col-${alias}-${i + 1} {
    grid-column: span ${i + 1};
  }`).join('\n')}
}`).join('\n')}`;