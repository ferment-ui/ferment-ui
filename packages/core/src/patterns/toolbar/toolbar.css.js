import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('toolbar')}
}

.toolbar, :where([role="toolbar"]) {
  ${groupDeclarations('toolbar')}
}`;