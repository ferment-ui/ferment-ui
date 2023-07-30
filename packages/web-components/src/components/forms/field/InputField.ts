import { property } from 'lit/decorators.js'
import { FUIField } from './Field';
import { Ref, createRef } from 'lit/directives/ref.js';

export class FUIInputField extends FUIField {
  @property({ type: Object }) inputAttrs: { [key: string]: unknown } = {};
  inputRef: Ref<HTMLInputElement> = createRef();
}
