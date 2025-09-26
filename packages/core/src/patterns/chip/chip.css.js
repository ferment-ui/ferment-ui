import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('chip')}
}

.feed, :where([role="feed"]) {
  ${groupDeclarations('chip')}
}`;