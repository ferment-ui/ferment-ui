import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('chip')}
}

.feed, :where([role="feed"]) {
  ${patternDeclarations('chip')}
}`;