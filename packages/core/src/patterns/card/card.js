import { html } from 'ttls-raw';

export default ({ tag = 'div', children }) => html`<${tag} class="card">
  ${children}
</${tag}>`;