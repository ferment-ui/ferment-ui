import { unsafeCSS } from 'lit';

const properties = [['m', 'margin'], ['mi', 'margin-inline'], ['mis', 'margin-inline-start'], ['mie', 'margin-inline-end'], ['mb', 'margin-block'], ['mbs', 'margin-block-start'], ['mbe', 'margin-block-end']];

export default unsafeCSS(`
/* @section Margin */

:root {
  --default-clamp: clamp(var(--responsive-min, 1rem), var(--responsive-preferred, 10%), var(--responsive-max, 5rem));
  --default-m: 1em;
}

${[0, 'auto', 'ch', 'em', 'lh', 'static'].map(value => properties.map(([prop, name]) => `
.${prop}-${value} {
  ${name}: ${value};
}`).join('\n')).join('\n')}

${properties.map(([prop, name]) => `
.${prop} {
  --margin: var(--m, var(--default-m));
  ${name}: var(--margin);
}`).join('\n')}

${properties.map(([prop, name]) => `
.${prop}-responsive {
  --clamp: var(--c, var(--default-clamp));
  ${name}: var(--clamp);
}`).join('\n')}`);