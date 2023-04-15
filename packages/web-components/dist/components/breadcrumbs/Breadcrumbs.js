var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { reset } from '../../styles.js';
/**
 * List of hierarchical links.
 *
 * The default separator is '/'. To change it, set the `--breadcrumb-separator` CSS variable on an ancestor element (i.e. on the :root element for all breadcrumb
 * instances, and on the host element for a specific instance).
 */
let DCBreadcrumbs = class DCBreadcrumbs extends LitElement {
    constructor() {
        super(...arguments);
        this.links = [];
    }
    render() {
        // this.links = [{ href: '#', text: 'Home' }, { href: '#', text: 'About'}];
        // this.links = [];
        return html `<ul>${map(this.links, (link) => html `<li><a href=${link.href}>${link.text}</a></li>`)}</ul>`;
    }
};
DCBreadcrumbs.styles = [
    reset,
    css `
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
__decorate([
    property({ type: Array })
], DCBreadcrumbs.prototype, "links", void 0);
DCBreadcrumbs = __decorate([
    customElement('dc-breadcrumbs')
], DCBreadcrumbs);
export { DCBreadcrumbs };
