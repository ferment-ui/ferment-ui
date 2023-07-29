import { html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js';
import { map } from 'lodash';
import { Option } from '../../../global.js';
import { Field } from '../field/Field.js';

@customElement('fui-select')
export class FUISelect extends Field {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  @property({ type: String }) name: string | undefined;
  @property({ type: String }) label: string = '';
  @property({ type: Array }) options: string[] | Option[] = [];
  @property({ type: Boolean }) native: boolean = true;
  @property({ type: Boolean }) multiple: boolean = false;
  @property({ type: String }) unselectedText: string = "---";

  @query('option:first-child') firstOption?: HTMLOptionElement;

  formResetCallback(): void {
    if (this.firstOption != null) {
      this.firstOption.selected = true;
    }
  }

  render() {
    const options: Option[] = this.options.map((option) => typeof option === 'string' ? { text: option } : option);

    return html`
      <div class='field'>
        ${this.native
          ? html`<select id=${this.id} name=${this.name} ${ifDefined(this.multiple)}>
            <option disabled selected>${this.unselectedText}</option>
            ${map(options, (option) => html`<option value=${ifDefined(option.value)}>${option.text}</option>`)}
          </select>`
          : ''
        }
        <label for=${this.id}><slot name="label">${this.label}</slot></label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-select': FUISelect;
  }
}