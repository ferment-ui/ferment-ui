import { html, css, PropertyValueMap } from 'lit';
import { customElement } from 'lit/decorators.js'
import { ref } from 'lit/directives/ref.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { spread } from '@open-wc/lit-helpers';
import { FUIFormTextField } from '../FormTextField';

@customElement('fui-input')
export class FUIInput extends FUIFormTextField {
  static styles = [
    css`
      :host {
        display: grid;
      }

      .field {
        display: grid;
        grid-template-areas: 
          "label"
          "control";
      }

      input {
        grid-area: control;
      }

      slot[name=label] {
        display: inline-block;
        padding-left: 2px;
        grid-area: label;
        position: relative;
        top: 1.2rem;
        pointer-events: none;
        transition: .3s;
        transform-origin: left;
      }

      input:focus + slot[name=label] {
        top: 0;
        transform: scale(.6, .6);
      }
    `
  ];
  
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
    this._internals.setFormValue(this.defaultValue ?? null);
  }

  formResetCallback() {
    if (this.inputRef.value != null) {
      this.inputRef.value.value = '';
    }
    this._internals.setFormValue(null);
  }

  render() {
    return html`<div part="field" ${spread(this.fieldAttrs)} class="field">
      <input ${ref(this.inputRef)} part="control" type=${this._type} id=${this.id} name=${this.name} value=${ifDefined(this.defaultValue)} @input=${this.updateFormValue} ?required=${this.required} ?disabled=${this.disabled} ${spread(this.inputAttrs)} />
      <slot name="label"><label part="label" for=${this.id}>${this.label}</label></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-input': FUIInput;
  }
}