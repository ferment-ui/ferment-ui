import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('feed')}
}

.feed, :where([role="feed"]) {
  ${groupDeclarations('feed')}
}`;