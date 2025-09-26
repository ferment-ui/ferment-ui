import { groupVars, groupDeclarations } from "../utils.js";

export default /*css*/`
:root {
  ${groupVars('button')}
  /* S density: interactive control */
  --pb-button: var(--spacing-2xs);
  --pi-button: var(--spacing-inline-s);
}

:where(button) {
  ${groupDeclarations('button')}
  /* ensure tap target when content is small */
  min-inline-size: 2.25rem;
  min-block-size: 2.25rem;
}`;