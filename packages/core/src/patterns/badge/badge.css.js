import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('badge')}
  /* XS density: compact chip/badge */
  --pb-badge: var(--spacing-2xs);
  --pi-badge: var(--spacing-inline-xs);
}

.badge {
  ${groupDeclarations('badge')}
}`;