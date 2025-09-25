import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:root {
  --breadcrumbs-sep: '/';
  ${patternVars('breadcrumbs')}
  --pb-breadcrumbs: var(--spacing-2xs);
  --pi-breadcrumbs: var(--spacing-inline-s);
}

.breadcrumbs {
  ${patternDeclarations('breadcrumbs')}

  ul {
    display: inline-flex;
    flex-wrap: wrap;
  }

  li {
    display: inline-flex;
    align-items: center;

    &:not(:last-child)::after {
      content: var(--breadcrumbs-sep);
      margin: 0 0.5em;
    }
  }
}`;