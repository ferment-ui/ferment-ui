import alignContent from "./align-content.css.js";
import alignItems from "./align-items.css.js";
import alignSelf from "./align-self.css.js";
import backgroundColor from "./background-color.css.js";
import blockSize from './block-size.css.js';
import border from "./border.css.js";
import borderRadius from "./border-radius.css.js";
import boxShadow from "./box-shadow.css.js";
import color from "./color.css.js";
import display from "./display.css.js";
import flexWrap from "./flex-wrap.css.js";
import flex from "./flex.css.js";
import fontSize from "./font-size.css.js";
import fontStyle from "./font-style.css.js";
import fontWeight from "./font-weight.css.js";
import inlineSize from './inline-size.css.js';
import justifyContent from "./justify-content.css.js";
import justifyItems from "./justify-items.css.js";
import lineHeight from "./line-height.css.js";
import margin, { createMarginCSS } from "./margin.css.js";
import padding, { createPaddingCSS } from "./padding.css.js";
import textAlign from "./text-align.css.js";
import textDecoration from "./text-decoration.css.js";
import textTransform from "./text-transform.css.js";
import visibility from "./visibility.css.js";
import zIndex from "./z-index.css.js";

// Factory function to create properties CSS with custom config
export function createPropertiesCSS(config) {
  return {
    "align-content.css": alignContent,
    "align-items.css": alignItems,
    "align-self.css": alignSelf,
    "background-color.css": backgroundColor,
    "block-size.css": blockSize,
    "border.css": border,
    "border-radius.css": borderRadius,
    "box-shadow.css": boxShadow,
    "color.css": color,
    "display.css": display,
    "flex-wrap.css": flexWrap,
    "flex.css": flex,
    "font-size.css": fontSize,
    "font-style.css": fontStyle,
    "font-weight.css": fontWeight,
    "inline-size.css": inlineSize,
    "justify-content.css": justifyContent,
    "justify-items.css": justifyItems,
    "line-height.css": lineHeight,
    "margin.css": createMarginCSS(config),
    "padding.css": createPaddingCSS(config),
    "text-align.css": textAlign,
    "text-decoration.css": textDecoration,
    "text-transform.css": textTransform,
    "visibility.css": visibility,
    "z-index.css": zIndex
  };
}

// Default export for backward compatibility
export default {
  "align-content.css": alignContent,
  "align-items.css": alignItems,
  "align-self.css": alignSelf,
  "background-color.css": backgroundColor,
  "block-size.css": blockSize,
  "border.css": border,
  "border-radius.css": borderRadius,
  "box-shadow.css": boxShadow,
  "color.css": color,
  "display.css": display,
  "flex-wrap.css": flexWrap,
  "flex.css": flex,
  "font-size.css": fontSize,
  "font-style.css": fontStyle,
  "font-weight.css": fontWeight,
  "inline-size.css": inlineSize,
  "justify-content.css": justifyContent,
  "justify-items.css": justifyItems,
  "line-height.css": lineHeight,
  "margin.css": margin,
  "padding.css": padding,
  "text-align.css": textAlign,
  "text-decoration.css": textDecoration,
  "text-transform.css": textTransform,
  "visibility.css": visibility,
  "z-index.css": zIndex
};