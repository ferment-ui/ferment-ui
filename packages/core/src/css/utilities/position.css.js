import { unsafeCSS } from 'lit';

const properties = ['static', 'relative', 'absolute', 'sticky', 'fixed'];
export default unsafeCSS(`
/* @section Position */
${properties.map(property => `
.${property} {
  position: ${property};
}`).join('\n')}
/* @endsection */
`);