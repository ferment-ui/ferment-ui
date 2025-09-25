import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('toolbar')}
}

.toolbar, :where([role="toolbar"]) {
  ${patternDeclarations('toolbar')}
}`;