import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { FUIField } from '../field/Field.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { map } from 'lit/directives/map.js';
import { Option } from '../../../global.js';

@customElement('fui-select')
export class FUISelect extends FUIField {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  @property({ type: String }) label: string = '';
  @property({ type: Array }) options: string[] | Option[] = [];
  @property({ type: Boolean }) native: boolean = true;
  @property({ type: Boolean }) multiple: boolean = false;
  @property({ type: String }) unselectedText: string = "---";
  selectRef: Ref<HTMLSelectElement> = createRef();
  unselectedOptionRef: Ref<HTMLOptionElement> = createRef();

  // Form controls usually expose a "value" property
  get value() { return this.native
    ? this.multiple
      ? this.selectRef.value?.selectedOptions
      : this.selectRef.value?.value
    : null; 
  }
  set value(v) { 
    if (!this.multiple && this.selectRef.value != null) {
      this.selectRef.value.value = v as string;
    }
  }

  formResetCallback(): void {
    if (this.unselectedOptionRef.value != null) {
      this.unselectedOptionRef.value.selected = true;
    }
    this._internals.setFormValue(null);
  }

  render() {
    const options: Option[] = this.options.map((option) => typeof option === 'string' ? { text: option } : option);

    return html`
      <div class='field'>
        ${this.native
          ? html`<select ${ref(this.selectRef)} id=${this.id} name=${this.name} ${ifDefined(this.multiple)} @change=${this.setValue}>
            <option ${ref(this.unselectedOptionRef)} disabled selected>${this.unselectedText}</option>
            ${map(options, (option) => html`<option value=${ifDefined(option.value)}>${option.text}</option>`)}
          </select>`
          : ''
        }
        <slot name="label"><label part="label" for=${this.id}>${this.label}</label></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-select': FUISelect;
  }
}