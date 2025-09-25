import { html } from 'ttls-raw';

export default ({ children, breadcrumbs }) => html`<nav class="breadcrumbs" aria-label="Breadcrumbs">
  ${Array.isArray(breadcrumbs) ? html`<ol>
    ${breadcrumbs.map(crumb => html`<li>${crumb}</li>`)}
  </ol>` : children}
</nav>`;