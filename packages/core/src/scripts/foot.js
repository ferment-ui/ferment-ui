import { debug } from './debug.js';
import { INTRO_SELECTOR } from './constants.js';

const entries = document.querySelectorAll(INTRO_SELECTOR);
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    debug(entry);
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      intersectionObserver.unobserve(entry.target);
    }
  });
});