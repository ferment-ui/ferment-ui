import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { FUIFormField } from '../FormField';
import '../input/Input';
import '../country/Country';
import { Country, CountrySubdivisions } from '../../../global.d';

@customElement('fui-address')
export class FUIAddress extends FUIFormField {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  @property({ converter: (value) => {
    return Country[value as keyof typeof Country];
  }}) countryCode?: Country;
  @property({ type: String }) label: any;

  get subdivisions() {
    if (this.countryCode == null) return null;
    console.log(this.countryCode in CountrySubdivisions.keys())
    return CountrySubdivisions.get(this.countryCode);
  }

  render() {
    return html`
      <fieldset>
        <slot name="label"><legend>${this.label}</legend></slot>
        <fui-input id=${`${this.id}-street-number`} name=${`${this.id}-street-number`} label="Street Number"></fui-input>
        <fui-input id=${`${this.id}-street-name`} name=${`${this.id}-street-name`} label="Street Name"></fui-input>
        <fui-input id=${`${this.id}-street-unit`} name=${`${this.id}-unit`} label="Unit/Apt"></fui-input>
        <fui-input id=${`${this.id}-city`} name=${`${this.id}-city`} label="City"></fui-input>
        <fui-country id=${`${this.id}-country`} name=${`${this.id}-country`} label="Country" value=${this.countryCode}></fui-country>
        ${this.countryCode && this.subdivisions != null
          ? html`<fui-select name=${`${this.id}-country-subdivison`} id=${`${this.id}-country-subdivison`} value=${this.countryCode} .options=${Object.entries(this.subdivisions).map(([code, country]) => ({ text: country, value: code, id: code }))}></fui-select>`
          : html`<fui-input name=${`${this.id}-country-subdivision`} id=${`${this.id}-country-subdivison`}></fui-input>`
        }
        <fui-input id=${`${this.id}-postal-code`} name=${`${this.id}-postal-code`} label="Postal Code" country=${this.countryCode}></fui-input>
      </fieldset>
    `;
  }
}
