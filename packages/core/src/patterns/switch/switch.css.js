import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('switch')}
  --switch-color-checked: var(--color-primary);
  --switch-color-checked-text: var(--color-primary-text);
}

:where([role="switch"]) {
  ${groupDeclarations('switch')}
  &[aria-checked="true"] :first-child,
  &[aria-checked="false"] :last-child {
    background: var(--switch-color-checked);
    color: var(--switch-color-checked-text);
  }
}`;