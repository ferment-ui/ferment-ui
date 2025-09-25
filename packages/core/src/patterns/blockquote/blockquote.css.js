/** Blockquotes are generally not used in isolation, as they are not allowed
 * to have a citation element as a child. They instead use <figure> to wrap
 * the blockquote and the citation element with <figcaption>.
 * 
 * Often they are styled either as the both the blockquote and the
 * figcaption on the same surface, or the blockquote as a
 * surface with the figcaption styled separately.
 */

import { patternVars, patternDeclarations } from "../../utils.js";

export default /*css*/`
:where(html) {
  ${patternVars('blockquote')}
}

:where(figure > blockquote) {
  ${patternDeclarations('blockquote')}
  font-style: italic;
  position: relative;
  margin-inline: var(--spacing-inline-m);
  
  &::before {
    content: '"';
    position: absolute;
    inset-inline-start: calc(-1 * var(--spacing-inline-s));
    font-size: 2em;
    line-height: 1;
    color: var(--color-neutral-muted);
    font-weight: bold;
  }
  
  cite {
    font-style: normal;
    font-size: 0.9em;
    color: var(--color-neutral-muted);
    
    &::before {
      content: '— ';
    }
  }
}`;