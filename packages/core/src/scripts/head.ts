document.documentElement.classList.replace('no-js', 'js');

const introObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.replace('intro', 'introed');
      observer.unobserve(entry.target);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => document.querySelectorAll('.intro').forEach(entry => introObserver.observe(entry)));