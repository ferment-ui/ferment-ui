import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('menubar')}
}

.menubar, :where([role="menubar"]) {
  ${groupDeclarations('menubar')}
}`;