import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('badge')}
  /* XS density: compact chip/badge */
  --pb-badge: var(--spacing-2xs);
  --pi-badge: var(--spacing-inline-xs);
}

.badge {
  ${patternDeclarations('badge')}
}`;