import { unsafeCSS } from 'lit';

const properties = {
  'xs': 320,
  'sm': 480,
  'md': 768,
  'lg': 1200,
  'xl': 1440,
  'xxl': 1600
};

const entries = Object.entries(properties);

export const variables = unsafeCSS(`
:root {
${Object.entries(properties).map(([key, value]) => `
  --${key.split('/')[0]}: ${value}px;
`).join('\n')}
}`);

export default unsafeCSS(`
/* @section Breakpoints */
@custom-media --fui-breakpoint-xxs (width < ${properties['xs']}px);
${entries.slice(0, -1).map(([key, value], index) => `@custom-media --fui-breakpoint-${key} (${value}px <= width < ${entries[index+1][1]}px);`).join('\n')}
@custom-media --fui-breakpoint-xxl (width >= ${properties['xxl']}px);
`);

