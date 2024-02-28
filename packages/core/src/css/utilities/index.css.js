import animationStyles from './animation.css.js';
import borderStyles from './border.css.js';
import colorStyles from './color.css.js';
import displayStyles from './display.css.js';
import focusStyles from './focus.css.js';
import layoutStyles from './layout.css.js';
import opacityStyles from './opacity.css.js';
import positionStyles from './position.css.js';
import shadowStyles from './shadow.css.js';
import typographyStyles from './typography.css.js';
import visibilityStyles from './visibility.css.js';
import zIndexStyles from './z-index.css.js';

export {
  animationStyles,
  borderStyles,
  colorStyles,
  displayStyles,
  focusStyles,
  layoutStyles,
  opacityStyles,
  positionStyles,
  shadowStyles,
  typographyStyles,
  visibilityStyles,
  zIndexStyles,
};

/**
 * @type {import('lit').CSSResultGroup}
 */
export const utilityStyles = [
  displayStyles,
  positionStyles,
  visibilityStyles,
  opacityStyles,
  layoutStyles,
  typographyStyles,
  colorStyles,
  borderStyles,
  zIndexStyles,
  shadowStyles,
  animationStyles,
  focusStyles,
];