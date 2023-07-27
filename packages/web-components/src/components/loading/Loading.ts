import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('fui-loading')
export class FUILoading extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`<div>Loading...</div>`;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-loading': FUILoading;
  }
}
