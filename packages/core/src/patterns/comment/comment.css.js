import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('comment')}
}

.comment, :where([role="comment"]) {
  ${groupDeclarations('comment')}
}`