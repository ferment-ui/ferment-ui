import { groupVars, groupDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${groupVars('tab')}
  ${groupVars('tablist')}
  ${groupVars('tabpanel')}
}

.tabs {
  ${groupDeclarations('tab')}
}

.tablist, :where([role="tablist"]) {
  ${groupDeclarations('tablist')}
  .tab, :where([role="tab"]) {
    ${groupDeclarations('tab')}
  }
}

.tabpanel, :where([role="tabpanel"]) {
  ${groupDeclarations('tabpanel')}
}`;