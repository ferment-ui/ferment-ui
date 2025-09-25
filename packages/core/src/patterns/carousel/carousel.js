import { html } from 'ttls-raw';

export default ({ tag = 'div', children }) => html`<${tag} class="carousel">
  ${children}
</${tag}>`;

export function init() {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach((carousel) => {
    // clone the carousel group for infinite scrolling
    // make sure to set aria-hidden to true on the cloned group
    // so that it's not read by screen readers
    cloneGroup(carousel);
  });
}

export function cloneGroup(carousel) {
  const group = carousel.querySelector('ul');
  if (group != null) {
    const groupClone = group.cloneNode(true);
    groupClone.setAttribute('aria-hidden', 'true');
    carousel.appendChild(groupClone);
  }
}
