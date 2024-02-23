import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import { FUIBaseElement } from '../BaseElement.js';

@customElement('fui-banner')
export class FUIBanner extends FUIBaseElement {
    static styles = [
      FUIBaseElement.styles,
      css`
        header {
          display: flex;
          align-items: center;
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