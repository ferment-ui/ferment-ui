import { LitElement } from 'lit';
import { Link } from '../../global.js';
/**
 * List of hierarchical links.
 *
 * The default separator is '/'. To change it, set the `--breadcrumb-separator` CSS variable on an ancestor element (i.e. on the :root element for all breadcrumb
 * instances, and on the host element for a specific instance).
 */
export declare class DCBreadcrumbs extends LitElement {
    static styles: import("lit").CSSResult[];
    links: Link[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dc-breadcrumbs': DCBreadcrumbs;
    }
}
