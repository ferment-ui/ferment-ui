import { CSSResultGroup, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { Variant } from '../../global.js';
import { buttonStyles } from './button.css.js';
import { FUIBaseElement } from '../BaseElement.js';

@customElement('fui-button')
export class FUIButton extends FUIBaseElement {
  static styles: CSSResultGroup = [
    FUIBaseElement.styles,
    buttonStyles
  ];

  @property({ type: String }) type: string = 'button';
  @property({ type: String }) variant: Variant = Variant.DEFAULT;

  render() {
    return html`<button type=${this.type} part="button"><slot></slot></button>`;
  }
}
