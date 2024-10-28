import { unsafeCSS } from 'lit';

const properties = ['block', 'inline', 'inline-block', 'flex', 'grid', 'contents', 'none'];
export default unsafeCSS(`
/* @section Display */
${properties.map(property => `
.${property} {
  display: ${property};
}`).join('\n')}
/* @endsection */
`);