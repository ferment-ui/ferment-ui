import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('dc-pricing')
export class DCPricing extends LitElement {
  static styles = [
    css`
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--gap);
        --gap: 1rem;
        margin: 0 var(--gap);
      }

      .pricing {
        border: 1px solid black;
        border-radius: 10px;
      }
    `
  ];

  @property({ type: Array }) prices: any[] = [];

  render() {
    if (this.prices == null) return;
    return this.prices.map(price => html`
      <div class='pricing' part='pricing'>
        <slot name='header'>
          <header part='header'>${unsafeHTML(price.header)}</header>
        </slot>
        <slot name='price'>
          <p part='price'>${price.price}</p>
        </slot>
        <slot name='description'>${unsafeHTML(price.description)}</slot>
        <slot name='features'>
          ${price.features 
            ? html`<ul part='features'>${price.features.map((feature: any) => html`<li part='feature'>${unsafeHTML(feature)}</li>`)}</ul>` 
            : nothing}
        </slot>
        <slot name='footer'></slot>
      </div>`);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dc-pricing': DCPricing;
  }
}