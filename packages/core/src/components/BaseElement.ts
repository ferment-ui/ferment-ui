import { CSSResultGroup, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ClassInfo } from 'lit/directives/class-map.js';
import { StyleInfo } from 'lit/directives/style-map.js';
import { convertClassStringToObject, convertObjectToClassString, convertObjectToStyleString, convertStyleStringToObject } from '../utils.js';
import { globalStyles } from '../css/global.css.js';
import { utilityStyles } from '../css/utilities/index.css.js';

export class FUIBaseElement extends LitElement {
  static styles: CSSResultGroup = [
    globalStyles,
    utilityStyles
  ];

  @property({ type: String, attribute: 'class', converter: {
    fromAttribute: (value: string) => convertClassStringToObject(value),
    toAttribute: (value: ClassInfo) => convertObjectToClassString(value)
  }}) classes: ClassInfo = {};

  @property({ type: String, attribute: 'style', converter: {
    fromAttribute: (value: string) => convertStyleStringToObject(value),
    toAttribute: (value: StyleInfo) => convertObjectToStyleString(value)
  }}) styles: StyleInfo = {};

  emit(name: string, detail: any) {
    console.log('emitting', name, detail);
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }
}
