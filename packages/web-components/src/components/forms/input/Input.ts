import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { spread } from '@open-wc/lit-helpers';
import { Field } from '../field/Field';

@customElement('fui-input')
export class FUIInput extends Field {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  static formAssociated = true;

  @property({ type: Object }) fieldAttrs: { [key: string]: unknown } = {};
  @property({ type: Object }) inputAttrs: { [key: string]: unknown } = {};

  onInput(event: InputEvent) {
    this._value = (event.target as HTMLInputElement)?.value;
    if (this._value == null) return;
    if (!this.matches(':disabled') && this.hasAttribute('required') &&
        this._value.length < 5)
      this._internals.setValidity({customError: true}, 'Use at least 5 characters.',);
    else
      this._internals.setValidity({});
    
    this._internals.setFormValue(this._value);
  }

  render() {
    return html`<div class="field" ${spread(this.fieldAttrs)}>
      <input id=${this.id} name=${this.name} .value=${this._value} @input=${this.onInput} ${spread(this.inputAttrs)} />
      <slot name="label"><label part="label" for="name">Name</label></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-input': FUIInput;
  }
}