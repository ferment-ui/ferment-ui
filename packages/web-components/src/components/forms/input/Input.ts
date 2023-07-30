import { html, css, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { ref } from 'lit/directives/ref.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { spread } from '@open-wc/lit-helpers';
import { FUIInputField } from '../field/InputField';

@customElement('fui-input')
export class FUIInput extends FUIInputField {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];
  
  // Form controls usually expose a "value"  property
  // NOTE: Input forms use the "value" attribute in HTML to set a default
  // value, and then the "value" property in it's DOM node is updated
  // after that, so we want to mimic that behavior here.
  @property({ type: String, attribute: 'value', reflect: false }) _initialValue: string = '';
  @property({ type: String, attribute: false, reflect: false }) 
  get value() { return this.inputRef.value?.value; }
  set value(value) {
    const v = value as string; 
    if (this.inputRef.value != null) {
      this.inputRef.value.value = v;
    }
    this._internals.setFormValue(v);
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    super.firstUpdated(_changedProperties);
    this._internals.setFormValue(this._initialValue);
  }
  
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

  formResetCallback() {
    if (this.inputRef.value != null) {
      this.inputRef.value.value = '';
    }
    this._internals.setFormValue(null);
  }

  render() {
    return html`<div class="field" ${spread(this.fieldAttrs)}>
      <input ${ref(this.inputRef)} id=${this.id} name=${this.name} value=${ifDefined(this._initialValue)} @input=${this.onInput} ${spread(this.inputAttrs)} />
      <slot name="label"><label part="label" for="name">${this.label}</label></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-input': FUIInput;
  }
}