import { debug } from './debug.js';
const entries = document.querySelectorAll('.intro');
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      intersectionObserver.unobserve(entry.target);
    }
  });
});