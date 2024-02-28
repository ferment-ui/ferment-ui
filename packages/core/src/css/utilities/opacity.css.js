import { unsafeCSS } from 'lit';

export default unsafeCSS(`
${[0, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100].map(value => `.o-${value} {
  opacity: ${value / 100};
}
`)}`);