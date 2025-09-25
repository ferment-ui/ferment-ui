import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('feed')}
}

.feed, :where([role="feed"]) {
  ${patternDeclarations('feed')}
}`;