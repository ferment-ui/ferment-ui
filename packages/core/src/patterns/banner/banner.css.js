import { defineDefaultVars, setDefaultVars } from "../../css-utils.js";

export default /*css*/`
:where(html) {
${defineDefaultVars('banner')}
}

.banner, :where([role="banner"]) {
${setDefaultVars('banner')}
}`;