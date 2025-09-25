import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('menubar')}
}

.menubar, :where([role="menubar"]) {
  ${patternDeclarations('menubar')}
}`;