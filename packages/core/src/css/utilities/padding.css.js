import { css, unsafeCSS } from 'lit';

const properties = [['p', 'padding'], ['pi', 'padding-inline'], ['pis', 'padding-inline-start'], ['pie', 'padding-inline-end'], ['pb', 'padding-block'], ['pbs', 'padding-block-start'], ['pbe', 'padding-block-end']];

export const variables = css`

`;

export default unsafeCSS(`
.p-0 {
  padding: 0;
}

.p-static {
  padding: var(--fui-spacing-responsive-y) var(--fui-spacing-responsive-x);
}

:root {
  --default-p: 1em;
}

${[0, '1ch'].map(value => properties.map(([prop, name]) => `
.${prop}-${value} {
  ${name}: ${value};
}`).join('\n')).join('\n')}
${properties.map(([prop, name]) => `
.${prop} {
  --padding: var(--p, var(--default-p));
  ${name}: var(--padding);
}`).join('\n')}
${properties.map(([prop, name]) => `
.${prop}-responsive {
  --clamp: var(--c, var(--default-clamp));
  ${name}: var(--clamp);
}`).join('\n')}
`);