import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js';
import { Link } from '../../global.js';
import { reset } from '../../styles.js';

/**
 * List of hierarchical links.
 * 
 * The default separator is '/'. To change it, set the `--breadcrumb-separator` CSS variable on an ancestor element (i.e. on the :root element for all breadcrumb
 * instances, and on the host element for a specific instance).
 */
@customElement('fui-breadcrumbs')
export class FUIBreadcrumbs extends LitElement {
    static styles = [
        reset,
        css`
            :host {
                display: block;
            }

            ul {
                list-style: none;
            }

            li {
                display: inline-block;
            }

            li:not(:last-child)::after {
                content: var(--breadcrumb-separator, '/');
            }

            a {
                padding: 5px 10px;
            }
        `
    ];

    @property({ type: Array }) links: Link[] = [];

    render() {
        // this.links = [{ href: '#', text: 'Home' }, { href: '#', text: 'About'}];
        // this.links = [];
        return html`<ul>${map(this.links, (link: Link) => html`<li><a href=${link.href}>${link.text}</a></li>`)}</ul>`;
        
    }
}

declare global {
interface HTMLElementTagNameMap {
  'fui-breadcrumbs': FUIBreadcrumbs;
}
}