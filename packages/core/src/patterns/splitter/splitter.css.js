import { patternVars, patternDeclarations } from "../../utils.js";

// TODO: https://github.com/w3c/aria-practices/issues/130

export default /*css*/`
:where(html) {
  ${patternVars('splitter')}
}

.splitter {
  ${patternDeclarations('splitter')}
  display: flex;

  [role="slider"] {
    cursor: ew-resize;
    inline-size: 4px;
    background-color: red;
  }

  &:not([aria-orientation="horizontal"]) {
    flex-direction: column;

    [role="slider"] {
      cursor: ns-resize;
      block-size: 4px;
      inline-size: 100%;
    }
  }
}`;