import { property } from 'lit/decorators.js'
import { FUIFormField } from './FormField';
import { Ref, createRef } from 'lit/directives/ref.js';

export class FUIFormCheckField extends FUIFormField {
  @property({ type: String, attribute: 'type' }) _type: 'text' | 'number' = 'text'
  @property({ type: String }) defaultValue: string | undefined;
  @property({ type: Boolean }) required = false;
  @property({ type: String }) pattern: string | undefined;
  @property({ type: Number }) minLength: number | undefined;
  @property({ type: Number }) maxLength: number | undefined;
  @property({ type: Object }) inputAttrs: { [key: string]: unknown } = {};
  inputRef: Ref<HTMLInputElement> = createRef();
}
