// NOTE: An accordion is just a wrapper around a list of `details` elements that
// have the same value in their `name` attribute.

import { patternVars, patternDeclarations } from "../../utils.js";

/**
 * @example
 * <div class="accordion">
 *  <details name="group1">
 *   <summary>Item 1</summary>
 *   <p>Item 1 content</p>
 *  </details>
 *  <details name="group1">
 *    <summary>Item 2</summary>
 *    <p>Item 2 content</p>
 *  </details>
 * </div>
 */
export default /*css*/`
:where(html) {
  ${patternVars('accordion')}
}

.accordion {
  ${patternDeclarations('accordion')}
}`;