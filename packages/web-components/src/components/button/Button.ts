import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { Variant } from '../../global.js';

@customElement('fui-button')
export class FUIButton extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      button {
        background-color: var(--fui-button-background-color, #fff);
      }
    `
  ];

  @property({ type: String }) variant: Variant = Variant.DEFAULT;

  render() {
    return html`<button>Click me</button>`;
  }
}
