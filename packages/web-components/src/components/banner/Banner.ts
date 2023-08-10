import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('fui-banner')
export class FUIBanner extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            slot {
              flex-grow: 1;  
            }

            slot[name=left] {
              display: flex;
              justify-content: left;
            }

            slot[name=right] {
              display: flex;
              justify-content: right;
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