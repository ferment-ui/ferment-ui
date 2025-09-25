export default /*css*/`
:where(:root) {
  block-size: 100%;
  container-name: viewport;
  container-type: inline-size; /* act as the viewport for container queries */
  color-scheme: light dark; /* enable light-dark() function */
  
  @media (prefers-reduced-motion: no-preference) {
    interpolate-size: allow-keywords; /* animate/transform from auto or display: none */
    transition-behavior: allow-discrete; /* animate/transform from auto or display: none */
  }
}`;