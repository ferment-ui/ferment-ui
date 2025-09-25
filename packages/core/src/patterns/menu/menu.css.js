import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('menu')}
}

.menu, :where([role="menu"]) {
  ${patternDeclarations('menu')}
}`;