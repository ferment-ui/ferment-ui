import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { FUIField } from '../field/Field';
import '../country/Country.js';
import '../province/Province.js';

@customElement('fui-address')
export class FUIAddress extends FUIField {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  @property({ type: String }) country: string = 'CA';

  render() {
    return html`
      <fieldset>
        <slot name="label"><legend>${this.label}</legend></slot>
        <fui-input label="Street Number"></fui-input>
        <fui-input label="Street Name"></fui-input>
        <fui-input label="Unit/Apt"></fui-input>
        <fui-input label="City"></fui-input>
        <fui-country label="Country" value=${this.country}></fui-country>
        <fui-province id='province' country=${this.country}></fui-province>
        <fui-postal-code label="Postal Code" country=${this.country}></fui-postal-code>
      </fieldset>
    `;
  }
}
