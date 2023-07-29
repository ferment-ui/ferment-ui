import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { Field } from '../field/Field';
import { map } from 'lit/directives/map.js';

@customElement('fui-radio-group')
export class FUIRadioGroup extends Field {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  @property({ type: Array }) options: string[] = [];

  render() {
    return html`<div>
      ${map(this.options, (option) => html`<div class='field'><input type="radio" value=${option} id=${this.id} name=${this.name} /><label for=${this.id}>${option}</label></div>`)}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-radio-group': FUIRadioGroup;
  }
}