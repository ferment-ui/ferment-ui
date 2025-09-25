import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('comment')}
}

.comment, :where([role="comment"]) {
  ${patternDeclarations('comment')}
}`