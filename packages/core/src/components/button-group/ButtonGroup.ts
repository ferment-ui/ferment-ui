import { html, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FUIBaseElement } from '../BaseElement.js';
import { buttongroupStyles } from './buttongroup.css.js';

@customElement('fui-button-group')
export class FUIButtonGroup extends FUIBaseElement {
  static styles: CSSResultGroup = [
    FUIBaseElement.styles,
    buttongroupStyles,
  ];

  render() {
    return html`<slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fui-button-group': FUIButtonGroup;
  }
}