import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('tooltip')}
}

.tooltip {
  ${patternDeclarations('tooltip')}
}`;