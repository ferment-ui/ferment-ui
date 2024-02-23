import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import { FUIFormField } from '../FormField';
import { Country } from './countries';
import '../select/Select';

@customElement('fui-country')
export class FUICountry extends FUIFormField {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <fui-select label=${this.label ?? "Country"} name=${this.name} .options=${Object.entries(Country).map(([code, country]) => ({ text: country, value: code, id: code }))}></fui-select>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-country': FUICountry;
  }
}