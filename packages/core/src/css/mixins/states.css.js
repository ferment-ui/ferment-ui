import { unsafeCSS } from 'lit';

export function states(className, content) {
  return unsafeCSS(`.${className}--hover:hover,
.${className}--focus:focus,
.${className}--focus:hover,
.${className}--focus-within:focus-within,
.${className}--active:active,
.${className}--disabled:disabled {
${content}
}`);
}