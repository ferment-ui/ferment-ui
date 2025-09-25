import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('alert')}
}

.alert, :where([role="alert"]) {
  ${patternDeclarations('alert')}
}`;
