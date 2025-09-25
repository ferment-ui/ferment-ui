import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('tab')}
  ${patternVars('tablist')}
  ${patternVars('tabpanel')}
}

.tabs {
  ${patternDeclarations('tab')}
}

.tablist, :where([role="tablist"]) {
  ${patternDeclarations('tablist')}
  .tab, :where([role="tab"]) {
    ${patternDeclarations('tab')}
  }
}

.tabpanel, :where([role="tabpanel"]) {
  ${patternDeclarations('tabpanel')}
}`;