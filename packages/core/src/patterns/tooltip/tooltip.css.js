import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('tooltip')}
}

.tooltip {
  ${groupDeclarations('tooltip')}
}`;