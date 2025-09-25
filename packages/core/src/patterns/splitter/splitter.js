import { base } from '../../html-utils.js';

export default (attrs, children, options) => base(
  { class: 'splitter', ...attrs }, 
  children.map(child => /*html*/`<div class="splitter__pane">${child}</div>`).join(/*html*/`<div class="resizer"></div>`),
  {
    tag: 'div'
  }
);

export function init() {
  [...document.querySelectorAll('.splitter')].forEach(splitter => {
    // do stuff
  })
}