import { css, html } from 'lit';
import { customElement, property, queryAll } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { map } from 'lit/directives/map.js';
import { Option } from '../../../global.js';
import { FUIInputField } from '../field/InputField';

@customElement('fui-radio-group')
export class FUIRadioGroup extends FUIInputField {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  @property({ type: Array }) options: string[] | Option[] = [];
  @queryAll('input') inputs?: HTMLInputElement[];

  // Form controls usually expose a "value"  property
  get value(): string { return (this.shadowRoot?.querySelector('input:checked') as HTMLInputElement)?.value }
  set value(v) { this._value = v as string; }

  formResetCallback() {
    if (this.inputs != null) {
      this.inputs.forEach((input) => input.checked = false);
    }
  }

  render() {
    const options: Option[] = this.options.map((option) => typeof option === 'string' ? { text: option } : option);

    return html`<fieldset>
      <slot name="legend"><legend part="legend">${this.label}</legend></slot>
      ${map(options, (option) => html`<div class='field'><input type="radio" value=${ifDefined(option.value)} id=${this.id} name=${this.name} /><label for=${this.id}>${option.text}</label></div>`)}
    </fieldset>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-radio-group': FUIRadioGroup;
  }
}