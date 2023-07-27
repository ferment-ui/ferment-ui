import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('fui-banner')
export class FUIBanner extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<header role="banner">
            <slot name='left'></slot>
            <slot></slot>
            <slot name='right'></slot>
        </header>`;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-banner': FUIBanner;
  }
}