import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('alert')}
}

.alert, :where([role="alert"]) {
  ${groupDeclarations('alert')}
}`;
