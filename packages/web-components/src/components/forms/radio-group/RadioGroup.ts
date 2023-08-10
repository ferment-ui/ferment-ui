import { css, html } from 'lit';
import { customElement, property, queryAll } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { Option } from '../../../global.js';
import { FUIFormCheckField } from '../FormCheckField.js';
import { getId } from '../../../utils.js';

@customElement('fui-radio-group')
export class FUIRadioGroup extends FUIFormCheckField {
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
  // set value(v) { this._value = v as string; }

  formResetCallback() {
    if (this.inputs != null) {
      this.inputs.forEach((input) => input.checked = false);
    }
  }

  render() {
    const options: Option[] = this.options.map((option) => typeof option === 'string' ? { text: option } : option);

    return html`<fieldset @change=${this.setValue}>
      <slot name="legend"><legend part="legend">${this.label}</legend></slot>
      ${map(options, (option) => {
        const id = option.id ?? getId();
        return html`<div class='field'><input type="radio" value=${option.value ?? option.text} id=${id} name=${this.name} /><label for=${id}>${option.text}</label></div>`;
      })}
    </fieldset>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-radio-group': FUIRadioGroup;
  }
}