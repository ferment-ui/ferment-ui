import { property } from 'lit/decorators.js'
import { FUIFormField } from './FormField';
import { Ref, createRef } from 'lit/directives/ref.js';

export class FUIFormCheckField extends FUIFormField {
  @property({ type: String }) defaultValue: string | undefined;
  @property({ type: Boolean }) required = false;
  @property({ type: Object }) inputAttrs: { [key: string]: unknown } = {};
  inputRef: Ref<HTMLInputElement> = createRef();

  get value() { return this.inputRef.value?.value; }
  set value(value) {
    const v = value as string; 
    if (this.inputRef.value != null) {
      this.inputRef.value.value = v;
    }
    this._internals.setFormValue(v);
  }
}
