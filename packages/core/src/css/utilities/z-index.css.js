import { unsafeCSS } from 'lit';

const properties = {
  dropdown: 1,
  sticky: 10,
  fixed: 100,
  modalBackdrop: 1000,
  modal: 10000,
  popover: 100000,
  tooltip: 1000000
};

export const variables = unsafeCSS`:root {
${Object.entries(properties).map(([key, value]) => `  --fui-z-index-${key}: ${value};`).join('\n')}
}`;

export default unsafeCSS`
/* @section Z-Index */
.zi-0 {
  z-index: 0;
}

${Object.entries(properties).map(([key, value]) => `
.zi-${key} {
  z-index: var(--fui-z-index-${key}, ${value});
}`).join('\n')}
/* @endsection */
`;