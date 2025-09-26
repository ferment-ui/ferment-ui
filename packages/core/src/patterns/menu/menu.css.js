import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('menu')}
}

.menu, :where([role="menu"]) {
  ${groupDeclarations('menu')}
}`;