import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('card')}
}

:where(.card) {
  ${patternDeclarations('card')}
  display: flex;
  flex-direction: column;
  gap: 1em;
}`;