import { _var } from '../utils.js';
import { breakpointQueries } from '../breakpoints.js';

export default /*css*/`
.container {
  contain: layout inline-size style;
}

.row {
  display: flex;
}

.row-aligned {
  display: grid;
  grid-template-columns: repeat(var(${_var('cols')}), minmax(250px, 1fr));

  > * {
    display: grid;
    grid-row: auto / span var(${_var('rows')});
    grid-template-rows: subgrid;
  }
}

.column {
  display: flex;
  flex-direction: column;
}

.grid-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.grid-column {
  display: grid;
  grid-auto-flow: column;
}

.page {
  padding-inline: calc(max(var(${_var('spacing-inline-min')}), calc(50% - var(${_var('spacing-page')}) / 2)));
}

.prose {
  display: flex;
  flex-direction: column;
  gap: var(${_var('spacing-gap')});
}

${Object.entries(breakpointQueries).map(([alias, { query }]) => /*css*/`@container ${query} {
  .col-${alias} {
    flex-direction: column;
  }

  .row-${alias} {
    flex-direction: row;
  }
}`).join('\n\n')}`;