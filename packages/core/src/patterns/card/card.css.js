import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('card')}
}

:where(.card) {
  ${groupDeclarations('card')}
  display: flex;
  flex-direction: column;
  gap: 1em;
}`;