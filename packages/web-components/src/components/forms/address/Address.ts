import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { FUIField } from '../field/Field';
import '../country/Country.js';
// import '../province/Province.js';
import { Country, CountrySubdivisions } from '../../../global.d';

@customElement('fui-address')
export class FUIAddress extends FUIField {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  @property({ converter: (value) => {
    return Country[value as keyof typeof Country];
  }}) country?: Country = Country.US;

  get subdivisions() {
    if (this.country == null) return null;
    console.log(this.country in CountrySubdivisions.keys())
    return CountrySubdivisions.get(this.country);
  }

  render() {
    console.log(this.subdivisions);
    return html`
      <fieldset>
        <slot name="label"><legend>${this.label}</legend></slot>
        <fui-input label="Street Number"></fui-input>
        <fui-input label="Street Name"></fui-input>
        <fui-input label="Unit/Apt"></fui-input>
        <fui-input label="City"></fui-input>
        <fui-country label="Country" value=${this.country}></fui-country>
        ${this.country && this.subdivisions != null
          ? html`<fui-select id='province' .options=${Object.entries(this.subdivisions).map(([code, country]) => ({ text: country, value: code, id: code }))}></fui-select>`
          : html`<fui-input id='province'></fui-input>`
        }
        <fui-postal-code label="Postal Code" country=${this.country}></fui-postal-code>
      </fieldset>
    `;
  }
}
