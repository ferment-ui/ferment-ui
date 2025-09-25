import { breakpointQueries } from '../breakpoints.js';

// TODO: confirm if 'initial' or 'inherit'
export default Object.entries(breakpointQueries).map(([alias, { query }]) => /*css*/`
@container ${query} {
  .show-${alias} {
    display: initial;
  }

  .hide-${alias} {
    display: none;
  }
}
`).join('');